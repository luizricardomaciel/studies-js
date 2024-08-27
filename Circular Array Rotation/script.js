const a = [3, 4, 5];
const k = 2;
const queries = [1, 2];

function circularArrayRotation(a, k, queries) {
  let i = 0;
  let result = [];
  while (i < k) {
    a.unshift(a.pop());
    i++;
  }

  for (let i = 0; i < queries.length; i++) {
    result.push(a[queries[i]]);
  }

  console.log(result);
}
circularArrayRotation(a, k, queries);
