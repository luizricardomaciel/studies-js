const s = "y";
const t = "yu";
const k = 2;

function appendAndDelete(s, t, k) {
  let sumS = 0;
  let sumT = 0;
  let allOperations = 0;

  let i = 0;
  while (i < Math.min(s.length, t.length)) {
    if (s[i] === t[i]) {
      i++;
      allOperations++;
    } else {
      break;
    }
  }
  allOperations = s.length - allOperations + (t.length - allOperations);
  console.log(allOperations);
  if (
    (allOperations <= k && (k - allOperations) % 2 === 0) ||
    s.length + t.length <= k
  ) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// function appendAndDelete(s, t, k) {
//   let commonLength = 0;

//   for (let i = 0; i < Math.min(s.length, t.length); i++) {
//     if (s[i] === t[i]) {
//       commonLength++;
//     } else {
//       break;
//     }
//   }

//   let totalOperations = s.length - commonLength + (t.length - commonLength);
//   console.log(totalOperations);

//   if (
//     (totalOperations <= k && (k - totalOperations) % 2 === 0) ||
//     s.length + t.length <= k
//   ) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
appendAndDelete(s, t, k);
