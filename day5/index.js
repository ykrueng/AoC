const { runDiagnosticProgram } = require("./helper");

const { getInputArray } = require("../utility");

const inputArr = getInputArray("day5/input.txt", ",");

exports.dayFivePartOne = () => {
  const config = {
    input: 1
  };
  const result = runDiagnosticProgram(inputArr, config);

  return `After providing 1 to the only input instruction and passing all the tests, the diagnostic code that the program produce is: ${result}`;
};

exports.dayFivePartTwo = () => {
  const config = {
    input: 5
  };
  const result = runDiagnosticProgram(inputArr, config);

  return `After providing 5 to the only input instruction and passing all the tests, the diagnostic code that the program produce is: ${result}`;
};
