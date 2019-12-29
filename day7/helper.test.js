const { runACS, findMaxThruster } = require("./helper");

const input1 = [3, 15, 3, 16, 1002, 16, 10, 16, 1, 16, 15, 15, 4, 15, 99, 0, 0];
const input2 = [
  3,
  23,
  3,
  24,
  1002,
  24,
  10,
  24,
  1002,
  23,
  -1,
  23,
  101,
  5,
  23,
  23,
  1,
  24,
  23,
  23,
  4,
  23,
  99,
  0,
  0
];
const input3 = [
  3,
  31,
  3,
  32,
  1002,
  32,
  10,
  32,
  1001,
  31,
  -2,
  31,
  1007,
  31,
  0,
  33,
  1002,
  33,
  7,
  33,
  1,
  33,
  31,
  31,
  1,
  32,
  31,
  31,
  4,
  31,
  99,
  0,
  0,
  0
];

describe("Amplification Control System", () => {
  test("runACS", () => {
    let output = runACS(input1, [4, 3, 2, 1, 0], 0);
    expect(output).toEqual(43210);
    output = runACS(input2, [0, 1, 2, 3, 4], 0);
    expect(output).toEqual(54321);
    output = runACS(input3, [1, 0, 4, 3, 2], 0);
    expect(output).toEqual(65210);
  });
});

describe("The function to get max thruster", () => {
  test("findMaxThruster", () => {
    let output = findMaxThruster(input1);
    expect(output).toEqual(43210);
    output = findMaxThruster(input2);
    expect(output).toEqual(54321);
    output = findMaxThruster(input3);
    expect(output).toEqual(65210);
  });
});
