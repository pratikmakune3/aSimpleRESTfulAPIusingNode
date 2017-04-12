var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var User = require('./User');

//CREATE a new User
router.post('/', function(req, res){
  var user = {
                name : req.body.name,
                email : req.body.email,
                password : req.body.password
             };
  User.create(user, function(err, user){
    if(err){
      return res.status(500).send("There was an error creating this user. Try again");
    }else {
      return res.status(200).send(user);
    }
  });

});

//READ all users
//Returns array of all the users from database
router.get('/', function(req, res){
  User.find({}, function(err, users){
    if(err){
      return res.status(500).send("There was a problem finding users.");
    }else{
      return res.status(200).send(users);
    }
  });
});

//READ a user who matches with id
router.get('/:id', function(req, res){
  User.findById(req.params.id, function(err, user){
    if(err){
      return res.status(500).send("There was a problem finding the user of id : "+id);
    }else{
      return res.status(200).send(user);
    }
  });
});

router.put('/:id', function(req, res){
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user){
    if(err){
      return res.status(500).send("There was a problem updating the user of id : "+id);
    }else{
      return res.status(200).send(user);
    }
  });
});

router.delete('/:id', function(req, res){
 User.findByIdAndRemove(req.params.id, function(err, user){
   if(err){
     return res.status(500).send("There was a problem deleting the user of id : "+id);
   }else{
     return res.status(200).send(user);
   }
 });
})

module.exports = router;
