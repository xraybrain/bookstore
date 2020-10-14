module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    studentId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Students",
        key: "id",
      },
    },
    totalAmount: { type: DataTypes.DECIMAL(8, 2) },
    status: { type: DataTypes.STRING },
    paymentRef: { type: DataTypes.STRING },
  });

  Order.associate = (models) => {
    models.Order.belongsTo(models.Student, { foreignKey: "studentId" });
    models.Order.hasMany(models.OrderItem, { foreignKey: "orderId" });
  };

  return Order;
};
