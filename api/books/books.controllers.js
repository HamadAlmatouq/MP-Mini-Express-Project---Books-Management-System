const books = require("../../models/books");
const Book = require("../../models/books");

//Create
exports.booksCreate = async (req, res) => {
  try {
    if (req.file)
      req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path}`;
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};

//GET All
exports.bookslist = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    next(error);
  }
};

// GET By ID
exports.booksGet = async (req, res, next) => {
  const { bookId } = req.params;
  try {
    const findId = await Book.findById(bookId);
    res.json(findId);
  } catch (error) {
    res.status(500).json({ message: error.message });
    next(error);
  }
};
// exports.booksGet = async (req, res, next) => {
//   const { bookId } = req.params;
//   try {
//     const foundBook = await Book.findById(bookId);
//     if (foundBook) {
//       res.status(204).end();
//     } else {
//       res.status(404).json({ message: "Book not found" });
//     }
//   } catch (error) {
//     next(error);
//   }
// };

//Update
exports.booksUpdate = async (req, res, next) => {
  const { bookId } = req.params;
  try {
    const foundBook = await Book.findById(bookId);
    if (foundBook) {
      await foundBook.updateOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    next(error);
  }
};

//Delete
exports.booksDelete = async (req, res, next) => {
  const { bookId } = req.params;
  try {
    const foundBook = await Book.findById(bookId);
    if (foundBook) {
      await foundBook.deleteOne();

      res.status(204).end();
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    next(error);
  }
};
