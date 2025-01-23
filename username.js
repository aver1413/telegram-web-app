function getUsername() {
    return Telegram.WebApp.initDataUnverified.user.username;
}

// Выводим username на экран
const usernameElement = document.getElementById('username');
const username = getUsername();

if (username) {
    usernameElement.textContent += username;
} else {
    usernameElement.textContent += "Не удалось получить username.";
}

