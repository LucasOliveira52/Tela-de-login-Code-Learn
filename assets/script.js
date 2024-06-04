const inputSenha = document.getElementById("input-senha");
const olho = document.getElementById("olho");
let senhaVisivel = false;

olho.addEventListener("click", mudarIcone);

function mudarIcone () {
    senhaVisivel = !senhaVisivel
    if(senhaVisivel === true){
        inputSenha.type = "text";
        olho.className = "fa-solid fa-eye-slash";
    } 
    else {
        inputSenha.type = "password";
        olho.className = "fa-solid fa-eye"
    }
}