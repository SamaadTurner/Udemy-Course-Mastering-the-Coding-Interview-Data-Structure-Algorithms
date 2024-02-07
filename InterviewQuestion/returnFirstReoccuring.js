//google question: return the first re-ocurring number in the array.
//Given an array = [2,5,1,2,3,5,1,2,4]
//It should return 2
//Given an array = [2,3,4,5]
//It should return undefined





// HERE IS THE BAD WAY BUT GETS THE JOB DONE
function reoccuringLongway(arr) {
    // Outer loop to iterate through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Inner loop to compare the current element with all previous elements
        for (let j = 0; j < i; j++) {
            // Check if the current element is equal to any previous elements
            if (arr[i] === arr[j]) {
                // Return the first recurring number found
                return arr[i];
            }
        }
    }
    // If no recurring number is found, return undefined
    return undefined;
}


console.log(reoccuringLongway([2,5,5,2,3,5,1,2,4])); // output: 5







// BEST WAY USING A HASH TABLE

function reoccuring (arr) {
    const seenNumbers = {};

    for(let i = 0; i < arr.length; i++){
        // is the current element in the arr has been seen before, meaning it is already present in the 'seenNumbers' hash table
        //console.log(seenNumbers[arr[i]]);
        if (seenNumbers[arr[i]]){
            // return the reoccuring number
            return arr[i];
        }// sets the value associated with the key arr[i] in the seenNumbers object to true. 
        //The purpose is to mark this number as "seen" or encountered during the iteration through the array.
        seenNumbers[arr[i]] = true;
    }
    return undefined;
}

console.log(reoccuring([2,5,5,2,3,5,1,2,4])); // output: 5
//console.log(reoccuring([2,3,4,5])); // output: undefined