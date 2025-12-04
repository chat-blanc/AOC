let number = 50;
let password = 0;

const fs = require('fs');

function getInput() {
    try {
        // const data = fs.readFileSync('input1-renaatje.txt', 'utf8');
        const data = fs.readFileSync('input-short.txt', 'utf8');
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

// console.log("Array is:")

// console.log(makeArray())

function getPassword() {
    array = makeArray();

    array.forEach(element => {
        let value = Number.parseInt(element.slice(1));
        console.log("value is", value)

        if (element.includes("R")) {
            number = number + value;
            console.log("number for R is", number);

            while (number >= 100) {
                console.log("number is >=100", number);
                number = number - 100;
                console.log("new number is; ", number);
                if (number !== 0) {
                    console.log("number is not 0", number)
                    password = password + 1;
                    console.log("password is +1", password);
                }
            }
            if (number === 0) {
                console.log("number is 0", number);
                password = password + 1;
            }
        } else {
            console.log("number for L is", number);

            number = number - value;
            console.log("new number for L is", number);

            while (number < 0) {
                console.log("number is <0", number);
                number = number + 100;
                console.log("new number is; ", number);

                if (number !== 0) {
                    console.log("number is not 0", number);
                    password = password + 1;
                    console.log("new password is ", password)
                }
            }
            if (number === 0) {
                console.log("number is 0", number)
                password = password + 1;
                console.log("new password is ", password)
            }
        } console.log("nummer is", number, " password is ", password);
    });
    return password;

}

// console.log(getPassword());

getPassword()




