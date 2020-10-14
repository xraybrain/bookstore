module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      title: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING },
      inStock: { type: DataTypes.BOOLEAN },
      price: { type: DataTypes.DECIMAL(8, 2) },
      lecturerId: {
        type: DataTypes.INTEGER,
        references: { model: "lecturers", key: "id" },
      },
      coverPage: { type: DataTypes.TEXT("medium") },
    },
    { paranoid: true }
  );

  Book.associate = (models) => {
    models.Book.hasMany(models.BookAuthor, { foreignKey: "bookId" });
    models.Book.hasMany(models.Cart, { foreignKey: "bookId" });
    models.Book.belongsTo(models.Lecturer, { foreignKey: "lecturerId" });
  };

  return Book;
};
