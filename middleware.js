const url = function (req, res) {
  res.status(404).json({ message: `${req.method}${req.url}:route not found ` });
};

const errorHandling = function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
};

module.exports = { url, errorHandling };
