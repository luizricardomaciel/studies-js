let clientes = [];

//Registro de clientes para o let -> clientes.
function customerRegistration(name, age, city, shopping) {
    let clienteRegister = {
        name : name,
        age : age,
        city : city,
        shopping : shopping
    };
    clientes.push(clienteRegister);
};


//Filtra os clientes pela idade
function filterAge() {
    console.log("----------AGE FILTER----------")
    for(cliente of clientes) {
        if (cliente.age > 30) {
            console.log(`${cliente.name} tem ${cliente.age}`);
        };
    };
}

//Tira a media de idade dos clientes.
function averageAge() {
    console.log("----------AGE MEDIA----------")
    let idades = [];
    let soma = 0;
    for (cliente of clientes) {
        idades.push(cliente.age);
        soma += cliente.age;
    };
    return `Á media de idades dos clientes é ${(soma/idades.length).toFixed(2)}`;
}

//Busca por compras.
function shoppingSearch(purchase) {
    console.log("----------PURCHASING REASEARCHER----------");
    console.log(`-Os clientes que compraram ${purchase}:`);

    let clientesQueCompraram = [];

    for(cliente of clientes) {
        for(item of cliente.shopping) {
            if (item.toLowerCase() === purchase.toLowerCase()) {
                clientesQueCompraram.push(cliente.name);
            };
        };
    }; 
    if (clientesQueCompraram.length > 0) {
        return clientesQueCompraram.join(", ");
    } else {
        return `Nenhum cliente compou.`;
    };
};

//Alguns exemplos de registro.
customerRegistration("JucaFazXuca", 31, "Campo Seboso", ['sabonete', 'banana', 'mandiocaLaEle', 'clareadorA']);

customerRegistration("Amigão Do Braz", 34, "Campo Seboso", ['sabonete', 'banana', 'mandiocaLaEle', 'clareadorA']);

customerRegistration("João caga tronco", 25, "Campo Seboso", ['Minoxidil', 'Carne de soja', 'shampoo head & Sholders', 'frango']);

customerRegistration("Luis pinto invergado", 26, "Campo Saboroso", ['pizza', 'frango', 'cafe', 'calzone']);

//Testes de funçoes
filterAge();

console.log(averageAge())

console.log(shoppingSearch('frango'))