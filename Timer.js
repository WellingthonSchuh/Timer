const dateNow = new Date();
const resultado = document.querySelector('.Long-result');

function addZero (num){
    return num >=10? num : `0${num}`;
}

function getWeekDay(weekDay){
   let weekDayString;
    switch (weekDay){
        case 0:
            weekDayString='Domingo';
            return weekDayString;
        case 1:
            weekDayString='Segunda-feira';
            return weekDayString;
        case 2:
            weekDayString='Terça-feira';
            return weekDayString;
        case 3:
            weekDayString='Quarta-feira';
            return weekDayString;
        case 4:
            weekDayString='Quinta-feira';
            return weekDayString;
        case 5:
            weekDayString='Sexta-feira';
            return weekDayString;
        case 6:
            weekDayString='Sabado';
            return weekDayString;

    }
}

function getMonthString(month){
   let monthString;
    switch (month){
        case 0:
           monthString='janeiro';
            return monthString;
        case 1:
           monthString='fevereiro';
            return monthString;
        case 2:
           monthString='março';
            return monthString;
        case 3:
           monthString='abril';
            return monthString;
        case 4:
           monthString='maio';
            return monthString;
        case 5:
           monthString='junho';
            return monthString;
        case 6:
           monthString='julho';
            return monthString;
        case 7:
           monthString='agosto';
            return monthString;
        case 8:
           monthString='setembro';
            return monthString;
        case 9:
           monthString='outubro';
            return monthString;
        case 10:
           monthString='novembro';
            return monthString;
        case 11:
           monthString='dezembro';
            return monthString;

    }
}

let weekDay = dateNow.getDay();
const weekDayString = getWeekDay(weekDay);
let month = dateNow.getMonth();
const monthString = getMonthString(month);



resultado.innerHTML = `<strong>${weekDayString}, ${dateNow.getDate()} de ${monthString} de ${dateNow.getFullYear()} às ${addZero(dateNow.getHours())}:${addZero(dateNow.getMinutes())}</strong></p>`;

const short = document.querySelector('.Short-result');
const data = new Date();

short.innerHTML = data.toLocaleString('pt-BR', {dateStyle: "full", timeStyle: 'short'});
