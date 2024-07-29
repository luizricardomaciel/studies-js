const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(ar) {
  let pairs = {};

  for (let socks of ar) {
    if (pairs[socks]) {
      pairs[socks]++;
    } else {
      pairs[socks] = 1;
    }
  }

  let sum = 0;
  for (let key in pairs) {
    pairs[key] = Math.floor(pairs[key] / 2);
    sum += pairs[key];
  }
  console.log(sum);
}
sockMerchant(ar);
