//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

function findMinVal(anArray) {
    let minVal = anArray[0];
    for (pos = 1; pos < anArray.length; pos++) {    
        if (anArray[pos] < minVal) { minVal = anArray[pos]; }
    }
    return minVal;
}

function sortArray(anArray) {
    let newArray = [];
    let minIndex = anArray.indexOf(findMinVal(anArray));
    newArray.push(anArray.splice(minIndex,minIndex));

    return newArray;
}

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(findMinVal(nums1),findMinVal(nums2),findMinVal(nums3));