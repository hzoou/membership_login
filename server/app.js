const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const signupRouter = require('./routes/signupRouter');
const signinRouter = require('./routes/signinRouter');
const mypageRouter = require('./routes/mypageRouter');
const logoutRouter = require('./routes/logoutRouter');
const errorRouter = require('./routes/errorRouter');
const sessionRouter = require('./routes/sessionRouter');
const app = express();

app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const dirPath = __dirname;
app.use(express.static(path.join(dirPath.replace("/server", "/client"))));

app.use('/session', sessionRouter);
app.use('/logout', logoutRouter);
app.use('/mypage', mypageRouter);
app.use('/signup', signupRouter);
app.use('/signin', signinRouter);
app.use(errorRouter);

module.exports = app;