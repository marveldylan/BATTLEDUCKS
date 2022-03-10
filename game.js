// Global Variables
let currentPlayer;
let hand;
let cardElement;
let cardImage;
let gameTurn;
let gameStatus = false;
let cardAttack;
let cardDefense;


let t0 = document.getElementById('t0');
let t1 = document.getElementById('t1');
let t2 = document.getElementById('t2');
let t3 = document.getElementById('t3');
let t4 = document.getElementById('t4');
let t5 = document.getElementById('t5');
let t6 = document.getElementById('t6');
let t7 = document.getElementById('t7');
let t8 = document.getElementById('t8');
let t9 = document.getElementById('t9');
let t10 = document.getElementById('t10');
let t11 = document.getElementById('t11');
let t12 = document.getElementById('t12');
let t13 = document.getElementById('t13');
let t14 = document.getElementById('Tt14');
let t15 = document.getElementById('t15');
let t16 = document.getElementById('t16');
let t17 = document.getElementById('t17');
let t18 = document.getElementById('t18');
let t19 = document.getElementById('t19');

const gameBoard =[];


// Player Objects
const player1 = {
    name: 'Player-1',
    class: '1',
    attack: 0,
    defense: 0,
    score: 0,
    // pass data for deck select and profile image
    faction: localStorage.getItem('player1Duck'),
    stack: [],
    hand: [],
    cardId: 0
}

const player2 = {
    name: 'Player-2',
    class: '2',
    attack: 0,
    defense: 0,
    score: 0,
    // pass data for deck select and profile image
    faction: localStorage.getItem('player2Duck'),
    stack: [],
    hand: [],
    cardId: 0
}

// Global Card Arrays and Objects

class Deck {
    constructor(player, faction, number, types) {
        this.player = player;
        this.faction = faction;
        this.number = number;
        this.types = types
        this.deck = [];
        
    }

    createDeck() {
        for(let i = 0; i < this.types.length; i++) {
            let cardType = this.types[i];
            this.deck.push(cardType);
            // for(let i = 0; i < cardType.count; i++) {
            //     // cardType.id = `${playerClass}-${playerCardId}`;
            //     this.deck.push(cardType);
            //     // playerCardId++;
            //     // console.log(`card Type id: ${cardType.id}`);
            //     // console.log(`player class: ${playerClass}`);
            //     // console.log(`playerCardID#(should iterate): ${playerCardId}`);
            // }
        }
    }
}

class CardType {
    constructor(faction, name, attack, defense, id) {
        this.faction = faction;
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.imageLink = `assets/cards/${faction}/${name}.png`;
        this.id = id;
    }
}

// GreyDuck Cards
let greyDucks0 = new CardType ('greyDucks', 'angryGreyDuck', 5, 1, 0);
let greyDucks1 = new CardType ('greyDucks', 'suspiciousGreyDuck', 3, 2, 1);
let greyDucks2 = new CardType ('greyDucks', 'angryGreyDuck', 5, 1, 2);
let greyDucks3 = new CardType ('greyDucks', 'suspiciousGreyDuck', 3, 2, 3);
let greyDucks4 = new CardType ('greyDucks', 'angryGreyDuck', 5, 1, 4);
let greyDucks5 = new CardType ('greyDucks', 'suspiciousGreyDuck', 3, 2, 5);
let greyDucks6 = new CardType ('greyDucks', 'angryGreyDuck', 5, 1, 6);
let greyDucks7 = new CardType ('greyDucks', 'suspiciousGreyDuck', 3, 2, 7);
let greyDucksTypes = [greyDucks0, greyDucks1, greyDucks2, greyDucks3, greyDucks4, greyDucks5, greyDucks6, greyDucks7];

