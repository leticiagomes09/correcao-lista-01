const idades = [17, 21, 16, 25, 19];
let maioresDeIdade = 0;
let menoresDeIdade = 0;

// Laço de repetição para varrer todos os elementos do meu array idades
for (let i = 0; i < idades.length; i++) {
// Condição para contadores de maior e menos de idade    
    if (idades[i] >= 18) {
    maioresDeIdade++;  
    } 
}
 
menoresDeIdade = idades.length - maioresDeIdade;

console.log(`A quantidade de pessoas maiores de idde é: ${maioresDeIdade}`);
console.log(`A quantidade de pessoas menores de idade é: ${menoresDeIdade}`);
