var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))

var gameData = {
    gold: 0,
    goldPerClick: 1,
    goldPerClickCost: 10,
    lastTick: Date.now()
}

function update(id, content) {
    document.getElementById(id).innerHTML = content;
}

function mineGold() {
    gameData.gold += gameData.goldPerClick
    update("goldMined", format(gameData.gold))
}

function buyGoldPerClick() {
    if (gameData.gold >= gameData.goldPerClickCost) {
        gameData.gold -= gameData.goldPerClickCost
        gameData.goldPerClick += 1
        gameData.goldPerClickCost *= 2
        update("goldMined", format(gameData.gold))
        update("perClickUpgradeLevel", format(gameData.goldPerClick))
        update("perClickUpgradeCost", format(gameData.goldPerClickCost))
    }
}

var mainGameLoop = window.setInterval(function() {
    diff = Date.now() - gameData.lastTick;
    gameData.lastTick = Date.now()
    gameData.gold += gameData.goldPerClick * (diff / 1000)
    gameData.gold = Math.round(gameData.gold)
    update("goldMined", format(gameData.gold))
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("goldMinerSave", JSON.stringify(gameData))
}, 15000)

function format(number, type = "scientific") {
	let exponent = Math.floor(Math.log10(number))
	let mantissa = number / Math.pow(10, exponent)
	if (exponent < 4) return number.toFixed(1)
	if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent
	if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
}


for(var key in gameData) {
    if (typeof savegame[key] !== 'undefined') gameData[key] = savegame[key]
}

function tab(tab) {
    document.getElementById("mineGoldMenu").style.display = "none"
    document.getElementById("shopMenu").style.display = "none"
    document.getElementById(tab).style.display = "inline-block"
}

tab("mineGoldMenu")
