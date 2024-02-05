const cliente = {
    nome: "André",
    idade: 32,
    cpf: "74081493090",
    email: "andre@dominio.com",
};

console.log(`Nome: ${cliente["nome"]}`);
console.log(`Idade: ${cliente["idade"]}`);
console.log(`CPF: ${cliente["cpf"].substring(0,3)}`);
console.log(`E-mail: ${cliente["email"]}`);

const chaves = ["nome","idade","cpf","email"];
console.log();

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}\n`);
});