const { model, Schema } = require("mongoose");

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, default: 5 },
  image: {
    type: String,
    default: "/Users/hamad/Desktop/2412fb16f6035da0ec58377b58ff20b6.jpg",
  },
});

BookSchema.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.__v;
    return ret;
  },
});

module.exports = model("Book", BookSchema);
