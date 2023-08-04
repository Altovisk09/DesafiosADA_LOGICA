// Média das Avaliações de um Fast-Food

// Em uma empresa de fast-food, após a refeição, os clientes fazem uma avaliação da loja, 
// com nota de 1 a 5 estrelas. Em determinado dia, foram atendidos exatamente 100 clientes, 
// e as notas obtidas foram:

const avaliacoes = [
    { estrela: 1, clientes: 2 },
    { estrela: 2, clientes: 15 },
    { estrela: 3, clientes: 18 },
    { estrela: 4, clientes: 25 },
    { estrela: 5, clientes: 40 }
  ];
// Após o fechamento do expediente, o gerente decidiu calcular a nota média das avaliações
// naquele dia; retorne o valor da nota média considerando o valor fixo de 100 clientes.

function media(avaliacoes){
    let avaliacaoTotal = 0;
    let clientesTotal = 0;

    for(const qtd of avaliacoes){
        avaliacaoTotal += qtd.estrela * qtd.clientes;
        clientesTotal += qtd.clientes;
    }
    const avaliacaoFinal = avaliacaoTotal/clientesTotal

    console.log(`A nota desse estabelecimento é de ${avaliacaoFinal} `)
}
media(avaliacoes)