// Mallard Cards
let mallards0 = new CardType ('mallards', 'angryMallard', 5, 1, 0);
let mallards1 = new CardType ('mallards', 'suspiciousMallard', 3, 2, 1);
let mallards2 = new CardType ('mallards', 'angryMallard', 5, 1, 2);
let mallards3 = new CardType ('mallards', 'suspiciousMallard', 3, 2, 3);
let mallards4 = new CardType ('mallards', 'angryMallard', 5, 1, 4);
let mallards5 = new CardType ('mallards', 'suspiciousMallard', 3, 2, 5);
let mallards6 = new CardType ('mallards', 'angryMallard', 5, 1, 6);
let mallards7 = new CardType ('mallards', 'suspiciousMallard', 3, 2, 7);
let mallardsTypes = [mallards0, mallards1, mallards2, mallards3,mallards4, mallards5, mallards6, mallards7];

// Yeller Cards
let yellers0 = new CardType ('yellers', 'angryYeller', 5, 1, 0);
let yellers1 = new CardType ('yellers', 'suspiciousYeller', 3, 2, 1);
let yellers2 = new CardType ('yellers', 'angryYeller', 5, 1, 2);
let yellers3 = new CardType ('yellers', 'suspiciousYeller', 3, 2, 3);
let yellers4 = new CardType ('yellers', 'angryYeller', 5, 1, 4);
let yellers5 = new CardType ('yellers', 'suspiciousYeller', 3, 2, 5);
let yellers6 = new CardType ('yellers', 'angryYeller', 5, 1, 6);
let yellers7 = new CardType ('yellers', 'suspiciousYeller', 3, 2, 7);
let yellersTypes = [yellers0, yellers1, yellers2, yellers3, yellers4,  yellers5, yellers6, yellers7];

// All Types Objects:
let duckStacks = {
    greyDucks: greyDucksTypes,
    mallards: mallardsTypes,
    yellers: yellersTypes
}

// Team Check and Initializing Game
gameInit();


// Initialize game. Sets score and round, calls functions to build player profiles and choose which player goes first
function gameInit() {
    if(player1.faction !== null && player2.faction !== null) {
    gameStatus = true;
    // Set Game Turn
    gameTurn = 0;
    // Initialize gameboard
    gameBoardInit();

    // Choose Deck based on team
    buildProfile(player1);
    buildProfile(player2);

    // Set current player turn
    coinToss();

    // Begin current player turn
    startTurn(currentPlayer);
    };

};

// Function to initialize gameboard
function gameBoardInit() {
    document.querySelector('.invisible-hand-1').style.opacity = "0";  
    document.querySelector('.invisible-hand-2').style.opacity = "0";
    document.getElementById(`${player1.name}-hand`).disabled = true;
    document.getElementById(`${player1.name}-draw`).disabled = true;
    document.getElementById(`${player2.name}-hand`).disabled = true;
    document.getElementById(`${player2.name}-draw`).disabled = true;

    for(let i = 0; i < 20; i++) {
        gameBoard.push(`t${i}`)
    }
    return gameBoard;
}

// Function to choose which player goes first
function coinToss() {
    let headsOrTails = Math.random();
    if (headsOrTails <= 0.5) {
        currentPlayer = player1;
    } else {
        currentPlayer = player2;
    }

    document.getElementById('Game-round').innerText = `${currentPlayer.name}: ${currentPlayer.faction} go first`;
}

// Function to build player profiles. Player object is passed through to build deck and render hand.
function buildProfile(player) {
        // Set player profile pictures:
        if(player.faction === 'Random') {
        let randomSelect = Math.floor(Math.random()*3);
        if(randomSelect === 0) {
            player.faction = 'greyDucks';
        } else if (randomSelect === 1) {
            player.faction = 'yellers';
        } else if (randomSelect === 2) {
            player.faction = 'mallards';
        }
    }
   

    player.picture = document.getElementById(`${player.name}-pic-play`);
    player.picture.setAttribute('src', `assets/player-pictures/${player.name}/${player.faction}.png`)
    // Randomly deal cards to each player
    
    buildDeck(player);
    renderHand(player);
};

// Builds deck and hand for player 2 upon gameInit() -> buildP2Profile()

