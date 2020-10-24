function geraEnd(){
    var endereco = {
        rua: "Rua dos pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP"
       };

    return `O usuário mora em ${endereco.cidade}, na rua ${endereco.rua} coom nº ${endereco.numero}`;
    
}
console.log(geraEnd());