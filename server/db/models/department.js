module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define("Department", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING },
  });

  Department.associate = (models) => {
    models.Department.hasMany(models.Student, { foreignKey: "deptId" });
    models.Department.hasMany(models.Lecturer, { foreignKey: "deptId" });
  };

  return Department;
};
