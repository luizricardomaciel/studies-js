// V1.0

// function palindrome(str) {
//     let palavra = str.toLowerCase();
//     let invertida = "";
//     for(let i = palavra.length -1; i>=0; i--){
//         invertida += palavra[i];
//     };
//     if(palavra === invertida){
//         return console.log(`${str} is a palindrome`);
//     } else{
//         return console.log(`${str} is not a palindrome`);
//     } 
// }
//
// palindrome("Ana")


// V2.0
 
function palindromeV2 (str) {
    let palavra = str;
    palavra = palavra.toLowerCase().replace(/\s/g,"");

    if (palavra === palavra.split("").reverse().join("")) {
        return `${str} is a palindrome`;
    } else {
        return `${str} isn't a palindrome`
    };
};

console.log(palindromeV2("ame o poema"));