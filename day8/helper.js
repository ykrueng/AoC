exports.decodeSpaceImage = (strCodes, dimension = [25, 6]) => {
  const [width, height] = dimension;
  const layerLength = width * height;

  let minZero = layerLength;
  let oneCount = 0;
  let twoCount = 0;

  let currentZeroCount = 0;
  let currentOneCount = 0;
  let currentTwoCount = 0;

  let currentLayer = 1;

  for (let i = 0; i < strCodes.length; i++) {
    if (currentLayer * layerLength === i) {
      if (minZero > currentZeroCount) {
        minZero = currentZeroCount;
        oneCount = currentOneCount;
        twoCount = currentTwoCount;
      }

      currentZeroCount = 0;
      currentOneCount = 0;
      currentTwoCount = 0;
      currentLayer++;
    }
    if (strCodes[i] === "0") {
      currentZeroCount++;
    } else if (strCodes[i] === "1") {
      currentOneCount++;
    } else if (strCodes[i] === "2") {
      currentTwoCount++;
    }
  }

  return oneCount * twoCount;
};
