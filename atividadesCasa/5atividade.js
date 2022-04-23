/* | `Fatorial` | Crie uma função que irá receber um número e retornar o fatorial dele. 
por exemplo:  3! = 3 * 2 * 1 // 6 | */

function fatorial (numFat) {
    let resultado = 1
    for (i = numFat; i > 0; i --){
            resultado = resultado * i
    }
console.log (`O fatorial de ${numFat} é ${resultado}.`)
}
fatorial (15)