const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const signup = require('./routes/signup');
const signin = require('./routes/signin');
const main = require('./routes/main');
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

app.use('/main', main);
app.use('/signup', signup);
app.use('/signin', signin);

module.exports = app;
