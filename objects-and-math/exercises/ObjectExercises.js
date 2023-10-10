let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   speed: 9
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   speed: 8
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   speed: 4
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   speed: 7
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   speed: 2
};

// Create an array to hold the animal objects.
let animals = [superChimpOne,superChimpTwo,salamander,beagle,tardigrade];

// After you have created the other object literals, add the astronautID property to each one.
function assignIds(arr) {
   let ids = [0];
   for (animal in arr) {
      let id = 0;
      while (ids.includes(id)) {
         id = Math.ceil(Math.random()*10);
      }
      ids.push(id);
      arr[animal]["astronautID"] = id;
   }
   return ids;
}

function crewReports(obj) {
   return `${obj.name} is a ${obj.species}. They are ${obj.age} years old and ${obj.mass} kilograms. Their ID is ${obj.astronautID}.`
}

function move(obj) { 
   return Math.round(Math.random()*obj.speed);
}

function raceProgress(steps) {
   let output = "";
   for (i=0; i< steps; i++) {
      output += "#";
   }
   return output;
}

function fitnessTest(racers) {
   let results = [];
   for (obj in racers) {
      let raceLength = 20;
      let steps = 0;
      let turn = 0;
      while (steps < raceLength) {
         steps += move(racers[obj]);
         // console.log(racers[obj].name, turn, raceProgress(steps), steps);
         turn++;
      }
      results[obj] = `${racers[obj].name} took ${turn} turns to take 20 steps.`;
   }
   return results;
}

// Print out the relevant information about each animal.
assignIds(animals);
// console.log(animals);
for (obj in animals) {
   console.log(crewReports(animals[obj]));
}

// Start an animal race!
console.log(fitnessTest(animals));





/* let students = {
   names:   ["G Darris", "B Cat", "A Dog", "M Zebra", "K Kiwi"],
   grades:  [100, 95, 74, 82, 91]
};
 
for (student in students.names) {
   console.log(students.names[student], ": ", students.grades[student]);
} */
// console.log(Math.floor(1.9999999999999999999999999));
// console.log( Math.round(Math.random()*1000)/10  );