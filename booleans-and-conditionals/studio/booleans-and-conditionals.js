// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM"
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
const fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maxMassLimit = 850000;
let fuelTempC = -225;
let minFuelTemp = -300;
let maxFuelTemp = -150;
let fuelLevelPercentage = 100;
let weatherStatus = "clear";
let preparedForLiftoff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
// add logic below to verify all astronauts are ready
// add logic below to verify the total mass does not exceed the maximum limit of 850000
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
// add logic below to verify the fuel level is at 100%
// add logic below to verify the weather status is clear
if ( (astronautCount > 7) || 
 (astronautStatus !== "ready") ||
 (totalMassKg > maxMassLimit) ||
 ((fuelTempC < minFuelTemp) || (fuelTempC > maxFuelTemp)) ||
 (fuelLevelPercentage !== 100) ||
 (weatherStatus !== "clear") ) {
    preparedForLiftoff = false;
}

// Verify shuttle launch can proceed based on above conditions
console.log("------------------------------------",
"\nDATE: " + date, 
"\nTIME: " + time, 
"\nASTRONAUT COUNT: " + astronautCount,
"\nCREW MASS: " + crewMassKg,
"\nFUEL MASS: " + fuelMassKg,
"\nSHUTTLE MASS: " + shuttleMassKg,
"\nTOTAL MASS: " + totalMassKg,
"\nFUEL TEMPERATURE: " + fuelTempC,
"\nWEATHER STATUS: " + weatherStatus,
"\n------------------------------------");
if (preparedForLiftoff) {
    console.log("\nALL SYSTEMS ARE A GO! \nInitiating space shuttle launch sequence. \nHave a safe trip astronauts!")
} else {
    console.log("\nLaunch aborted!");
}