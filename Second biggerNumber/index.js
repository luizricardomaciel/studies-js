// // // Exemplos de uso da função:
console.log(segundoMaior1([10, 5, 7, 2])); // Deve retornar 7
console.log(segundoMaior1([10, 10, 7, 2])); // Deve retornar 7
console.log(segundoMaior1([3, 1, 4, 4, 5, 5])); // Deve retornar 4

function segundoMaior1(lista) {
    let values = lista;
    let Remover = Math.max(...values);

    let valuesBiggerRemoved = values.filter(i => i !== Remover);
    return Math.max(...valuesBiggerRemoved)
}

function segundoMaior2(lista) {
    let valuesATT = [];
    
    lista.sort(function(a,b){
        return b - a;
    });
    for (i = 0; i < lista.length ; i++) {A
        if(lista[i] !== lista[i+1]){
                valuesATT.push(lista[i]);
            };
        };
        return valuesATT[1]
    };
    
    