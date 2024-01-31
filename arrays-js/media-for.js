
const notas = [10,6.5,8,7.5];

function calcula_media_notas(notas){
    let soma = 0;

    for(let i = 0; i < notas.length; i++){
         soma += notas[i];
    }

    let media = soma / notas.length;

    return media;
}

console.log(`A média das notas é: ${calcula_media_notas(notas)}`);