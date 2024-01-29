
const alunos = ['João','Juliana','Ana','Caio'];
const media = [10,8,7.5,9];

const listaMediaDeAluno = [alunos, media];

function verificaSeExisteAluno(aluno){

    if(listaMediaDeAluno[0].includes(aluno)){
       return true;
    }else{
       return false;
    }
}

function exibeMediaNotaAluno(aluno){
    
    if(verificaSeExisteAluno(aluno) == true){
        const indice = listaMediaDeAluno[0].indexOf(aluno);
        console.log(`${aluno} está cadastrado e seu índice é ${indice}`);
    }
}


exibeMediaNotaAluno("João")