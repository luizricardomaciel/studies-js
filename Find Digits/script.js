const n = 1012;

function findDigits(n) {
  let numberString = n.toString();
  let count = 0;

  for (let i = 0; i < numberString.length; i++) {
    if (n % Number(numberString[i]) === 0) {
      count++;
    }
  }
  console.log(count);
}
findDigits(n);
