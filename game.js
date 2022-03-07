console.log('linked to play');
// JS for choose-deck.html

// Global Variables

// Functions

// Direction for changing p1 and p2 images (function changeP1Image, changeP2Image) taken from https://stackoverflow.com/questions/27722485/change-a-image-when-list-box-selected-item-is-changed

function changeP1Image() {
    let duckList = document.getElementById('Player-1-choice');
    let idx = duckList.selectedIndex;
    let duckImageName = duckList[idx].value;
    console.log(duckImageName);
    let playerPic = document.getElementById("Player-1-pic");
    playerPic.setAttribute('src', `assets/player-pictures/player-1/${duckImageName}.png`)

}

function changeP2Image() {
    let duckList = document.getElementById('Player-2-choice');
    let idx = duckList.selectedIndex;
    let duckImageName = duckList[idx].value;
    console.log(duckImageName);
    let playerPic = document.getElementById("Player-2-pic");
    playerPic.setAttribute('src', `assets/player-pictures/player-2/${duckImageName}.png`)
}
// Event Listeners
document.getElementById('Player-1-choice').addEventListener('change', changeP1Image);
document.getElementById('Player-2-choice').addEventListener('change', changeP2Image);

// JS for play.thml

// Global Variables

// Functions

// Event Listeners
