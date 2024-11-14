const { model, Schema } = require("mongoose");

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, default: 5 },
  image: {
    type: String,
    default: "/media",
  },
});

BookSchema.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.__v;
    return ret;
  },
});

module.exports = model("Book", BookSchema);
