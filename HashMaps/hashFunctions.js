let user  = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('ahhhhhhhhh!');
    }
}
user.age // O(1)
user.spell = 'you suck'; // O(1)
user.scream(); // O(1)
console.log(user);


// you can have any value (a function which I have above, another object, an array, literally anything).
// with a map() you can have keys that are more than strings... Like the key can be a function.
// MAPS MAINTAIN INSERTION ORDER
let user2  = {
    age: 55,
    name: 'Care',
    magic: true,
    scream: function() {
        console.log('ahhhhhhhhh!');
    }
}
user.age // O(1)
user.spell = 'you suck'; // O(1)
user.scream(); // O(1)
console.log(user);
// this is a Map object that is a  collection of key-value pairs where both the keys and values can be of any data type.
const a = new Map()
// the Set object is a collection of unique values, where each value must be unique within the 'Set'. It provides a methodsm for adding, deleting, and checking the existence of elements
const b = new Set()