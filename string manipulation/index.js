// Exercício de lógica em JavaScript

// 2. Crie uma função que recebe uma string como parâmetro e retorna a mesma string invertida.

function inverterString(str) {
    let arrayDeString = str.split('');
    let arrayInvertidoSeparado = arrayDeString.reverse();
    let arrayInvertidoJunto = arrayInvertidoSeparado.join('')
    
    return arrayInvertidoJunto
}

// Teste sua função com alguns exemplos:
console.log(inverterString("JavaScript")); // Deveria retornar "tpircSavaJ"
console.log(inverterString("Hello, World!")); // Deveria retornar "!dlroW ,olleH"
console.log(inverterString("12345")); // Deveria retornar "54321"


let palavra = "piroca"
console.log(palavra.length)