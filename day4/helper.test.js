const { validateHasDouble, validateNeverDecrease } = require("./helper");

const input1 = 111111;
const input2 = 223450;
const input3 = 123789;

describe("the validateHasDouble", () => {
  it("should validate if input has double", () => {
    expect(validateHasDouble(input1.toString())).toEqual(true);
    expect(validateHasDouble(input2.toString())).toEqual(true);
    expect(validateHasDouble(input3.toString())).toEqual(false);
  });
  it("should validate if input has strict double", () => {
    expect(validateHasDouble((112233).toString(), true)).toEqual(true);
    expect(validateHasDouble((123444).toString(), true)).toEqual(false);
    expect(validateHasDouble((111122).toString(), true)).toEqual(true);
  });
});

describe("the validateNeverDecrease", () => {
  test("validateNeverDecrease", () => {
    expect(validateNeverDecrease(input1.toString())).toEqual(true);
    expect(validateNeverDecrease(input2.toString())).toEqual(false);
    expect(validateNeverDecrease(input3.toString())).toEqual(true);
    expect(validateNeverDecrease((112233).toString())).toEqual(true);
    expect(validateNeverDecrease((123444).toString())).toEqual(true);
    expect(validateNeverDecrease((111122).toString())).toEqual(true);
  });
});
