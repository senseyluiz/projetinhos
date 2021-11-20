let logar = document.querySelector("#logar");
let cadastrar = document.querySelector("cadastrar");
let usuario = document.querySelector("#usuario").value;
let senhaUsuario = document.querySelector("#senhaUsuario").value;

logar.addEventListener("click", function(e) {
    e.preventDefault();
    let nickName = localStorage.getItem("Nickname")
    let senha = localStorage.getItem("Senha");
    console.log("Usuario:" + nickName)
    console.log("Senha Usuario:" + senha)

    // if (nickName == usuario && senha == senhaUsuario) {
    //     alert("Senha Correta");
    // } else {
    //     alert("Senha Incorreta");
    // }
})