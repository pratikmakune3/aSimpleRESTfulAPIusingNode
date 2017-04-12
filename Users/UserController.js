var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var User = require('./User');

//CREATE a new User
router.post('/', function(req, res){
  console.log(req.body);
  var user = {
                name : req.body.name,
                email : req.body.email,
                password : req.body.password
             };
  console.log(user);
  User.create(user, function(err, user){
    if(err){
      return res.status(500).send("There was an error creating this user. Try again");
    }else {
      return res.status(200).send(user);
    }
  });

});

module.exports = router;
