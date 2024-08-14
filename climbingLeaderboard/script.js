const ranked = [100, 100, 50, 25, 20, 10];
const player = [5, 25, 50, 120];

function climbingLeaderboard(ranked, player) {
  let uniqueRanked = [...new Set(ranked)];
  let result = [];
  let i = uniqueRanked.length - 1;

  player.forEach((element) => {
    while (i >= 0 && element >= uniqueRanked[i]) {
      i--;
    }
    result.push(i + 2);
  });
}

climbingLeaderboard(ranked, player);
