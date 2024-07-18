const n = 6;
const k = 3;
let ar = [1, 3, 2, 6, 1, 2];

function divisibleSumPairs(n, k, ar) {
  let sum = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 1; j < n; j++) {
      if (i < j && (ar[i] + ar[j]) % k === 0) {
        sum++;
      }
    }
  }
  console.log(sum);
}
divisibleSumPairs(n, k, ar);
