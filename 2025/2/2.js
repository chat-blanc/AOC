const fs = require('fs');

// console.log(getInput())
let lol = (makeListofLists(getInput()))


function getInput() {
    try {
        const data = fs.readFileSync('input.txt', 'utf8');
        const array = data.split('\n');
        return array;
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

function makeListofLists(array) {
    // first split on ,
    const separatedList = array[0].split(',');

    // next we want the ranges to be seperated in their own list
    // desired result: [ [ '4487' , '9581' ] , [ '15' , '47' ] ]
    // looping logic: 
    // 1 create empty list
    // 2 for each element (ex: '4487-9581')
    // 3 split on - ; this creates a new list => ['4487','9581']
    // 4 push the new list into the empty list
    // repeat

    const lol = [];
    separatedList.forEach(element => {
        sublist = element.split('-');
        lol.push(sublist);
    });
    return lol;
}

const countWeirdos = 0

lol.forEach(rangeElement => {
    console.log(rangeElement)
    let result = [];
    for (let a = Number(rangeElement[0]); a <= rangeElement[1]; a++) {
    // Add numbers to result array
        result.push(a);  
    }
    console.log(result);

    result.forEach(element => {
        if (element.length() % 2 == 0 ) {
            console.log("even");
        }
    })
})
