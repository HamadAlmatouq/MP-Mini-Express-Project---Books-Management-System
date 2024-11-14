const express = require("express");
const router = express.Router();
const upload = require("../../multer");
const {
  booksGet,
  bookslist,
  booksUpdate,
  booksDelete,
  booksCreate,
} = require("./books.controllers");

router.get("/", bookslist);
router.get("/:bookId", booksGet);

router.post("/", upload.single("image"), booksCreate);

router.delete("/:bookId", booksDelete);

router.put("/:bookId", upload.single("image"), booksUpdate);

module.exports = router;
