const fs = require("fs");
const path = require("path");
const IntCodeProgram = require("./intCodeProgram");

// read the input file
const inputStr = fs.readFileSync(path.join(__dirname, "./input.txt"), "utf-8");
// convert input string into array
const inputArr = inputStr
  .trim()
  .split(",")
  .map(e => parseInt(e));

exports.dayTwoPartOne = () => {
  const program = new IntCodeProgram(inputArr, {
    state: { noun: 12, verb: 2 }
  });
  program.run();
  const valueAt0 = program.codes[0];

  return `The value that is left at position 0 after the program halts is: ${valueAt0}`;
};
