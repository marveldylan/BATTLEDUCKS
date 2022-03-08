// Global Variables
let player1Duck = localStorage.getItem('player1Duck');
let player2Duck = localStorage.getItem('player2Duck');
console.log(player1Duck);
console.log(player2Duck);
let player1Pic;
let player2Pic;
// pass data for profile image

// Class Objects

// Team Check and Initializing Game

if(player1Duck !== null && player2Duck !== null) {
    gameInit();
}

// Functions
function gameInit() {
// Set player profile pictures:
player1Pic = document.getElementById("Player-1-pic-play");
player1Pic.setAttribute('src', `assets/player-pictures/player-1/${player1Duck}.png`)
player2Pic = document.getElementById("Player-2-pic-play");
player2Pic.setAttribute('src', `assets/player-pictures/player-2/${player2Duck}.png`)
// let playerPic = document.getElementById("Player-2-pic");
// playerPic.setAttribute('src', `assets/player-pictures/player-2/${duckImageName}.png`)
// Set score to 0
// Set Rounds to 1
// Look at tic-tac-toe for basics
// Choose Deck based on team
// Randomly deal cards to each player
// Set current player turn
}

// Event Handlers
