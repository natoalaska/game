// Gets Local Storage item and stores in 'savegame'
var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))

// Saves game every 15 seconds
var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("goldMinerSave", JSON.stringify(gameData))
}, 1000)

// Loop through gameData and updates with savegame data
for(var key in gameData) {
    if (typeof savegame[key] !== 'undefined') gameData[key] = savegame[key]
}