const cliente = {
    nome: "André",
    idade: 32,
    cpf: "74081493090",
    email: "andre@dominio.com",
};

console.log(`Nome: ${cliente.nome}`);
console.log(`Idade: ${cliente.idade}`);
console.log(`CPF: ${cliente.cpf.substring(0,3)}`);
console.log(`E-mail: ${cliente.email}`);