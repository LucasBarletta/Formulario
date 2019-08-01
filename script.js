let form = document.querySelector("#nome");
let letra = document.querySelector("h3")
let email = document.querySelector("#email");
let confirm = document.querySelector("#confirm");
let senha = document.querySelector("#senha");
let sexo = document.querySelector("footer");
let botao = document.querySelector("button");

function pegarInfo(){
    

    if(email.value != "" && email.value === confirm.value){
        console.log("funfou");
        letra.innerHTML = ("");
        localStorage.setItem('nome', form.value); 
        localStorage.setItem('email', email.value); 
        localStorage.setItem('confirm', confirm.value); 
        localStorage.setItem('senha', senha.value); 
        localStorage.setItem('sexo', sexo.value); 
    }
    else{
        letra.innerHTML = ("Erro email diferente ou incompleto");
        console.log("erro");
    }
}

botao.onclick = pegarInfo;

