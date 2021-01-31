function bubbleSortWithDoWhile(arr) {
  let flag = false; //The flag will determine how many passes through the array we need to take
  do {
    flag = false; //After each pass, reset the flag
    arr.forEach((item, i) => {
      if (arr[i + 1] < item) {
        let temp = item; //swap the two items
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        flag = true; //This ensures the do/while loop goes again
      }
    });
  } while (flag); //Condition checked at the end

  return arr;
}

arr = [1, 7, 6, 3, 5, 7, 9, 3];

console.log(bubbleSortWithDoWhile(arr));
