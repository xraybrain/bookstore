const {
  getDepartment,
  getDepartments,
  saveDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/DepartmentAPI.controller");

module.exports = (router) => {
  router.get("/department/:id/", getDepartment);
  router.get("/departments/", getDepartments);
  router.post("/departments/", saveDepartment);
  router.put("/departments/", updateDepartment);
  router.delete("/departments", deleteDepartment);
};
