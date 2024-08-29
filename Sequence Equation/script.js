const p = [4, 3, 5, 1, 2];

function permutationEquation(p) {
  let count = 1;
  let search1 = 0;
  let search2 = 0;

  let result = [];
  while (count <= p.length) {
    while (p[search1] !== count) {
      search1++;
    }
    while (p[search2] !== search1 + 1) {
      search2++;
    }
    result.push(search2 + 1);
    count++;
    search1 = 0;
    search2 = 0;
  }
  console.log(result);
}
permutationEquation(p);
