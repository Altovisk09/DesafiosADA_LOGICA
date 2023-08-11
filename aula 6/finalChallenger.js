const turmas = [
    { 
        id: 1,
        nome: "A",
        professor: "João Silva",
        alunos: []
      }
];
const alunos = [
    {
        id: 1,
        nome: "Ana",
        sobrenome: "Souza",
        cpf:"12345678910",
        email: "ana.souza@example.com",
        turma: 1,
        nascimento: "15-03-2008", 
        notas: [9.5, 8.7, 7.2],
        ativo: true
    }
];

// Função para salvar turmas e alunos no localStorage
function salvarDadosNoLocalStorage() {
    localStorage.setItem('turmas', JSON.stringify(turmas));
    localStorage.setItem('alunos', JSON.stringify(alunos));
}

// Função para carregar turmas e alunos do localStorage
function carregarDadosDoLocalStorage() {
    return new Promise((resolve) => {
        const turmasJSON = localStorage.getItem('turmas');
        const alunosJSON = localStorage.getItem('alunos');

        if (turmasJSON) {
            turmas = JSON.parse(turmasJSON);
        }
        if (alunosJSON) {
            alunos = JSON.parse(alunosJSON);
        }

        resolve(); // Resolve a Promise quando os dados forem carregados
    });
}
const validacoes = {
    validarCpf: function(cpf) {
        const alunosJSON = localStorage.getItem('alunos');
        const alunos = alunosJSON ? JSON.parse(alunosJSON) : [];

        const cpfEncontrado = alunos.find(aluno => aluno.cpf === cpf);
        if (!cpfEncontrado && cpf.length === 11) {
            return true;
        } else {
            return false;
        }
    },
    validarTurma: function(turmaId){
        const turmaEncontrada = turmas.find(turma => turma.id === turmaId);
        if (turmaEncontrada && turmaEncontrada.alunos.length <= 15) {
            return true
        }else{
            return false
        }
    },
    validarCriaçãoDeTurma: function(turmaId){
        const turmaEncontrada = turmas.find(turma => turma.id === turmaId);
        if (!turmaEncontrada && turmas.length < 10) {
            return true
        }else{
            return false
        }
    }
}



const metodoAluno = {
    cadastrarAluno: function cadastrarAluno() {
        const info = {
            id: alunos.length + 1, 
            nome: prompt('Insira seu nome'),
            sobrenome: prompt('Insira seu sobrenome'),
            cpf: prompt('Insira seu CPF'),
            email: prompt('Insira seu email'),
            turma: parseInt(prompt('Insira o código da turma que a qual irá ingressar.')),
            nascimento: prompt('Insira sua data de nascimento (DD-MM-AAAA).'),
            notas: [prompt('Insira suas notas na sua antiga instituição. (Separe por virgula.)')],
            ativo: true
        };
        // Validar o CPF
        if (!validacoes.validarCpf(info.cpf)){
            alert('CPF inválido ou já cadastrado.');
            return;
        };
        // Validar a turma
        if(!validacoes.validarTurma(info.turma)){
            alert('Turma inesistente ou a turma atingiu o limite maximo de alunos')
            return
        };
    
        // Realizar o cadastro do aluno na base de dados
        const turmaSelecionada = turmas.find(turma => turma.id === info.turma);
        turmaSelecionada.alunos.push(info.id);
        alunos.push(info);
    
        alert('Cadastro realizado com sucesso.');
        salvarDadosNoLocalStorage();
    },
    atualizarInfo: function(){

    },
    calcularMedia: function(){

    },
    cancelarMatricula: function(){

    }
};

const metodoAdm = {
    cadastrarTurma:function() {
        const newTurma = { 
            id: parseInt(prompt('Qual será o ID da turma?')),
            nome: prompt('Qual a sigla identificadora da turma (ex: A, B, C...)'),
            professor: prompt('Quem será o professor responsável?'),
            alunos: []
          };
        //   validar possibilidade de criar uma nova turma
        if (validacoes.validarCriaçãoDeTurma(newTurma.id)) {
            turmas.push(newTurma);
            alert(`Turma ${newTurma.id}, vulgo classe ${newTurma.nome} cadastrada com sucesso.`);
        } else {
            alert(`Cadastro de turma inválido.`);
        }
    },

};

function processo() {
    carregarDadosDoLocalStorage()
    alert('Olá visitante, bem-vindo à secretaria de educação do estado de São Paulo');
    alert('No momento, nossos recursos estão um pouco limitados devido à falta de atualização de nossos drivers...');
    alert('Para melhor atendê-lo, por favor siga as orientações a seguir.');
    
    while (true) {
        carregarDadosDoLocalStorage()
        const valor = prompt('Digite o número que corresponder com sua condição atual:\n\n1: Sou aluno\n2: Quero me matricular em uma instituição.\n3: Sou ADM\n4: Encerrar');

        switch (valor) {
            case "1":
                alert('Você selecionou a opção "Sou aluno".');
                const opcao = prompt('Digite o número que corresponder à ação desejada:\n\n1: Média das notas do semestre\n2: Atualizar informações da conta\n3: Cancelamento da matrícula');

                switch (opcao) {
                    case "1":
                        // Chamada da função para calcular a média das notas
                        break;
                    case "2":
                        // Chamada da função para atualizar informações da conta
                        break;
                    case "3":
                        // Chamada da função para cancelar a matrícula
                        break;
                    default:
                        alert('Opção inválida. Por favor, escolha uma opção válida.');
                }
                break;
            case "2":
                alert('Você selecionou a opção "Quero me matricular em uma instituição".');
                metodoAluno.cadastrarAluno()
                break;
            case "3":
                alert('Você selecionou a opção "Sou ADM".');
                const opcaoADM = prompt('Digite o número que corresponder à ação desejada:\n\n1: Média das notas do semestre\n2: Atualizar informações da conta\n3: Cancelamento da matrícula\n4: Retornar a lista completa de alunos\n5: Retornar quantas turmas tem na escola\n6: Calcular a média do aluno\n7: Desativar aluno\n8: Retornar a lista apenas com alunos ativos\n9: Retornar a lista apenas com alunos inativos\n10: Retornar os alunos com a média esperada\n11: Relatório completo');
            
                switch (opcaoADM) {
                    case "1":
                        //calcular a média das notas do semestre
                        break;
                    case "2":
                        //atualizar informações da conta do aluno
                        break;
                    case "3":
                        //cancelar a matrícula do aluno
                        break;
                    case "4":
                        //retornar a lista completa de alunos
                        break;
                    case "5":
                        //retornar a quantidade de turmas na escola
                        break;
                    case "6":
                        //calcular a média do aluno
                        break;
                    case "7":
                        //desativar aluno
                        break;
                    case "8":
                        //lista apenas com alunos ativos
                        break;
                    case "9":
                        //lista apenas com alunos inativos
                        break;
                    case "10":
                        //alunos com a média esperada
                        break;
                    case "11":
                        //relatório completo
                        break;
                    default:
                        alert('Opção inválida. Por favor, escolha uma opção válida.');
                }
                break;
            case "4":
                return
            case "segredo":
                alert('Redirecionando...')
                window.location.href = 'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/d412036bb520f46ef7db81ec683f75e14dad9fcc66bbc70852dc3923e5ec5e50_1.jpg';
            return
            default:
                alert('Opção inválida. Por favor, escolha uma opção válida.');
        }
    }
}

processo();
