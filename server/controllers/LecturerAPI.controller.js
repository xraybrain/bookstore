const BaseModel = require("../db/models");
const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");

exports.getLecturer = async (req, res, next) => {
  const id = req.params.id;

  try {
    const lecturer = await BaseModel.Lecturer.findOne({ where: { id } });
    res.json({
      lecturer,
      success: true,
    });
  } catch (error) {
    res.status(500);
    res.json({ success: false, message: "operation failed" });
  }
};

exports.getLecturers = async (req, res, next) => {
  let { searchquery } = req.query;
  const filter = { where: {}, include: [{ model: BaseModel.Department }] };
  console.log(searchquery);
  if (searchquery) {
    filter.where[Sequelize.Op.or] = [
      { firstname: searchquery },
      { lastname: searchquery },
      { othernames: searchquery },
      { activated: isNaN(Number(searchquery)) ? "" : Number(searchquery) },
    ];
  }
  try {
    const lecturers = await BaseModel.Lecturer.findAll(filter);
    res.json({
      lecturers,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ success: false, message: "operation failed" });
  }
};

exports.saveLecturer = async (req, res, next) => {
  const formData = req.body;
  const newLecturer = {
    firstname: formData.firstname,
    lastname: formData.lastname,
    othernames: formData.othernames,
    deptId: formData.deptId,
    emailAddress: formData.emailAddress,
    password: formData.password,
  };

  try {
    const emailExists = await BaseModel.Lecturer.findOne({
      where: { emailAddress: newLecturer.emailAddress },
    });
    if (emailExists) {
      return res.json({
        success: false,
        message: "email address already exists.",
      });
    }

    // encrypt lecturer password using bycrypt hashing algorithm
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(String(newLecturer.password), salt);
    newLecturer.password = hash;

    let lecturer = await BaseModel.Lecturer.create(newLecturer);
    res.json({ lecturer, success: true });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ message: "operation failed", success: false });
  }
};

exports.updateLecturer = async (req, res, next) => {
  const updateData = req.body;
  const id = updateData.id;
  delete updateData.id;

  try {
    const result = await BaseModel.Lecturer.update(updateData, {
      where: { id },
    });

    res.json({ message: "updated successfully", success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ message: "operation failed", success: false });
  }
};

exports.deleteLecturer = async (req, res, next) => {
  const id = req.body.id;

  try {
    const result = await BaseModel.Lecturer.destroy({
      where: { id },
    });

    res.json({ message: "deleted successfully", success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ message: "operation failed", success: false });
  }
};

exports.changePassword = async (req, res, next) => {
  let { password, id } = req.body;

  try {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);
    password = hash;

    const result = BaseModel.Lecturer.update({ password }, { where: { id } });
    res.json({
      success: true,
      message: "password changed successfully",
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ success: false, message: "operation failed" });
  }
};
