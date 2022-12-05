const path = require("path");
const inputArray = require("../inputArray");

const inputFile = path.resolve(__dirname, "input.txt");
const data = inputArray(inputFile);
// separate each line -- is list of all items in rucksack

function partOne() {
  let sum = 0;
  let sharedItem = [];
  for (let i = 0; i < data.length; i++) {
    // divide each line in half
    const half = data[i].length / 2;

    const firstHalf = data[i].slice(0, half);
    const secondHalf = data[i].slice(half);
    // compare the two halves to find the matching letter
    for (let j = 0; j < firstHalf.length; j++) {
      if (secondHalf.includes(firstHalf[j])) {
        sharedItem.push(firstHalf[j]);
        break;
      }
    }
  }

  // find priority of the matching letter for each line
  // find sum of all the letters

  for (let k = 0; k < sharedItem.length; k++) {
    if (sharedItem[k] === sharedItem[k].toUpperCase()) {
      sum += sharedItem[k].charCodeAt() - 38;
    } else {
      sum += sharedItem[k].charCodeAt() - 96;
    }
  }
  //   console.log(sum);
}

partOne();

// const lowercaseMap = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
//   f: 6,
//   g: 7,
//   h: 8,
//   i: 9,
//   j: 10,
//   k: 11,
//   l: 12,
//   m: 13,
//   n: 14,
//   o: 15,
//   p: 16,
//   q: 17,
//   r: 18,
//   s: 19,
//   t: 20,
//   u: 21,
//   v: 22,
//   w: 23,
//   x: 24,
//   y: 25,
//   z: 26,
// };
// const uppercaseMap = {
//   A: 27,
//   B: 28,
//   C: 29,
//   D: 30,
//   E: 31,
//   F: 32,
//   G: 33,
//   H: 34,
//   I: 35,
//   J: 36,
//   K: 37,
//   L: 38,
//   M: 39,
//   N: 40,
//   O: 41,
//   P: 42,
//   Q: 43,
//   R: 44,
//   S: 45,
//   T: 46,
//   U: 47,
//   V: 48,
//   W: 49,
//   X: 50,
//   Y: 51,
//   Z: 52,
// };
