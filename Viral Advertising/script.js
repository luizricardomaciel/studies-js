const n = 5;

function viralAdvertising(n) {
  let liked = 2;
  let cumulative = 2;
  for (let i = 1; i < n; i++) {
    liked = Math.floor((liked * 3) / 2);
    cumulative += liked;
  }
  console.log(cumulative);
}
viralAdvertising(n);
