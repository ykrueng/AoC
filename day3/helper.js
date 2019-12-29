exports.getMinSteps = str => {
  const { wire1, wire2 } = parseWires(str);

  if (wire1 === null || wire2 === null) throw "Invalid input string";

  const pathMap = getPathMap(wire1);
  const shortest = traversePath(wire2, pathMap);

  return shortest;
};

exports.getClosestDistance = str => {
  const { wire1, wire2 } = parseWires(str);

  if (wire1 === null || wire2 === null) throw "Invalid input string";

  const path1 = getWirePath(wire1);
  const path2 = getWirePath(wire2);

  let closestPath = null;

  path1.forEach(node => {
    if (path2.has(node)) {
      const intersection = node.split(",");
      const distance =
        Math.abs(parseInt(intersection[0])) +
        Math.abs(parseInt(intersection[1]));

      if (!closestPath || distance < closestPath) {
        closestPath = distance;
      }
    }
  });

  return closestPath;
};

function parseWires(str) {
  let wires = [];
  let wire1 = null;
  let wire2 = null;

  if (typeof str === "string") {
    wires = str.trim().split("\n");
  }

  if (wires.length === 2) {
    wire1 = wires[0].trim().split(",");
    wire2 = wires[1].trim().split(",");
  }

  return { wire1, wire2 };
}

function parseMove(str) {
  let direction = null;
  let distance = null;

  const isValidInput = typeof str === "string" && str.length >= 2;
  const isValidDirection =
    isValidInput && ["R", "L", "U", "D"].includes(str[0]);
  const isValidDistance = isValidInput && !isNaN(parseInt(str.slice(1)));

  if (isValidDirection && isValidDistance) {
    direction = str[0];
    distance = parseInt(str.slice(1));
  }

  return { direction, distance };
}

function getWirePath(wire) {
  const pathSet = new Set();
  let currentNode = [0, 0];
  if (wire.length === 0) return pathSet;

  for (move of wire) {
    addNodes(move);
  }

  function addNodes(move) {
    const { direction, distance } = parseMove(move);

    if (direction === null || distance === null) {
      throw `Invalid move: ${move}`;
    }

    for (i = 0; i < distance; i++) {
      addNode(direction);
    }
  }

  function addNode(direction) {
    switch (direction) {
      case "R":
        currentNode[0] += 1;
        break;
      case "L":
        currentNode[0] -= 1;
        break;
      case "U":
        currentNode[1] += 1;
        break;
      case "D":
        currentNode[1] -= 1;
        break;
    }
    pathSet.add(`${currentNode[0]},${currentNode[1]}`);
  }

  return pathSet;
}

function getPathMap(wire) {
  const pathMap = new Map();
  if (wire.length === 0) return pathMap;

  let currentNode = [0, 0];
  let stepCount = 0;

  for (move of wire) {
    addNodes(move);
  }

  function addNodes(move) {
    const { direction, distance } = parseMove(move);

    if (direction === null || distance === null) {
      throw `Invalid move: ${move}`;
    }

    for (i = 0; i < distance; i++) {
      addNode(direction);
    }
  }

  function addNode(direction) {
    switch (direction) {
      case "R":
        currentNode[0] += 1;
        break;
      case "L":
        currentNode[0] -= 1;
        break;
      case "U":
        currentNode[1] += 1;
        break;
      case "D":
        currentNode[1] -= 1;
        break;
    }
    stepCount += 1;
    const distance = Math.abs(currentNode[0]) + Math.abs(currentNode[1]);

    const nodes = pathMap.get(distance) || [];

    pathMap.set(distance, [...nodes, [[...currentNode], stepCount]]);
  }

  return pathMap;
}

function traversePath(wire, pathMap) {
  if (wire.length === 0) return NaN;

  let currentNode = [0, 0];
  let stepCount = 0;
  let shortest = null;

  for (move of wire) {
    traverseMoves(move);
  }

  function traverseMoves(move) {
    const { direction, distance } = parseMove(move);

    if (direction === null || distance === null) {
      throw `Invalid move: ${move}`;
    }

    for (i = 0; i < distance; i++) {
      traverseMove(direction);
    }
  }

  function traverseMove(direction) {
    switch (direction) {
      case "R":
        currentNode[0] += 1;
        break;
      case "L":
        currentNode[0] -= 1;
        break;
      case "U":
        currentNode[1] += 1;
        break;
      case "D":
        currentNode[1] -= 1;
        break;
    }
    stepCount += 1;
    const distance = Math.abs(currentNode[0]) + Math.abs(currentNode[1]);
    const sameDistance = pathMap.get(distance);

    if (!sameDistance) {
      return;
    }

    const intersect = sameDistance.find(
      node => node[0][0] === currentNode[0] && node[0][1] === currentNode[1]
    );

    if (intersect) {
      const totalSteps = intersect[1] + stepCount;
      if (!shortest || shortest > totalSteps) {
        shortest = totalSteps;
      }
    }
  }

  return shortest;
}
