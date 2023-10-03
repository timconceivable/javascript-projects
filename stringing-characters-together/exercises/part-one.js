const input = require('readline-sync');

// let num = 1001;
//Returns 'undefined'.
// console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
// console.log(`${num} is ${String(num).length} digits in length.`);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let aNumber = input.question("Enter a number: ");
let numLength = 0;
let isInteger = "is";
let s = "";
while (isNaN(Number(aNumber))) {
    console.log(`${aNumber} is not a real number.`);
    aNumber = input.question("\nActually enter a number this time: ");
}
aNumber = 1 * aNumber;
numLength = String(aNumber).replaceAll(".","").replaceAll("-","").length;
if (numLength > 1) { s = "s"; }
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(aNumber).includes(".")) {
    isInteger = "is not";
}
console.log(`${aNumber} is ${numLength} digit${s} in length. it ${isInteger} an integer.`);