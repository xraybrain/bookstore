const { login, getCurrentUser } = require("../controllers/AuthAPI.controller");

module.exports = (router) => {
  router.post("/auth/login/", login);
  router.get("/currentuser/", getCurrentUser);
};
