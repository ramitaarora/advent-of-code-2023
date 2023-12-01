const fs = require('fs');

const data = fs.readFileSync('/Users/ramitaarora/Documents/GitHub/advent-of-code-2023/day-1/input.txt', 'utf-8');
const strings = data.split('\n')
let numArray = [];
let total = 0;
let newArray = [];

function calculateTotal() {
    // console.log(newArray)
    for (let i = 0; i < newArray.length; i++) {
        total += Number(newArray[i]);
    } console.log(total)
}


function makeArray() {
    // console.log(numArray)
    for (let i = 0; i < numArray.length; i++) {
        let num = '';
        // console.log("old num", numArray[i])
        if (numArray[i].length > 1) {
            num += (numArray[i][0]) + (numArray[i][numArray[i].length - 1]);
            // console.log("new num", num)
            newArray.push(num)
        } else {
            num += numArray[i] + numArray[i];
            // console.log("same num", num)
            newArray.push(num)
        }
    } calculateTotal()
}

function main() {
    for (let i = 0; i < strings.length; i++) {
        let oneLine = strings[i]
        // console.log(oneLine);
        let numbers = '';
        for (let j = 0; j < oneLine.length; j++) {
            if (/^[0-9]*$/.test(oneLine[j])) {
                numbers += oneLine[j];
                // console.log(numbers);
            } 
        } numArray.push(numbers)
    } makeArray();
}

main()
