// Global Variables
const player1 = 'player1' // change to object?
const player2 = 'player2' // change to object?
let gameRound;
let currentPlayer;
let player1Score;
let player2Score;
let gameStatus = false;
let player1Pic;
let player2Pic;

// pass data for deck select and profile image
let player1Duck = localStorage.getItem('player1Duck');
let player2Duck = localStorage.getItem('player2Duck');


// Class Objects

// Team Check and Initializing Game
gameInit();

// Functions
function gameInit() {
    if(player1Duck !== null && player2Duck !== null) {
    gameStatus = true;

    // Set player Scores to 0;
    player1Score = 0;
    player2Score = 0;

    // Set Rounds to 1
    gameRound = 1;

    // Look at tic-tac-toe for basics
    // Choose Deck based on team
    buildP1Deck();
    buildP2Deck();

    // Set current player turn
    coinToss();
    }
};

function coinToss() {
    let headsOrTails = Math.random();
    if (headsOrTails <= 0.5) {
        currentPlayer = player1;
    } else {
        currentPlayer = player2;
    }
    console.log(`${currentPlayer} goes first`);
}

    function buildP1Deck() {
        // Set player profile pictures:
        if(player1Duck === 'Random') {
            let randomSelect = Math.floor(Math.random()*3);
            if(randomSelect === 0) {
                player1Duck = 'GreyDucks';
            } else if (randomSelect === 1) {
                player1Duck = 'Yellers';
            } else if (randomSelect === 2) {
                player1Duck = 'Mallards';
            }
        }
        player1Pic = document.getElementById("Player-1-pic-play");
        player1Pic.setAttribute('src', `assets/player-pictures/player-1/${player1Duck}.png`)
        console.log(player1Duck);
        // Randomly deal cards to each player
    };

    function buildP2Deck() {
         // Set player profile pictures:
         if(player2Duck === 'Random') {
            let randomSelect = Math.floor(Math.random()*3);
            if(randomSelect === 0) {
                player2Duck = 'GreyDucks';
            } else if (randomSelect === 1) {
                player2Duck = 'Yellers';
            } else if (randomSelect === 2) {
                player2Duck = 'Mallards';
            }
        }
        player2Pic = document.getElementById("Player-2-pic-play");
        player2Pic.setAttribute('src', `assets/player-pictures/player-2/${player2Duck}.png`)
       // Randomly deal cards to each player
       console.log(player2Duck);
    };

// Event Handlers
