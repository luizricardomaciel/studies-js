const c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];
const k = 3;

function jumpingOnClouds(c, k) {
  const n = c.length;
  let energy = 100; // Energia inicial
  let i = 0;

  while (true) {
    i = (i + k) % n;
    if (c[i] === 1) {
      energy -= 2;
    }
    energy -= 1;

    if (i === 0) {
      break;
    }
  }

  console.log(energy);
}
jumpingOnClouds(c, k);
