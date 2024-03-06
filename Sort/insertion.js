const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(arr) {
    // 1. Loop through each element starting from the second element (index 1).
    for (let i = 1; i < arr.length; i++) {
        // 2. Store the current element in a variable (key).
        let key = arr[i];
        // 3. Initialize a variable (j) to the index of the element before the current one.
        let j = i - 1;

        // 4. Move elements of arr[0..i-1] that are greater than key to one position ahead of their current position.
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j]; // Shift elements to the right.
            j--; // Move to the previous element.
        }

        // 5. Place the key at its correct position in the sorted part of the array.
        arr[j + 1] = key;
    }

    // 6. Return the sorted array.
    return arr;
}

// 7. Call the insertionSort function and log the sorted array to the console.
console.log("Sorted array:", insertionSort(numbers));
