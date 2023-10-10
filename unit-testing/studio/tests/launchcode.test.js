// launchcode.test.js code:
const launchcode = require('../index.js');

// Write your unit tests here!
describe("Testing launchcode", function(){

  test("checks that the value of organization is 'nonprofit'", 
  function() {
    expect(launchcode.organization).toEqual("nonprofit");
  });

  test("checks that the value of executiveDirector is equal to 'Jeff'", function() {
    expect(launchcode.executiveDirector).toEqual("Jeff");
  });

  test("checks that percentageCoolEmployees is equal to 100", function() {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });

  test("checks values of the programsOffered array and that it's length is 3", function() {
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
    expect(launchcode.programsOffered).toHaveLength(3);
  });

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
  
  test("checks that the launchOutput function returns the correct strings", function() {
    for (let i in expectedOutput) {
      expect(launchcode.launchOutput(i)).toEqual(expectedOutput[i]); 
    }
  });


});