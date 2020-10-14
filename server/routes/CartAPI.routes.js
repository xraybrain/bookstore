const {
  saveCartItem,
  getCartItems,
  getCartTotalItems,
  deleteCartItem,
} = require("../controllers/CartAPI.controller");

module.exports = (router) => {
  router.post("/cart/", saveCartItem);
  router.get("/cart/", getCartItems);
  router.get("/cart/total/", getCartTotalItems);
  router.delete("/cart/", deleteCartItem);
};
