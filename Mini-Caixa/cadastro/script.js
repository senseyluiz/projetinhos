let nome = document.querySelector("#nome");
let sobrenome = document.querySelector("#sobrenome");
let email = document.querySelector("#email");
let telefone = document.querySelector("#phone");
let nickName = document.querySelector("#nickname");
let senha = document.querySelector("#senha");
let cadastrar = document.querySelector("#cadastrar");

cadastrar.addEventListener("click", function() {
    localStorage.setItem("Nome", nome.value);
    localStorage.setItem("Sobrenome", sobrenome.value);
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Telefone", telefone.value);
    localStorage.setItem("Nickname", nickName.value);
    localStorage.setItem("Senha", senha.value);
});



console.log(nome);