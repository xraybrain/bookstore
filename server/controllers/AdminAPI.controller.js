const BaseModel = require("../db/models");

exports.getDashboardSummary = async (req, res, next) => {
  try {
    let totalStudents = await BaseModel.Student.count();
    let totalLecturers = await BaseModel.Lecturer.count();
    let totalPayments = await BaseModel.Order.sum("totalAmount");
    let totalBooks = await BaseModel.Book.count();
    let data = { totalStudents, totalBooks, totalLecturers, totalPayments };
    res.json({ message: "success", success: true, data });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "we were unable to process your request",
      success: false,
      data: null,
    });
  }
};

exports.getNotifications = async (req, res, next) => {
  try {
    let notifications = await BaseModel.Notification.findAll({});
    res.json({ message: "success", success: true, data: notifications });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "we were unable to process your request",
      success: false,
      data: null,
    });
  }
};

exports.deleteNotification = async (req, res, next) => {
  let { id } = req.body;
  console.log(id);
  try {
    let result = await BaseModel.Notification.destroy({ where: { id } });
    res.json({ message: "success", success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "we were unable to process your request",
      success: false,
      data: null,
    });
  }
};
