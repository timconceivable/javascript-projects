function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

let totallyUnsuspiciousFunction = function (quantity) {
  let currentLevel = checkFuel(quantity-1);
  let amountToBorrow = 0;
  while (checkFuel(quantity-1-amountToBorrow) === currentLevel && (quantity-amountToBorrow) > 1) {
    amountToBorrow++;
  }
  console.log(`just borrowing ${amountToBorrow} kg of fuel... we'll definitely bring it back!`);
  return amountToBorrow;
}
let innocentVariable = function(arr) {  
  let booty = [];
  let swag = ["gold","AE-35 unit","satellite"];
  for (i in swag) {
    if (cargoHold.includes(swag[0])) {
      let item = swag.shift();
      cargoHold.splice(cargoHold.indexOf(item),1,"box of lint");
      console.log(`grabbing ${item}... nothing to see here!`);
      booty.push(item);
    }
  }
  return booty;
}

let irs = function(level,cargo) {
  let amountBorrowed = totallyUnsuspiciousFunction(level);
  let grabbed = innocentVariable(cargo);
  return `\nRECEIPT: \nBorrowed ${amountBorrowed} kg of fuel from the tanks. \nBorrowed ${grabbed[0]} and ${grabbed[1]} from the cargo hold. \nIt's a good day to be a pira-- I mean, friendly neighbor!\n`;
}

// for (i=0; i<4; i++){
  console.log("Fuel level: " + checkFuel(fuelLevel));
  console.log("Hold status: " + holdStatus(cargoHold) + "\n");
  console.log(irs(fuelLevel,cargoHold));
  console.log("Fuel level: " + checkFuel(fuelLevel));
  console.log("Hold status: " + holdStatus(cargoHold));


/* Steal some fuel from the shuttle:
 
//a). Define an anonymous function and set it equal to a variable with a normal, non-suspicious name. The function takes one parameter. This will be the fuel level on the shuttle.

//b). You must siphon off fuel without alerting the TAs. Inside your function, you want to reduce the fuel level as much as possible WITHOUT changing the color returned by the checkFuel function.

//c). Once you figure out how much fuel to pump out, return that value.

//d). Decide where to best place your function call to gather our new fuel.

/* Next, liberate some of that glorious cargo.
 * /

//a). Define another anonymous function with an array as a parameter, and set it equal to another innocent variable.

//b). You need to swipe two items from the cargo hold. Choose well. Stealing water ain’t gonna get us rich. Put the swag into a new array and return it from the function.

//c). The cargo hold has better security than the fuel tanks. It counts how many things are in storage. You need to replace what you steal with something worthless. The count MUST stay the same, or you’ll get caught and thrown into the LaunchCode brig.

//d). Don’t get hasty, matey! Remember to test your function.

/* Finally, you need to print a receipt for the accountant. Don’t laugh! That genius knows MATH and saves us more gold than you can imagine.
 * /
 
//a). Define a function called irs that can take fuelLevel and cargoHold as arguments.
	
//b). Call your anonymous fuel and cargo functions from within irs.

//c). Use a template literal to return, "Raided _____ kg of fuel from the tanks, and stole ____ and ____ from the cargo hold."

*/