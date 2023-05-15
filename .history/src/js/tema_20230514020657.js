const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao-sol");

botaoAlterarTema.addEventListener("click", () => {
    body.classList.add("modo-escuro");

    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagem/componentes/lua.png")
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    if (modoEscuroAtivo) {

    }
});

