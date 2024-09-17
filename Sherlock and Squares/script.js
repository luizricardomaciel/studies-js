const a = 24;
const b = 49;

function squares(a, b) {
  let result = 0;
  let i = 0;
  let j = 0;
  while (j <= b) {
    j = i * i;
    if (j >= a && j <= b) {
      result++;
    }
    i++;
  }
  console.log(result);
}
squares(a, b);
