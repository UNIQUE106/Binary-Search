function insertionSort(arr) {
    var n = arr.length;

    for (var i = 1; i < n; i++) {
        var key = arr[i];
        var j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the key in its correct position
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage:
var unsortedArray = [5, 2, 4, 3, 1];
var sortedArray = insertionSort(unsortedArray);
console.log(sortedArray);