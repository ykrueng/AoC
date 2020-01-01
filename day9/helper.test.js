const IntCodeProgram = require("../intCode/intCodeProgram");

const inputs = [
  [109, 1, 204, -1, 1001, 100, 1, 100, 1008, 100, 16, 101, 1006, 101, 0, 99],
  [1102, 34915192, 34915192, 7, 4, 7, 99, 0],
  [104, 1125899906842624, 99]
];

describe("the relative mode of intCode", () => {
  test("opcode2", () => {
    let input = [...inputs[0]];
    let intCode = new IntCodeProgram(input);

    let output = intCode.run();
    for (let i = 0; i < input.length; i++) {
      expect(output).toEqual(input[i]);
      output = intCode.continue();
    }
  });
});

describe("intCode with big numbers", () => {
  test("running big number", () => {
    let input = [...inputs[1]];
    let intCode = new IntCodeProgram(input);
    let output = intCode.run();
    expect(output.toString().length).toEqual(16);
    intCode.continue();

    input = [...inputs[2]];
    intCode = new IntCodeProgram(input);
    output = intCode.run();
    expect(output.toString()).toEqual(input[1].toString());
    intCode.continue();
  });
});
