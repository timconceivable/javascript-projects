const input = require('readline-sync');

// Declare and initialize the variables for exercise 1 here:
let spaceSuitsOn = Boolean(true);
let shuttleCabinReady = Boolean(true);
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 400;
//let shuttleSpeed = 15000;
let fuelLevel = 21000; //Number(input.question("Fuel Level: "));
let engineTemp = 1000; //Number(input.question("Engine Temp: "));
let engineIndicator = "green blinking" //input.question("Engine Indicator Light: ");
let commandOverride = Boolean(input.question("Override? (Y/N): ").toLowerCase() == "y") ? true : false;
let overrideStatus = commandOverride ? "ACTIVE" : "INACTIVE";
let launchReady = commandOverride;

// BEFORE running the code, predict what will be printed to the console by the following statements:
console.log(`System Override: ${overrideStatus}`);

if (crewStatus) {
   console.log("Crew Ready");
} else {
   console.log("Crew Not Ready");
}

if (computerStatusCode === 200) {
   console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode === 400) {
   console.log("Success! Computer online.");
} else {
   console.log("ALERT: Computer offline!");
}

/* 
if (shuttleSpeed > 17500) {
   console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
   console.log("ALERT: Cannot maintain orbit!");
} else {
   console.log("Stable speed");
}
*/

if (fuelLevel < 1000 || engineTemp > 3500 || engineIndicator === "red blinking") {
   console.log("ENGINE FAILURE IMMINENT!");
} else if (fuelLevel <= 5000 || engineTemp > 2500) {
   console.log("Check fuel level. Engines running hot.");
} else if (fuelLevel > 20000 && engineTemp <= 2500) {
   console.log("Full tank. Engines good.");
   if (engineIndicator != "red blinking") { 
      launchReady = true; 
   }
} else if (fuelLevel > 10000 && engineTemp <= 2500) {
   console.log("Fuel level is above 50%. Engines good.");
} else if (fuelLevel > 5000 || engineTemp <= 2500) {
   console.log("Fuel level is above 25%. Engines good.");
} else {
   console.log("Fuel and engine status pending...");
}

if (engineIndicator === "green") {
   console.log("Engines have started");
} else if (engineIndicator === "green blinking") {
   console.log("Engines are preparing to start");
} else if (engineIndicator === "red blinking") {
   console.log("WARNING: Check engines!");
} else {
   console.log("Engines are off");
}

if (launchReady) {
   console.log("Cleared to launch!");
} else {
   console.log("Launch scrubbed.");
}