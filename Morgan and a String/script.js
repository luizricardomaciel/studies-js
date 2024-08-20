// const a = "ACA";
// const b = "BCF";

// function morganAndString(a, b) {
//   let string = "";

//   for (let i = 0, j = 0; i < a.length || j < b.length; ) {
//     if (a[i] <= b[j]) {
//       string += a[i];
//       i++;
//     } else {
//       string += b[j];
//       j++;
//     }
//   }
//   console.log(string);
// }
// morganAndString(a, b);

function morganAndString(a, b) {
  let result = "";
  let i = 0,
    j = 0;

  while (i < a.length && j < b.length) {
    if (a.slice(i) < b.slice(j)) {
      result += a[i++];
    } else {
      result += b[j++];
    }
  }

  return result + a.slice(i) + b.slice(j);
}

// Example usage:
const a = "JACK";
const b = "DANIEL";
console.log(morganAndString(a, b)); // Output: "DAJACKNIEL"
