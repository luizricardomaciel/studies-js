
let alunos = []

function cadastrarAluno(nome, idade, curso) {
    let aluno = {
        nome : nome,
        idade : idade ,
        curso : curso
    };
    alunos.push(aluno);
}

cadastrarAluno("maria", 23, "dev")
cadastrarAluno("robert", 25, "dev")
cadastrarAluno("jao", 21, "professor")

function listarAlunos () {
    console.log ("------LISTAGEM DE ALUNOS------");
    alunos.forEach(function(i) {
        console.log(`aluno(@): ${i.nome}, idade: ${i.idade}, curso: ${i.curso}`);
    });
}
listarAlunos ()

function pesquisarPorCurso (i) {
    console.log("-------PESQUISA DE ALUNOS-------");
    let alunosCurso = []
    alunos.forEach(function(aluno){
        if (i == aluno.curso) {
            alunosCurso += aluno.nome + aluno.idade
            //console.log(`No curso de ${i} temos ${aluno.nome} de ${aluno.idade}`)
        }
    });
}

pesquisarPorCurso (`dev`)


















/*
// Array para armazenar os alunos
let alunos = [];

// Função para cadastrar um novo aluno
function cadastrarAluno(nome, idade, curso) {
    let aluno = {
        nome: nome,
        idade: idade,
        curso: curso
    };
    alunos.push(aluno);
}

// Função para listar todos os alunos cadastrados
function listarAlunos() {
    console.log("Lista de Alunos:");
    alunos.forEach(function(aluno) {
        console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}`);
    });
}

// Função para pesquisar alunos por curso
function pesquisarPorCurso(curso) {
    console.log(`Alunos do curso ${curso}:`);
    alunos.forEach(function(aluno) {
        if (aluno.curso === curso) {
            console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}`);
        }
    });
}

// Função para remover um aluno pelo nome
function removerAluno(nome) {
    alunos = alunos.filter(function(aluno) {
        return aluno.nome !== nome;
    });
}

// Exemplos de utilização

// Cadastro de alguns alunos
cadastrarAluno("Maria", 20, "Engenharia");
cadastrarAluno("João", 22, "Medicina");
cadastrarAluno("Ana", 21, "Direito");

// Listagem de todos os alunos
listarAlunos();

// Pesquisa por alunos do curso de Medicina
pesquisarPorCurso("Medicina");

// Remoção do aluno "Maria"
removerAluno("Maria");

// Listagem atualizada após remoção
listarAlunos();

*/
