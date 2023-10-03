//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

// How does the compiler know what A and B are in this function??
// https://education.launchcode.org/intro-to-web-dev-curriculum/more-on-functions/studio/index.html
// arrayName.sort(function(a, b){return a-b});

//Sort each array in ascending order.
function sortAscending(anArray) {
    anArray.sort(function(a,b){return a - b});
    return anArray;
}
//Sort each array in decending order.
function sortDescending(anArray) {
    anArray.sort(function(a,b){return b - a});
    return anArray;
}

console.log(
    sortAscending(nums1),"\n",
    sortAscending(nums2),"\n",
    sortAscending(nums3),
);
console.log(
    sortDescending(nums1),"\n",
    sortDescending(nums2),"\n",
    sortDescending(nums3),
);