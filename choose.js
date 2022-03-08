console.log('linked to play');
// JS for choose-deck.html

// Global Variables
let player1Duck;
let player2Duck;
// Functions

// Direction for changing p1 and p2 images (function changeP1Image, changeP2Image) taken from https://stackoverflow.com/questions/27722485/change-a-image-when-list-box-selected-item-is-changed

function changeP1Image() {
    let duckList = document.getElementById('Player-1-choice');
    let idx = duckList.selectedIndex;
    let duckImageName = duckList[idx].value;
    let playerPic = document.getElementById("Player-1-pic");
    playerPic.setAttribute('src', `assets/player-pictures/player-1/${duckImageName}.png`)

}

function changeP2Image() {
    let duckList = document.getElementById('Player-2-choice');
    let idx = duckList.selectedIndex;
    let duckImageName = duckList[idx].value;
    let playerPic = document.getElementById("Player-2-pic");
    playerPic.setAttribute('src', `assets/player-pictures/player-2/${duckImageName}.png`)
}

function readyUpP1() {
    let duckList = document.getElementById('Player-1-choice');
    let idx = duckList.selectedIndex;
    let duckName = duckList[idx].value;
    player1Duck = duckName;
    document.getElementById('P1-display').innerText = `Player 1 Chooses: ${player1Duck}`;
}

function readyUpP2() {
    let duckList = document.getElementById('Player-2-choice');
    let idx = duckList.selectedIndex;
    let duckName = duckList[idx].value;
    player2Duck = duckName;
    document.getElementById('P2-display').innerText = `Player 2 Chooses: ${player2Duck}`;
}

function gameInit() {
    location.href = "play.html";
}

// Event Listeners
document.getElementById('Player-1-choice').addEventListener('change', changeP1Image);
document.getElementById('Player-2-choice').addEventListener('change', changeP2Image);
document.getElementById('Ready-p1').addEventListener('click', readyUpP1);
document.getElementById('Ready-p2').addEventListener('click', readyUpP2);
document.getElementById('Start-game').addEventListener('click', gameInit);

// JS for play.thml

// Global Variables

// Functions

// Event Listeners
