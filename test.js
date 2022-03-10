let greyDucks = [{
    name: 'angryGreyDuck',
    attack: 5,
    defense: 1,
    imageLink: `assets/cards/greyDucks/angryGreyDuck.png`,
    count: 4
},
{
    name: 'suspiciousGreyDuck',
    attack: 3,
    defense: 2,
    imageLink: `assets/cards/greyDucks/suspiciousGreyDuck.png`,
    count: 4
}];


let mallards = [ 
    {
    name: 'angryMallard',
    attack: 5,
    defense: 1,
    imageLink: `assets/cards/mallards/angryMallard.png`,
    count: 4
},
{
    name: 'suspiciousMallard',
    attack: 3,
    defense: 2,
    imageLink: `assets/cards/mallards/suspiciousMallard.png`,
    count: 4
}];

let yellers = [
    {
    name: 'angryYeller',
    attack: 5,
    defense: 1,
    imageLink: `assets/cards/yellers/angryYeller.png`,
    count: 4
},
{
    name: 'suspiciousYeller',
    attack: 3,
    defense: 2,
    imageLink: `assets/cards/yellers/suspiciousYeller.png`,
    count: 4
}];

function assembleDecks() {
    for (let [faction, duckTypes] of Object.entries(duckStacks)) {
        let faction = new Deck(faction, 8);
        console.log(faction);
    }
};
