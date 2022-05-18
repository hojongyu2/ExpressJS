var express = require('express');
var router = express.Router();


const users = [{
  firstname: "Ho Jong",
  lastname: 'Yu'
}, {
  lastname: 'Yu',
  firstname: 'Ho Jong'
}]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/myname', (req, res) => {
  res.send('Ho jong')
});

let movies = ['Avatar', 'Titanic', 'The outpost']
router.get('/myfavoritemovies', (req, res) => {
  res.json(movies)
});
//http://localhost:4000/users/name?firstname=ho&lastname=jong
router.get('/name', (req, res)=> {
  const firstname = req.query.firstname
  const lastname = req.query.lastname
  res.send('my name is: ' + firstname + ' ' + lastname)
});
//userNumber-index number for array or object
router.get('/getone/:userNumber', (req, res) => {
  const userNumber = req.params.userNumber
  const foundUser = users[userNumber];
  //JSON: Javascript Object Notation
  res.json(foundUser)
})

module.exports = router;
