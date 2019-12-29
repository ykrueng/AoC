const { orbitCountChecksums } = require("./helper");

const input = `COM)B
B)C
C)D
D)E
E)F
B)G
G)H
D)I
E)J
J)K
K)L`;

const inputArr = input.trim().split("\n");

describe("The function to get orbit count checksums", () => {
  test("orbitCountChecksums", () => {
    const checksums = orbitCountChecksums(inputArr);
    expect(checksums).toEqual(42);
  });
});
