const fs = require('fs');

const data = fs.readFileSync('/Users/ramitaarora/Documents/GitHub/advent-of-code-2023/day-4/input.txt', 'utf-8');
const oneLine = data.split('\n')

const addTotal = [];

for (let i = 0; i < oneLine.length; i++) {
    let cardNum = oneLine[i].split(':')[0];
    let winningNums = ((oneLine[i].split('|')[0].slice(10)).split(' ')).filter(Boolean)
    let playNums = ((oneLine[i].split('|')[1]).split(' ')).filter(Boolean)
    console.log(cardNum)
    // console.log("winningNums", winningNums)
    // console.log("playNums", playNums)

    let score = [];
    let total = 0;
    for (let j = 0; j < playNums.length; j++) {
        
        if (winningNums.includes(playNums[j])) {
            score.push(playNums[j])
            console.log("score", score)
            
            if (score.length) {
                for (let k = 0; k < score.length; k++) {
                    total = 2 ** (score.length - 1)
                } 
            }
        } 
    } addTotal.push(total);
    console.log(total) 
}

console.log(addTotal)

let totalScore = 0;
for (let m = 0; m < addTotal.length; m++) {
    totalScore += addTotal[m];
    console.log("total", totalScore)
}