/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

// Take two sorted arrays and merge them together.
const merge = (leftArr, rightArr) => {
  let mergedArr = [];

  while(left.length && right.length) {
    if (left[0] < right[0]) {
      mergedArr.push(left.shift());
    } else {
      mergedArr.push(right.shift());
    }
  }
  
  return mergedArr.concat(left, right);
}

const mergeSort = (nums) => {

  // Base case
  if (nums.length < 2) {
    return nums;
  }

  // break into two smaller arrays
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  // Call mergeSort on left/right
  const sortedL = mergeSort(left);
  const sortedR = mergeSort(right);

  return merge(sortedL, sortedR);
};

// unit tests
// do not modify the below code
test.skip("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
