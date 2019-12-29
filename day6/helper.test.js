const { orbitCountChecksums, getMinTransferToSan } = require("./helper");

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

const sanInput = `
COM)B
B)C
C)D
D)E
E)F
B)G
G)H
D)I
E)J
J)K
K)L
K)YOU
I)SAN
`

const inputArr = input.trim().split("\n");
const sanInputArr = sanInput.trim().split("\n");

describe("The function to get orbit count checksums", () => {
  test("orbitCountChecksums", () => {
    const checksums = orbitCountChecksums(inputArr);
    expect(checksums).toEqual(42);
  });
});

describe("The function to get orbit count from you to san", () => {
  test("orbitCountChecksums", () => {
    const min = getMinTransferToSan(sanInputArr);
    expect(min).toEqual(4);
  });
});
