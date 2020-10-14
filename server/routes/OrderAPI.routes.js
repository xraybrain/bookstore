const {
  saveOrder,
  getOrders,
  getOrderItems,
  updateOrder,
  getAllOrders,
} = require("../controllers/OrderAPI.controller");

module.exports = (router) => {
  router.post("/orders/", saveOrder);
  router.get("/orders/", getOrders);
  router.get("/orders/all", getAllOrders);
  router.get("/orders/items/", getOrderItems);
  router.put("/orders/", updateOrder);
};
