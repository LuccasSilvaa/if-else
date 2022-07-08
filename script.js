//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let idade = 18

 if(idade >= 18){
   console.log("Voce pode entrar")
 }else{
     console.log("Voce não pode entrar")
 }

 //2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

let humano = false

 if(humano == true && idade >= 18){
     console.log("Voce é humano")
 }else{
     console.log("Voce é um Cristiano Ronaldo")
 }

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro


 let aniversario = "Junho"

 if(aniversario == "Janeiro" || aniversario == "Dezembro"){
     console.log("Feliz aniverssario!")
 }else{
    console.log("Não é seu aniverssario!")
}

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

const nome = "Ricaelly"

if(nome[0] === "R"){
     console.log("Nome bonito!")
 }else{
    console.log("Nome daora!")
   }

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

 let sobrenome = "Silva"

 if(sobrenome.length >= 6 || nome[0] == "E"){
    console.log("Nome chique!")
 }else{
    console.log("Que feio!")
 }

