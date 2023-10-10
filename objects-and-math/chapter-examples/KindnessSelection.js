function randomSelection(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];

let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];

for (let i=0; i < 1; i++){
  console.log(randomSelection(happiness));
}
console.log("");

 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
for (let i=0; i < 6; i++){
  if (i < 3) {
    console.log(randomSelection(happiness));
  } else console.log(randomSelection(words));
}
console.log("");

 //b) Have the code randomly pick one array, and then print 2 random items from it.
let arrays = [happiness, words];
let arr = randomSelection(arrays);
console.log(randomSelection(arr));
console.log(randomSelection(arr));

console.log("");

 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.

let newArr = [];
for (let i in arrays) {
  newArr.push(randomSelection(arrays[i]));
}
console.log(newArr);