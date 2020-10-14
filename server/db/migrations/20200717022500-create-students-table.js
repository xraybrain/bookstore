module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("students", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      firstname: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      lastname: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      othernames: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      deptId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "departments",
          key: "id",
        },
      },
      matricNo: {
        type: Sequelize.STRING(25),
        allowNull: false,
        unique: true,
      },
      emailAddress: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      avatar: {
        type: Sequelize.STRING(500),
        allowNull: false,
        defaultValue: "/images/avatar.png",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("students");
  },
};
