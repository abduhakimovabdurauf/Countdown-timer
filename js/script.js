const futureDate = new Date('2025/01/01');

function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit; // Agar 10 dan kichik bo'lsa, oldiga 0 qo'shadi
}

function updateCountdown() {
    const currentDate = new Date();
    const totalMilliseconds = futureDate - currentDate;

    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    const days = totalDays;
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    // O'zgartirishlar indikatorlar uchun
    const dd = document.getElementById('dd');
    const hh = document.getElementById('hh');
    const mm = document.getElementById('mm');
    const ss = document.getElementById('ss');

    dd.style.strokeDashoffset = 440 - (440 * days) / 365;
    hh.style.strokeDashoffset = 440 - (440 * hours) / 24;
    mm.style.strokeDashoffset = 440 - (440 * minutes) / 60;
    ss.style.strokeDashoffset = 440 - (440 * seconds) / 60;

    // Vaqtni yangilash
    document.getElementById('days').innerHTML = formatTime(days) + '<span> Days</span>';
    document.getElementById('hours').innerHTML = formatTime(hours) + '<span> Hours</span>';
    document.getElementById('minutes').innerHTML = formatTime(minutes) + '<span> Minutes</span>';
    document.getElementById('seconds').innerHTML = formatTime(seconds) + '<span> Seconds</span>';
}

updateCountdown();
setInterval(updateCountdown, 1000);
