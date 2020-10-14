const {
  saveBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
  deleteBookAuthor,
  addBookAuthor,
} = require("../controllers/BookAPI.controller");
module.exports = (router) => {
  router.get("/books/", getBooks);
  router.get("/books/:id/", getBook);

  router.post("/books/", saveBook);

  router.put("/books/", updateBook);

  router.delete("/books/", deleteBook);

  router.delete("/book/author/", deleteBookAuthor);

  router.post("/book/author/", addBookAuthor);
};
