function getUsername() {
    if (window.Telegram && Telegram.WebApp) {
        const initData = Telegram.WebApp.initData;
        const params = new URLSearchParams(initData);
        const user = params.get('user');
        if (user) {
            // Парсим JSON-строку user
            const userObj = JSON.parse(user);
            return userObj.username;
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

