const path = require("path");
const inputArray = require("../inputArray");
const sample = path.resolve(__dirname, "sample.txt");
const sampleData = inputArray(sample);
const realFile = path.resolve(__dirname, "input.txt");
const realData = inputArray(realFile);

//how many trees are visible from outside the grid?
function partOne() {}

function partTwo() {}

module.exports = {
  partOne,
  partTwo,
};
