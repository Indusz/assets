const notificationQueue = [];
function notification(text) {
    notificationQueue.push(text);
    if (notificationQueue.length === 1) {
        showNextNotification();
    }
}
function showNextNotification() {
    if (notificationQueue.length > 0) {
        const text = notificationQueue[0];
        const notificationElement = document.getElementById('notification');
        const notificationContent = document.getElementById('notification-content');
        notificationContent.textContent = text;
        notificationElement.classList.add('show');
        setTimeout(function () {
            closeNotification();
        }, 1000);
    }
}
function closeNotification() {
    const notificationElement = document.getElementById('notification');
    notificationElement.classList.remove('show');
    notificationQueue.shift();
    setTimeout(function () {
        if (notificationQueue.length > 0) {
            showNextNotification();
        }
    }, 500);
}
