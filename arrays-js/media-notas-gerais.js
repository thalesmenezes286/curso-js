
const notas1 = [10,6.5,8,7.5];
const notas2 = [9,6,6];
const notas3 = [8.5,9.5];

const notasGerais = [notas1,notas2,notas3];

let soma  = 0.0;
let media = 0.0;

for(let i = 0; i < notasGerais.length; i++){
    for (let j = 0; j < notasGerais[i].length; j++) {
        soma += notasGerais[i][j];
        media = soma / notasGerais[i].length;
    }
}

console.log(`A média das notas é: ${media}`);