const a = [3, 9, 6];
let b = [36, 72];

let last = a[a.length - 1];
let first = b[0];
let numbers = [];
let result = 0;

while (last <= first) {
  numbers.push(last);
  last += a[a.length - 1];
}
console.group("Numeros possiveis:");
console.table(numbers);
console.groupEnd();
numbers = numbers.filter((n) => {
  let divisible = false;
  for (let aIndex of a) {
    if (n % aIndex !== 0) {
      divisible = true;
      break;
    }
  }
  if (divisible) {
    return false;
  } else {
    return true;
  }
});
console.group("Filtrados pelo primeiro array.:");
console.table(numbers);
console.groupEnd();

for (let indexNumbers of numbers) {
  let divisible = false;
  for (let indexB of b) {
    if (indexB % indexNumbers !== 0) {
      divisible = true;
      break;
    }
  }
  if (!divisible) {
    result++;
  }
}
console.group("Numeros divisiveis:");
console.log(result);
console.groupEnd();
