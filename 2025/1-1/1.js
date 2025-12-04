let number = 50;
let password = 0;

const fs = require('fs');

function getInput() {
    try {
        // const data = fs.readFileSync('input1-renaatje.txt', 'utf8');
        const data = fs.readFileSync('input.txt', 'utf8');
        return data;
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

function makeArray() {
    const data = getInput();
    const array = data.split('\n');
    // console.log(array);
    return array;
}

// console.log(getInstArray())
console.log(checkPassword())

function getInstArray() {
    array = makeArray();
    const instructionArray = [];
    array.forEach(element => {
        const value = 0;
        if (element.includes("R")) {
            instructionArray.push(Number.parseInt(element.slice(1)))
        }
        else {
            instructionArray.push(-1*Number.parseInt(element.slice(1)))
        };
        // console.log(instructionArray)
    
        })
    return instructionArray;}

function checkPassword() {
    array = getInstArray();
    array.forEach(element => {
        // number + element = new number
        // cases of new number:
        // 50 +- 0 = 50     ww +0
        // 50 + 3 = 53      ww +0
        // 50 + 50 = 100    ww +1
        // 50 + 55 = 110    ww +1
        // 50 + 155 = 210   ww +2
        // 50 - 3 = 47      ww +0
        // 50 - 50 = 0      ww +1
        // 50 - 53 = -3     ww +1
        // 50 - 153 = -103  ww +2
        // evaluate the resulting number and add ww no to password
        // create the correct new number => with modulo/remainder oid
        while (element !== 0) {
            if (element < 0 ) {
                element += 1;
                number = ( number - 1 ) % 100;
                console.log("new number = ", number)
            }
            else if (element > 0) {
                element -= 1;
                number = ( number + 1 ) % 100;
                console.log("new number = ", number)
            }
            if (number == 0) {
                password += 1;
                console.log("new password is ", password)
            }
        } 
    })
    return password;
}
