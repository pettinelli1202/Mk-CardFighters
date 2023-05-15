const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema
botaoAlterarTema.addEventListener("click", () =>{
    body.classList.add("modo-escuro");

    imagemBotaoTrocaDeTema.setAttribute("src", "../")
})