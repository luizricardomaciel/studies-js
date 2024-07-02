function primeNumber(n) {
    if (n <= 1) return console.log("Não é primo");
    if (n <= 3) return console.log("É primo");
    if (n % 2 === 0 || n % 3 === 0) return console.log("Não é primo");


    let i = 5;
    while (i <= n){
        if (n % i === 0 && n !== i) return console.log("Não é primo");
        i += 2
    };
    return console.log("É primo");

};

primeNumber(1975);