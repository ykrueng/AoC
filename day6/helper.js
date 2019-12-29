function parseOrbitMap(orbitMap) {
  const orbitMapMap = {};

  orbitMap.forEach(map => {
    const [key, value] = map.split(")");
    if (orbitMapMap[key]) {
      orbitMapMap[key].push(value);
    } else {
      orbitMapMap[key] = [value];
    }
  });

  return orbitMapMap;
}

exports.orbitCountChecksums = orbitMap => {
  if (orbitMap.length < 2) throw "Invalid orbit map";

  const orbitMapMap = parseOrbitMap(orbitMap);
  if (!orbitMapMap["COM"]) throw "Invalid orbit map";

  let transferCount = 0;
  const traverseArr = [...orbitMapMap["COM"]].map(obj => [obj, 1]);

  while (traverseArr.length) {
    const currentObj = traverseArr.shift();
    transferCount += currentObj[1];
    if (orbitMapMap[currentObj[0]]) {
      orbitMapMap[currentObj[0]].forEach(obj => {
        traverseArr.push([obj, currentObj[1] + 1]);
      });
    }
  }

  return transferCount;
};

exports.getMinTransferToSan = orbitMap => {
  if (orbitMap.length < 2) throw "Invalid orbit map";

  const orbitMapMap = parseOrbitMap(orbitMap);
  if (!orbitMapMap["COM"]) throw "Invalid orbit map";

  const santa = getPath("SAN", orbitMapMap);
  const you = getPath("YOU", orbitMapMap);
  const commonPathCount = getCommonPathCount(santa, you);

  return santa.length + you.length - 2 - 2 * commonPathCount;
};

function getPath(strObj, orbitMapMap) {
  let traverseArr = [...orbitMapMap["COM"]].map(obj => [obj, ["COM"]]);

  while (traverseArr.length) {
    const currentObj = traverseArr.shift();

    if (currentObj[0] === strObj) {
      return currentObj[1];
    } else if (orbitMapMap[currentObj[0]]) {
      orbitMapMap[currentObj[0]].forEach(obj => {
        traverseArr.unshift([obj, [...currentObj[1], currentObj[0]]]);
      });
    }
  }
}

function getCommonPathCount(path1, path2) {
  if (path1[0] !== path2[0]) return 0;

  for (i = 1; i < path1.length && i < path2.length; i++) {
    if (path1[i] !== path2[i]) return i - 1;
  }
  return i - 1;
}