function buildDeck(player) {
    for (let [key, value] of Object.entries(duckStacks)) {
        if (key === player.faction) {
            player.stack = value;
        }
    }
    let playerDeck = new Deck(player.name, player.faction, 8, player.stack);
    playerDeck.createDeck();
    player.deck = playerDeck.deck;
    
    // shuffle deck: Direction taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    // Durstenfeld shuffle
    for (let i = player.deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i +1))
        let temporaryLocation = player.deck[i];
        player.deck[i] = player.deck[j];
        player.deck[j] = temporaryLocation;
    }
    
    // Add first 4 cards from deck to player hand:
    for (let i = 0; i < 4; i++){
        player.hand.push(player.deck[i])
        player.deck.splice(i, 1)
    }
     
};


// Function that Renders player hands
// Inspiration for renderHand taken from my solution to TMDP_API Lab
function renderHand(player) {
    hand = player.hand;
    
    for(let i = 0; i < hand.length; i++) {
        cardElement = document.createElement('div');
        // cardImage = document.createElement('div');
        // attack = document.createElement('button');
        // cardElement.innerHTML = `${hand[i].name}, ATK: ${hand[i].attack}, DEF: ${hand[i].defense}`;
        cardElement.classList.add(`card-element`);
        cardElement.classList.add(`card-element-${i}`);
        cardElement.innerHTML = `<div  data-attack='${hand[i].attack}' data-defense = '${hand[i].defense}' ><img class='card-image' src=${hand[i].imageLink}></div>`;
        // attack.innerHTML = 'attack';
        document.querySelector(`.${player.name}-view`).appendChild(cardElement);
        // cardElement.appendChild(cardImage);
        // cardElement.style.backgroundImage = `url(${hand[i].imageLink})`;
        // cardElement.appendChild(playCard);
        cardElement.setAttribute("id", `${player.name}-card-element-${i}`);
        cardElement.setAttribute("draggable", "true");
        cardElement.setAttribute("ondragstart", "dragCard(event)");
        // cardElement.setAttribute('attack', `${hand[i].attack}`);
        // cardElement.setAttribute('defense', `${hand[i].defense}`);
    }

};

// function renderHand2(player, num) {
//     hand = player.hand;
//     for(let i = 0; i < num; i++) {
//         cardElement = document.createElement('div');
//         attack = document.createElement('button');
//         cardElement.classList.add(`card-element`);
//         cardElement.setAttribute('attack', `${hand[i].attack}`);
//         cardElement.setAttribute('defense', `${hand[i].defense}`);

//     }
// }

// Function for player move:

function startTurn(player) {
    if (gameStatus === true) {
        // console.log(player.name);
        // console.log(player.class);
        document.getElementById(`${player.name}-hand`).disabled = false;
        document.getElementById(`${player.name}-draw`).disabled = false;
        document.getElementById(`${player.name}-hand`).classList.toggle('invisible-hand');
        document.getElementById(`${player.name}-draw`).classList.toggle('invisible-hand');
    }
};
 

// Function to end turn, save changes to board:
function endTurn() {
    document.getElementById(`${currentPlayer.name}-hand`).disabled = true;
    document.getElementById(`${currentPlayer.name}-draw`).disabled = true;
    document.getElementById(`${currentPlayer.name}-hand`).classList.toggle('invisible-hand');
    document.getElementById(`${currentPlayer.name}-draw`).classList.toggle('invisible-hand');

    if(document.getElementById(`${currentPlayer.name}-view`).classList.contains(`invisible-hand-${currentPlayer.class}`) !== true) {
        document.querySelector(`.${currentPlayer.name}-view`).classList.toggle(`invisible-hand-${currentPlayer.class}`);
        document.querySelector(`.invisible-hand-${currentPlayer.class}`).style.opacity = "0";
    }

    gameTurn++;

    changePlayer();

}
// Function to change currentPlayer after every move:
function changePlayer () {
    if(gameTurn < 20) {
        // switch current player
        if (currentPlayer === player1) {
            currentPlayer = player2;
        } else if (currentPlayer === player2) {
            currentPlayer = player1;
        }
        // display on board

        document.getElementById('Game-round').innerText = `${currentPlayer.name}: ${currentPlayer.faction}' Turn`;
        // start turn for next player
        startTurn(currentPlayer);
    } else {
        checkWinner();
    }
}

