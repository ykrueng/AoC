const { decodeSpaceImage } = require("./helper");

const input = "1203475487120047548712034054871203405487";

describe("A program to decode space image", () => {
  test("decodeSpaceImage", () => {
    const code = decodeSpaceImage(input, [5, 2]);
    expect(code).toEqual(1)
  });
});
