const {
  getAuthors,
  saveAuthor,
  updateAuthor,
  deleteAuthor,
  getAuthorBooks,
} = require("../controllers/AuthorAPI.controller");
module.exports = (router) => {
  router.get("/authors/", getAuthors);
  router.post("/authors/", saveAuthor);
  router.put("/authors/", updateAuthor);
  router.delete("/authors/", deleteAuthor);
  router.post("/author/books/", getAuthorBooks);
};
