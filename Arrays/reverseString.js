// Create a function that reverses a string:
// 'Hi my name is Samaad' should be:
//'daamaS si eman ym iH'

const str = 'Hi my name is Samaad';
let finalArray = [];

function reverse(str){
    // do a check for the parameter. 
    // the str.length check will check if the input string is 1 or less length. This means you recieved 1 character or none. If thats the case, it is already 'reversed'
    // the typeof checks if the given str is a string or not
    if(!str || str.length < 2 || typeof str !== 'string'){
        return "not a valid string parameter";
    }
    // Split the input string into an array of characters
    const splitUp = str.split('')
     // Loop through the array of characters in reverse order
    for(let i = splitUp.length-1; i >=0 ; i--){
        finalArray.push(splitUp[i]);
    }
    const reversedString = finalArray.join('');
     // Return the reversed string
    return reversedString;
}





// simpler way of doing the above function

function reverse2(str) {
    return str.split('').reverse().join('')
}

// another way
// the arrow function has an implicit return of what ever is on the right side of arrow

const reverse3 = str => str.split('').reverse().join('');


// another way
// using the spread operator
// THE SPREAD OPERATOR: A concise and convenient way for converting iterable objects (like strings) into arrays
// Spread Operator is an ALTERNATIVE TO SPLIT(''). THEREFORE USE ONE OR THE OTHER

const reverse4 = str => [...str].reverse().join('');


console.log(reverse4(str));