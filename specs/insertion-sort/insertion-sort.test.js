/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

function insertionSort(nums) {

  // Loop through every item starting at index 1
  for (let i = 1; i < nums.length; i++) {

    let current = nums[i]
    let j; // initialize innerCounter

    // Loop from right to left, stopping when the number is < 
    for (j = i - 1; j >= 0 && nums[j] > current; j--) {

      // Move numbers to the right
      nums [j + 1] = nums[j];
    }

    // Insert
    nums[j + 1] = current;
  }

  // Mutated array
  return nums;
}

// unit tests
test("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  expect(insertionSort([10])).toEqual([10]);
});
