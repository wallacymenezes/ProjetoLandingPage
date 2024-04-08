var leonardo = window.document.getElementById("leonardo");
var samantha = window.document.getElementById("samantha");
var bruna = window.document.getElementById("bruna");
var setaDireita = window.document.getElementById("seta-direita");
var setaEsquerda = window.document.getElementById("seta-esquerda");

function rolarParaDireita(){
    samantha.style = "display: none";
    bruna.style = "display: flex";
    setaEsquerda.style = "display:flex";
    setaDireita.style = "display:none";
}

function rolarParaEsquerda(){
    samantha.style = "display: flex";
    bruna.style = "display: none";
    setaEsquerda.style = "display: none";
    setaDireita.style = "display: flex";
}