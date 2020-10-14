module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    firstname: { type: DataTypes.STRING },
    lastname: { type: DataTypes.STRING },
    othernames: { type: DataTypes.STRING },
    deptId: {
      type: DataTypes.INTEGER,
      references: { model: "Departments", key: "id" },
    },
    matricNo: { type: DataTypes.STRING },
    emailAddress: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    avatar: { type: DataTypes.STRING },
  });

  Student.associate = (models) => {
    models.Student.belongsTo(models.Department, { foreignKey: "deptId" });
    models.Student.hasMany(models.Cart, { foreignKey: "studentId" });
  };

  return Student;
};
