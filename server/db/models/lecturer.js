module.exports = (sequelize, DataTypes) => {
  const Lecturer = sequelize.define("Lecturer", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    firstname: { type: DataTypes.STRING },
    lastname: { type: DataTypes.STRING },
    othernames: { type: DataTypes.STRING },
    emailAddress: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    avatar: { type: DataTypes.STRING },
    activated: { type: DataTypes.BOOLEAN },
    deptId: {
      type: DataTypes.INTEGER,
      references: { model: "Departments", key: "id" },
    },
  });

  Lecturer.associate = (models) => {
    models.Lecturer.belongsTo(models.Department, { foreignKey: "deptId" });
  };

  return Lecturer;
};
