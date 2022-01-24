/*
Map
Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.
Filter
Filtre e retorne todos os números pares de um array.
Reduce
Some todos os números de um array
Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

*/
const alfa = {
    value : 0,
};
const beta = {
    value : 1,
};

const arr = [1,2,0]

function quadrado(num){
    return num **2;
}
console.log(arr.map(quadrado))

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

console.log('this -> alfa', mapComThis(arr, alfa));


function pares(arr){
   return arr.filter(function(item){
        if (item % 2 === 0){
            return item;
   }
    
    }
   )
}

console.log('retorna pares ', pares(arr))


function somarTudo(arr){    
    return arr.reduce(function(prev, current){
        return prev + current
    });
}
 console.log('somarTudo = ', somarTudo(arr))

 //Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

function saldoFinal(lista, saldo){
    return lista.reduce(function(prev, current){
        console.log({prev})
        console.log({current})
        return prev - current
    }, saldo);
}

const lista = [1,2,3,4]

console.log("Saldo final é ", saldoFinal(lista, 200))