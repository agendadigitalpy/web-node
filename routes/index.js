const router = require('express').Router();
const mongoose = require('mongoose');
const Proposal = mongoose.model('proposal');

router.get('/', (req, res, next) => {
  res.render('index/welcome');
});

router.get('/gobierno-digital', (req, res, next) => {
  res.render('index/gobierno-digital');
});

router.get('/conectividad', (req, res, next) => {
  res.render('index/conectividad');
});

router.get('/economia-digital', (req, res, next) => {
  res.render('index/economia-digital');
});

router.get('/fortalecimiento-institucional', (req, res, next) => {
  res.render('index/fortalecimiento-institucional');
});

module.exports = router;