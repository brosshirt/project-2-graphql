/*
 * This files holds all the code to test you REST API
 */

//Run once broswer has loaded everything
window.onload = function () {

//button event for create
document.getElementById("create")
.addEventListener("click",function(e){
    console.log("create")
    fetch('http://localhost:3000/users', {
        method: "POST",
        body: JSON.stringify({
            username:"Nick Rosshirt",   
            name:"New Nick",    
            bio:"Nick still loves Women's Basketball"}),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }) 
    fetch('http://localhost:3000/users', {
        method: "POST",
        body: JSON.stringify({
            username:"Tim Rosshirt",   
            name:"New Tim",    
            bio:"Tim still loves Women's Basketball"}),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }) 
    fetch('http://localhost:3000/users', {
        method: "POST",
        body: JSON.stringify({
            username:"Jim Rosshirt",   
            name:"New Jim",    
            bio:"Jim still loves Women's Basketball"}),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }) 
    fetch('http://localhost:3000/users', {
        method: "POST",
        body: JSON.stringify({
            username:"Rim Rosshirt",   
            name:"New Rim",    
            bio:"Rim still loves Women's Basketball"}),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }) 
    fetch('http://localhost:3000/users', {
        method: "POST",
        body: JSON.stringify({
            username:"Ben Ten",   
            name:"Hjlksd",    
            bio:"Rim still loves Women's hoop"}),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })      
},false);

// button event for 'reads' (reads all users)
document.getElementById("reads")
.addEventListener("click",function(e){
    console.log("reads")
    fetch('http://localhost:3000/users').then(response => response.json()).then(data => console.log(data))
},false);


//button event for search
document.getElementById("searches")
.addEventListener("click",function(e){
    console.log("search")
    fetch('http://localhost:3000/users?search=basketball').then(response => response.json()).then(data => console.log(data))
},false);

//button event for read
document.getElementById("read")
.addEventListener("click",function(e){
    console.log("read")
    fetch('http://localhost:3000/users/Ben%20Ten').then(response => response.json()).then(data => console.log(data));
},false);

//button event for update
document.getElementById("update")
.addEventListener("click",function(e){
    console.log("update")
    fetch('http://localhost:3000/users/Ben%20Ten', {
        method: "PUT",
        body: JSON.stringify({
            username:"Rim Roids",   
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
    fetch('http://localhost:3000/users/Ben Ten', { method: 'DELETE' })
},false);

};