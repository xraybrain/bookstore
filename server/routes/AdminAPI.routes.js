const {
  getDashboardSummary,
  getNotifications,
  deleteNotification,
} = require("../controllers/AdminAPI.controller");
module.exports = (router) => {
  router.get("/admins/dashboard/summary", getDashboardSummary);
  router.get("/admins/notifications", getNotifications);
  router.delete("/admins/notification", deleteNotification);
};
