const checkFive = require('../checkFive.js');

describe("checkFive", function() {

   test("checks whether number is less than 5", function() {
        //code here...
        expect(checkFive(2)).toEqual("2 is less than 5.");
        expect(checkFive(5)).toEqual("5 is equal to 5.");
        expect(checkFive(7)).toEqual("7 is greater than 5.");
   });

});