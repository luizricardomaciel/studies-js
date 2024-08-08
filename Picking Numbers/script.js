const a = [1, 1, 2, 2, 4, 4, 5, 5, 5];

function pickingNumbers(a) {
  let best = 0;
  a.forEach((element) => {
    let array = [];
    for (let i = 0; i < a.length; i++) {
      if (element - a[i] === 1 || element - a[i] === 0) {
        array.push(a[i]);
      }
    }
    console.log(array);
    if (array.length > best) {
      best = array.length;
    }
  });
  console.log(best);
}
pickingNumbers(a);
