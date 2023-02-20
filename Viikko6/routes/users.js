var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Moikka pikku pallinaamat :)');
});
module.exports = router;
router.get('/toTheDeep/:name', function(request, response) {
  response.send('nää on taas näitä päiviä '+request.params.name)
  console.log(request.params.name)
});

//module.exports = router;

router.get('/pointOfnoReturn/:fname/:lname', function(request, response) {
  response.send('Aivan ilmiömäistä toimintaa tämä, AIVAN USKOMATONTA. HIENOA MINÄ '+request.params.fname+' '+request.params.lname)
  console.log(request.params.fname+' '+request.params.lname)
})

router.post('/', function(request, response){
  response.send(request.body.fname+' '+request.body.lname)
  console.log(request.body.fname+' '+request.body.lname)
})