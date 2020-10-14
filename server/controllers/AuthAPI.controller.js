const BaseModel = require("../db/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports.login = async (req, res, next) => {
  const { emailAddress, password, userType } = req.body;

  let model;
  switch (userType) {
    case "student":
      model = "Student";
      break;
    case "lecturer":
      model = "Lecturer";
      break;
    case "admin":
      model = "Admin";
      break;
    default:
      model = "Student";
  }
  let user = await BaseModel[model].findOne({ where: { emailAddress } });

  if (!user) {
    return res
      .status(401)
      .json({ message: "Wrong username and password combination." });
  }

  if (model == "Lecturer") {
    if (!user.activated) {
      return res.status(200).json({
        message: "Your account has not been activated.",
        success: false,
      });
    }
  }

  // verify password
  let isMatch = bcrypt.compareSync(password, user["password"]);
  if (!isMatch) {
    return res
      .status(401)
      .json({ message: "Wrong username and password combination." });
  }

  let token = jwt.sign(
    { user: user["id"], type: model },
    process.env.JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
  let d = new Date();
  if (model !== "Admin") {
    await BaseModel.Notification.create({
      type: "warning",
      content: `${user.firstname} ${
        user.lastname
      } logged in at [Time: ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}] [Date: ${d.getFullYear()}-${d.getMonth()}-${d.getDate()}]`,
    });
  }

  res.json({ message: "success", success: true, token });
};

module.exports.getCurrentUser = async (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(403).json({ message: "not authorized" });
  }

  const token = auth.split(" ")[1];
  const decoded = jwt.decode(token);
  if (Date.now() / 1000 > decoded["exp"]) {
    return res.status(403).json({ message: "expired token" });
  }
  model = decoded["type"];
  let id = decoded["user"];

  try {
    let user = await BaseModel[model].findOne({ where: { id } });
    return res.json({ message: "current user", success: true, user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "we were unable to process request" });
  }
};
