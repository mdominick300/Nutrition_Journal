var path = require('path');
var isAuthenticated = require('../config/middleware/isAuthenticated');
var db = require('../models');

module.exports = function (app) {

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/landing.html'));
  });

  app.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });

  app.get('/food', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/food.html'));
  });

  app.get('/daily', isAuthenticated, function (req, res) {
    var exercise;
    var query = {};
    if (req.user.id) {
      query.UserId = req.user.id;
    }

    db.Exercise.findAll({
      where: query,

    }).then(function (data) {
      exercise = data;
    });

    db.Food.findAll({
      where: query,
    }).then(function (data) {

      res.sendFile(path.join(__dirname, '../public/daily.html'));
    });

  });

  app.get('/welcome', isAuthenticated, function (req, res) {
    var exercise;
    var query = {};
    if (req.user.id) {
      query.UserId = req.user.id;
    }

    db.Exercise.findAll({
      where: query,

    }).then(function (data) {
      exercise = data;


    });

    db.Food.findAll({
      where: query,

    }).then(function (data) {

      res.sendFile(path.join(__dirname, '../public/welcome.html'));
    });

  });

  app.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/signup.html'));
  });

  app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/login.html'));
  });

  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });


};