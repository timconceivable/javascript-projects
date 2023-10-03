const input = require('readline-sync');

let idNumbers = [291, 414, 503, 599, 796, 890];

// Code your selectRandomId function here:
function selectRandomId(idArray) {
  return idArray[Math.floor(Math.random()*idArray.length)];
}

function selectCrewIds(num) {
  let crewIds = [];
  while (crewIds.length < num) {
    const selectedId = selectRandomId(idNumbers);
    if (!crewIds.includes(selectedId)) {
      crewIds.push(selectedId);
    }
  }
  return crewIds;
}

// Code your buildCrewArray function here:
function buildCrewArray(crewIds,candidatesList) {
  let crewArray = [];
  for (index in candidatesList) {
    let animal = candidatesList[index];
    if (crewIds.includes(animal.astronautID)) {
      crewArray.push(animal);
    }
  }
  return crewArray;
}


// Here are the candidates and the 'candidatesList' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie Collie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonesy Ripley',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington Bear',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Master Oogway',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs McGee',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

function makeNamesString(crewArray) {
  names = "";
  for (index in crewArray) {
    if (crewArray.length > 1) {
      if (index == crewArray.length-1) {
        names += `and ${crewArray[index].name} are`;
      } else {
        names += `${crewArray[index].name}, `;
        if (crewArray.length < 3) {
          names = names.replace(",","");
        }
      }
    } else names = `${crewArray[index].name} is`;
  }
  return names;
}

let candidatesList = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
let candidatesNum = candidatesList.length;
let userNum = Number(input.question("How many crew members are required? "));
let abortMission = "n";
if (userNum > candidatesNum) { 
  userNum = candidatesNum; 
  abortMission = input.question(`There are only ${candidatesNum} candidates available. The mission may not succeed without the proper number of crew members. Would you like to abort mission? `);
}
if (abortMission.toLowerCase() === "n") {  
  let crew = buildCrewArray(selectCrewIds(userNum),candidatesList);
  let namesString = makeNamesString(crew);

  // Code your template literal and console.log statements:
  console.log(`${namesString} going to space!`);
} else console.log("MISSION ABORTED.")