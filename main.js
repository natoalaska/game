var gameData = {
    gold: 0,
    goldPerClick: 1,
    goldPerClickCost: 10
}

var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null) {
    gameData = savegame
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
    mineGold()
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("goldMinerSave", JSON.stringify(gameData))
}, 15000)