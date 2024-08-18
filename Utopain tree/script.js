const n = [0, 1];

utopianTreee = (n) => {
  let result = [];

  for (let j = 0; j < n.length; j++) {
    let cycles = false; //false == summer || true == spring.
    let count = 0;

    for (let i = 0; i <= n[j]; i++) {
      if (!cycles) {
        count += 1;
        cycles = true;
      } else {
        count = count * 2;
        cycles = false;
      }
    }
    result.push(count);
  }
  console.log(result);
};
utopianTreee(n);
