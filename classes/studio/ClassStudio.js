//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

    addScore(score) {
        this.scores.push(score);
    }

    average() {
        let total = 0;
        for (let i in this.scores) {
            total += this.scores[i];
        }
        return Math.round((total / this.scores.length)*10)/10;
    }

    status() {
        let avg = this.average();
        if (avg >= 90) {
            return "Accepted"
        } else if (avg >= 80) {
            return "Reserve"
        } else if (avg >= 70) {
            return "Probationary"
        } else return "Rejected"
    }
}

let bubba = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merry = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let glad = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);
let candidatesList = [bubba, merry, glad];

/* for (let i in candidatesList) {
    console.log(`${candidatesList[i].name} earned an average test score of ${candidatesList[i].average()}% and has a status of ${candidatesList[i].status()}.`);
} */

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let reserve = 0;
while (glad.average() < 80) {
    glad.addScore(100);
    reserve++;
}
console.log(`perfect scores to be accepted: ${reserve}`);

let accepted = reserve;
while (glad.average() < 90) {
    glad.addScore(100);
    accepted++;
}
console.log(`perfect scores to be accepted: ${accepted}`);