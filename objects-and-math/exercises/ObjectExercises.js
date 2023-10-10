let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   pronoun: ["He","His","is","s"],
   mass: 69,
   age: 6,
   speed: 10,
   likes: "banana martinis, lifting weights, and long walks on the beach"
};

let superWimpTwo = {
   name: "Brad",
   species: "Wimpanzee",
   pronoun: ["He","His","is","s"],
   mass: 86,
   age: 6,
   speed: 9,
   likes: "PB&B sandwiches, skateboarding, and flinging poo"
};

let beagle = {
   name: "Bernice",
   species: "Beagledog",
   pronoun: ["They","Their","are",""],
   mass: 14,
   age: 5,
   speed: 8,
   likes: "chew toys, sniffing butts, and playing fetch"
};

let axolotl = {
   name: "Lacey",
   species: "Axolotl",
   pronoun: ["She","Her","is","s"],
   mass: 0.5,
   age: 5,
   speed: 6,
   likes: "swimming, wiggling her gills, and being pink"
};

let tardigrade = {
   name: "Xelmina",
   species: "Tardigrade",
   pronoun: ["Xe","Xeir","is","s"],
   mass: 0.0000000001,
   age: 1,
   speed: 3,
   likes: "micro-organisms and interdimensional travel"
};

// an array to hold the animal objects.
let animals = [superChimpOne,superWimpTwo,beagle,axolotl,tardigrade];

// add the astronautID property to each animal object.
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

// introduce a racers
function intro(obj) {
   return `${obj.name} is a ${obj.species}. ${obj.pronoun[0]} ${obj.pronoun[2]} ${obj.age} years old and weigh${obj.pronoun[3]} ${obj.mass} kilograms. \n${obj.pronoun[0]} like${obj.pronoun[3]} ${obj.likes}. \n${obj.pronoun[1]} ID is ${obj.astronautID}.\n`
}

// move a random amount based on object's speed
function move(obj) { 
   return Math.ceil(Math.random()*obj.speed);
}

// visualize race progress each step
function raceProgress(steps) {
   let output = "";
   for (i=0; i< steps; i++) {
      output += ".";
   }
   return output;
}

// run the race for each racer
function fitnessTest(racers) {
   let results = [];
   for (obj in racers) {
      let raceLength = 20;
      let steps = 0;
      let turn = 0;
      while (steps < raceLength) {
         steps += move(racers[obj]);
         console.log(racers[obj].name, turn, raceProgress(steps), steps);
         turn++;
      }
      results[obj] = [racers[obj].name,turn,steps];
      console.log("");
   }
   return results;
}

// determine who won
function findWinner(arr) {
   let leastTurns = arr[0];
   for (i=1; i <arr.length; i++) {
      if (leastTurns[1] > arr[i][1]) { // compare turns
         leastTurns = arr[i];
      } else if (leastTurns[1] === arr[i][1]) {
         if (leastTurns[2] < arr[i][2]) {  // compare steps
            leastTurns = arr[i];
         }
      }
   }
   return leastTurns;
}

// Print out the relevant information about each animal.
assignIds(animals);
console.log("\nGOOD AFTERNOON RACE FANS! \nWELCOME TO GLOBAL ANIMALS RACEWAY! \nWHERE THE FASTEST ANIMALS ON EARTH \nRACE FOR THE GLORY OF... RACING? \n\nLET'S MEET OUR RACERS! \n- - - - - - - - - - ")
for (obj in animals) {
   console.log(intro(animals[obj]));
}

// Start an animal race!
console.log("\nOKAY, LET'S RACE! \nRACERS READY? \n3... 2... 1... GO! \n- - - - - - - - - - \n");
let raceResults = fitnessTest(animals);
for (i in raceResults) {
   console.log(`${raceResults[i][0]} went ${raceResults[i][2]} steps in ${raceResults[i][1]} turns.`);
}
// announce winner
let winner = findWinner(raceResults);
console.log(`\nAND THE WINNER IS... ${winner[0]}!`);





/* let students = {
   names:   ["G Darris", "B Cat", "A Dog", "M Zebra", "K Kiwi"],
   grades:  [100, 95, 74, 82, 91]
};
 
for (student in students.names) {
   console.log(students.names[student], ": ", students.grades[student]);
} */
// console.log(Math.floor(1.9999999999999999999999999));
// console.log( Math.round(Math.random()*1000)/10  );