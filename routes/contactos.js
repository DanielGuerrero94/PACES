var express = require('express');
var router = express.Router();
var fs = require('fs');
var Repository = require('./repository');

router.get('/nacion', function (req, res, next) {
  res.render('contactos-nacion');
});

router.get('/crear', function (req, res, next) {
  let repository = new Repository()
  console.log(repository.count())
  res.render('contactos-crear');
});

router.get(/.*/, function (req, res, next) {

  fs.readFile(process.cwd() + "/internos.json", function (err, data) {
    if (err) {
      console.log(err)
      return;
    }

    consultores = JSON.parse(data)
    
    var busca = req.originalUrl.split('/')[2].toLowerCase()

    let resultado = consultores.filter(function (consultor){
      if (consultor.nombre == undefined) {
        return false
      }
      return consultor.nombre.toLowerCase().includes(busca)
    });

    if(resultado.length == 0) {
      res.send('No hay match')
    } else if (resultado.length > 1) {
      res.send(resultado)
    } else {
      res.render('contacto', { consultor: resultado[0] });
    }
  });

});


module.exports = router;
