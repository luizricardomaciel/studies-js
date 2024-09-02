const n = 25;
function extraLongFactorials(n) {
  let factor = n;
  let result = BigInt(n);

  for (let i = 1; i < n; i++) {
    result = result * BigInt(factor - i);
  }
  console.log(result.toString());
}
extraLongFactorials(n);
