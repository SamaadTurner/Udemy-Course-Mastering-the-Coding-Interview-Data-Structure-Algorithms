// Given 2 arrays, create a function that lets a user know (true/false) whether these two arrays contain any common items


// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];

// function common (array1, array2){
//     for( let i = 0; i < array1.length; i++){
//         for( let j = 0; j < array2.length; j++){
//             if (array1[i] === array2[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// time: (a*b)
// console.log(common(array1, array2));



const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

function common(arr1, arr2) {
    let obj = {};
    
    for (let i = 0; i < arr1.length; i++) {
        if (!obj[arr1[i]]) {
            const item = arr1[i];
            obj[item] = true;
        }
    }

    // Loop through the second array and check if the item in the second array exists in the created object.
    for (let j = 0; j < arr2.length; j++) {
        if (obj[arr2[j]]) {
            return true;
        }
    }

    return false;
}

console.log(common(array1, array2));

/* 
Now that the code is done, we need to start thinking of ways to break the code:
Some questions to ask (usually are tests):

Can we assume there is always going to be two parameters? 
Do those parameters have to be arrays like I origninally wanted?


/*