// Function to check winner:
function checkWinner() {
    player1.score = player1.attack - player2.defense;
    player2.score = player2.attack - player1.defense;

    if(player1.score > player2.score){
        document.getElementById('Game-round').innerText = `PLAYER 1 SCORE: ${player1.score} PLAYER 2 SCORE: ${player2.score}. PLAYER 1: ${player1.faction} WINS!!`
    } else if (player2.score > player1.score) {
        document.getElementById('Game-round').innerText = `PLAYER 1 SCORE: ${player1.score} PLAYER 2 SCORE: ${player2.score}. PLAYER 2: ${player2.faction} WINS!!`
    } else if (player1.score === player2.score) {
        document.getElementById('Game-round').innerText = `PLAYER 1 SCORE: ${player1.score} PLAYER 2 SCORE: ${player2.score}. IT'S A DRAW!!`
    }
}

// Direction for dragging cards to grid from https://medium.com/@tatismolin/how-to-implement-drag-and-drop-functionality-using-vanilla-javascript-9ddfe2402695
// Function for transferring dragged card data:
function dragCard(cardElement) {
    cardElement.dataTransfer.setData("text", cardElement.target.id);
    cardAttack = cardElement.target.firstElementChild.dataset.attack;
    cardDefense = cardElement.target.firstElementChild.dataset.defense;
}
// cardElement.target.id
// Function for card dragover game board tiles
function dragOverCard(cardElement) {
    cardElement.preventDefault();
}

// Function for card drop to game board tile
function dropCard(cardElement) {
    // Add attributes to make cards draggable
    cardElement.preventDefault();
    if(cardElement.target.classList.contains(`${currentPlayer.name}-tile`) === true){
        let data = cardElement.dataTransfer.getData("text");
        cardElement.target.appendChild(document.getElementById(data));
        cardElement.dataTransfer.clearData();
        cardId = cardElement.srcElement.firstElementChild.id;
        console.log(`card id is: ${cardId}`);
 

        // remove card from player hand
        for(let i = 0; i < 6; i++) {
            if (cardId ===`${currentPlayer.name}-card-element-${i}`) {
                currentPlayer.hand.splice(i, 1, 'empty');
                console.log(currentPlayer.hand);
            } else {
                // console.log(`Can't get card id`);
            }
        }
                
        // update game board
        let cardTile = cardElement.target.id;
        let cardData = cardElement.target.firstElementChild.innerHTML;

        console.log(`Card Attack is ${cardAttack}`);
        console.log(`Card Defense is ${cardDefense}`);

        for(let i = 0; i < 20; i++){
            if(cardTile === gameBoard[i]) {
                gameBoard[i] = cardData;
            }
        }
        console.log(gameBoard);

        // Add attack and defense to current player to calculate current score:
        if( document.getElementById(cardTile).classList.contains('atk-tile') === true) {
            currentPlayer.attack += parseInt(cardAttack);
            document.querySelector(`.${currentPlayer.name}-attack`).innerText = `ATTACK: ${currentPlayer.attack}`;
        } else if ( document.getElementById(cardTile).classList.contains('def-tile') === true) {
            currentPlayer.defense += parseInt(cardDefense);
            document.querySelector(`.${currentPlayer.name}-defense`).innerText = `DEFENSE: ${currentPlayer.defense}`;
        } else {
            console.log('we have a problem');
        }
        console.log(cardTile);
        console.log(cardData);
        console.log(currentPlayer.name)
        console.log(currentPlayer.defense);
 
        endTurn();
    }
}


