var gameData = {
    gold: 0,
    goldPerClick: 1,
    goldPerClickCost: 10,
    lastTick: Date.now()
}

var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null) {
    gameData = savegame
    if (typeof savegame.lastTick !== 'undefined') gameData.lastTick = savegame.lastTick;
}

function mineGold() {
    gameData.gold += gameData.goldPerClick
    document.getElementById("goldMined").innerHTML = gameData.gold
}

function buyGoldPerClick() {
    if (gameData.gold >= gameData.goldPerClickCost) {
        gameData.gold -= gameData.goldPerClickCost
        gameData.goldPerClick += 1
        gameData.goldPerClickCost *= 2
        document.getElementById("goldMined").innerHTML = gameData.gold
        document.getElementById("perClickUpgradeLevel").innerHTML = gameData.goldPerClick
        document.getElementById("perClickUpgradeCost").innerHTML = gameData.goldPerClickCost
    }
}

var mainGameLoop = window.setInterval(function() {
    diff = Date.now() - gameData.lastTick;
    gameData.lastTick = Date.now()
    gameData.gold += gameData.goldPerClick * (diff / 1000)
    document.getElementById("goldMined").innerHTML = gameData.gold
    //mineGold()
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("goldMinerSave", JSON.stringify(gameData))
}, 15000)
