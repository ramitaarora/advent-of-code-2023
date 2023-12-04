const fs = require('fs');

const data = fs.readFileSync('/Users/ramitaarora/Documents/GitHub/advent-of-code-2023/day-3/input.txt', 'utf-8');
const oneLine = data.split('\n')
console.log(oneLine)

// if (/[!@#$%^&*/+=-]/.test(oneLine[i][j]) === );

for (let i = 0; i < oneLine.length; i++) {
    for (let j = 0; j < oneLine[i].length; j++) {
        if (/^[0-9]*$/.test(oneLine[i][j])) {
            
        }
    }
}