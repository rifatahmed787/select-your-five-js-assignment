
function display(players) {
    // console.log(players)
    const tableBody = document.getElementById('player-name');
    for (let i = 0; i < players.length; i++) {
        // console.log(playerNameArray[i])
        const name = playerNameArray[i];

        const tr = document.createElement('tr');
        tr.innerHTML = `
        
        `
        tableBody.appendChild(tr);
    }
}



playerNameArray = [];
function addPlayers(element) {

    const playerName = element.parentNode.children[0].innerText;
    // console.log(playerName)
    // const playerObj = {
    //     playerName: playerName
    // }
    // console.log(playerObj)
    playerNameArray.push(playerName);
    // console.log(playerNameArray)
    // console.log(playerNameArray.length)
    document.getElementById('total-added-players').innerText = playerNameArray.length;
    display(playerNameArray);
}