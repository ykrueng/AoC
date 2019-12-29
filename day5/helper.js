const IntCodeProgram = require("../intCode/intCodeProgram");

exports.runDiagnosticProgram = codes => {
  const config = {
    input: 1
  };

  const intCode = new IntCodeProgram(codes, config);

  let result = intCode.run();

  while (intCode.halted) {
    const currentResult = intCode.continue();
    if (typeof currentResult === "number") {
      console.log("result: ", currentResult);
      result = currentResult;
    }
  }

  return result;
};
