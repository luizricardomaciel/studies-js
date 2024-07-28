const arr = [2, 4, 3, 2, 3, 1, 2, 1, 3, 3];

const migratoryBirds = (arr) => {
  let birdscount = {};
  let maxCount = 0;
  let result = 0;

  for (let i of arr) {
    if (birdscount[i]) {
      birdscount[i]++;
    } else {
      birdscount[i] = 1;
    }
    git;
  }

  for (bird in birdscount) {
    if (birdscount[bird] > maxCount) {
      maxCount = birdscount[bird];
      result = bird;
    }
  }
  console.log(result);
};

migratoryBirds(arr);
