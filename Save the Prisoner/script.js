const n = 7;
const m = 19;
const s = 2;

function saveThePrisoner(n, m, s) {
  m -= 1;
  s += m;

  while (s > n) {
    s -= n;
  }

  console.log(s);
}
saveThePrisoner(n, m, s);
