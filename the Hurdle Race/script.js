const height = [1, 6, 3, 5, 2];
const k = 4;

function hurdleRace(k, height) {
  let maxNumber = 0;
  let result;
  for (let i = 0; i < height.length; i++) {
    if (maxNumber < height[i]) {
      maxNumber = height[i];
    }
  }
  if (maxNumber - k <= 0) {
    result = 0;
  } else {
    result = maxNumber - k;
  }
  console.log(result);
}

hurdleRace(k, height);
