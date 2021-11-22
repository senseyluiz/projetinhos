let logar = document.querySelector("#logar");
let cadastrar = document.querySelector("#cadastrar");
let usuario = document.querySelector("#usuario");
let senhaUsuario = document.querySelector("#senhaUsuario");


logar.addEventListener("click", function(e) {
    e.preventDefault();
    let nickName = localStorage.getItem("Nickname")
    let senha = localStorage.getItem("Senha");
    console.log("Local Storage")
    console.log("Usuario:" + nickName)
    console.log("Senha Usuario:" + senha)

    console.log("Digitado")
    console.log("Usuario:" + usuario.value)
    console.log("Senha Usuario:" + senhaUsuario.value)

    if (usuario.value === "" || senhaUsuario.value === "") {
        alert("Preecha os dados de login")
    } else if (nickName == usuario.value && senha == senhaUsuario.value) {
        window.open("http://senseyluiz.github.io")
    } else {
        alert("Senha Incorreta");
    }
})

cadastrar.addEventListener("click", function(e) {
    e.preventDefault();
    window.open("../cadastro/cadastro.html");
})