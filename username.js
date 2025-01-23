function getUsername() {
    return Telegram.WebApp.initDataUnverified.user.username;
}

// Выводим username на экран
let usernameElement = document.getElementById('username');
let username = getUsername();
console
.log(username);

if (username) {
    usernameElement.textContent += username;
} else {
    usernameElement.textContent += "Не удалось получить username.";
}

