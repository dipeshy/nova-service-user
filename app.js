const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function (_, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

const authRouter = require('./routes/v1/auth');
const indexRouter = require('./routes/v1/index');

app.use('/v1/auth', authRouter);
app.use('/v1', indexRouter);

module.exports = app;
