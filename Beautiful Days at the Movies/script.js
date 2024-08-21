const i = 13;
const j = 45;
const k = 3;

function beautifulDays(i, j, k) {
  function reverseNumber(number) {
    let reverse = i.toString();
    reverse = reverse.split("").reverse().join("");
    return parseInt(reverse);
  }

  let result = 0;
  while (i <= j) {
    let reverse = reverseNumber(i);
    let difference = Math.abs(i - reverse);

    if (difference % k === 0) {
      result++;
    }

    i++;
  }

  console.log(result);
}
beautifulDays(i, j, k);
