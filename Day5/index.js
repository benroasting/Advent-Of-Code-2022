const path = require("path");
const inputArray = require("../inputArray");
const sample = path.resolve(__dirname, "sample.txt");
const sampleData = inputArray(sample);

let sampleStack = {
  1: ["Z", "N", "D"],
  2: ["M", "C"],
  3: ["P"],
};

let dataStack = {
  1: ["R", "G", "H", "Q", "S", "B", "T", "N"],
  2: ["H", "S", "F", "D", "P", "Z", "J"],
  3: ["Z", "H", "V"],
  4: ["M", "Z", "J", "F", "G", "H"],
  5: ["T", "Z", "C", "D", "L", "M", "S", "R"],
  6: ["M", "T", "W", "V", "H", "Z", "J"],
  7: ["T", "F", "P", "L", "Z"],
  8: ["Q", "V", "W", "S"],
  9: ["W", "H", "L", "M", "T", "D", "N", "C"],
};

class Stack {
  constructor() {
    this.data = [];
  }

  push(crate) {
    this.data.push(crate);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
module.exports = Stack;
