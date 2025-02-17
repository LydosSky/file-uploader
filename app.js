const express = require('express');
const path = require('node:path');
const dotenv = require('dotenv');
const morgan = require('morgan');
// const passport = require('./passport');
const session = require('express-session');
dotenv.config();
const authenticationRouter = require('./routes/authenticationRouter');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('@prisma/client');

const app = express();
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Authentication
app.use(
  session({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
    secret: 'order of the phoenix',
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(new PrismaClient(), {
      checkPeriod: 2 * 60 * 1000,
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  }),
);
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});
app.get('/', function (req, res) {
  res.render('index', { title: 'Home' });
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
