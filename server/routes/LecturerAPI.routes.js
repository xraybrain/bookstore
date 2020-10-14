const {
  getLecturers,
  getLecturer,
  saveLecturer,
  updateLecturer,
  changePassword,
} = require("../controllers/LecturerAPI.controller");

module.exports = (router) => {
  router.get("/lecturer/:id", getLecturer);
  router.get("/lecturers/", getLecturers);
  router.post("/lecturers/", saveLecturer);
  router.put("/lecturers", updateLecturer);
  router.post("/lecturers/changepassword/", changePassword);
};
