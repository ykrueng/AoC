const IntCodeProgram = require("./intCodeProgram");
const { findAddresses } = require("./helper");

const { getInputArray } = require("../utility");

const inputArr = getInputArray("day2/input.txt", ",");

exports.dayTwoPartOne = () => {
  const program = new IntCodeProgram(inputArr, {
    state: { noun: 12, verb: 2 }
  });
  program.run();
  const valueAt0 = program.codes[0];

  return `The value that is left at position 0 after the program halts is: ${valueAt0}`;
};

exports.dayTwoPartTwo = () => {
  const result = findAddresses(19690720, inputArr);

  return `After finding the input noun and verb that cause the program to produce the output 19690720, then 100 * noun + verb is: ${result}`;
};
