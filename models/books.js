const { model, Schema } = require("mongoose");

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, default: 5 },
  bookImage: {
    type: String,
    defualt:
      "/Users/hamad/Desktop/ExpressJS/MP-Mini-Express-Project---Books-Management-System/media/Luffy.avif",
  },
});

module.exports = model("Book", BookSchema);
