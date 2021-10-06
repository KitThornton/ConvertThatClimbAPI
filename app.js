let express = require('express');
let app = express();
const cors = require('cors');

// Middleware
let createError = require('http-errors');
app.use(express.json());
app.use(cors());

let indexRouter = require('./routes');

app.use('/', indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;