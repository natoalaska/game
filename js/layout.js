// Create container
$('#game').append('<div class="container" id="mainContainer"></div>');

// Create Row
$('#mainContainer').append('<div class="row" id="mainRow"></div>');

// Create Left Column
$('#mainRow').append('<div class="col-md-3" id="leftCol">Test</div>')

// Create Middle Column
$('#mainRow').append('<div class="col-md-6" id="middleCol"></div>')

// Create Right Column
$('#mainRow').append('<div class="col-md-3" id="rightCol">Test 3</div>')

// Add Gold
$("#middleCol").append(goldDisplay)