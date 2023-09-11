// Declare and assign the variables below
const shuttle_name = "Determination";
let shuttle_speed_mph = 17500;
const mi_per_km = 0.621;
const km_to_mars = 225000000;
const km_to_moon = 384400;

// Use console.log to print the 'typeof' each variable. Print one item per line.
/*console.log(typeof shuttle_name);
console.log(typeof shuttle_speed_mph);
console.log(typeof km_to_mars);
console.log(typeof km_to_moon);
console.log(typeof mi_per_km);
*/

// Calculate a space mission below
const mi_to_mars = km_to_mars * mi_per_km;
let hours_to_mars = mi_to_mars / shuttle_speed_mph;
let days_to_mars = hours_to_mars / 24;

// Print the results of the space mission calculations below
console.log(shuttle_name, "will take", days_to_mars, "to reach Mars");

// Calculate a trip to the moon below
const mi_to_moon = km_to_moon * mi_per_km;
let hours_to_moon = mi_to_moon / shuttle_speed_mph;
let days_to_moon = hours_to_moon / 24;

// Print the results of the trip to the moon below
console.log(shuttle_name, "will take", days_to_moon, "to reach the Moon");