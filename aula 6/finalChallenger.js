const turmasBase = [
    {
        id: 1,
        nome: "A",
        professor: "João Silva",
        alunos: [1]
    }
];
const alunosBase = [
    {
        id: 1,
        nome: "Ana",
        sobrenome: "Souza",
        cpf: "12345678910",
        email: "ana.souza@example.com",
        turma: 1,
        nascimento: "15-03-2008",
        notas: [9.5, 8.7, 7.2],
        ativo: false
    }
];



// Função para carregar turmas e alunos do localStorage
function carregarDadosDoLocalStorage() {
    return new Promise((resolve) => {
        const turmasJSON = localStorage.getItem('turmas');
        const alunosJSON = localStorage.getItem('alunos');

        if (!turmasJSON && !alunosJSON) {
            localStorage.setItem('turmas', JSON.stringify(turmasBase));
            localStorage.setItem('alunos', JSON.stringify(alunosBase));
            window.location.reload();
            return Promise.resolve();
        }

        resolve(); // Resolve a Promise quando os dados forem carregados
    });
}
const validacoes = {

    validarCpf: function (cpf) {
        const alunosJSON = localStorage.getItem('alunos');
        const alunos = JSON.parse(alunosJSON);
        const cpfEncontrado = alunos.find(aluno => aluno.cpf === cpf);
        if (!cpfEncontrado && cpf.length == 11) {
            return true;
        } else {
            return false
        }
    },
    validarTurma: function (turmaId) {
        const turmasJSON = localStorage.getItem('turmas');
        const turmas = JSON.parse(turmasJSON);
        const turmaEncontrada = turmas.find(turma => turma.id === turmaId);
        if (turmaEncontrada && turmaEncontrada.alunos.length <= 15) {
            return true
        } else {
            return false
        }
    },
    validarIdCriacaoDeTurma: function (sigla) {
        const turmasJSON = localStorage.getItem('turmas');
        const turmas = JSON.parse(turmasJSON);
        const turmaEncontrada = turmas.find(turma => turma.nome === sigla);
        if (!turmaEncontrada) {
            return true
        } else {
            return false
        }
    },
    validarQtdCriacaoDeTurma: function () {
        const turmasJSON = localStorage.getItem('turmas');
        const turmas = JSON.parse(turmasJSON);
        if (turmas.length < 10) {
            return true;
        } else {
            return false;
        }
    },
    reset: function () {
        window.location.reload();;
    }
}

const metodoAluno = {
    cadastrarAluno: function () {
        return new Promise((resolve) => {

            const alunosJSON = localStorage.getItem('alunos');
            const alunos = JSON.parse(alunosJSON);
            const turmasJSON = localStorage.getItem('turmas');
            const turmas = JSON.parse(turmasJSON);

            const info = {
                id: alunos ? alunos.length + 1 : 1, // Gera o id em diferentes circunstâncias.
                nome: prompt('Insira seu nome'),
                sobrenome: prompt('Insira seu sobrenome'),
                cpf: prompt('Insira seu CPF'),
                email: prompt('Insira seu email'),
                turma: parseInt(prompt('Insira o código da turma que a qual irá ingressar.')),
                nascimento: prompt('Insira sua data de nascimento (AAAA-MM-DD).'),
                notas: [prompt('Insira suas notas (Separe por vírgula)')],
                ativo: true
            };

            // Validar o CPF
            if (!validacoes.validarCpf(info.cpf)) {
                alert('CPF inválido ou já cadastrado.');
                resolve(); // Importante resolver a Promise mesmo em caso de erro.
                return;
            }

            // Validar a turma
            if (!validacoes.validarTurma(info.turma)) {
                alert('Turma inexistente ou a turma atingiu o limite máximo de alunos');
                resolve(); // Importante resolver a Promise mesmo em caso de erro.
                return;
            }

            // Realizar o cadastro do aluno na base de dados
            const turmaSelecionada = turmas.find(turma => turma.id === info.turma);
            turmaSelecionada.alunos.push(info.id);
            alunos.push(info);

            localStorage.setItem('turmas', JSON.stringify(turmas));
            localStorage.setItem('alunos', JSON.stringify(alunos));
            alert('Cadastro realizado com sucesso.');
        });
    },
    atualizarInfo: function () {

    },
    calcularMedia: function () {

    },
    cancelarMatricula: function () {

    }
};

