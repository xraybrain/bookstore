/**
 * This file loads all apis defined in this folder. ensure that no subdir is created.
 */
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json({ app_name: "online bookshop", api_version: "1.0.0" });
});

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== basename &&
      path.extname(file) === ".js"
  )
  .forEach((routeName) => {
    require("./" + routeName)(router);
  });

module.exports = router;
