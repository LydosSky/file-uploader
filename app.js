const express = require('express');
const path = require('node:path');
const dotenv = require('dotenv');
const morgan = require('morgan');
// const passport = require('./passport');
const session = require('express-session');
dotenv.config();
const authenticationRouter = require('./routes/authenticationRouter');

const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Authentication
// app.use(session({ secret: 'cats', resave: false, saveUninitialized: false }))
// app.use(passport.session());
// app.use((req, res, next) => {
//   res.locals.currentUser = req.user;
//   next();
// });
app.get('/', function (req, res) {
  res.render('index');
});

app.use('/auth', authenticationRouter);

// 404 handler
app.use(function (req, res, next) {
  res.status(404).render('error', { title: '404' });
});

// Error handling middleware
app.use(function (err, req, res, next) {
  console.log(err);
  res.status(err.status || 500).render('error', { title: '500' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Express app listenning on port ${PORT}!`);
});
