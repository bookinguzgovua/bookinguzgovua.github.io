let localMemory = localStorage.getItem('uz-tickets');
localMemory = JSON.parse(localMemory);
console.log(localMemory)

const table = document.querySelector('table')

if (localMemory !== null) {
    for (let i = 0; i < localMemory.length; i++) {
        const tr = document.createElement('tr')

        const tdTrainNumber = document.createElement('td')
        tdTrainNumber.textContent = localMemory[i].train;

        const tdRoute = document.createElement('td')
        tdRoute.textContent = localMemory[i].route

        const tdDate = document.createElement('td')
        tdDate.textContent = localMemory[i].date

        const tdTimeDep = document.createElement('td')
        tdTimeDep.textContent = localMemory[i].timeDep

        const tdTimeArr = document.createElement('td')
        tdTimeArr.textContent = localMemory[i].timeArr

        const tdWagon = document.createElement('td')
        tdWagon.textContent = localMemory[i].wagon

        const tdSeat = document.createElement('td')
        tdSeat.textContent = localMemory[i].seat

        const tdCost = document.createElement('td')
        tdCost.textContent = localMemory[i].cost

        tr.appendChild(tdTrainNumber)
        tr.appendChild(tdRoute)
        tr.appendChild(tdDate)
        tr.appendChild(tdTimeDep)
        tr.appendChild(tdTimeArr)
        tr.appendChild(tdWagon)
        tr.appendChild(tdSeat)
        tr.appendChild(tdCost)

        table.appendChild(tr);
    }
}

