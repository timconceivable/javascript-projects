let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};


// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!


let students = {
   names:   ["G Darris", "B Cat", "A Dog", "M Zebra", "K Kiwi"],
   grades:  [100, 95, 74, 82, 91]
};
 
for (student in students.names) {
   console.log(students.names[student], ": ", students.grades[student]);
}


// console.log(Math.floor(1.9999999999999999999999999));
// console.log( Math.round(Math.random()*1000)/10  );