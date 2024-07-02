// Exercício de lógica em JavaScript

// 1. Crie uma função que recebe dois números como parâmetros e retorna o maior deles.

function maiorNumero(num1, num2) {
    if (num1 <= num2) {
        return num2
    } else {
        return num1
    }
}

// Teste sua função com alguns exemplos:
console.log(maiorNumero(5, 10)); // Deveria retornar 10
console.log(maiorNumero(-3, 7)); // Deveria retornar 7
console.log(maiorNumero(2.2, 2.2)); // Deveria retornar 2.2
