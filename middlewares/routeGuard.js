module.exports = function (req, res, next) {
  if (req.user) {
    next();
  }
  res.status(403).render('error', { title: '403' });
};
