// Initial array of numbers
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// QuickSort function with additional parameters for left and right indices
function quickSort(array, left, right) {
  // Get the length of the array
  const len = array.length;
  let pivot;
  let partitionIndex;

  // Check if there are more than one element in the array
  if (left < right) {
    // Choose the rightmost element as the pivot
    pivot = right;

    // Get the partition index where elements will be rearranged
    partitionIndex = partition(array, pivot, left, right);

    // Recursively sort the left and right sub-arrays
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }

  // Return the sorted array
  return array;
}

// Partition function to rearrange elements based on the pivot
function partition(array, pivot, left, right) {
  // Store the value of the pivot
  let pivotValue = array[pivot];

  // Initialize the partition index to the leftmost element
  let partitionIndex = left;

  // Iterate through the array
  for (let i = left; i < right; i++) {
    // If the current element is less than the pivot, swap it with the element at the partition index
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }

  // Swap the pivot with the element at the partition index
  swap(array, right, partitionIndex);

  // Return the final partition index
  return partitionIndex;
}

// Swap function to exchange values at two indices in the array
function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

// Call the QuickSort function with the initial array and indices
quickSort(numbers, 0, numbers.length - 1);

// Display the sorted array
console.log(numbers);
