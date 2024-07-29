function pageCount(n, p) {
  let fromStart = Math.floor(p / 2);

  let fromEnd = Math.floor(n / 2 - fromStart);

  return Math.min(fromStart, fromEnd);
}

console.log(pageCount(6, 5));
