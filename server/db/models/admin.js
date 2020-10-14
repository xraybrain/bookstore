module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "Admin",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      emailAddress: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
    },
    { paranoid: true }
  );

  return Admin;
};
