//Part Two Section One
let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.
console.log(dna);

//1) Use the .trim() method to remove the leading and trailing whitespace, then print the result.
console.log(dna.trim());

//2) Change all of the letters in the dna string to UPPERCASE, then print the result.
console.log(dna.toUpperCase());

//3) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.
dna = dna.trim().toUpperCase();
console.log(dna,"\n");

//Part Two Section Two

let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//1) Replace the gene "GCT" with "AGG", and then print the altered strand.
dnaTwo = dnaTwo.replace("GCT","AGG");
console.log(dnaTwo);

//2) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".
if (dnaTwo.indexOf("CAT") !== -1) {
    console.log("CAT gene found");
} else console.log("CAT gene NOT found");

//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
console.log(dnaTwo.slice(4*(5-1), 4*(6-1)-1));

//4) Use a template literal to print, "The DNA strand is ___ characters long."
console.log(`The DNA strand is ${dnaTwo.length} characters long.`);

//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
dnaTwo = dnaTwo.toLowerCase();
let tacIndex = dnaTwo.indexOf("tac");
let tac = dnaTwo.slice(tacIndex,tacIndex+3);
let catIndex = dnaTwo.indexOf("cat");
let cat = dnaTwo.slice(catIndex,catIndex+3);
console.log(`${tac}o ${cat}`);