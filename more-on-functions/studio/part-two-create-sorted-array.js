// Given function to find the minimum value in an array
/* function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}
 */

// My minimum value function
function findMinVal(anArray) {
  let minVal = anArray[0];
  for (pos = 1; pos < anArray.length; pos++) {    
      if (anArray[pos] < minVal) { minVal = anArray[pos]; }
  }
  return minVal;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...

function sortArray(anArray) {
  let newArray = [];
  let minValIndex;
  while (anArray.length > 0) {
    minValIndex = anArray.indexOf(findMinVal(anArray));
    newArray.push(Number(anArray.splice(minValIndex,1)));
  }

  return newArray;
}

// BONUS MISSION: Refactor your sorting function to use recursion below:
// what am i even doing?

function combineEntries(arrayName){
  if (arrayName.length > 1){
      return arrayName[0]+combineEntries(arrayName.slice(1));
  } else {
      return arrayName[0];
  }
}

function sortArrayRec(anArray) {
  if (anArray.length > 1) {
    return sortArrayRec(findMinVal(anArray));
  } else return findMinVal(anArray);
}

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log(sortArray(nums1),"\n", 
sortArray(nums2),"\n", 
sortArray(nums3));

/* console.log(sortArrayRec(nums1),"\n", 
sortArrayRec(nums2),"\n", 
sortArrayRec(nums3)); */

// console.log(combineEntries(['L', 'C', '1', '0', '1']));