// Event Handlers
//inspiration for hover taken from DOTS lab level winner opacity change, but with added toggle to play
document.getElementById('Player-1-hand').addEventListener('mouseover', () => {
    if(document.getElementById('Player-1-view').classList.contains('invisible-hand-1') === true) {
        document.querySelector('.invisible-hand-1').style.opacity = "1.0";
    }
});
document.getElementById('Player-1-hand').addEventListener('mouseout', () => {
    if(document.getElementById('Player-1-view').classList.contains('invisible-hand-1') === true) {
        document.querySelector('.invisible-hand-1').style.opacity = "0";
    } 
});
document.getElementById('Player-1-hand').addEventListener('click', () => {
    if(document.getElementById('Player-1-view').classList.contains('invisible-hand-1') === true) {
        document.querySelector('.Player-1-view').classList.toggle('invisible-hand-1');
    }
});
document.getElementById('Player-2-hand').addEventListener('mouseover', () => {
    if(document.getElementById('Player-2-view').classList.contains('invisible-hand-2') === true) {
        document.querySelector('.invisible-hand-2').style.opacity = "1.0";
    }
});
document.getElementById('Player-2-hand').addEventListener('mouseout', () => {
    if(document.getElementById('Player-2-view').classList.contains('invisible-hand-2') === true) {
        document.querySelector('.invisible-hand-2').style.opacity = "0";
    }
});
document.getElementById('Player-2-hand').addEventListener('click', () => {
    if(document.getElementById('Player-2-view').classList.contains('invisible-hand-2') === true) {
        document.querySelector('.Player-2-view').classList.toggle('invisible-hand-2');
    }
});
document.getElementById('Player-1-draw').addEventListener('click', ()=> {
    // Direction to use Objects.keys length taken from https://stackoverflow.com/questions/31065075/array-length-gives-incorrect-length
    for(let i = 0; i < Object.keys(player1.hand).length; i++) {
        if(player1.hand[i] === "empty") {
            // push card from deck to hand
            player1.hand.splice(i, 1, player1.deck[0]);
            player1.deck.splice(0, 1);

            // render card on gameboard:
            cardElement = document.createElement('div');
            cardElement.classList.add(`card-element`);
            cardElement.classList.add(`card-element-${i}`);
            cardElement.innerHTML = `<div data-attack='${player1.hand[i].attack}' data-defense = '${player1.hand[i].defense}' ><img class='card-image' src=${player1.hand[i].imageLink}></div>`;
            document.querySelector(`.${player1.name}-view`).appendChild(cardElement);
            cardElement.setAttribute("id", `${player1.name}-card-element-${i}`);
            cardElement.setAttribute("draggable", "true");
            cardElement.setAttribute("ondragstart", "dragCard(event)");
            cardElement.setAttribute('attack', `${player1.hand[i].attack}`);
            cardElement.setAttribute('defense', `${player1.hand[i].defense}`);
            endTurn();
        }
    }
});
document.getElementById('Player-2-draw').addEventListener('click', ()=> {
    // Direction to use Objects.keys length taken from https://stackoverflow.com/questions/31065075/array-length-gives-incorrect-length
    for(let i = 0; i < Object.keys(player2.hand).length; i++) {
        if(player2.hand[i] === "empty") {
            // push card from deck to hand
            player2.hand.splice(i, 1, player2.deck[0]);
            player2.deck.splice(0, 1);

            // render card on gameboard:
            cardElement = document.createElement('div');
            cardElement.classList.add(`card-element`);
            cardElement.classList.add(`card-element-${i}`);
            cardElement.innerHTML = `<div  data-attack='${player2.hand[i].attack}' data-defense = '${player2.hand[i].defense}' ><img class='card-image' src=${player2.hand[i].imageLink}></div>`;
            document.querySelector(`.${player2.name}-view`).appendChild(cardElement);
            cardElement.setAttribute("id", `${player2.name}-card-element-${i}`);
            cardElement.setAttribute("draggable", "true");
            cardElement.setAttribute("ondragstart", "dragCard(event)");
            // cardElement.setAttribute('attack', `${player2.hand[i].attack}`);
            // cardElement.setAttribute('defense', `${player2.hand[i].defense}`);
            endTurn();
        }
    }
});
