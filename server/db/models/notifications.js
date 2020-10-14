module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define(
    "Notification",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      content: { type: DataTypes.STRING },
      type: { type: DataTypes.STRING },
    },
    { paranoid: true }
  );

  return Notification;
};
