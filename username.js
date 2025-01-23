function getUsername() {
    if (window.Telegram && Telegram.WebApp) {
        // Проверяем, доступен ли initDataUnverified
        if (Telegram.WebApp.initDataUnverified && Telegram.WebApp.initDataUnverified.user) {
            return Telegram.WebApp.initDataUnverified.user.username;
        }
    }
    return null;
}

// Выводим username на экран
const usernameElement = document.getElementById('username');
const username = getUsername();

if (username) {
    usernameElement.textContent += username;
} else {
    usernameElement.textContent += "Не удалось получить username.";
}
