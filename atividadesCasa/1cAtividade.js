/* Exemplo 01 | Descrição |
| `For/Break/Continue` | Utilize a estrutura de repetição for para 
imprimir no console  conforme instruções: 
       c) números de 1 a 50, quando chegar no número 10 pule a instrução| */

    let i = 1

    while(i < 50) {
        i++  
           
        if(i === 10) {
           console.log('CONTINUE')
           continue

         }
        console.log(i)
     }
         console.log('Fim')