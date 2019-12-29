const { validateHasDouble, validateNeverDecrease } = require("./helper");

const input1 = 111111;
const input2 = 223450;
const input3 = 123789;

describe("the validateHasDouble", () => {
  test("validateHasDouble", () => {
    expect(validateHasDouble(input1.toString())).toEqual(true);
    expect(validateHasDouble(input2.toString())).toEqual(true);
    expect(validateHasDouble(input3.toString())).toEqual(false);
  });
});

describe("the validateNeverDecrease", () => {
  test("validateNeverDecrease", () => {
    expect(validateNeverDecrease(input1.toString())).toEqual(true);
    expect(validateNeverDecrease(input2.toString())).toEqual(false);
    expect(validateNeverDecrease(input3.toString())).toEqual(true);
  });
});
