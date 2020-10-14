module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("Cart", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    bookId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Books",
        key: "id",
      },
    },
    studentId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Students",
        key: "id",
      },
    },
    quantity: { type: DataTypes.INTEGER },
  });

  Cart.associate = (models) => {
    models.Cart.belongsTo(models.Book, { foreignKey: "bookId" });
    models.Cart.belongsTo(models.Student, { foreignKey: "studentId" });
  };

  return Cart;
};
