const input = require('readline-sync');
let exercise = Number(input.question("Which exercise should I print (1 - 3)? "));
exercise = Math.floor(Number(exercise));
while (isNaN(exercise) || exercise < 0 || exercise > 3) {
  exercise = Number(input.question("No, really.  Which exercise should I print? You can type 1, 2, or 3 only. "));
  exercise = Math.floor(Number(exercise));
}

/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
if (exercise === 1) {
  let part = input.question("Which part should I print (a - d)? ");
  if (part === "a") {
    for (let i=0; i < 21; i++) { 
      process.stdout.write(`${i} `);
    }
  } else if (part === "b") {
    for (let i=3; i < 30; i++) { 
      if (i % 2 !== 0) { 
        process.stdout.write(`${i} `);
      }
    }
  } else if (part === "c") {
    for (let i=12; i > -15; i--) { 
      if (i % 2 === 0) { 
        process.stdout.write(`${i} `);
      }
    }
  } else if (part === "d") {
    for (let i=50; i > 20; i--) { 
      if (i % 3 === 0) { 
        process.stdout.write(`${i} `); 
      } 
    }
  } else { 
    console.log("invalid input. follow directions.")
  }
}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
if (exercise === 2) {  
  let lc = "LaunchCode";
  let array2 = [1, 5, "LC101", "blue", 42];
  // let newstr = "";
  for (let i=0; i < array2.length; i++) {
    process.stdout.write(`${array2[i]} `);
  }
  // console.log(newstr);
  for (let i=0; i < lc.length; i++) {
    process.stdout.write(`${lc[i]} `);
  }
}
/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
if (exercise === 3) {
  let array3 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let even = [];
  let odd = [];
  for (let i=0; i < array3.length; i++) {
    if (array3[i] % 2 === 0) {
  even.push(array3[i]);
    } else odd.push(array3[i]);
  }
  console.log("even:",even,"\nodd:",odd);
}