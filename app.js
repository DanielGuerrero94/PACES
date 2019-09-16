var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var contactosRouter = require('./routes/contactos');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))
app.use('*/stylesheets', express.static(path.join(__dirname, 'public/stylesheets')))
app.use('*/images', express.static(path.join(__dirname, 'public/images')))
app.use('*/javascripts', express.static(path.join(__dirname, 'public/javascripts')))

app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/contactos', contactosRouter);

app.get('/boletines', function(req, res, next) {
  res.render('boletines');
});

app.get('/noticias', function(req, res, next) {
  res.render('noticias');
});

app.get('/reportes', function(req, res, next) {
  res.render('reportes');
});

module.exports = app;
