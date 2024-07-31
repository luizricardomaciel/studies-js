const keyboards = [3, 1];
const drives = [5, 2, 8];
const b = 10;

function getMoneySpent(keyboards, drives, b) {
  let result = 0;
  let sum = 0;
  for (let i = 0; i < keyboards.length; i++) {
    let j = 0;
    while (j < drives.length) {
      sum = keyboards[i] + drives[j];
      if (sum <= b && sum > result) {
        result = sum;
      }
      j++;
    }
  }
  if (result === 0) {
    return -1;
  } else {
    return result;
  }
}
getMoneySpent(keyboards, drives, b);
