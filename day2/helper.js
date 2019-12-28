const IntCodeProgram = require("./intCodeProgram");

exports.findAddresses = (expectedOutput, codes) => {
  let noun = 0;
  while (noun < 100) {
    let verb = 0;
    while (verb < 100) {
      const intCode = new IntCodeProgram(codes, { state: { noun, verb } });
      intCode.run();

      console.log({ verb, noun, zero: intCode.codes[0] });
      if (intCode.codes[0] === expectedOutput) {
        return 100 * noun + verb;
      }
      verb++;
    }
    noun++;
  }
  return NaN;
};
