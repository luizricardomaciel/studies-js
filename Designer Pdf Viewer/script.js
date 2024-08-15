const h = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
];
const word = "abc";

function designerPdfViewer(h, word) {
  const speel = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let bigNumber = 0;
  let sum = 0;
  while (sum < word.length) {
    for (let i = 0; i < h.length; i++) {
      if (word[sum] === speel[i]) {
        if (h[i] > bigNumber) {
          bigNumber = h[i];
          break;
        }
      }
    }
    sum++;
  }
  console.log(sum * bigNumber);
}
designerPdfViewer(h, word);
