const x = 1;
const y = 3;
const z = 2;

function catAndMouse(x, y, z) {
  let positionX = 0;
  let positionY = 0;

  if (x < z) {
    positionX = z - x;
  } else {
    positionX = x - z;
  }
  if (y < z) {
    positionY = z - y;
  } else {
    positionY = y - z;
  }

  if (positionX < positionY) {
    console.log("Cat A");
  } else if (positionY < positionX) {
    console.log("Cat B");
  }

  if (positionX === positionY) {
    console.log("Mouse C");
  }
}

catAndMouse(x, y, z);
