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
