const {
  getStudents,
  saveStudent,
  updateStudent,
  deleteStudent,
  changePassword,
} = require("../controllers/StudentAPI.controller");

module.exports = (router) => {
  router.get("/students/", getStudents);
  router.post("/students/", saveStudent);
  router.put("/students/", updateStudent);
  router.delete("/students/", deleteStudent);
  router.post("/students/changepassword/", changePassword);
};
