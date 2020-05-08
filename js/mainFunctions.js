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


function tab(tab) {
    document.getElementById("mineGoldMenu").style.display = "none"
    document.getElementById("shopMenu").style.display = "none"
    document.getElementById(tab).style.display = "inline-block"
}

tab("mineGoldMenu")
