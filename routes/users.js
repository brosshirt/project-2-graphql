const { response } = require('express');
const express = require('express');
const router = express.Router();

const users = [];
/* Add a new cat object to the users array */
router.get('/', function(req, res, next) {
  // First check to see if search is defined as a query parameter
  if (Object.keys(req.query).includes('search')){
    // So if the search query is contained in the name or bio of a user, throw that user in an array to be sent back
    search = req.query.search;
    userResults = [];
    for (i = 0; i<users.length; i++){
      if (users[i].name.toLowerCase().includes(search.toLowerCase()) || users[i].bio.toLowerCase().includes(search.toLowerCase())){
        userResults.push(users[i])
      }
    }
    res.send(userResults);
  }
  else{
    res.send(users);
  }
});

router.post('/', function(req, res, next) {
  console.log("USERS 1:");
  console.log(users);
  user = req.body;
  if (Object.keys(user).length != 3 || !user.bio || !user.name || !user.username){
    res.status(404).send();
  }
  else if (userExists(user)){
    res.status(404).send();
  } 
  else{
    users.push(user);
  }
  console.log("USERS 2:");
  console.log(users);
  
});

router.get('/:username', function(req, res, next){
  user = getUser(req.params.username);
  if (user){ // if the user is defined, meaning that it exists
    res.send(user)
  }
  else{
    res.status(404).send();
  }
});

router.put('/:username', function(req, res, next){

  // first things first, make sure the request body makes sense
  editedUser = req.body;
  if (Object.keys(editedUser).length != 3 || !editedUser.bio || !editedUser.name || !editedUser.username){
    res.status(404).send();
  }
  
  user = getUser(req.params.username);
  if (user){ // user exists, update the user
    if (editedUser.username != user.username && userExists(editedUser)){ 
      // if you try to change the username to 'ben' and 'ben' already exists we're going to have a problem
      res.status(404).send();  
    }
    // update all the fields of the original user
    user.username = editedUser.username;
    user.name = editedUser.name;
    user.bio = editedUser.bio;
  }
  else{ // user doesn't exist, create the user
    if (userExists(editedUser)){
      // if you try to create a user with a username that already exists we're going to have a problem
      res.status(404).send();
    }
    else{ // create the user
      users.push(editedUser);
    }
  }
  console.log("UPDATED USERS");
  console.log(users);

});

router.delete('/:username', function(req, res, next){
  for (i = 0; i<users.length; i++){
    if (users[i].username === req.params.username){
      users.splice(i,1);
    }
  }
  console.log("NEW USERS BABY:");
  console.log(users);


});

function userExists(user){
  for (i = 0; i<users.length; i++){
    if (user.username === users[i].username){
      return true;
    }
  }
  return false;
}

function getUser(username){
  for (i = 0; i<users.length; i++){
    if (username === users[i].username){
      return users[i];
    }
  }
}



module.exports = router;
