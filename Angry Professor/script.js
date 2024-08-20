const k = 2;
const a = [0, -1, 2, 1];

function angryProfessor(k, a) {
  let count = 0;
  for (let i = 0; i < a.length && count <= k; i++) {
    if (a[i] <= 0) {
      count++;
    }
  }
  if (count < k) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
angryProfessor(k, a);
