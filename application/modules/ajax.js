document.getElementById('submit_btn').addEventListener('click', loadData);


var users;

function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);
    //xhr.open('GET', 'localhost:5000/details/age/iasi/1/2021', true);

    xhr.onload = function() {
        if (this.status == 200) {
            users = JSON.parse(this.responseText);
            sessionStorage.setItem("users", JSON.stringify(users));

            console.log(users);
            //sessionStorage.setItem("users", users);
        }
    }

    xhr.send();

};