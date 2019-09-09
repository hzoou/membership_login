const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const signup = require('./routes/signup');
const signin = require('./routes/signin');
const mypage = require('./routes/mypage');
const logout = require('./routes/logout');
const error = require('./routes/error');
const session = require('./routes/session');
const app = express();

app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const dirPath = __dirname;
app.use(express.static(path.join(dirPath.replace("/server", "/client"))));

app.use('/session', session);
app.use('/logout', logout);
app.use('/mypage', mypage);
app.use('/signup', signup);
app.use('/signin', signin);
app.use(error);

module.exports = app;