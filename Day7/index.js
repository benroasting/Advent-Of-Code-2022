const path = require("path");
const inputArray = require("../inputArray");
const sample = path.resolve(__dirname, "sample.txt");
const sampleData = inputArray(sample);
const realFile = path.resolve(__dirname, "input.txt");
const realData = inputArray(realFile);

//determine the total size of each directory
//find all of the directories with a total size of at most 100000
//calculate the sum of total sizes
console.log(sampleData);
