const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const signup = require('./routes/signup');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const dirPath = __dirname;
app.use(express.static(path.join(dirPath.replace("/server", "/client"))));

app.use('/signup', signup);

module.exports = app;