const metodoAdm = {
    cadastrarTurma: function () {
        const turmasJSON = localStorage.getItem('turmas');
        const turmas = JSON.parse(turmasJSON);

        const newTurma = {
            id: turmas ? turmas.length + 1 : 1,
            nome: prompt('Qual a sigla identificadora da turma (ex: A, B, C...)'),
            professor: prompt('Quem será o professor responsável?'),
            alunos: []
        };
        //   validar possibilidade de criar uma nova turma
        if (!validacoes.validarIdCriacaoDeTurma(newTurma.nome)) {
            return alert(`Sigla já utilizada.`);
        }
        if (!validacoes.validarQtdCriacaoDeTurma) {
            return alert(`Quantidade mmaxima de turmas já existentes.`);
        }

        turmas.push(newTurma);
        localStorage.setItem('turmas', JSON.stringify(turmas));
        alert(`Turma ${newTurma.id}, vulgo classe ${newTurma.nome} cadastrada com sucesso.`);
    },
    removerAluno: function () {
        const alunosJSON = localStorage.getItem('alunos');
        const alunos = JSON.parse(alunosJSON);
        const turmasJSON = localStorage.getItem('turmas');
        const turmas = JSON.parse(turmasJSON);

        alert('Você selecionou remover aluno.');
        let alunoId = prompt('Qual o numero da matricula do aluno?');
        let alunoEncontrado = alunos.find(aluno => aluno.id == alunoId);
        if(!alunoEncontrado){
            alert('Aluno não encontrado')
        }else if(!alunoEncontrado.ativo){
            const alunosAtt = alunos.filter(alunos => alunos.id !== alunoEncontrado.id);
            const turmasAtt = turmas.map(turma => {
                if (turma.alunos.includes(alunoEncontrado.id)) {
                    return {
                        ...turma,
                        alunos: turma.alunos.filter(id => id !== alunoEncontrado.id)
                    };
                }
                return turma;
            });
    
            localStorage.setItem('alunos', JSON.stringify(alunosAtt));
            localStorage.setItem('turmas', JSON.stringify(turmasAtt)); // Atualiza a lista de turmas
        } else {
            alert('Aluno se encontra ativo no momento, não será possível apagar suas informações.');
        }
    },

    atualizarInfoAluno: function () {
        // Lógica de atualização de informações do aluno
    },

    AlunoEspecifico: function () {
        // Lógica de busca de aluno específico
    },

    ListaCompletaAlunos: function () {
        // Lógica de retorno da lista completa de alunos
    },

    QuantidadeTurmas: function () {
        // Lógica de retorno da quantidade de turmas
    },

    calcularMediaAluno: function () {
        // Lógica de cálculo de média de aluno para análise
    },

    desativarAluno: function () {
        // Lógica de desativação de aluno
    },

    ListaAlunosAtivos: function () {
        // Lógica de retorno da lista de alunos ativos
    },

    ListaAlunosInativos: function () {
        // Lógica de retorno da lista de alunos inativos
    },

    AlunosMediaEsperada: function () {
        // Lógica de retorno de alunos com média esperada
    },

    relatorioCompleto: function () {
        // Lógica de geração de relatório completo
    },

};

function processo() {
    carregarDadosDoLocalStorage().then(() => {
        while (true) {
            const valor = prompt('Digite o número que corresponder com sua condição atual:\n\n1: Sou aluno\n2: Quero me matricular em uma instituição.\n3: Sou ADM\n4: Encerrar');

            switch (valor) {
                case "1":
                    alert('Você selecionou a opção "Sou aluno".');
                    const opcao = prompt('Digite o número que corresponder à ação desejada:\n\n1: Média das notas do semestre\n2: Atualizar informações da conta\n3: Cancelamento da matrícula');

                    switch (opcao) {
                        case "1":
                            validacoes.reset();
                            return;
                        case "2":
                            metodoAluno.atualizarInfo();
                            validacoes.reset();
                            return;
                        case "3":
                            metodoAluno.cancelarMatricula();
                            validacoes.reset();
                            return;
                        default:
                            alert('Opção inválida. Por favor, escolha uma opção válida.');
                    }
                    break;
                case "2":
                    alert('Você selecionou a opção "Quero me matricular em uma instituição".');
                    metodoAluno.cadastrarAluno();
                    validacoes.reset();
                    return;
                case "3":
                    alert('Você selecionou a opção "Sou ADM".');
                    const opcaoADM = prompt('Digite o número que corresponder à ação desejada:\n\n1: Cadastrar turma\n2: Atualizar informações da conta\n3: Cancelamento da matrícula\n4: Retornar a lista completa de alunos\n5: Retornar quantas turmas tem na escola\n6: Calcular a média do aluno\n7: Desativar aluno\n8: Retornar a lista apenas com alunos ativos\n9: Retornar a lista apenas com alunos inativos\n10: Retornar os alunos com a média esperada\n11: Relatório completo');

                    switch (opcaoADM) {
                        case "1":
                            metodoAdm.cadastrarTurma();
                            validacoes.reset();
                            return;
                        case "2":
                            metodoAdm.atualizarInfo();
                            validacoes.reset();
                            return;
                        case "3":
                            metodoAdm.cancelarMatricula();
                            validacoes.reset();
                            return;
                        case "4":
                            metodoAdm.retornarListaCompletaAlunos();
                            validacoes.reset();
                            return;
                        case "5":
                            metodoAdm.retornarQuantidadeTurmas();
                            validacoes.reset();
                            return;
                        case "6":
                            metodoAdm.calcularMediaAluno();
                            validacoes.reset();
                            return;
                        case "7":
                            metodoAdm.removerAluno();
                            validacoes.reset();
                            return;
                        case "8":
                            metodoAdm.retornarListaAlunosAtivos();
                            validacoes.reset();
                            return;
                        case "9":
                            metodoAdm.retornarListaAlunosInativos();
                            validacoes.reset();
                            return;
                        case "10":
                            metodoAdm.retornarAlunosMediaEsperada();
                            validacoes.reset();
                            return;
                        case "11":
                            metodoAdm.relatorioCompleto();
                            validacoes.reset();
                            return;
                        case "12":

                            validacoes.reset();
                            return;
                        default:
                            alert('Opção inválida. Por favor, escolha uma opção válida.');
                    }
                    break;
                case "4":
                    return;
                case "segredo":
                    alert('Redirecionando...');
                    window.location.href = 'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/d412036bb520f46ef7db81ec683f75e14dad9fcc66bbc70852dc3923e5ec5e50_1.jpg';
                    return;
                default:
                    alert('Opção inválida. Por favor, escolha uma opção válida.');
            }
        }
    });
}

processo();
