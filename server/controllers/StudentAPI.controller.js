const BaseModel = require("../db/models");
const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");

exports.getStudent = async (req, res, next) => {
  const id = req.params.id;

  try {
    const student = await BaseModel.student.findOne({ where: { id } });
    res.json({
      student,
      success: true,
    });
  } catch (error) {
    res.status(500);
    res.json({ success: false, message: "operation failed" });
  }
};

exports.getStudents = async (req, res, next) => {
  let searchquery = req.query.searchquery;
  const filter = { where: {}, include: [{ model: BaseModel.Department }] };

  if (searchquery) {
    filter.where[Sequelize.Op.or] = [
      { firstname: searchquery },
      { lastname: searchquery },
      { othernames: searchquery },
      { matricNo: searchquery },
    ];
  }
  try {
    const students = await BaseModel.Student.findAll(filter);
    res.json({
      students,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ success: false, message: "operation failed" });
  }
};

exports.saveStudent = async (req, res, next) => {
  const formData = req.body;
  const newStudent = {
    firstname: formData.firstname,
    lastname: formData.lastname,
    othernames: formData.othernames,
    deptId: formData.deptId,
    matricNo: formData.matricNo,
    emailAddress: formData.emailAddress,
    password: formData.password,
  };

  try {
    const matricNoExists = await BaseModel.Student.findOne({
      where: { matricNo: newStudent.matricNo },
    });
    if (matricNoExists) {
      return res.json({
        success: false,
        message: "matric no. already exists.",
      });
    }

    const emailExists = await BaseModel.Student.findOne({
      where: { emailAddress: newStudent.emailAddress },
    });
    if (emailExists) {
      return res.json({
        success: false,
        message: "email address already exists.",
      });
    }

    // encrypt student password using bycrypt hashing algorithm
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(newStudent.password, salt);
    newStudent.password = hash;

    let student = await BaseModel.Student.create(newStudent);
    res.json({ student, success: true });
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(500);
    res.json({ message: "operation failed", success: false });
  }
};

exports.updateStudent = async (req, res, next) => {
  const updateData = req.body;
  const id = updateData.id;
  delete updateData.id;

  try {
    const result = await BaseModel.Student.update(updateData, {
      where: { id },
    });

    res.json({ message: "updated successfully", success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ message: "operation failed", success: false });
  }
};

exports.deleteStudent = async (req, res, next) => {
  const id = req.body.id;

  try {
    const result = await BaseModel.Student.destroy({
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

    const result = BaseModel.Student.update({ password }, { where: { id } });
    res.json({ success: true, message: "updated successfully", result });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ success: false, message: "operation failed" });
  }
};
