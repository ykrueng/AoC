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

exports.decodeMessage = (strCodes, dimension = [25, 6]) => {
  const [width, height] = dimension;
  const layerLength = width * height;

  let output = "";
  let row = 1;

  for (let i = 0; i < layerLength; i++) {
    if (row * width === i) {
      output += "\n";
      row++;
    }

    let layer = 1;
    let color = strCodes[i];

    while (color === "2") {
      if (layer * layerLength + i >= strCodes.length) break;
      color = strCodes[layer * layerLength + i];
      layer++;
    }
    output += color;
  }
  return output;
};

exports.paintMessage = strCodes => {
  const message = this.decodeMessage(strCodes);
  let image = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i] === "0") {
      image += " ";
    } else if (message[i] === "1") {
      image += "0";
    } else {
      image += message[i];
    }
  }
  console.log(image);
};
