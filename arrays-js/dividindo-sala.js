const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 
'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const metade_array = alunos.length / 2;

const sala1 = alunos.slice(0,metade_array);
const sala2 = alunos.slice(metade_array);

console.log(sala1);
console.log(sala2);