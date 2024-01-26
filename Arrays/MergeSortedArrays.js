let pointer1 = 0;
let pointer2 = 0;

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

function mergedSortedArrays(arr1, arr2) {
    let mergedArray = [];

    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] < arr2[pointer2]) {
            mergedArray.push(arr1[pointer1]);
            pointer1++;
        } else {
            mergedArray.push(arr2[pointer2]);
            pointer2++;
        }
    }

    // Handle remaining elements in arr1 and arr2
    while (pointer1 < arr1.length) {
        mergedArray.push(arr1[pointer1]);
        pointer1++;
    }

    while (pointer2 < arr2.length) {
        mergedArray.push(arr2[pointer2]);
        pointer2++;
    }

    return mergedArray;
}

console.log(mergedSortedArrays(arr1, arr2));
