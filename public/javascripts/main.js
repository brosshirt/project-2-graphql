/*
 * This files holds all the code to test you REST API
 */

//Run once broswer has loaded everything
window.onload = function () {

//button event for create
document.getElementById("create")
.addEventListener("click",function(e){
    
    console.log("created")
    fetch('http://localhost:3000/users', {
        method: "POST",
        body: JSON.stringify({
            username:"Nick Rosshirt",   
            name:"New Nick",    
            bio:"Nick loves college lacrosse"}),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })      
},false);



// button event for read
document.getElementById("read")
.addEventListener("click",function(e){
    console.log("read")
    fetch('http://localhost:3000/users').then(response => response.json()).then(data => console.log(data));
},false);


//button event for update
document.getElementById("update").addEventListener("click",function(e){
    console.log("update")
    fetch('http://localhost:3000/users/Nick%20Rosshirt', {
        method: "PUT",
        body: JSON.stringify({
            username:"Nick Rosshirt",   
            name:"Rimbo",    
            bio:"I'm a damn Romboid"}),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }) 
},false);


//button event for destroy
document.getElementById("destroy")
.addEventListener("click",function(e){
    console.log("destroy")
    fetch('http://localhost:3000/users/Nick%20Rosshirt', { method: 'DELETE' })
},false);




};