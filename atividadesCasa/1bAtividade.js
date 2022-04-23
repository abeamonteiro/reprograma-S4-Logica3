/* Exemplo 01 | Descrição |
| `For/Break/Continue` | Utilize a estrutura de repetição for para 
imprimir no console  conforme instruções: 
  
    b) números de 1 a 50, quando chegar no número 25 interrompa a instrução e pare o loop */

    // b)
console.log('Começo')
for(let i = 1; i <= 50; i = i + 1) {
    console.log(i)

    if(i === 25) {
      break
    }  
  }
  console.log('Break')
  console.log('Fim')
