const pessoas = ["Fulano","Ciclano","Beltrano"]

//push = Adiciona um elemento ao final do array
pessoas.push("Caio")

//pop = Remove o ultimo elemento do array
pessoas.pop()

//unshift = Adiciona um elemento no inicio do array
pessoas.unshift("Caltrano")

//Remove o primeiro elemento do array
pessoas.shift()

//Atualizar um valor de um array
pessoas[1] = "Caio"
pessoas[2] = "Davi"
pessoas[3] = "Erik"


// console.log(pessoas)

// for(i=0; i<=10; i++){
//     console.log(pessoas[i])
// }

//forEach necessita de uma função dentro dele;
//Repetição para passar por uma parte de um array
pessoas.forEach(
    function rodarArray(pessoas){
        console.log(pessoas)
    }
)

//código para observar como funciona a função dentro do forEach
pessoas.forEach( (pessoas) => {
    console.log(pessoas)
} 
)

//ouuu

//código abreviado por conta de ter apenas uma linha de função
pessoas.forEach( pessoas => console.log(pessoas))

//Pegar uma informação e jogar na tela
pessoas.map(pessoas => console.log(pessoas))

//diferença entre forEach e map, forEach não devolve uma nova informação, ja o map ele manipula as informações contidas na função e ao final ele devolve a informação no array e não modifica o original.

const pessoasModificadas = pessoas.map(pessoas => console.log(pessoas + "!"))
//necessita guardar um map numa cons ou var, para guardar as informações alteradas nos arrays

numeros = ([1,2,3,4,5])

 function dobrar(numeros) {
   return array.map(numeros => numeros * 2);
   console.log(numeros)
}






//Para transformar os caracteres em caixa alta utilizamos .toUpperCase()