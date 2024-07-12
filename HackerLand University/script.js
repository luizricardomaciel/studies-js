let a = [38, 44, 58, 44, 23, 12, 51, 93, 99, 57, 38];

function organize(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 < 39 || arr[i] + 2 < 39) {
    } else {
      let guardado = arr[i];
      while (guardado % 5 != 0) {
        guardado++;
      }
      arr[i] = guardado;
    }
  }
  return a;
}

console.log(organize(a));
