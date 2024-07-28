const arr = [1, 1, 2, 2, 3];

const migratoryBirds = (arr) => {
  let numbers = [];

  // Loop para percorrer o array arr
  for (let i = 0; i < arr.length; i++) {
    let found = false;

    // Verifica se o número já está no array numbers
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j].number === arr[i]) {
        numbers[j].sum += 1;
        found = true;
        break;
      }
    }

    // Se o número não foi encontrado, adiciona ao array numbers
    if (!found) {
      numbers.push({ number: arr[i], sum: 1 });
    }
  }

  console.log(numbers);
};

migratoryBirds(arr);
