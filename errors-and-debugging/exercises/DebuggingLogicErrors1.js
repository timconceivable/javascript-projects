// Run this sample code as-is and examine the output. 
// Should the shuttle have launched? 
// Did it?
// Do not worry about fixing the code yet, we will do that in the next series of exercises.

let crewReady = true;
let computerStatus = 'green';
const fuelNeeded = 20000;
let fuelLevel = 27000;

if (crewReady){
   console.log('Crew ready.');
} else {
   console.log('WARNING: Crew not ready!');
}

if (computerStatus === 'green'){
   console.log('Computer cleared.');
} else {
   console.log('WARNING: Computer not ready!');
}

if (fuelLevel >= fuelNeeded) {
   console.log('Fuel level cleared.');
} else {
   console.log('WARNING: Insufficient fuel!');
}

if (crewReady 
   && computerStatus === 'green' 
   && fuelLevel >= fuelNeeded) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}