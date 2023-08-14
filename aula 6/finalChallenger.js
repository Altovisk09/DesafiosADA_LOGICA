const turmasBase = [
    {
        id: 1,
        nome: "A",
        professor: "João Silva",
        alunos: [1, 9, 17, 25, 33, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
    },
    {
        id: 2,
        nome: "B",
        professor: "Mariana Oliveira",
        alunos: [2, 10, 18, 26, 34]
    },
    {
        id: 3,
        nome: "C",
        professor: "Pedro Santos",
        alunos: [3, 11, 19, 27, 35]
    },
    {
        id: 4,
        nome: "D",
        professor: "Isabela Almeida",
        alunos: [4, 12, 20, 28, 36]
    },
    {
        id: 5,
        nome: "E",
        professor: "Lucas Martins",
        alunos: [5, 13, 21, 29, 37]
    },
    {
        id: 6,
        nome: "F",
        professor: "Carolina Lima",
        alunos: [6, 14, 22, 30, 38]
    },
    {
        id: 7,
        nome: "G",
        professor: "Rafaela Rocha",
        alunos: [7, 15, 23, 31, 39]
    },
    {
        id: 8,
        nome: "H",
        professor: "Enzo Fernandes",
        alunos: [8, 16, 24, 32, 40]
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
        notas: [7.5, 8.2, 9.0],
        ativo: false
    },
    {
        id: 2,
        nome: "João",
        sobrenome: "Silva",
        cpf: "23456789011",
        email: "joao.silva@example.com",
        turma: 2,
        nascimento: "05-07-2007",
        notas: [6, 7.8, 4.5],
        ativo: true
    },
    {
        id: 3,
        nome: "Mariana",
        sobrenome: "Lima",
        cpf: "34567890112",
        email: "mariana.lima@example.com",
        turma: 3,
        nascimento: "20-01-2005",
        notas: [5.2, 4.8, 3.7],
        ativo: true
    },
    {
        id: 4,
        nome: "Pedro",
        sobrenome: "Ferreira",
        cpf: "45678901213",
        email: "pedro.ferreira@example.com",
        turma: 4,
        nascimento: "10-11-2006",
        notas: [2.9, 4.4, 5.1],
        ativo: false
    },
    {
        id: 5,
        nome: "Julia",
        sobrenome: "Santos",
        cpf: "56789012314",
        email: "julia.santos@example.com",
        turma: 5,
        nascimento: "25-09-2003",
        notas: [3.5, 2.8, 4.6],
        ativo: true
    },
    {
        id: 6,
        nome: "Lucas",
        sobrenome: "Oliveira",
        cpf: "67890123415",
        email: "lucas.oliveira@example.com",
        turma: 6,
        nascimento: "08-02-2004",
        notas: [7.1, 8.7, 6.9],
        ativo: false
    },
    {
        id: 7,
        nome: "Isabela",
        sobrenome: "Rocha",
        cpf: "78901234516",
        email: "isabela.rocha@example.com",
        turma: 7,
        nascimento: "30-12-2005",
        notas: [6.8, 9.3, 8.7],
        ativo: true
    },
    {
        id: 8,
        nome: "Enzo",
        sobrenome: "Martins",
        cpf: "89012345617",
        email: "enzo.martins@example.com",
        turma: 8,
        nascimento: "15-06-2009",
        notas: [9.2, 7.6, 8.4],
        ativo: false
    },
    {
        id: 9,
        nome: "Sophia",
        sobrenome: "Fernandes",
        cpf: "90123456718",
        email: "sophia.fernandes@example.com",
        turma: 1,
        nascimento: "18-04-2007",
        notas: [5.2, 4.8, 3.7],
        ativo: true
    },
    {
        id: 10,
        nome: "Matheus",
        sobrenome: "Gomes",
        cpf: "01234567819",
        email: "matheus.gomes@example.com",
        turma: 2,
        nascimento: "03-09-2004",
        notas: [7.2, 8.5, 6.1],
        ativo: true
    },
    {
        id: 11,
        nome: "Rafaela",
        sobrenome: "Sousa",
        cpf: "23456789120",
        email: "rafaela.sousa@example.com",
        turma: 3,
        nascimento: "21-05-2008",
        notas: [8.9, 7.4, 9.3],
        ativo: true
    },
    {
        id: 12,
        nome: "Pedro",
        sobrenome: "Almeida",
        cpf: "34567891221",
        email: "pedro.almeida@example.com",
        turma: 4,
        nascimento: "14-07-2006",
        notas: [2.9, 4.4, 5.1],
        ativo: false
    },
    {
        id: 13,
        nome: "Camila",
        sobrenome: "Machado",
        cpf: "45678912322",
        email: "camila.machado@example.com",
        turma: 5,
        nascimento: "02-11-2005",
        notas: [3.5, 2.8, 4.6],
        ativo: true
    },
    {
        id: 14,
        nome: "Vinicius",
        sobrenome: "Farias",
        cpf: "56789123423",
        email: "vinicius.farias@example.com",
        turma: 6,
        nascimento: "19-01-2007",
        notas: [7.3, 6.8, 8.6],
        ativo: true
    },
    {
        id: 15,
        nome: "Laura",
        sobrenome: "Ribeiro",
        cpf: "67891234524",
        email: "laura.ribeiro@example.com",
        turma: 7,
        nascimento: "05-04-2004",
        notas: [5.9, 6.3, 4.8],
        ativo: false
    },
    {
        id: 16,
        nome: "Diego",
        sobrenome: "Costa",
        cpf: "78912345625",
        email: "diego.costa@example.com",
        turma: 8,
        nascimento: "30-08-2003",
        notas: [6.2, 8.0, 9.1],
        ativo: true
    },
    {
        id: 17,
        nome: "Beatriz",
        sobrenome: "Santana",
        cpf: "89123456726",
        email: "beatriz.santana@example.com",
        turma: 1,
        nascimento: "17-10-2006",
        notas: [3.7, 4.1, 5.5],
        ativo: false
    },
    {
        id: 18,
        nome: "Lucas",
        sobrenome: "Oliveira",
        cpf: "90123456827",
        email: "lucas.oliveira@example.com",
        turma: 2,
        nascimento: "12-12-2005",
        notas: [8.5, 7.2, 9.0],
        ativo: true
    },
    {
        id: 19,
        nome: "Marina",
        sobrenome: "Carvalho",
        cpf: "01234567928",
        email: "marina.carvalho@example.com",
        turma: 3,
        nascimento: "09-03-2004",
        notas: [2.5, 2.9, 3.3],
        ativo: true
    },
    {
        id: 20,
        nome: "Gabriel",
        sobrenome: "Silveira",
        cpf: "12345679029",
        email: "gabriel.silveira@example.com",
        turma: 4,
        nascimento: "25-05-2007",
        notas: [6.8, 9.2, 7.6],
        ativo: false
    },
    {
        id: 21,
        nome: "Larissa",
        sobrenome: "Pereira",
        cpf: "23456789130",
        email: "larissa.pereira@example.com",
        turma: 5,
        nascimento: "07-09-2008",
        notas: [8.6, 7.3, 9.0],
        ativo: true
    },
    {
        id: 22,
        nome: "Lucas",
        sobrenome: "Rocha",
        cpf: "34567891231",
        email: "lucas.rocha@example.com",
        turma: 6,
        nascimento: "20-11-2006",
        notas: [5.6, 6.1, 4.4],
        ativo: false
    },
    {
        id: 23,
        nome: "Amanda",
        sobrenome: "Campos",
        cpf: "45678912332",
        email: "amanda.campos@example.com",
        turma: 7,
        nascimento: "03-02-2005",
        notas: [6.4, 6.9, 5.1],
        ativo: true
    },
    {
        id: 24,
        nome: "Matheus",
        sobrenome: "Fernandes",
        cpf: "56789123433",
        email: "matheus.fernandes@example.com",
        turma: 8,
        nascimento: "18-04-2007",
        notas: [9.1, 7.5, 8.4],
        ativo: true
    },
    {
        id: 25,
        nome: "Juliana",
        sobrenome: "Alves",
        cpf: "67891234534",
        email: "juliana.alves@example.com",
        turma: 1,
        nascimento: "30-06-2004",
        notas: [2.2, 2.7, 3.1],
        ativo: false
    },
    {
        id: 26,
        nome: "Gustavo",
        sobrenome: "Lima",
        cpf: "78912345635",
        email: "gustavo.lima@example.com",
        turma: 2,
        nascimento: "15-08-2003",
        notas: [8.3, 6.7, 9.5],
        ativo: true
    },
    {
        id: 27,
        nome: "Isabella",
        sobrenome: "Oliveira",
        cpf: "89123456736",
        email: "isabella.oliveira@example.com",
        turma: 3,
        nascimento: "28-10-2006",
        notas: [6.5, 8.8, 7.9],
        ativo: true
    },
    {
        id: 28,
        nome: "Rafael",
        sobrenome: "Santos",
        cpf: "90123456837",
        email: "rafael.santos@example.com",
        turma: 4,
        nascimento: "12-12-2005",
        notas: [9.0, 7.6, 8.2],
        ativo: false
    },
    {
        id: 29,
        nome: "Carolina",
        sobrenome: "Gonçalves",
        cpf: "01234567938",
        email: "carolina.goncalves@example.com",
        turma: 5,
        nascimento: "02-02-2004",
        notas: [7.8, 8.9, 6.4],
        ativo: true
    },
    {
        id: 30,
        nome: "Eduardo",
        sobrenome: "Machado",
        cpf: "12345679039",
        email: "eduardo.machado@example.com",
        turma: 6,
        nascimento: "19-04-2007",
        notas: [8.6, 9.3, 7.1],
        ativo: true
    },
    {
        id: 31,
        nome: "Fernanda",
        sobrenome: "Costa",
        cpf: "23456789140",
        email: "fernanda.costa@example.com",
        turma: 7,
        nascimento: "11-07-2008",
        notas: [9.2, 7.5, 8.9],
        ativo: true
    },
    {
        id: 32,
        nome: "Ricardo",
        sobrenome: "Gomes",
        cpf: "34567891241",
        email: "ricardo.gomes@example.com",
        turma: 8,
        nascimento: "24-09-2006",
        notas: [7.4, 8.1, 9.3],
        ativo: false
    },
    {
        id: 33,
        nome: "Aline",
        sobrenome: "Martins",
        cpf: "45678912342",
        email: "aline.martins@example.com",
        turma: 1,
        nascimento: "07-11-2005",
        notas: [6.8, 8.7, 7.9],
        ativo: true
    },
    {
        id: 34,
        nome: "Vitor",
        sobrenome: "Ferreira",
        cpf: "56789123443",
        email: "vitor.ferreira@example.com",
        turma: 2,
        nascimento: "19-01-2007",
        notas: [9.1, 7.6, 8.4],
        ativo: true
    },
    {
        id: 35,
        nome: "Carla",
        sobrenome: "Almeida",
        cpf: "67891234544",
        email: "carla.almeida@example.com",
        turma: 3,
        nascimento: "02-03-2004",
        notas: [8.3, 6.9, 7.5],
        ativo: false
    },
    {
        id: 36,
        nome: "Hugo",
        sobrenome: "Sousa",
        cpf: "78912345645",
        email: "hugo.sousa@example.com",
        turma: 4,
        nascimento: "15-05-2003",
        notas: [6.5, 8.2, 9.0],
        ativo: true
    },
    {
        id: 37,
        nome: "Beatriz",
        sobrenome: "Lima",
        cpf: "89123456746",
        email: "beatriz.lima@example.com",
        turma: 5,
        nascimento: "28-07-2006",
        notas: [9.4, 7.8, 8.7],
        ativo: true
    },
    {
        id: 38,
        nome: "Rafael",
        sobrenome: "Ribeiro",
        cpf: "90123456847",
        email: "rafael.ribeiro@example.com",
        turma: 6,
        nascimento: "10-09-2005",
        notas: [7.9, 8.6, 6.7],
        ativo: false
    },
    {
        id: 39,
        nome: "Júlia",
        sobrenome: "Campos",
        cpf: "01234567948",
        email: "julia.campos@example.com",
        turma: 7,
        nascimento: "23-11-2004",
        notas: [8.5, 6.7, 9.2],
        ativo: true
    },
    {
        id: 40,
        nome: "Gustavo",
        sobrenome: "Oliveira",
        cpf: "12345679049",
        email: "gustavo.oliveira@example.com",
        turma: 8,
        nascimento: "06-01-2007",
        notas: [7.3, 9.0, 8.4],
        ativo: true
    },
    {
        id: 41,
        nome: "Ricardo",
        sobrenome: "Sousa",
        cpf: "34567890151",
        email: "ricardo.sousa@example.com",
        turma: 1,
        nascimento: "05-07-2006",
        notas: [8.0, 7.5, 6.9],
        ativo: true
    },
    {
        id: 42,
        nome: "Carla",
        sobrenome: "Campos",
        cpf: "45678901252",
        email: "carla.campos@example.com",
        turma: 1,
        nascimento: "20-01-2004",
        notas: [6.7, 8.2, 9.0],
        ativo: true
    },
    {
        id: 43,
        nome: "Vitor",
        sobrenome: "Ferreira",
        cpf: "56789012353",
        email: "vitor.ferreira@example.com",
        turma: 1,
        nascimento: "10-11-2007",
        notas: [7.8, 9.2, 8.5],
        ativo: false
    },
    {
        id: 44,
        nome: "Bianca",
        sobrenome: "Santos",
        cpf: "67890123454",
        email: "bianca.santos@example.com",
        turma: 1,
        nascimento: "25-09-2002",
        notas: [9.0, 8.5, 7.7],
        ativo: true
    },
    {
        id: 45,
        nome: "Rafael",
        sobrenome: "Oliveira",
        cpf: "78901234555",
        email: "rafael.oliveira@example.com",
        turma: 1,
        nascimento: "08-02-2003",
        notas: [7.5, 8.1, 6.4],
        ativo: false
    },
    {
        id: 46,
        nome: "Isabela",
        sobrenome: "Rocha",
        cpf: "89012345656",
        email: "isabela.rocha@example.com",
        turma: 1,
        nascimento: "30-12-2004",
        notas: [6.8, 9.3, 8.7],
        ativo: true
    },
    {
        id: 47,
        nome: "Enzo",
        sobrenome: "Martins",
        cpf: "90123456757",
        email: "enzo.martins@example.com",
        turma: 1,
        nascimento: "15-06-2006",
        notas: [9.2, 7.6, 8.4],
        ativo: false
    },
    {
        id: 48,
        nome: "Sophia",
        sobrenome: "Fernandes",
        cpf: "01234567858",
        email: "sophia.fernandes@example.com",
        turma: 1,
        nascimento: "18-04-2004",
        notas: [8.7, 6.9, 7.8],
        ativo: true
    },
    {
        id: 49,
        nome: "Matheus",
        sobrenome: "Gomes",
        cpf: "12345678959",
        email: "matheus.gomes@example.com",
        turma: 1,
        nascimento: "03-09-2001",
        notas: [7.2, 8.5, 6.1],
        ativo: true
    },
    {
        id: 50,
        nome: "Rafaela",
        sobrenome: "Sousa",
        cpf: "23456789060",
        email: "rafaela.sousa@example.com",
        turma: 1,
        nascimento: "21-05-2009",
        notas: [8.9, 7.4, 9.3],
        ativo: true
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
                nascimento: prompt('Insira sua data de nascimento (DD-MM-AAAA).'),
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
        const alunosJSON = localStorage.getItem('alunos');
        let alunos = JSON.parse(alunosJSON);

        let alunoId = prompt('Qual o número da sua matrícula?');
        let alunoIndex = alunos.findIndex(aluno => aluno.id == alunoId);

        if (alunoIndex !== -1) {
            let aluno = alunos[alunoIndex];

            let continuar = true;
            while (continuar) {
                let opcao = prompt(`Escolha o que deseja atualizar:\n1- Nome: ${aluno.nome}\n2- Sobrenome: ${aluno.sobrenome}\n3- CPF: ${aluno.cpf}\n4- Email: ${aluno.email}\n5- Data de Nascimento: ${aluno.nascimento}\n6- Encerrar`);

                switch (opcao) {
                    case '1':
                        let novoNome = prompt('Digite o novo nome:');
                        aluno.nome = novoNome || aluno.nome;
                        break;
                    case '2':
                        let novoSobrenome = prompt('Digite o novo sobrenome:');
                        aluno.sobrenome = novoSobrenome || aluno.sobrenome;
                        break;
                    case '3':
                        let novoCPF = prompt('Digite o novo CPF:');
                        aluno.cpf = novoCPF || aluno.cpf;
                        break;
                    case '4':
                        let novoEmail = prompt('Digite o novo email:');
                        aluno.email = novoEmail || aluno.email;
                        break;
                    case '5':
                        let novoNascimento = prompt('Digite a nova data de nascimento:');
                        aluno.nascimento = novoNascimento || aluno.nascimento;
                        break;
                    case '6':
                        continuar = false;
                        break;
                    default:
                        alert('Opção inválida. Escolha uma opção válida.');
                }
            }

            localStorage.setItem('alunos', JSON.stringify(alunos));
            alert('Suas informações foram atualizadas com sucesso.');
        } else {
            alert('Matrícula não encontrada. Verifique o número da matrícula digitado.');
        }
    },
    calcularMedia: function () {
        const alunosJSON = localStorage.getItem('alunos');
        const alunos = JSON.parse(alunosJSON);
        let alunoId = prompt('Qual o numero da sua matricula?');
        let alunoEncontrado = alunos.find(aluno => aluno.id == alunoId);

        if (alunoEncontrado) {
            alert(`Olá ${alunoEncontrado.nome}`)
            const notas = alunoEncontrado.notas;
            if (notas.length > 0) {
                const somaNotas = notas.reduce((total, nota) => total + parseFloat(nota), 0);
                const media = somaNotas / notas.length;
                let msgDinamica = media < 6 ? "você foi reprovado..." : "você foi aprovado!"
                alert(`Sua média é ${media.toFixed(2)}, ${msgDinamica} `);
            } else {
                alert(`você ainda não possui notas.`);
            }
        } else {
            alert('Matricula não encontrada ou incorreta.');
        }
    },
    cancelarMatricula: function () {
        const alunosJSON = localStorage.getItem('alunos');
        const alunos = JSON.parse(alunosJSON);
        let alunoId = prompt('Qual o numero da sua matricula?');
        let alunoIndex = alunos.findIndex(aluno => aluno.id == alunoId);
        if (alunoIndex !== -1) {
            if (alunos[alunoIndex].ativo) {
                let confirmacao = confirm('Tem certeza que quer tornar sua matricula inativa?');
                if (confirmacao) {
                    alunos[alunoIndex].ativo = false;
                    localStorage.setItem('alunos', JSON.stringify(alunos));
                    alert("Sua matricula está inativa.")
                }
            } else {
                alert('Você já está com a matricula inativa. Entre em contato com a secretaria.');
            }
        } else {
            alert('Matrícula não encontrada. Verifique o número da matrícula digitado.');
        }
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
        if (!alunoEncontrado) {
            alert('Aluno não encontrado')
        } else if (!alunoEncontrado.ativo){
            const alunosAtt = alunos.filter(alunos => alunos.id !== alunoEncontrado.id);
            const turmasAtt = turmas.map(turma => {
                if (turma.alunos.includes(alunoEncontrado.id)) {
                    alert(`Informações e cadastro do aluno ${alunoEncontrado.nome} ${alunoEncontrado.sobrenome}.`)
                    return {
                        ...turma,
                        alunos: turma.alunos.filter(id => id !== alunoEncontrado.id);
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
        const alunosJSON = localStorage.getItem('alunos');
        let alunos = JSON.parse(alunosJSON);

        const turmasJSON = localStorage.getItem('turmas');
        let turmas = JSON.parse(turmasJSON);

        let alunoId = prompt('Qual o numero da matricula do aluno que deseja atualizar?');
        let alunoIndex = alunos.findIndex(aluno => aluno.id == alunoId);

        if (alunoIndex !== -1) {
            let aluno = alunos[alunoIndex];

            let continuar = true;
            while (continuar) {
                let opcao = prompt(`Escolha o que deseja atualizar:\n1. Nome: ${aluno.nome}\n2. Sobrenome: ${aluno.sobrenome}\n3. CPF: ${aluno.cpf}\n4. Email: ${aluno.email}\n5. Data de Nascimento: ${aluno.nascimento}\n6. Turma: ${aluno.turma}\n7. Encerrar`);

                switch (opcao) {
                    case '1':
                        let novoNome = prompt('Digite o novo nome:');
                        aluno.nome = novoNome || aluno.nome;
                        break;
                    case '2':
                        let novoSobrenome = prompt('Digite o novo sobrenome:');
                        aluno.sobrenome = novoSobrenome || aluno.sobrenome;
                        break;
                    case '3':
                        let novoCPF = prompt('Digite o novo CPF:');
                        aluno.cpf = novoCPF || aluno.cpf;
                        break;
                    case '4':
                        let novoEmail = prompt('Digite o novo email:');
                        aluno.email = novoEmail || aluno.email;
                        break;
                    case '5':
                        let novoNascimento = prompt('Digite a nova data de nascimento:');
                        aluno.nascimento = novoNascimento || aluno.nascimento;
                        break;
                    case '6':
                        // Adicionar aluno à nova turma
                      
                        break;
                    case '7':
                        continuar = false;
                        break;
                    default:
                        alert('Opção invalida. Escolha uma opção valida.');
                }
            }
            localStorage.setItem('alunos', JSON.stringify(alunos));
            localStorage.setItem('turmas', JSON.stringify(turmas));
            alert('As informações do aluno foram atualizadas com sucesso.');
        } else {
            alert('Matricula não encontrada. Verifique o numero da matricula digitado.');
        }
    },
    AlunoEspecifico: function () {
        const alunosJSON = localStorage.getItem('alunos');
        const turmasJSON = localStorage.getItem('turmas')
        const alunos = JSON.parse(alunosJSON);
        const turmas = JSON.parse(turmasJSON);
        alert('Você selecionou Buscar aluno especifico.');
        let alunoId = prompt('Qual o id do aluno que está buscando?');
        let alunoEncontrado = alunos.find(aluno => aluno.id == alunoId);
        let turmaAluno = turmas.find(turma => turma.id == alunoEncontrado.turma);
        if (alunoEncontrado && turmaAluno) {
            alert(`Aluno encontrado!\nnome do aluno: ${alunoEncontrado.nome} ${alunoEncontrado.sobrenome}\nCPF: ${alunoEncontrado.cpf}\nEmail do aluno: ${alunoEncontrado.email}\nTurma do aluno(id): ${turmaAluno.id}\nTurma do aluno(sigla): ${turmaAluno.nome}\nData de nascimento do aluno: ${alunoEncontrado.nascimento}\nNotas do aluno: ${alunoEncontrado.notas}\nAluno ativo: ${alunoEncontrado.ativo}`);
        } else {
            alert('Aluno não encontrado.')
        }
    },

    ListaCompletaAlunos: function () {
        const alunosJSON = localStorage.getItem('alunos');
        const alunos = JSON.parse(alunosJSON);

        if (alunos) {
            let mensagem = (`Todos os alunos na base de dados: Total: ${alunos.length}\n\n`);
            for (const aluno of alunos) {
                mensagem += `Nome: ${aluno.nome} ${aluno.sobrenome}, Matricula: ${aluno.id}, Turma: ${aluno.turma}\n`;
            }
            console.log(mensagem)
            alert(mensagem);
        } else {
            alert('Não há alunos cadastrados em nossa base de dados.')
        }
    },

    QuantidadeTurmas: function () {
        const turmasJSON = localStorage.getItem('turmas');
        const turmas = JSON.parse(turmasJSON);
        let textoDinamico = turmas.length === 1 ? "turma registrada" : "turmas registradas";
        if (turmas) {
            alert(`Temos ${turmas.length} ${textoDinamico} no nosso sistema.`)
        } else {
            alert("Algo deu errado.")
        };
    },

    mediaAlunoEspecifico: function () {
        const alunosJSON = localStorage.getItem('alunos');
        const alunos = JSON.parse(alunosJSON);
        let alunoId = prompt('Qual o id do aluno que você está buscando.');
        let alunoEncontrado = alunos.find(aluno => aluno.id == alunoId);

        if (alunoEncontrado) {
            const notas = alunoEncontrado.notas;
            if (notas.length > 0) {
                const somaNotas = notas.reduce((total, nota) => total + parseFloat(nota), 0);
                const media = somaNotas / notas.length;
                alert(`A média do aluno ${alunoEncontrado.nome} ${alunoEncontrado.sobrenome} é ${media.toFixed(2)}`);
            } else {
                alert(`O aluno ${alunoEncontrado.nome} ${alunoEncontrado.sobrenome} ainda não possui notas.`);
            }
        } else {
            alert('Aluno não encontrado.');
        }
    },
    
    desativarAluno: function () {
        const alunosJSON = localStorage.getItem('alunos');
        const alunos = JSON.parse(alunosJSON);

        let alunoId = prompt('Insira a matricula que deseja desativar.');
        let alunoEncontrado = alunos.find(aluno => aluno.id == alunoId)
        if(alunoEncontrado.ativo){
            
        }else{
            alert('A matricula inserida não existe ou já está desativada.');
        }
    },

    ListaAlunosAtivos: function () {
        const alunosJSON = localStorage.getItem('alunos');
        const alunos = JSON.parse(alunosJSON);
        let alunosAtivos = alunos.filter(aluno => aluno.ativo);

        if (alunosAtivos.length > 0) {
            let mensagem = `Lista de Alunos Ativos: ${alunosAtivos.length}\n\n`;
            for (const aluno of alunosAtivos) {
                mensagem += `Nome: ${aluno.nome} ${aluno.sobrenome}, Matricula: ${aluno.id}, Turma: ${aluno.turma}\n`;
            }
            console.log(mensagem);
            alert(mensagem);
        } else {
            alert("Não há alunos ativos.");
        }
    },

    ListaAlunosInativos: function () {
        const alunosJSON = localStorage.getItem('alunos');
        const alunos = JSON.parse(alunosJSON);
        let alunosInativos = alunos.filter(aluno => !aluno.ativo);

        if (alunosInativos.length > 0) {
            let mensagem = `Lista de Alunos Inativos: ${alunosInativos.length}\n\n`;
            for (const aluno of alunosInativos) {
                mensagem += `Nome: ${aluno.nome} ${aluno.sobrenome}, Matricula: ${aluno.id}, Turma: ${aluno.turma}\n`;
            }
            console.log(mensagem);
            alert(mensagem);
        } else {
            alert("Não há alunos inativos.");
        }
    },

    AlunosMediaEsperada: function () {
        const alunosJSON = localStorage.getItem('alunos');
        const alunos = JSON.parse(alunosJSON);

        let alunosAprovados = [];
        for (const aluno of alunos) {
            const notaSomada = aluno.notas.reduce((acc, nota) => acc + nota, 0);
            const media = notaSomada / aluno.notas.length;
            if (media >= 6) {
                aluno.media = media;
                alunosAprovados.push(aluno);
            }
        };
        if (alunosAprovados.length > 0) {
            let mensagem = `Alunos aprovados: ${alunosAprovados.length}\n\n`;
            for (const aluno of alunosAprovados) {
                mensagem += `Nome: ${aluno.nome} ${aluno.sobrenome}, Turma: ${aluno.turma}, Média: ${aluno.media.toFixed(2)}\n`;
            }
            console.log(mensagem);
            alert(mensagem);
        } else {
            alert('Não há alunos aprovados com média maior que 6.');
        }
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
                            metodoAluno.calcularMedia();
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
                    const opcaoADM = prompt('Digite o número que corresponder à ação desejada:\n\n1: Cadastrar turma\n2: Atualizar informações de aluno\n3: Cancelamento da matrícula\n4: Retornar a lista completa de alunos\n5: Retornar quantas turmas tem na escola\n6: Calcular a média do aluno\n7: Desativar aluno\n8: Retornar a lista apenas com alunos ativos\n9: Retornar a lista apenas com alunos inativos\n10: Retornar os alunos com a média esperada\n11: Relatório completo\n12: Buscar aluno');

                    switch (opcaoADM) {
                        case "1":
                            metodoAdm.cadastrarTurma();
                            validacoes.reset();
                            return;
                        case "2":
                            metodoAdm.atualizarInfoAluno();
                            validacoes.reset();
                            return;
                        case "3":
                            metodoAdm.cancelarMatricula();
                            validacoes.reset();
                            return;
                        case "4":
                            metodoAdm.ListaCompletaAlunos();
                            validacoes.reset();
                            return;
                        case "5":
                            metodoAdm.QuantidadeTurmas();
                            validacoes.reset();
                            return;
                        case "6":
                            metodoAdm.mediaAlunoEspecifico();
                            validacoes.reset();
                            return;
                        case "7":
                            metodoAdm.removerAluno();
                            validacoes.reset();
                            return;
                        case "8":
                            metodoAdm.ListaAlunosAtivos();
                            validacoes.reset();
                            return;
                        case "9":
                            metodoAdm.ListaAlunosInativos();
                            validacoes.reset();
                            return;
                        case "10":
                            metodoAdm.AlunosMediaEsperada();
                            validacoes.reset();
                            return;
                        case "11":
                            metodoAdm.relatorioCompleto();
                            validacoes.reset();
                            return;
                        case "12":
                            metodoAdm.AlunoEspecifico();
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

