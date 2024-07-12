let a = [38, 44, 58, 44, 23, 12, 51, 93, 99, 57, 38];

function organize(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 < 39 || arr[i] + 2 < 39) {
    } else {
      if ((arr[i] + 1) % 5 == 0) {
        a[i] = arr[i] + 1;
      } else {
        if ((arr[i] + 2) % 5 == 0) {
          a[i] = arr[i] + 2;
        }
      }
    }
  }
  return a;
}

console.log(organize(a));
