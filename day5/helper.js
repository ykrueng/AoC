const IntCodeProgram = require("../intCode/intCodeProgram");

exports.runDiagnosticProgram = (codes, config) => {
  const intCode = new IntCodeProgram(codes, config);

  let result = [intCode.run()];

  while (intCode.halted) {
    const currentResult = intCode.continue();
    if (typeof currentResult === "number") {
      result.push(currentResult);
    }
  }

  const isValid = result
    .slice(0, result.length - 1)
    .every(number => number === 0);

  return isValid && result[result.length - 1];
};
