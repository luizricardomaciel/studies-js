function palindrome(str) {
    let palavra = str.toLowerCase();
    let invertida = "";
    for(let i = palavra.length -1; i>=0; i--){
        invertida += palavra[i];
    };
    if(palavra === invertida){
        return console.log(`${str} is a palindrome`);
    } else{
        return console.log(`${str} is not a palindrome`);
    } 
}

palindrome("Ana")
