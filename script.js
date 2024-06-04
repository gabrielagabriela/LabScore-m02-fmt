// Exercicio 01 Semana 03
let notas = [10,10,5,7];

function calculaMediaNotas(notas){
  let soma = 0;
  for(let i = 0; i < notas.length; i++){
    soma += notas[i];
  }
  let media = soma/notas.length;
  console.log(soma)
  return media;
}

let media = calculaMediaNotas(notas);
console.log(media);

// Exercicio 02 Semana 03
function mediaAluno(media){
  if(media >= 7){
    document.write("Parabéns, você passou na média!")
  }else {
    document.write("Infelizmente você está de recuperação!")
  }
}

mediaAluno(media);

// Exercicio 03 Semana 03
let nomesAlunos = ["Andre", "Pedro", "Maria", "Lana", "Catarina"];

function exibeNomesAlunos(nomes){
  nomes.forEach((nome) => document.write("</br>" +nome));
}

exibeNomesAlunos(nomesAlunos);