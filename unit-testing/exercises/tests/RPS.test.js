const whoWon = require('../RPS.js');

describe("whoWon", function() {

    test("checks who wins RPS", function() {
        expect(whoWon("rock","rock")).toEqual("TIE!");
        expect(whoWon("rock","paper")).toEqual("Player 2 wins!");
        expect(whoWon("paper","scissors")).toEqual("Player 2 wins!");
        expect(whoWon("scissors","rock")).toEqual("Player 2 wins!");
    });
    
 });