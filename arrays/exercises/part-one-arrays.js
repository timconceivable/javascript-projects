//Create an array that can hold 4 items name practiceFile.
let practiceFile = [273.15,"","",""];

//Use the bracket notation method to add "42" and "hello" to the array. Add these new items one at a time.  Print the array after each step to confirm the changes.
practiceFile[1] = 42;
console.log(practiceFile);
practiceFile[2] = "jello";
console.log(practiceFile);
practiceFile[3] = "poo poo";
console.log(practiceFile);

//Use a SetValue to add the items "false", and "-4.6" to the array.  Print the array to confirm the changes.
practiceFile.push(false, -4.6, "87");
console.log(practiceFile);