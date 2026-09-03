  function abrirImagem(caminho) {
  const modal = document.getElementById('imagemModal');
  const imagemGrande = document.getElementById('imagemGrande');
  
  imagemGrande.src = caminho;
  modal.classList.add('ativo');
}

function fecharImagem() {
  const modal = document.getElementById('imagemModal');
  modal.classList.remove('ativo');
}

document.getElementById('imagemModal').addEventListener('click', function(e) {
  if (e.target === this) {
    fecharImagem();
  }
});

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