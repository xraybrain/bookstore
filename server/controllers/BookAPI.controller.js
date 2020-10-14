const BaseModel = require("../db/models/");
const { Sequelize } = require("../db/models/");

exports.saveBook = async (req, res, next) => {
  //-- start an SQL transaction execution; rolls back on failure
  const transaction = await BaseModel.sequelize.transaction();
  const formData = req.body;

  const newBook = {
    title: formData.title,
    description: formData.description,
    price: formData.price,
    lecturerId: formData.lecturerId,
    coverPage: formData.coverPage,
  };
  const authors = Array.isArray(formData.authors)
    ? formData.authors
    : [formData.authors];
  let bookAuthorIds = [];

  try {
    //-- insert book
    const book = await BaseModel.Book.create(newBook, { transaction });
    const bookId = book.null; // sequelize stores new entries ids in null fields

    //-- build author id with bookid object
    authors.forEach((id) => {
      bookAuthorIds.push({ authorId: id, bookId });
    });

    //-- establish relationship between book and author by inserting bookId and authorId to bookAuthors
    await BaseModel.BookAuthor.bulkCreate(bookAuthorIds, { transaction });

    //-- transaction executed successfully
    transaction.commit();

    res.json({
      success: true,
      message: "success",
      book,
    });
  } catch (error) {
    console.log(error);
    transaction.rollback();

    res.status(500);
    res.json({
      success: false,
      message: "operation failed.",
    });
  }
};

exports.getBooks = async (req, res, next) => {
  let { searchquery, lid, limit } = req.query;
  const filter = {
    where: {},
    include: [
      { model: BaseModel.BookAuthor, include: { model: BaseModel.Author } },
    ],
    order: [["createdAt", "DESC"]],
  };
  if (lid) {
    filter.where["lecturerId"] = lid;
  }
  limit = Number(limit);
  if (!isNaN(limit) && limit !== 0) {
    filter["limit"] = limit;
  }

  if (searchquery) {
    filter.where.title = { [Sequelize.Op.like]: `%${searchquery}%` };
  }

  try {
    const books = (await BaseModel.Book.findAll(filter)).map((item, index) => {
      const book = { ...item.dataValues };
      book.sn = index + 1;
      book.authors = book.BookAuthors.map((bookAuthor) => bookAuthor.Author);

      // keep data clean.
      delete book.BookAuthors;

      return book;
    });

    res.json({ success: true, message: "success", books });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({
      success: false,
      message: "operation failed. system was unable to retrieve data",
    });
  }
};

exports.getBook = async (req, res, next) => {
  const { id } = req.params;
  const filter = {
    where: { id },
    include: [
      { model: BaseModel.BookAuthor, include: { model: BaseModel.Author } },
    ],
  };

  try {
    const book = await BaseModel.Book.findOne(filter);
    book.dataValues.authors = book.BookAuthors.map((bookAuthor, index) => {
      return bookAuthor.Author;
    });

    res.json({ success: true, message: "success", book });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({
      success: false,
      message: "operation failed. system was unable to retrieve data",
    });
  }
};

exports.updateBook = async (req, res, next) => {
  const { id, ...updateData } = req.body;
  try {
    const result = await BaseModel.Book.update(updateData, { where: { id } });
    res.json({ success: true, result, message: "updated successfully." });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ success: false, message: "operation failed" });
  }
};

exports.deleteBook = async (req, res, next) => {
  const { id } = req.body;

  try {
    const result = await BaseModel.Book.destroy({
      where: { id },
    });
    res.json({ success: true, message: "deleted successfully", result });
  } catch (error) {
    console.log(error);
    res.json(500);
    res.json({ success: false, message: "operation failed" });
  }
};

exports.deleteBookAuthor = async (req, res, next) => {
  const { bookId, authorId } = req.body;

  try {
    const result = await BaseModel.BookAuthor.destroy({
      where: { bookId, authorId },
    });
    res.json({ success: true, message: "deleted successfully", result });
  } catch (error) {
    console.log(error);
    res.json(500);
    res.json({ success: false, message: "operation failed" });
  }
};

exports.addBookAuthor = async (req, res, next) => {
  let { bookId, authors } = req.body;

  authors = Array.isArray(authors) ? authors : [authors];
  // ensure author id does not occur twice
  authors = [...new Set(authors)];

  const bookAuthors = [];

  authors.forEach((id) => bookAuthors.push({ authorId: id, bookId }));

  try {
    let result = await BaseModel.BookAuthor.bulkCreate(bookAuthors);
    res.json({
      success: true,
      result,
      message: "author(s) added successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "operation failed, system was unable to save book author",
    });
  }
};
