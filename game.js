// Global Variables
let gameRound;
let currentPlayer;
let gameStatus = false;

// Player Objects
const player1 = {
    name: 'Player-1',
    // pass data for deck select and profile image
    duck: localStorage.getItem('player1Duck'),
    stack: [],
    deck: [],
    hand: []
}

const player2 = {
    name: 'Player-2',
    // pass data for deck select and profile image
    duck: localStorage.getItem('player2Duck'),
    stack: [],
    deck: [],
    hand: []
}

// Arrays of Card Objects

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

let duckStacks = {
    greyDucks: greyDucks, 
    mallards: mallards , 
    yellers: yellers
};

// Team Check and Initializing Game
gameInit();

// Functions

// Initialize game. Sets score and round, calls functions to build player profiles and choose which player goes first
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
    buildProfile(player1);
    buildProfile(player2);

    // Set current player turn
    coinToss();
    }
};

// Function to choose which player goes first
function coinToss() {
    let headsOrTails = Math.random();
    if (headsOrTails <= 0.5) {
        currentPlayer = player1;
    } else {
        currentPlayer = player2;
    }
    console.log(`${currentPlayer.name}: ${currentPlayer.duck} go first`);
}

// Function to build player profiles. Player object is passed through to build deck and render hand.
function buildProfile(player) {
        // Set player profile pictures:
        if(player.duck === 'Random') {
        let randomSelect = Math.floor(Math.random()*3);
        if(randomSelect === 0) {
            player.duck = 'greyDucks';
        } else if (randomSelect === 1) {
            player.duck = 'yellers';
        } else if (randomSelect === 2) {
            player.duck = 'mallards';
        }
    }
   

    player.picture = document.getElementById(`${player.name}-pic-play`);
    player.picture.setAttribute('src', `assets/player-pictures/${player.name}/${player.duck}.png`)
    // Randomly deal cards to each player
    
    buildDeck(player);
    renderHand(player);
};

// Builds deck and hand for player 2 upon gameInit() -> buildP2Profile()
function buildDeck(player) {
    // Direction for choosing deck from duckStacks array with for(let[key, value] of Object.entries(object) taken from https://stackoverflow.com/questions/57928690/how-to-display-value-if-key-is-equal-to-variable
    for (let [key, value] of Object.entries(duckStacks)) {
        if (key === player.duck) {
            player.stack = value;
            console.log(player.stack);
        }
    }
    // build the player hand
    for (let i = 0; i < 5; i++){
        //randomly push a value from the selected deck into player 'hand' until 16 cards are held
        let randomSelect = Math.floor(Math.random()*player.stack.length);
        player.hand.push(player.stack[randomSelect]);
    }
    //build the rest of the player deck
    for (let i = 0; i < 11; i++){
        //randomly push a value from the selected deck into player 'hand' until 16 cards are held
        let randomSelect = Math.floor(Math.random()*player.stack.length);
        player.deck.push(player.stack[randomSelect]);
    }
    console.log(player.stack);
    console.log(player.deck);
    console.log(player.hand);
};

// Function that Renders player hands


// Event Handlers
