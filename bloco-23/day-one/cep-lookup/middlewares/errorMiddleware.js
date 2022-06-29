const errorMiddleware = (err, req, res, _next) => {
  const status = err.code || 500;
  res.status(status).json({ error: { message: err.message } });
};

module.exports = errorMiddleware;