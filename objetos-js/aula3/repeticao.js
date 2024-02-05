const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ];
  
  cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
  });
  
  const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
  );
  
 for(let chave in cliente){
    let tipo = typeof cliente[chave];

    if(tipo !== 'object' && tipo !== 'function'){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }       
 }