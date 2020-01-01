const IntCodeProgram = require("../intCode/intCodeProgram");

exports.runBOOST = codes => {
  const intCode = new IntCodeProgram(codes, { input: 1 });

  let current = intCode.run();
  let output = null;
  while (typeof current === "number") {
    output = current;
    current = intCode.continue();
    if (intCode.halted) {
      console.log({ output });
    }
  }
  return output;
};
