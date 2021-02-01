// Split an array in half, recursively breaking the array further
function mergesort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2); //Math.floor rounds the number down to a whole number
  const left = arr.slice(0, mid); // Slice returns a section of an array
  const right = arr.slice(mid);
  return mergeArrs(mergesort(left), mergesort(right)); // Recursion
}

// Take two arrays and sort them into ascending order
function mergeArrs(left, right) {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      //Compare first item in each array and pass smallest into a new array
      sorted.push(left.shift()); // shift removes the first item in array
    } else {
      sorted.push(right.shift());
    }
  }
  // Put the sorted data with whatever is left from the arrays (should only be one value)
  let result = [...sorted, ...left, ...right];
  return result;
}

const arr = [4, 3, 2, 1];

console.log(mergesort(arr));
