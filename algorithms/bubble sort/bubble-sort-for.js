function bubbleSortWithForLoops(arr) {
  // This technique will check each number against the other
  for (i = 0; i < arr.length; i++) {
    //notice the arr.length - i - 1.  This ensures no repeated checks
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j]; //Swap the two values being checked
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

arr = [8, 2, 4, 1, 5, 6, 3, 7];

console.log(bubbleSortWithForLoops(arr));
