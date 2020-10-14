const BaseModel = require("../db/models");
const Sequelize = require("sequelize");

exports.saveAuthor = async (req, res, next) => {
  const newAuthor = req.body;

  try {
    let authorExists = await BaseModel.Author.findOne({ where: newAuthor });
    if (authorExists) {
      return res.json({
        success: false,
        message: "author already exists",
      });
    }
    let author = await BaseModel.Author.create(newAuthor);
    author.id = author.null;
    res.json({
      success: true,
      author,
      message: "success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "operation failed, system was unable to save new author.",
    });
  }
};

exports.getAuthor = async (req, res, next) => {
  const id = req.params.id;
  try {
    const author = BaseModel.Author.findOne({ where: { id } });
    res.json({ success: true, message: "success", author });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({
      success: false,
      message: "operation failed, unable to retrieve author",
      author,
    });
  }
};

exports.getAuthors = async (req, res, next) => {
  const filter = { where: {} };
  const searchquery = req.query.searchquery;

  if (searchquery) {
    filter.where.name = { [Sequelize.Op.like]: `%${searchquery}%` };
  }

  try {
    const authors = await BaseModel.Author.findAll(filter);
    res.json({ authors, success: true, message: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "operation failed, system was unable to retrieve authors.",
    });
  }
};

exports.updateAuthor = async (req, res, next) => {
  const { id, name } = req.body;

  try {
    const result = BaseModel.Author.update({ name }, { where: { id } });
    res.json({
      success: true,
      author: { id, name },
      message: "updated successfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "operation failed. system was unable to update author.",
    });
  }
};

exports.deleteAuthor = async (req, res, next) => {
  const { id } = req.body;

  try {
    const result = BaseModel.Author.destroy({ where: { id } });
    res.json({ success: true, result, message: "deleted successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "operation failed. system was unable to delete author.",
    });
  }
};

exports.getAuthorBooks = async (req, res, next) => {
  const { authorId } = req.body;

  try {
    const authorBooks = await BaseModel.BookAuthor.findAll({
      include: [{ model: BaseModel.Book }],
      where: { authorId },
    });
    res.json({ success: true, message: "success", authorBooks });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "operation failed, system was unable to retrieve author's books",
    });
  }
};
