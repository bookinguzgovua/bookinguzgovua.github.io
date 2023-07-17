const selectWagon = document.querySelector('.seats__wagon')
const selectSeat = document.querySelector('.seats__seat')


function clearSelectSeat() {
    while (selectSeat.firstChild) {
        selectSeat.firstChild.remove();
    }
}
function clearSelectWagon() {
    while (selectWagon.firstChild) {
        selectWagon.firstChild.remove();
    }
}






document.getElementById('popular1').onclick = function () {
    formPlaces.from.value = 'Київ';
    formPlaces.to.value = 'Львів';
}
document.getElementById('popular2').onclick = function () {
    formPlaces.from.value = 'Київ';
    formPlaces.to.value = 'Пшемисль';
}
document.getElementById('popular3').onclick = function () {
    formPlaces.from.value = 'Київ';
    formPlaces.to.value = 'Дніпро-головний';
}
document.getElementById('popular4').onclick = function () {
    formPlaces.from.value = 'Київ';
    formPlaces.to.value = 'Харків';
}
document.getElementById('popular5').onclick = function () {
    formPlaces.from.value = 'Львів';
    formPlaces.to.value = 'Пшемисль';
}



const buttonSwap = document.getElementById('button-swap');

buttonSwap.onclick = function () {
    let a = formPlaces.from.value;
    formPlaces.from.value = formPlaces.to.value;
    formPlaces.to.value = a;
}





document.getElementById('hint-city1').onclick = function () {
    formPlaces.from.value = 'Київ'
}
document.getElementById('hint-city2').onclick = function () {
    formPlaces.from.value = 'Львів'
}
document.getElementById('hint-city3').onclick = function () {
    formPlaces.from.value = 'Пшемисль'
}
document.getElementById('hint-city4').onclick = function () {
    formPlaces.from.value = 'Дніпро-головний'
}
document.getElementById('hint-city5').onclick = function () {
    formPlaces.from.value = 'Одеса'
}



document.getElementById('hint-city6').onclick = function () {
    formPlaces.to.value = 'Київ'
}
document.getElementById('hint-city7').onclick = function () {
    formPlaces.to.value = 'Львів'
}
document.getElementById('hint-city8').onclick = function () {
    formPlaces.to.value = 'Пшемисль'
}
document.getElementById('hint-city9').onclick = function () {
    formPlaces.to.value = 'Дніпро-головний'
}
document.getElementById('hint-city10').onclick = function () {
    formPlaces.to.value = 'Одеса'
}





let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
if (month < 10) month = '0' + month
let day = today.getDate();
if (day < 10) day = '0' + day


formPlaces.date.value = year + '-' + month + '-' + day;

today.setDate(today.getDate() + 1);
let tomorrow = today.getDate();
today.setDate(today.getDate() + 1);
let afterTomorrow = today.getDate();

document.getElementById('hint-day1').onclick = function () {
    formPlaces.date.value = year + '-' + month + '-' + day;
}
document.getElementById('hint-day2').onclick = function () {
    formPlaces.date.value = year + '-' + month + '-' + tomorrow;
}
document.getElementById('hint-day3').onclick = function () {
    formPlaces.date.value = year + '-' + month + '-' + afterTomorrow;
}


const inputDate = document.querySelector('.downside__input')
const buttonSubmit = document.getElementById('submit')
const alertSubmit = document.querySelector('.submit__alert')


buttonSubmit.textContent = 'Пошук поїздів на ' + day + '.' + month + '.' + year;

let submitString, submitDay, submitMonth, submitYear

inputDate.addEventListener('change', () => {
    submitString = formPlaces.date.value.toString();
    submitDay = submitString[8] + submitString[9];
    submitMonth = submitString[5] + submitString[6];
    submitYear = submitString[0] + submitString[1] + submitString[2] + submitString[3];
    buttonSubmit.textContent = 'Пошук поїздів на ' + submitDay + '.' + submitMonth + '.' + submitYear;

    if (submitString === '') {
        buttonSubmit.textContent = 'Пошук поїздів на ' + day + '.' + month + '.' + year;
    }
})

const allTables = document.querySelectorAll('.table')

