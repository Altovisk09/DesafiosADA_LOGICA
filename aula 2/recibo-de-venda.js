// Em um sistema de vendas é emitido um recibo a cada venda, esse recibo está em formato string com a seguinte estrutura: 
// nome-do-produto1/valor33.5=cupom5;nome-do-produto2/valor4.99=cupom0;nome-do-produto3/valor10=cupom0;...
// As vendas são divididas por ; (ponto e virgula)

// Sendo: 
// nome-do-produto1 até a / (barra) o nome do produto
// valor 33.5 o valor do produto até o = (igual)
// cupom5 a porcentagem de desconto do produto após o = (igual)


// Precisamos formatar essa string para obter uma lista de objetos com a seguinte estrutura: 

// ex:
// const listaDaVenda = [
//     { 
//         produto: 'Nome do produto formatado', // Nome do produto formatado com a primeira letra maiúscula 
//         valor: 99, // Valor do produto
//         cupom: 4, // Valor de desconto do produto em porcentagem, nesse caso seria 4%
//         quantidade: 1, // A quantidade que esse produto aparece na string
//     }
// ]

// Extra: 
// Totalização da venda
// Além da lista completa formatada da venda, seria interessante obter a totalização dessa venda para apresentar ao cliente final
// Dado essa importância os seguintes dados devem ser apresentado em um objeto: 

// ex:
// const totais = {
//     valorTotal: 999, // Valor total da venda
//     valorTotalDesconto: 999, // Valor total com desconto
//     quantidadeDeProdutos: 999, // Quantidade de produtos na venda
// }

// const reciboDeVenda = 'régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;'

// Boa sorte =D

function formatarNomeProduto(nome) {
    return nome.charAt(0).toUpperCase() + nome.slice(1);
  }
  
  function processarReciboDeVenda(recibo) {
    const produtos = {};
    const listaDaVenda = [];
  
    const vendas = recibo.split(';');
    for (const venda of vendas) {
      const [produtoValor, cupom] = venda.split('=cupom');
      const [produto, valorStr] = produtoValor.split('/valor');
      const valor = parseFloat(valorStr);
  
      if (!produto || isNaN(valor) || isNaN(cupom)) {
        continue; // Ignora a venda se algum dado estiver faltando ou for inválido
      }
  
      const produtoFormatado = formatarNomeProduto(produto);
  
      if (!produtos[produtoFormatado]) {
        produtos[produtoFormatado] = {
          produto: produtoFormatado,
          valor: 0,
          cupom: parseInt(cupom),
          quantidade: 0,
        };
      }
  
      produtos[produtoFormatado].valor += valor;
      produtos[produtoFormatado].quantidade++;
    }
  
    for (const produto in produtos) {
      listaDaVenda.push(produtos[produto]);
    }
  
    let valorTotal = 0;
    let valorTotalDesconto = 0;
  
    for (const produto of listaDaVenda) {
        valorTotal += produto.valor * produto.quantidade;
        if (produto.cupom > 0) {
          const valorDescontoPorProduto = produto.valor * (produto.cupom / 100) * produto.quantidade;
          valorTotalDesconto += valorDescontoPorProduto;
        }
      }
    const quantidadeDeProdutos = listaDaVenda.reduce((total, produto) => total + produto.quantidade, 0);
  
    const totais = {
        valorComDesconto: (valorTotal - valorTotalDesconto).toFixed(2),
        valorTotalDesconto: valorTotalDesconto.toFixed(2),
        valorTotal: valorTotal.toFixed(2),
        quantidadeDeProdutos: quantidadeDeProdutos,
      };
      
  
    return { listaDaVenda, totais };
  }
  
  const reciboDeVenda = 'régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;';
  const resultado = processarReciboDeVenda(reciboDeVenda);
  
  console.log("Lista de venda formatada:", resultado.listaDaVenda);
  console.log("Totais da venda:", resultado.totais);
  