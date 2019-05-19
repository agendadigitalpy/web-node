const router = require('express').Router();
const mongoose = require('mongoose');
const { getInformacion } = require('../services')
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

router.get('/documentacion', (req, res, next) => {
  res.render('index/documentacion');
});

router.get('/propuestas', (req, res, next) => {
  res.render('index/propuestas');
});

router.get('/solicitudes', (req, res, next) => {
  getInformacion()
  .then(solicitudes => {
    res.render('index/solicitudes', {
      solicitudes: solicitudes
    });
  }); 
});

module.exports = router;