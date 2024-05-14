//Exercicio 1
const numeros = [1,2,3,4,5]

function dobrar(arrayRecebido){
    const numerosDobrados = arrayRecebido.map(cadaPosicao => cadaPosicao * 2);
    return numerosDobrados
}

console.log(dobrar(numeros))

//Exercicio 2
const palavras = ["ola","tudo","bem"]
const palavra = ["hello","how","are","you"]

function maiuscula(arrayRecebido){
    const letrasMaiusculas = arrayRecebido.map(x => x.toUpperCase());
    return letrasMaiusculas
}

console.log(maiuscula(palavras))
console.log(maiuscula(palavra))
