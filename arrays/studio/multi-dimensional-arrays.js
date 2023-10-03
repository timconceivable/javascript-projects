const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [food,equipment,pets,sleepAids];
for (i in cargoHold) {
    cargoHold[i] = cargoHold[i].split(",").sort();
}
// console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userCab = input.question("Select a cabinet (0 - 3) in the cargohold. ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
while (Number(userCab) > 3 || Number(userCab) < 0) {
    userCab = input.question("Please enter a number between 0 and 3. ")
}
console.log(`${cargoHold[userCab]} are in cabinet ${userCab}.`);

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let userItem = input.question("Select an item in the cabinet. ");
let not = "";
if (!cargoHold[userCab].includes(userItem)) {
    not = " not"
}
console.log(`Cabinet ${userCab} does${not} contain ${userItem}.`)