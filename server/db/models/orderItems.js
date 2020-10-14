module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define("OrderItem", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    bookId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Books",
        key: "id",
      },
    },
    orderId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Orders",
        key: "id",
      },
    },
    quantity: { type: DataTypes.INTEGER },
  });

  OrderItem.associate = (models) => {
    models.OrderItem.belongsTo(models.Order, { foreignKey: "orderId" });
    models.OrderItem.belongsTo(models.Book, { foreignKey: "bookId" });
  };

  return OrderItem;
};
