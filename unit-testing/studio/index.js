
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function(num) {
    let divisors = {
      2: "Launch",
      3: "Code",
      5: "Rocks",
    }
    let message = ""
    for (let i in divisors) {
      if (num % i === 0) {
        message += divisors[i];
      }
    }
    if (message === "") {
      message = "Rutabagas! That doesn't work."
    }
    if (!message.includes("!")) {
      message += "!";
    }
    if (message.includes("hR")) {
      message += " (CRASH!!!!)";
    }
    if (message.indexOf("R") > 0) {
      message = message.replace("R"," R");
    }

    return message;
  }
}

/* 
for (i=0; i < 31; i++) {
  console.log(i, launchcode.launchOutput(i));
}

let expectedOutput = {
  1: "Rutabagas! That doesn't work.",
  2: "Launch!",
  3: "Code!",
  5: "Rocks!",
  6: "LaunchCode!",
  10: "Launch Rocks! (CRASH!!!!)",
  15: "Code Rocks!",
  30: "LaunchCode Rocks!"
};

for (let i in expectedOutput) {
  console.log(i);
  console.log(expectedOutput.i);
  console.log(expectedOutput[i]);
}
*/

module.exports = launchcode;