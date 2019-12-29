const IntCodeProgram = require("./intCodeProgram");

const inputs = [
  [[0], [0]],
  [
    [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50],
    [3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]
  ],
  [
    [1, 0, 0, 0, 99],
    [2, 0, 0, 0, 99]
  ],
  [
    [2, 3, 0, 3, 99],
    [2, 3, 0, 6, 99]
  ],
  [
    [2, 4, 4, 5, 99, 0],
    [2, 4, 4, 5, 99, 9801]
  ]
];

describe("Opcode1", () => {
  let intCode1 = null;
  let intCode2 = null;

  beforeEach(() => {
    intCode1 = new IntCodeProgram(inputs[1][0]);
    intCode2 = new IntCodeProgram(inputs[2][0]);
  });

  it("should adds together numbers read from two positions and stores the result in a third position", () => {
    let resultPos = intCode1.codes[3];
    intCode1.opCode1();
    expect(intCode1.codes[resultPos]).toEqual(70);

    resultPos = intCode2.codes[3];
    intCode2.opCode1();
    expect(intCode2.codes[resultPos]).toEqual(2);
  });

  it("should move its pointer 4 steps ahead", () => {
    intCode1.opCode1();
    expect(intCode1.pointer).toEqual(4);

    intCode2.opCode1();
    expect(intCode2.pointer).toEqual(4);
  });
});

describe("Opcode2", () => {
  let intCode1 = null;
  let intCode2 = null;

  beforeEach(() => {
    intCode1 = new IntCodeProgram(inputs[3][0]);
    intCode2 = new IntCodeProgram(inputs[4][0]);
  });

  it("should multiply together numbers read from two positions and stores the result in a third position", () => {
    let resultPos = intCode1.codes[3];
    intCode1.opCode2();
    expect(intCode1.codes[resultPos]).toEqual(6);

    resultPos = intCode2.codes[3];
    intCode2.opCode2();
    expect(intCode2.codes[resultPos]).toEqual(99 * 99);
  });

  it("should move its pointer 4 steps ahead", () => {
    intCode1.opCode2();
    expect(intCode1.pointer).toEqual(4);

    intCode2.opCode2();
    expect(intCode2.pointer).toEqual(4);
  });
});

describe("run command", () => {
  it("should produce a corect final code", () => {
    inputs.forEach(input => {
      const program = new IntCodeProgram(input[0]);
      program.run();

      expect(program.codes).toEqual(input[1]);
      expect(program.pointer).toEqual(input[0].length);
    });
  });
  it("should break with pointer set to input length", () => {
    inputs.forEach(input => {
      const program = new IntCodeProgram(input[0]);
      program.run();

      expect(program.pointer).toEqual(input[0].length);
    });
  });
});
