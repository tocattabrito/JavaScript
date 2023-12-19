// 2 - Crie um programa que seja capaz de percorrer uma lista de números
// e imprima cada número par encontrado

const numeros = [26,13,10]; // lista


for (let i = 0; i < numeros.length; i++) {
   
    const numero = numeros[i];
  
    if (numero % 2 === 0) {
       console.log(numero +' Par');
   } else {
    //    console.log(numero +' Impar')
   }
        
}