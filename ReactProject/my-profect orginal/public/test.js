function usersArray() {
    const users = JSON.parse(window.localStorage.getItem("users")) || [];
    console.log(users);
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let user = {
        "name": name,
        "password": password
    }
    if (availableName(name, users)) {
        pushUser(users, user);
    } else {
        alert("unavailable")
    }
}

function availableName(name, users) {
    for (let i = 0; i < array.length; i++) {
        if (users[i].name == name) {
            return false
        }
    }
    return true
}