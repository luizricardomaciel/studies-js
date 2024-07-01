
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
    console.log(`No curso de ${i} temos:`);
    alunos.forEach(function(aluno){
        if (i == aluno.curso) {
            console.log(`${aluno.nome} de ${aluno.idade} anos`)
        }
    });
}

pesquisarPorCurso (`dev`)

function excluirPorNome (nameDel) {
    alunos = alunos.filter(i => i.nome !== nameDel);
    console.log(alunos)
};

excluirPorNome ("jao")
