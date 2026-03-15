function abrirImagem(){

let imagem = document.getElementById("imagemProjeto").src;

document.getElementById("imagemGrande").src = imagem;

document.getElementById("imagemModal").style.display = "flex";

}

function fecharImagem(){

document.getElementById("imagemModal").style.display = "none";

}

document.getElementById('btnMais').addEventListener('click', function() {
    document.getElementById('caixaTexto').style.display = 'block';
});

document.getElementById('btnFechar').addEventListener('click', function() {
    document.getElementById('caixaTexto').style.display = 'none';
});


document.getElementById('btnMais2').addEventListener('click', function() {
    document.getElementById('caixaTexto2').style.display = 'block';
});

document.getElementById('btnFechar2').addEventListener('click', function() {
    document.getElementById('caixaTexto2').style.display = 'none';
});


document.getElementById('btnMais3').addEventListener('click', function() {
    document.getElementById('caixaTexto3').style.display = 'block';
});

document.getElementById('btnFechar3').addEventListener('click', function() {
    document.getElementById('caixaTexto3').style.display = 'none';
});

document.getElementById('btnMais4').addEventListener('click', function() {
    document.getElementById('caixaTexto4').style.display = 'block';
});

document.getElementById('btnFechar4').addEventListener('click', function() {
    document.getElementById('caixaTexto4').style.display = 'none';
});