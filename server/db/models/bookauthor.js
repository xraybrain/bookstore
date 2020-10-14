module.exports = (sequelize, DataTypes) => {
  const BookAuthor = sequelize.define("BookAuthor", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    authorId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Authors",
        key: "id",
      },
    },
    bookId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Books",
        key: "id",
      },
    },
  });

  BookAuthor.associate = (models) => {
    models.BookAuthor.belongsTo(models.Book, { foreignKey: "bookId" });
    models.BookAuthor.belongsTo(models.Author, { foreignKey: "authorId" });
  };

  return BookAuthor;
};
