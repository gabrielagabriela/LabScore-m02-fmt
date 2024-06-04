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