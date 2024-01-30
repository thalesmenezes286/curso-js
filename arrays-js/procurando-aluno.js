
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
        // const alunos = listaMediaDeAluno[0];
        // const medias = listaMediaDeAluno[1];
        const [alunos, medias] = listaMediaDeAluno;
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        
        console.log(`${aluno} está cadastrado e seu índice é ${indice}`);
    }
}

exibeMediaNotaAluno("João");