const n = 9;
const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
let hightScore = 0;
let lowestScore = 0;

function brakingRecords(scores) {
  let lowest = scores[0];
  let highest = scores[0];
  for (let i = 1; i < n; i++) {
    if (lowest > scores[i]) {
      lowest = scores[i];
      lowestScore++;
    } else {
      if (highest < scores[i]) {
        highest = scores[i];
        hightScore++;
      }
    }
  }
  const result = [hightScore, lowestScore];
  console.log(result);
  return result;
}

brakingRecords(scores);
