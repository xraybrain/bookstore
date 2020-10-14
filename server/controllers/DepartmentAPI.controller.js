const BaseModel = require("../db/models");
const Sequelize = require("sequelize");

exports.getDepartment = async (req, res, next) => {
  const id = req.params.id;

  try {
    const department = await BaseModel.Department.findOne({ where: { id } });
    res.json({
      department,
      success: true,
    });
  } catch (error) {
    res.status(500);
    res.json({ success: false, message: "operation failed" });
  }
};

exports.getDepartments = async (req, res, next) => {
  let searchquery = req.query.searchquery;
  const filter = { where: {} };

  if (searchquery) {
    filter.where.name = { [Sequelize.Op.like]: `%${searchquery}%` };
  }
  try {
    const departments = await BaseModel.Department.findAll(filter);
    res.json({
      departments,
      success: true,
    });
  } catch (error) {
    res.status(500);
    res.json({ success: false, message: "operation failed" });
  }
};

exports.saveDepartment = async (req, res, next) => {
  const newDepartment = {
    name: req.body.name,
  };

  try {
    let department = await BaseModel.Department.create(newDepartment);
    res.json({ department, success: true });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ message: "operation failed", success: false });
  }
};

exports.updateDepartment = async (req, res, next) => {
  const updateData = req.body;
  const id = updateData.id;
  delete updateData.id;

  try {
    const result = await BaseModel.Department.update(updateData, {
      where: { id },
    });

    res.json({ message: "updated successfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ message: "operation failed", success: false });
  }
};

exports.deleteDepartment = async (req, res, next) => {
  const id = req.body.id;

  try {
    const result = await BaseModel.Department.destroy({
      where: { id },
    });

    res.json({ message: "deleted successfully", success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ message: "operation failed", success: false });
  }
};
