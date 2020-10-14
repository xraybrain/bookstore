const BaseModel = require("../db/models");
const jwt = require("jsonwebtoken");

exports.saveCartItem = async (req, res, next) => {
  const formData = req.body;
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(403).json({ message: "not authorized" });
  }

  const token = auth.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "invalid token" });
    }
    if (Math.floor(Date.now() / 1000) > decoded["exp"]) {
      return res.status(403).json({ message: "expired token" });
    }

    // add item to cart
    const newCart = {
      studentId: formData.studentId,
      bookId: formData.bookId,
      quantity: formData.quantity,
    };

    try {
      // check if item already exists in cart
      let itemExists = await BaseModel.Cart.findOne({
        where: { studentId: newCart.studentId, bookId: newCart.bookId },
      });

      if (itemExists) {
        return res.json({
          success: false,
          message: "this book is already in cart.",
        });
      }
      let student = await BaseModel.Student.findByPk(formData["studentId"]);
      await BaseModel.Notification.create({
        type: "info",
        content: `${student.firstname} ${student.lastname} added an item to shopping cart.`,
      });
      let cart = await BaseModel.Cart.create(newCart);
      res.json({ success: true, message: "success", cart });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "operation failed, system was unable to save item to cart.",
      });
    }
  });
};

exports.getCartItems = async (req, res, next) => {
  let { sid } = req.query;
  sid = sid || -1;

  try {
    const cart = await BaseModel.Cart.findAll({
      where: { studentId: sid },
      include: [{ model: BaseModel.Book }],
    });

    res.json({ success: true, message: "success", cart });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "operation failed, system was unable to retrieve items in cart",
    });
  }
};

exports.getCartTotalItems = async (req, res, next) => {
  let { sid } = req.query;
  sid = sid || -1;

  try {
    const totalItems = await BaseModel.Cart.count({
      where: { studentId: sid },
    });
    res.json({ success: true, message: "success", totalItems });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "operation failed, system was unable to retrieve items in cart",
    });
  }
};

exports.deleteCartItem = async (req, res, next) => {
  const { id } = req.body;

  try {
    const result = await BaseModel.Cart.destroy({ where: { id } });
    res.json({ success: true, message: "deleted successfully.", result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "operation failed, system was unable to delete item from cart.",
    });
  }
};
