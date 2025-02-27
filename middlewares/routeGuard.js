module.exports = function (req, res, next) {
  if (req.user) {
    return next();
  } else {
    return res.status(403).render('error', { title: '403' });
  }
};
