const s = 5;
const t = 8;
const a = 4;
const b = 12;

const apples = [7, 11, 5, 15, 3, 2];
const oranges = [-2, 2, 1, 5, -6];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let sumApples = 0;
  let sumOranges = 0;

  for (let apple of apples) {
    if (apple >= 0) {
      if (apple + a >= s && apple + a <= t) {
        sumApples++;
      }
    }
  }
  console.log(sumApples);
  for (let orange of oranges) {
    if (orange <= 0) {
      if (orange + b >= s && orange + b <= t) {
        sumOranges++;
      }
    }
  }
  console.log(sumOranges);
}

countApplesAndOranges(s, t, a, b, apples, oranges);
