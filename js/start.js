var gameLoop = window.setInterval(function() {
    diff = Date.now() - gameData.lastTick;
    gameData.lastTick = Date.now()
    gameData.gold += Math.round(gameData.goldPerClick * (diff / 1000))
    updateDisplay()
}, 1000)

var updateDisplay = function() {
    update("goldMined", format(gameData.gold))
    update("perClickUpgradeLevel", format(gameData.goldPerClick))
    update("perClickUpgradeCost", format(gameData.goldPerClickCost))
}