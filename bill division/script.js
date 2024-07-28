const bill = [3, 10, 2, 9];
const k = 1;
const b = 12;

function bonAppetit(bill, k, b) {
  let sum = 0;
  for (let i = 0; i < bill.length; i++) {
    if (i !== k) {
      sum += bill[i];
    }
  }

  const division = sum / 2;
  if (division === b) {
    console.log(`Bon Appetit`);
  } else {
    console.log(b - division);
  }
}

bonAppetit(bill, k, b);
