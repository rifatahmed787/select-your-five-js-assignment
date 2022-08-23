//player expences function
function display(players) {
    const tableBody = document.getElementById('player-name');
    tableBody.innerHTML = '';
    document.getElementById('cal-btn').addEventListener('click', function () {
        const playerPrice = document.getElementById('player-price');
        const playerTotalCost = playerPrice.value;
        const subtotal = players.length * playerTotalCost;
        const playerExpence = document.getElementById('player-expence');
        const playerTotalExpence = playerExpence.innerText;
        playerExpence.innerText = subtotal;
        return subtotal;
    })

    //Error handling and creating html tag 
    for (let i = 0; i < players.length; i++) {
        if (players.length >= 5) {
            alert('Select only five');
            return;


        }
        else {
            const name = playerNameArray[i];
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <th>${i + 1}.</th>
            <td>${name}</td>
            `;

            tableBody.appendChild(tr);
        }
    }
}

//estimating total cost
document.getElementById('btn-cal-total').addEventListener('click', function () {

    const manager = document.getElementById('manager-cost');
    const managerCostString = manager.value;
    const managerCost = parseInt(managerCostString);
    const coach = document.getElementById('coach-cost');
    const coachCostString = coach.value;
    const coachCost = parseInt(coachCostString);
    const playerExpence = document.getElementById('player-expence');
    const playerTotalExpence = parseInt(playerExpence.innerText);
    const overallCost = playerTotalExpence + managerCost + coachCost;
    const total = document.getElementById('overall-total');
    const overallTotal = total.innerText;
    total.innerText = overallCost;

})


//getting player name from html
playerNameArray = [];
function addPlayers(element) {
    const playerName = element.parentNode.children[0].innerText;
    playerNameArray.push(playerName);
    document.getElementById('total-added-players').innerText = playerNameArray.length;
    display(playerNameArray);
    element.disabled = true;
}