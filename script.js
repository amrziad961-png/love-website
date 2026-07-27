const startDate = new Date("2025-03-06T00:00:00");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `❤️ ${days} يوم ${hours} ساعة ${minutes} دقيقة ${seconds} ثانية ❤️`;
}

setInterval(updateCounter, 1000);
updateCounter();
