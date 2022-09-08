//Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
let num = Number(prompt("Digite um numero"))

let divisivel = Number(prompt("Insira um numero"))
if(divisivel%2 === 0){
    console.log("seu numero e divisivel por 2")
    if(divisivel%3 === 0){
    console.log("seu numero e divisivel por 3")
    }else{
        console.log("este numero n é divisivel por 3")
    }
}else{
    if (divisivel%3===0){
    console.log("Este numero e divisivel por 3.")
    }else{
            console.log("este numero n é divisivel por 3")
        }
        console.log("este numero n é divisivel por 2")
    }

    if (num%2===0 || num%3===0){
        console.log("Divisivel por 2 e por 3")
    }