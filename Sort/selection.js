const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array){
    let n = array.length;
    for(let i = 0; i < n - 1; i++){
        let minIndex = i;
        for(let j = i + 1; j < n; j++){
            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }
        let temp =  array[minIndex];
        array[minIndex] = array[i];
        array[i] = temp;

    }
    return array;

}

selectionSort(numbers);
console.log(numbers);