// Global Variables
let gameRound;
let currentPlayer;
// let player1Score;
// let player2Score;
let gameStatus = false;

// pass data for deck select and profile image
// let player1Duck = localStorage.getItem('player1Duck');
// let player2Duck = localStorage.getItem('player2Duck');


// Player Objects
const player1 = {
    name: 'Player 1',
    score: 0,
    // pass data for deck select and profile image
    duck: localStorage.getItem('player1Duck')
}

const player2 = {
    name: 'Player 2',
    score: 0,
    // pass data for deck select and profile image
    duck: localStorage.getItem('player2Duck')
}

// Class Objects

// Team Check and Initializing Game
gameInit();

// Functions
function gameInit() {
    if(player1.duck !== null && player2.duck !== null) {
    gameStatus = true;

    // Set player Scores to 0;
    // player1Score = 0;
    // player2Score = 0;

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
    console.log(`${currentPlayer.name}: ${currentPlayer.duck} go first`);
}

    function buildP1Deck() {
        // Set player profile pictures:
        if(player1.duck === 'Random') {
            let randomSelect = Math.floor(Math.random()*3);
            if(randomSelect === 0) {
                player1.duck = 'GreyDucks';
            } else if (randomSelect === 1) {
                player1.duck = 'Yellers';
            } else if (randomSelect === 2) {
                player1.duck = 'Mallards';
            }
        }
        player1.picture = document.getElementById("Player-1-pic-play");
        player1.picture.setAttribute('src', `assets/player-pictures/player-1/${player1.duck}.png`)
        console.log(player1.duck);
        // Randomly deal cards to each player
    };

    function buildP2Deck() {
         // Set player profile pictures:
         if(player2.duck === 'Random') {
            let randomSelect = Math.floor(Math.random()*3);
            if(randomSelect === 0) {
                player2.duck = 'GreyDucks';
            } else if (randomSelect === 1) {
                player2.duck = 'Yellers';
            } else if (randomSelect === 2) {
                player2.duck = 'Mallards';
            }
        }
        player2.picture = document.getElementById("Player-2-pic-play");
        player2.picture.setAttribute('src', `assets/player-pictures/player-2/${player2.duck}.png`)
       // Randomly deal cards to each player
       console.log(player2.duck);
    };

// Event Handlers
