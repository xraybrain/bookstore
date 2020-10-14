const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let salt = bcrypt.genSaltSync(12);
    let hash = bcrypt.hashSync("admin", salt);
    return queryInterface.bulkInsert("Admins", [
      {
        emailAddress: "admin@gmail.com",
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      "Admins",
      { emailAddress: "admin@gmail.com" },
      {}
    );
  },
};
