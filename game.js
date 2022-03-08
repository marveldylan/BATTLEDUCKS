// Global Variables
let gameRound;
let currentPlayer;
let gameStatus = false;

// Player Objects
const player1 = {
    name: 'Player 1',
    // pass data for deck select and profile image
    duck: localStorage.getItem('player1Duck'),
    deck: []
}

const player2 = {
    name: 'Player 2',
    // pass data for deck select and profile image
    duck: localStorage.getItem('player2Duck'),
    deck: []
}

// Card Arrays of Objects

// GreyDuck Cards
let greyDucks =[
    {
    name: 'angryGreyDuck',
    quacks: 5,
    imageLink: `assets/cards/GreyDucks/${this.name}.png`
},
{
    name: 'suspiciousGreyDuck',
    quacks: 2,
    imageLink: `assets/cards/GreyDucks/${this.name}.png`
}];

// Mallard Cards
let mallards = [ 
    {
    name: 'angryMallard',
    quacks: 5,
    imageLink: `assets/cards/Mallards/${this.name}.png`
},
{
    name: 'suspiciousMallard',
    quacks: 2,
    imageLink: `assets/cards/Mallards/${this.name}.png`
}];

// Yeller Cards

let yellers = [
    {
    name: 'angryYeller',
    quacks: 5,
    imageLink: `assets/cards/Yeller/${this.name}.png`
},
{
    name: 'suspiciousYeller',
    quacks: 2,
    imageLink: `assets/cards/Yeller/${this.name}.png`
}];

// Deck Arrays

let duckDecks = [greyDucks, mallards, yellers];

// Team Check and Initializing Game
gameInit();

// Functions
function gameInit() {
    if(player1.duck !== null && player2.duck !== null) {
    gameStatus = true;

    // Set player Scores to 0;
    player1.score = 0;
    player2.score = 0;

    // Set Rounds to 1
    gameRound = 1;

    // Look at tic-tac-toe for basics
    // Choose Deck based on team
    buildP1Profile();
    buildP2Profile();

    // Set current player turn
    coinToss();
    }
    console.log(`Player 1 Score: ${player1.score}`);
    console.log(`Player 2 Score: ${player2.score}`);
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

    function buildP1Profile() {
        // Set player profile pictures:
        if(player1.duck === 'Random') {
            let randomSelect = Math.floor(Math.random()*3);
            if(randomSelect === 0) {
                player1.duck = 'greyDucks';
            } else if (randomSelect === 1) {
                player1.duck = 'yellers';
            } else if (randomSelect === 2) {
                player1.duck = 'mallards';
            }
        }
        player1.picture = document.getElementById("Player-1-pic-play");
        player1.picture.setAttribute('src', `assets/player-pictures/player-1/${player1.duck}.png`)
        console.log(player1.duck);
        // Randomly deal cards to each player
        buildP1Deck();
    };

    function buildP2Profile() {
         // Set player profile pictures:
         if(player2.duck === 'Random') {
            let randomSelect = Math.floor(Math.random()*3);
            if(randomSelect === 0) {
                player2.duck = 'greyDucks';
            } else if (randomSelect === 1) {
                player2.duck = 'yellers';
            } else if (randomSelect === 2) {
                player2.duck = 'mallards';
            }
        }
        player2.picture = document.getElementById("Player-2-pic-play");
        player2.picture.setAttribute('src', `assets/player-pictures/player-2/${player2.duck}.png`)
       // Randomly deal cards to each player
       console.log(player2.duck);
       buildP2Deck();
    };

    function buildP1Deck() {
        for(let i = 0; i < duckDecks.length; i++) {
            if(duckDecks[i] === player1.duck) {
                player1.deck = duckDecks[i]; 
            }
        }
        console.log('Player1 Deck Built')
    };

    function buildP2Deck() {
        console.log('Player2 Deck Built')
    };

// Event Handlers
