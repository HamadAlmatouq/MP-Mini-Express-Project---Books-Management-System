const express = require("express");
const morgan = require("morgan");
const app = express();
const booksRoutes = require("./api/books/books.routes");
const connectDB = require("./database");
const { url, errorHandling } = require("./middleware");
const path = require("path");
connectDB();

app.use(express.json());
app.use(morgan("dev"));

app.use("/books", booksRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));
app.all("*", url);

app.use(errorHandling);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`the app is running in port http://localhost:${PORT}`);
});
