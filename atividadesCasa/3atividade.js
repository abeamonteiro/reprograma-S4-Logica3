/* | Exemplo 03 | Descrição |
| --- | --- |
| `Tabuada` | Faça um programa que dado um número, imprime no (console.log) a 
tabuada do mesmo de 1 a 10. | */

let resultado = 0
function tabuada(numero){
    for(i = 1; i <= 10; i ++){
        resultado = numero * i
        console.log (`${numero}*${i} = ${resultado}`)
    }
}

tabuada(5)