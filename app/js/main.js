function updateTime() {
    const hourEl = document.querySelector('#hour');
    const minuteEl = document.querySelector('#minute');
    const secondEl = document.querySelector('#second');
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if (hours >= 0 && hours <= 9) hours = '0' + hours;
    if (minutes >= 0 && minutes <= 9) minutes = '0' + minutes;
    if (seconds >= 0 && seconds <= 9) seconds = '0' + seconds;
    hourEl.innerHTML = hours;
    minuteEl.innerHTML = minutes;
    secondEl.innerHTML = seconds;

    const dataEl = document.querySelector('#date');
    let date = d.getDate();
    if (date >= 0 && date <= 9) date = '0' + date;
    let month = d.getMonth();
    if (month >= 0 && month <= 9) month = '0' + (month + 1);
    let year = d.getFullYear();
    if (year >= 0 && year <= 9) year = '0' + year;

    dataEl.innerHTML = `${date}/${month}/${year}`;

    const dayEl = document.querySelector('#day');
    let daynumber = d.getDay();
    let day = '';
    switch (daynumber) {
        case 1: day = 'Понедельник'; break;
        case 2: day = 'Вторник'; break;
        case 3: day = 'Среда'; break;
        case 4: day = 'Четверг'; break;
        case 5: day = 'Пятница'; break;
        case 6: day = 'Суббота'; break;
        case 7: day = 'Воскресение'; break;
    }
    dayEl.innerHTML = day;
}

window.onload = function () {
    setInterval(updateTime, 1000);
}













$(function () {

    var mixer = mixitup('.portfolio__inner-box');


});