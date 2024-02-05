const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11-55555550", "11-44444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ];

  function ligaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
  }

  ligaCliente(...cliente.telefone);

  
const encomenda = {
    destinatario: cliente.nome,
    endereco: cliente.enderecos[0],
};
  
console.log(encomenda);