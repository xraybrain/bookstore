const BaseModel = require("../db/models/");
const jwt = require("jsonwebtoken");

const getCartItems = async (studentId) => {
  let cartItems = [];

  try {
    cartItems = await BaseModel.Cart.findAll({
      where: { studentId },
      include: [{ model: BaseModel.Book }],
    });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return cartItems;
};

exports.saveOrder = async (req, res, next) => {
  const transaction = await BaseModel.sequelize.transaction();
  const { studentId, paymentRef } = req.body;

  try {
    const cartItems = await getCartItems(studentId);
    const totalAmount = cartItems.reduce(
      (total, item) => total + Number(item.Book.price),
      0
    );

    const newOrder = {
      studentId,
      paymentRef,
      totalAmount,
    };
    const order = await BaseModel.Order.create(newOrder, { transaction });
    const orderItems = cartItems.map((item) => {
      let { Book, ...orderItem } = item.dataValues;
      // add bookId
      return {
        orderId: order.null,
        bookId: orderItem.bookId,
        quantity: orderItem.quantity,
      };
    });

    await BaseModel.OrderItem.bulkCreate(orderItems, { transaction });

    //-- remove items from cart
    await BaseModel.Cart.destroy({ where: { studentId } }, { transaction });
    let student = await BaseModel.Student.findByPk(studentId);
    await BaseModel.Notification.create({
      type: "info",
      content: `${student.firstname} ${student.lastname} placed an order with payment reference ${paymentRef}.`,
    });
    res.json({ success: true, message: "order was successful" });
    transaction.commit();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "operation failed, system was unable to create order",
    });
    transaction.rollback();
  }
};

module.exports.getOrders = async (req, res, next) => {
  const auth = req.headers.authorization;
  console.log(auth);
  if (!auth) {
    return res.status(403).json({ message: "not authorized" });
  }
  const token = auth.split(" ")[1];
  const decoded = jwt.decode(token);
  if (Date.now() / 1000 > decoded["exp"]) {
    return res.status(403).json({ message: "expired token" });
  }
  model = decoded["type"];
  let id = decoded["user"];

  if (model !== "Student") {
    return res.status(403).json({ message: "unauthorized" });
  }

  try {
    let orders = await BaseModel.Order.findAll({
      where: { studentId: id },
      include: [{ model: BaseModel.Student }],
    });
    res.json({ success: true, message: "success", orders });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Server failed to process request." });
  }
};

module.exports.getAllOrders = async (req, res, next) => {
  let filter = { where: {}, include: [{ model: BaseModel.Student }] };
  const auth = req.headers.authorization;
  console.log(auth);
  if (!auth) {
    return res.status(403).json({ message: "not authorized" });
  }
  const token = auth.split(" ")[1];
  const decoded = jwt.decode(token);
  if (Date.now() / 1000 > decoded["exp"]) {
    return res.status(403).json({ message: "expired token" });
  }
  model = decoded["type"];
  let id = decoded["user"];

  if (model === "Student") {
    filter.where["studentId"] = id;
  }

  try {
    let orders = await BaseModel.Order.findAll(filter);
    res.json({ success: true, message: "success", orders });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Server failed to process request." });
  }
};

module.exports.getOrderItems = async (req, res, next) => {
  const { oid, bid } = req.query;

  const filter = {
    where: {},
    include: [
      { model: BaseModel.Book },
      { model: BaseModel.Order, include: [{ model: BaseModel.Student }] },
    ],
  };

  if (oid) {
    filter.where["orderId"] = oid;
  }
  if (!isNaN(bid)) {
    filter.where["bookId"] = bid;
  }

  try {
    let orderItems = await BaseModel.OrderItem.findAll(filter);
    res.json({ success: true, message: "success", orderItems: orderItems });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Server failed to process request." });
  }
};

module.exports.updateOrder = async (req, res, next) => {
  const updateData = req.body;
  console.log(updateData);
  let { id } = updateData;
  try {
    await BaseModel.Order.update(updateData, { where: { id } });
    res.json({ success: true, message: "success" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Server failed to process request." });
  }
};
