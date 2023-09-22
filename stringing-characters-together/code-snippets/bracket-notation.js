let jsCreator = "Brendan Eich";
console.log(jsCreator[-1]);
console.log(jsCreator[42]);

let myStr = "Index";
console.log(myStr[6]);
if (myStr[2] === 'n') { console.log("n"); }
if (myStr[4] === 'x') { console.log("x"); }
if (myStr[6] === ' ') { console.log(" "); }
if (myStr[0] === 'I') { console.log("I"); }

let phrase = "JavaScript rocks!";
console.log(phrase[phrase.length - 8]);

cityName = "Vienna";
stateName = "Virginia";
location = cityName + ", " + stateName
console.log(location.length)

let language = "JavaScript";
console.log(language.slice(1,6));
language = language.replace('J', 'Q');
language = language.slice(0,5);
console.log(language);

const classes = ["science", "computer", "art"];
const teachers = ["Jones", "Willoughby", "Rhodes"];
console.log(classes.length);
console.log(teachers.length);

let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);

str = 'LaunchCode students rock!'
console.log(str.split(" ")); 


/* let pluralNoun = ;
let name = ;
let verb = ;
let adjective = ;
let color = ;

console.log("JavaScript provides a "+ color +" collection of tools — including " + adjective + " syntax and " + pluralNoun + " — that allows "+ name +" to "+ verb +" with strings.") */