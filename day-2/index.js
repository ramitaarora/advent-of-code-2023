const fs = require('fs');

const data = fs.readFileSync('/Users/ramitaarora/Documents/GitHub/advent-of-code-2023/day-2/input.txt', 'utf-8');
const oneLine = data.split('\n')

let games = [];
let splitGames = [];
let gameObjs = [];
let ids = [];
let total = 0;

for (let i = 0; i < oneLine.length; i++) {
    let eachGame = oneLine[i].split(':');
    games.push(eachGame);
    
} 

for (let j = 0; j < games.length; j++) {
    splitGames.push([games[j][0], ...games[j][1].replaceAll(';', ',').split(',')]);
}

for (let k = 0; k < splitGames.length; k++) {
    // console.log(splitGames[k])
    let eachGameObj = {
        game: '',
        blue: [],
        red: [],
        green: [],
    }
    splitGames[k].map(item => {
        
        if (item.startsWith('Game')) {
            eachGameObj.game = item
        }
        if (item.endsWith('red')) {
            let getNum = item.split(' ')
            eachGameObj.red.push(Number(getNum[1]));
        }
        if (item.endsWith('blue')) {
            let getNum = item.split(' ')
            eachGameObj.blue.push(Number(getNum[1]));
        }
        if (item.endsWith('green')) {
            let getNum = item.split(' ')
            eachGameObj.green.push(Number(getNum[1]));
        }
        
    });
    gameObjs.push(eachGameObj); 
}  
// console.log(gameObjs)

for (let m = 0; m < gameObjs.length; m++) {
    if (!gameObjs[m].red.some(item => item > 12) && !gameObjs[m].green.some(item => item > 13) && !gameObjs[m].blue.some(item => item > 14)) {
        ids.push((gameObjs[m].game).split(' ')[1])
    }
} 
console.log(ids)

for (let n = 0; n < ids.length; n++) {
    total += Number(ids[n]);
} console.log(total)