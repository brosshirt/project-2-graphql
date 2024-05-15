window.onload = function () {


// Replaces /Post in REST version
document.getElementById("create").addEventListener("click", function(e) {
    const query = `
        mutation {
            createUser(username: "Nick Rosshirt", name: "New Nick", bio: "Nick loves college lacrosse") {
                username
                name
                bio
            }
        }
    `;

    fetchGraphQl(query)
        .then(response => response.json())
        .then(data => console.log(data.data.createUser))
        .catch(error => console.error('Error:', error));
}, false);


// Replaces /Get in REST version
document.getElementById("read").addEventListener("click", function(e) {
    const query = `
        query {
            users {
                username
                name
                bio
            }
        }
    `;

    fetchGraphQl(query)
        .then(response => response.json())
        .then(data => console.log(data.data.users))
        .catch(error => console.error('Error:', error));
}, false);

// Replaces /put in rest version
document.getElementById("update").addEventListener("click", function(e) {
    const query = `
        mutation {
            updateUser(username: "Nick Rosshirt", name: "Rimbo", bio: "I'm a damn Romboid") {
                username
                name
                bio
            }
        }
    `;

    fetchGraphQl(query)
        .then(response => response.json())
        .then(data => console.log(data.data.updateUser))
        .catch(error => console.error('Error:', error));
}, false);

document.getElementById("destroy").addEventListener("click", function(e) {
    console.log("destroy");

    const query = `
        mutation {
            deleteUser(username: "Nick Rosshirt") {
                username
                name
                bio
            }
        }
    `;

    fetchGraphQl(query)    
        .then(response => response.json())
        .then(data => console.log(data.data.deleteUser))
        .catch(error => console.error('Error:', error));
}, false);

function fetchGraphQl(query){
    return fetch('http://localhost:3000/graphql', {
        method: "POST",
        body: JSON.stringify({
            query: query
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}



}

