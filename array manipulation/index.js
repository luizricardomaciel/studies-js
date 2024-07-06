let trunk = ["quatro", 1 , "cabeça", 6, "joelho", "cardio", 9, 23 , "123", "2", "5"];

function arraySeparator(array) {
    let strings = [];
    let numbers = [];

    for(let item of array) {
        if(isNaN(item)) {
            strings.push(item);
        } else {
            numbers.push(item);
        };
    };
    numbers = numbers.map(n => parseInt(n))
};

arraySeparator(trunk)

