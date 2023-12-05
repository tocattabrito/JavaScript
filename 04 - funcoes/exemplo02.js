

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function calssificarImc(imc) {
    
    if (imc < 18.5) {
        
        return (`IMC: ${imc.toFixed(2)} Abaixo do Peso`);
        
    } else if (imc >= 18.5 && imc <= 25) {
        
        return (`IMC: ${imc.toFixed(2)} Peso Normal`);
        
    } else if (imc >= 25 && imc <= 30) {
        
        return (`IMC: ${imc.toFixed(2)} Acima do Peso`)
        
    } else if (imc >= 30 && imc <= 40) {
        
        return (`IMC: ${imc.toFixed(2)} Obeso`)
        
    } else {
        
        return (`IMC: ${imc.toFixed(2)} Obesidade Grave`)
    }
    
}

// função principal

function main() {
    let peso = 75;
    let altura = 1.80;
    
    const imc = calcularImc(peso, altura);
    console.log(calssificarImc(imc));
   
}

main();





 