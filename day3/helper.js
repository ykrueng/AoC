exports.getClosestIntersection = str => {
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
