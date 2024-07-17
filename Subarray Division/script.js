const bar = [1, 2, 1, 3, 4];
const d = 7;
const m = 2;

function SubarrayDivision(bar, d, m) {
  let sum = 0;
  let count = 0;

  for (let index = 0; index <= bar.length - m; index++) {
    for (let index2 = 0; index2 < m; index2++) {
      sum = sum + bar[index + index2];
    }
    if (sum === d) {
      count++;
    }
    sum = 0;
  }
  console.log(count);
}
SubarrayDivision(bar, d, m);
