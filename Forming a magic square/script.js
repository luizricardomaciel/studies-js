const squareMagic = {
  1: [4, 9, 2, 3, 5, 7, 8, 1, 6],
  2: [2, 7, 6, 9, 5, 1, 4, 3, 8],
  3: [6, 1, 8, 7, 5, 3, 2, 9, 4],
  4: [8, 3, 4, 1, 5, 9, 6, 7, 2],
  5: [8, 1, 6, 3, 5, 7, 4, 9, 2],
  6: [6, 7, 2, 1, 5, 9, 8, 3, 4],
  7: [4, 3, 8, 9, 5, 1, 2, 7, 6],
  8: [2, 9, 4, 7, 5, 3, 6, 1, 8],
};

const s = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];

function formingMagicSquare(s) {
  const array = s.flat();
  let result = Infinity;
  for (let square in squareMagic) {
    let minus = null;
    for (let i = 0; i < array.length; i++) {
      minus += Math.abs(array[i] - squareMagic[square][i]);
    }
    result = Math.min(result, minus);
  }
  console.log(result);
}
formingMagicSquare(s);
