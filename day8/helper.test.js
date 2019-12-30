const { decodeSpaceImage, decodeMessage } = require("./helper");

const input = "1203475487120047548712034054871203405487";
const image = "0222112222120000";

describe("A program to decode space image", () => {
  test("decodeSpaceImage", () => {
    const code = decodeSpaceImage(input, [5, 2]);
    expect(code).toEqual(1);
  });
});

describe("A program to decode message", () => {
  test("decodeMessage", () => {
    const code = decodeMessage(image, [2, 2]);
    expect(code).toEqual("01\n10");
  });
});
