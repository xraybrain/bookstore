module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("books", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      lecturerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "lecturers",
          key: "id",
        },
      },
      title: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true,
      },
      description: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      coverPage: {
        type: Sequelize.TEXT("medium"),
        allowNull: false,
      },
      inStock: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      price: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
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
    return queryInterface.dropTable("books");
  },
};
