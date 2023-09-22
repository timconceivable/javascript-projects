const input = require('readline-sync');

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userWord = input.question("Enter a word: ");
let userNum = Number(input.question("How many letters should be shifted to the end? "));

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (isNaN(userNum)) {
    userNum = 3;
    console.log("Oops! That's not a number. Let's just use 3.");
}
if (userNum >= userWord.length) {
    userNum = 3;
    console.log("That's more letters than your word contains!  We'll just use '3' instead, okay?");
}

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let langName = "pigglesquitch".slice(0,userNum);
let firstStr = userWord.slice(0,userNum);
let pigLatinWord = userWord.slice(userNum,userWord.length)+firstStr;

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`"${pigLatinWord}" is ${userWord} in ${langName} latin.`);