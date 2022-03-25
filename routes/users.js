const { response } = require('express');
const express = require('express');
const router = express.Router();

const users = [];

router.get('/', function(req, res, next) {
  if (Object.keys(req.query).includes('search')){ // Are we searching?
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
  else{ // If not, just send all the users back
    res.send(users);
  }
});

router.post('/', function(req, res, next) {
  user = req.body;
  if (Object.keys(user).length !== 3 || !user.bio || !user.name || !user.username){ // make sure the schema fits
    res.status(404).send();
  }
  else if (userExists(user)){ // No duplicate usernames
    res.status(404).send();
  } 
  else{
    users.push(user);
  }
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
  if (Object.keys(editedUser).length !== 3 || !editedUser.bio || !editedUser.name || !editedUser.username){
    res.status(404).send();
  }
  
  user = getUser(req.params.username);
  if (user){ // user exists, update the user
    if (editedUser.username !== user.username && userExists(editedUser)){ 
      // if you try to change the username to 'ben' and 'ben' already exists we're going to have a problem
      res.status(404).send();  
    }
    // update all the fields of the original user
    user.username = editedUser.username;
    user.name = editedUser.name;
    user.bio = editedUser.bio;
  }
  else{ // user doesn't exist, create the user
    // NOTE: My program allows the username in the URL to mismatch with the URL in the object, it simply creates a user with the username from the object; users/fjlskdf;lafjsadlkjf is the same as users/Timmy as long as Timmy does not exist. 
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