buttonSubmit.onclick = () => {
    if ((submitYear < year) || (submitMonth < month && submitYear <= year) || (submitDay < day && submitMonth <= month)) {
        alertSubmit.style.display = 'block';
        alertSubmit.textContent = 'Обрана дата вже минула'

        allTables.forEach(table => {
            table.style.display = 'none'
        })
    }

    else if (formPlaces.from.value === '' || formPlaces.to.value === '') {
        alertSubmit.style.display = 'block';
        alertSubmit.textContent = 'Заповніть усі поля'

        allTables.forEach(table => {
            table.style.display = 'none'
        })
    }

    else {
        alertSubmit.style.display = 'none';

        allTables.forEach(table => {
            table.style.display = 'none'
        })


        if (formPlaces.from.value === 'Київ') {

            if (formPlaces.to.value === 'Львів') {
                document.querySelector('.table.kyiv-lviv').style.display = 'table';

                const dateDeps = document.querySelector('.table.kyiv-lviv').querySelectorAll('.table__dep-date')
                const dateArrs = document.querySelector('.table.kyiv-lviv').querySelectorAll('.table__arr-date')

                dateDeps.forEach(span => {
                    span.textContent = day + '.' + month + '.' + year;
                    if (submitString !== undefined) {
                        span.textContent = submitDay + '.' + submitMonth + '.' + submitYear
                    }
                })
                dateArrs.forEach(span => {
                    const spanTr = span.closest('tr')
                    const times = spanTr.querySelector('.table__time').querySelectorAll('span')
                    let depDate = spanTr.querySelector('.table__dep-date').textContent


                    if (Number(times[1].textContent[0] + times[1].textContent[1]) - Number(times[0].textContent[0] + times[0].textContent[1]) < 0) {
                        if (depDate[1] === '9') {
                            span.textContent = (Number(depDate[0]) + 1) + '0' + '.' + depDate[3] + depDate[4] + depDate[5] + depDate[6] + depDate[7] + depDate[8] + depDate[9]
                        }

                        else {
                            span.textContent = depDate[0] + (Number(depDate[1]) + 1) + '.' + depDate[3] + depDate[4] + depDate[5] + depDate[6] + depDate[7] + depDate[8] + depDate[9]
                        }

                        switch (depDate[3] + depDate[4]) {
                            case '04':
                            case '06':
                            case '11':
                                if (span.textContent[0] + span.textContent[1] === '31') {
                                    span.textContent = '0' + '1' + '.' + depDate[3] + (Number(depDate[4]) + 1) + '.' + depDate[6] + depDate[7] + depDate[8] + depDate[9]
                                }
                                break;
                            case '09':
                                if (span.textContent[0] + span.textContent[1] === '31') {
                                    span.textContent = '0' + '1' + '.' + '1' + '0' + '.' + depDate[6] + depDate[7] + depDate[8] + depDate[9]
                                }
                                break;
                            case '02':
                                if (span.textContent[0] + span.textContent[1] === '29') {
                                    span.textContent = '0' + '1' + '.' + depDate[3] + (Number(depDate[4]) + 1) + '.' + depDate[6] + depDate[7] + depDate[8] + depDate[9]
                                }
                                break;
                            default:
                                if (span.textContent[0] + span.textContent[1] === '32') {
                                    span.textContent = '0' + '1' + '.' + depDate[3] + (Number(depDate[4]) + 1) + '.' + depDate[6] + depDate[7] + depDate[8] + depDate[9]
                                    if (span.textContent[3] + span.textContent[4] === '13') {
                                        span.textContent = '0' + '1' + '.' + '0' + '1' + '.' + (Number(depDate[6] + depDate[7] + depDate[8] + depDate[9]) + 1)
                                    }
                                }
                                break;
                        }
                    }

                    else {
                        span.textContent = depDate
                    }
                })


                const tableFreeArray = document.querySelector('.table.kyiv-lviv').querySelectorAll('.table__free')

                tableFreeArray.forEach(td => {
                    td.onmouseover = () => {
                        const closestSpan = td.querySelector('.free__type');

                        closestSpan.style.position = 'absolute';
                        closestSpan.style.backgroundColor = '#eaeef1';

                        switch (closestSpan.textContent) {
                            case 'C1':
                                closestSpan.textContent = 'Сидячий першого класу';
                                closestSpan.style.marginLeft = '-270px';
                                break;
                            case 'C2':
                                closestSpan.textContent = 'Сидячий другого класу';
                                closestSpan.style.marginLeft = '-260px';
                                break;
                            case 'К':
                                closestSpan.textContent = 'Купе';
                                closestSpan.style.marginLeft = '-60px';
                                break;
                            case 'П':
                                closestSpan.textContent = 'Плацкарт';
                                closestSpan.style.marginLeft = '-115px';
                                break;
                            case 'Л':
                                closestSpan.textContent = 'Люкс';
                                closestSpan.style.marginLeft = '-65px';
                                break;
                        }
                    }

                    td.onmouseout = () => {
                        const closestSpan = td.querySelector('.free__type');

                        closestSpan.style.position = '';
                        closestSpan.style.marginLeft = '';
                        closestSpan.style.backgroundColor = '';

                        switch (closestSpan.textContent) {
                            case 'Сидячий першого класу':
                                closestSpan.textContent = 'C1';
                                break;
                            case 'Сидячий другого класу':
                                closestSpan.textContent = 'C2';
                                break;
                            case 'Купе':
                                closestSpan.textContent = 'К';
                                break;
                            case 'Плацкарт':
                                closestSpan.textContent = 'П';
                                break;
                            case 'Люкс':
                                closestSpan.textContent = 'Л';
                                break;
                        }
                    }
                });

                const chooseButtons = document.querySelector('.table.kyiv-lviv').querySelectorAll('.free__button')

                chooseButtons.forEach(button => {
                    const buttonTr = button.closest('tr')
                    const freeSeatCount = Number(buttonTr.querySelector('.free__seats').textContent)
                    const seatType = buttonTr.querySelector('.free__type').textContent

                    button.onclick = () => {
                        document.querySelector('.seats').style.display = 'block'

                        let wagonCount, seatsPerWagon, seats, selectedWagon

                        switch (seatType) {
                            case 'C1':
                                clearSelectWagon()
                                wagonCount = 3;
                                seatsPerWagon = Math.floor(freeSeatCount / wagonCount)
                                for (let i = 1; i <= wagonCount; i++) {
                                    let option = document.createElement('option')
                                    option.textContent = i;
                                    option.value = i;
                                    selectWagon.appendChild(option)
                                }
                                function generateRandomSeats() {
                                    const seats = [];
                                    while (seats.length < seatsPerWagon) {
                                        const randomSeat = Math.floor(Math.random() * 53) + 1;
                                        if (!seats.includes(randomSeat)) {
                                            seats.push(randomSeat);
                                        }
                                    }
                                    return seats;
                                }
                                seats = generateRandomSeats();
                                function updateSeatOptions(wagonCount) {
                                    clearSelectSeat()
                                    seats = generateRandomSeats();
                                    seats.forEach(seat => {
                                        let option = document.createElement('option');
                                        option.textContent = seat;
                                        option.value = seat;
                                        selectSeat.appendChild(option);
                                    });
                                }
                                selectedWagon = parseInt(this.value);
                                updateSeatOptions(selectedWagon);
                                selectWagon.addEventListener('change', function () {
                                    const selectedWagon = parseInt(this.value);
                                    updateSeatOptions(selectedWagon);
                                });
                                break;
                            case 'C2':
                                clearSelectWagon()
                                wagonCount = 2;
                                seatsPerWagon = Math.floor(freeSeatCount / wagonCount)
                                for (let i = 1; i <= wagonCount; i++) {
                                    let option = document.createElement('option')
                                    option.textContent = i;
                                    option.value = i;
                                    selectWagon.appendChild(option)
                                }
                                function generateRandomSeats() {
                                    const seats = [];
                                    while (seats.length < seatsPerWagon) {
                                        const randomSeat = Math.floor(Math.random() * 64) + 1;
                                        if (!seats.includes(randomSeat)) {
                                            seats.push(randomSeat);
                                        }
                                    }
                                    return seats;
                                }
                                seats = generateRandomSeats();
                                function updateSeatOptions(wagonCount) {
                                    clearSelectSeat()
                                    seats = generateRandomSeats();
                                    seats.forEach(seat => {
                                        let option = document.createElement('option');
                                        option.textContent = seat;
                                        option.value = seat;
                                        selectSeat.appendChild(option);
                                    });
                                }
                                selectedWagon = parseInt(this.value);
                                updateSeatOptions(selectedWagon);
                                selectWagon.addEventListener('change', function () {
                                    const selectedWagon = parseInt(this.value);
                                    updateSeatOptions(selectedWagon);
                                });
                                break;
                            case 'П':
                                clearSelectWagon()
                                wagonCount = 4;
                                seatsPerWagon = Math.floor(freeSeatCount / wagonCount)
                                for (let i = 1; i <= wagonCount; i++) {
                                    let option = document.createElement('option')
                                    option.textContent = i;
                                    option.value = i;
                                    selectWagon.appendChild(option)
                                }
                                function generateRandomSeats() {
                                    const seats = [];
                                    while (seats.length < seatsPerWagon) {
                                        const randomSeat = Math.floor(Math.random() * 54) + 1;
                                        if (!seats.includes(randomSeat)) {
                                            seats.push(randomSeat);
                                        }
                                    }
                                    return seats;
                                }
                                seats = generateRandomSeats();
                                function updateSeatOptions(wagonCount) {
                                    clearSelectSeat()
                                    seats = generateRandomSeats();
                                    seats.forEach(seat => {
                                        let option = document.createElement('option');
                                        option.textContent = seat;
                                        option.value = seat;
                                        selectSeat.appendChild(option);
                                    });
                                }
                                selectedWagon = parseInt(this.value);
                                updateSeatOptions(selectedWagon);
                                selectWagon.addEventListener('change', function () {
                                    const selectedWagon = parseInt(this.value);
                                    updateSeatOptions(selectedWagon);
                                });
                                break;
                            case 'К':
                                clearSelectWagon()
                                wagonCount = 5;
                                seatsPerWagon = Math.floor(freeSeatCount / wagonCount)
                                for (let i = 1; i <= wagonCount; i++) {
                                    let option = document.createElement('option')
                                    option.textContent = i;
                                    option.value = i;
                                    selectWagon.appendChild(option)
                                }
                                function generateRandomSeats() {
                                    const seats = [];
                                    while (seats.length < seatsPerWagon) {
                                        const randomSeat = Math.floor(Math.random() * 40) + 1;
                                        if (!seats.includes(randomSeat)) {
                                            seats.push(randomSeat);
                                        }
                                    }
                                    return seats;
                                }
                                seats = generateRandomSeats();
                                function updateSeatOptions(wagonCount) {
                                    clearSelectSeat()
                                    seats = generateRandomSeats();
                                    seats.forEach(seat => {
                                        let option = document.createElement('option');
                                        option.textContent = seat;
                                        option.value = seat;
                                        selectSeat.appendChild(option);
                                    });
                                }
                                selectedWagon = parseInt(this.value);
                                updateSeatOptions(selectedWagon);
                                selectWagon.addEventListener('change', function () {
                                    const selectedWagon = parseInt(this.value);
                                    updateSeatOptions(selectedWagon);
                                });
                                break;
                            case 'Л':
                                clearSelectWagon()
                                wagonCount = 2;
                                seatsPerWagon = Math.floor(freeSeatCount / wagonCount)
                                for (let i = 1; i <= wagonCount; i++) {
                                    let option = document.createElement('option')
                                    option.textContent = i;
                                    option.value = i;
                                    selectWagon.appendChild(option)
                                }
                                function generateRandomSeats() {
                                    const seats = [];
                                    while (seats.length < seatsPerWagon) {
                                        const randomSeat = Math.floor(Math.random() * 20) + 1;
                                        if (!seats.includes(randomSeat)) {
                                            seats.push(randomSeat);
                                        }
                                    }
                                    return seats;
                                }
                                seats = generateRandomSeats();
                                function updateSeatOptions(wagonCount) {
                                    clearSelectSeat()
                                    seats = generateRandomSeats();
                                    seats.forEach(seat => {
                                        let option = document.createElement('option');
                                        option.textContent = seat;
                                        option.value = seat;
                                        selectSeat.appendChild(option);
                                    });
                                }
                                selectedWagon = parseInt(this.value);
                                updateSeatOptions(selectedWagon);
                                selectWagon.addEventListener('change', function () {
                                    const selectedWagon = parseInt(this.value);
                                    updateSeatOptions(selectedWagon);
                                });
                                break;
                        }
                    }
                });
            }

        }
    }
}








