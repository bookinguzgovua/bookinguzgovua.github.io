document.getElementById('popular1').onclick = function () {
    form.from.value = 'Київ';
    form.to.value = 'Львів';
}
document.getElementById('popular2').onclick = function () {
    form.from.value = 'Київ';
    form.to.value = 'Пшемисль';
}
document.getElementById('popular3').onclick = function () {
    form.from.value = 'Київ';
    form.to.value = 'Дніпро-головний';
}
document.getElementById('popular4').onclick = function () {
    form.from.value = 'Київ';
    form.to.value = 'Харків';
}
document.getElementById('popular5').onclick = function () {
    form.from.value = 'Львів';
    form.to.value = 'Пшемисль';
}





document.getElementById('button-swap').onclick = function () {
    let a = form.from.value;
    form.from.value = form.to.value;
    form.to.value = a;
}





document.getElementById('hint-city1').onclick = function () {
    form.from.value = 'Київ'
}
document.getElementById('hint-city2').onclick = function () {
    form.from.value = 'Львів'
}
document.getElementById('hint-city3').onclick = function () {
    form.from.value = 'Пшемисль'
}
document.getElementById('hint-city4').onclick = function () {
    form.from.value = 'Дніпро-головний'
}
document.getElementById('hint-city5').onclick = function () {
    form.from.value = 'Одеса'
}



document.getElementById('hint-city6').onclick = function () {
    form.to.value = 'Київ'
}
document.getElementById('hint-city7').onclick = function () {
    form.to.value = 'Львів'
}
document.getElementById('hint-city8').onclick = function () {
    form.to.value = 'Пшемисль'
}
document.getElementById('hint-city9').onclick = function () {
    form.to.value = 'Дніпро-головний'
}
document.getElementById('hint-city10').onclick = function () {
    form.to.value = 'Одеса'
}





var today = new Date();
var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);

form.date.value = year + '-' + month + '-' + day;

today.setDate(today.getDate() + 1);
var tomorrow = today.getDate();
today.setDate(today.getDate() + 1);
var afterTomorrow = today.getDate();

document.getElementById('hint-day1').onclick = function () {
    form.date.value = year + '-' + month + '-' + day;
}
document.getElementById('hint-day2').onclick = function () {
    form.date.value = year + '-' + month + '-' + tomorrow;
}
document.getElementById('hint-day3').onclick = function () {
    form.date.value = year + '-' + month + '-' + afterTomorrow;
}



setInterval(function () {
    var submitString = form.date.value.toString();
    var submitDay = submitString[8] + submitString[9];
    var submitMonth = submitString[5] + submitString[6];
    var submitYear = submitString[0] + submitString[1] + submitString[2] + submitString[3];
    document.getElementById('submit').innerText = 'Пошук поїздів на ' + submitDay + '.' + submitMonth + '.' + submitYear;
}, 100)


