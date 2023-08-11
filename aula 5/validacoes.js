const nome = prompt("Insira seu nome").trim();
const turma = prompt("Insira sua turma");
const notas = prompt("Insira suas notas (separe por vírgulas)").trim();

const validacoes = [];
const infoAluno = {};

try {
  if (typeof nome !== "string" || nome === "") {
    validacoes.push("Nome é obrigatório e precisa ser uma string.");
  } else {
    infoAluno.nome = nome;
  }

  if (turma === "" || isNaN(turma)) {
    validacoes.push("A turma é obrigatória e precisa ser um número.");
  } else {
    infoAluno.turma = parseInt(turma, 10);
  }

  const notasArray = notas.split(",").map(parseFloat);
  if (notasArray.some((nota) => isNaN(nota))) {
    validacoes.push("As notas precisam ser números válidos separados por vírgula.");
  } else {
    infoAluno.notas = notasArray;
  }

  if (validacoes.length > 0) {
    throw new Error(validacoes.join("\n"));
  }

  console.log("Informações do aluno:", infoAluno);
} catch (error) {
  for(i = 0; i == error.length; i++){
    alert("Erro: " + error.message);
  }
}


