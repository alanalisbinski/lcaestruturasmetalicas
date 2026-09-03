// ===== MODAL DE IMAGEM =====
function abrirImagem(caminho) {
  console.log("Tentando carregar imagem:", caminho); // Ajuda a diagnosticar
  const modal = document.getElementById('imagemModal');
  const imagemGrande = document.getElementById('imagemGrande');
  
  imagemGrande.src = caminho;
  modal.classList.add('ativo');
}

function fecharImagem() {
  const modal = document.getElementById('imagemModal');
  modal.classList.remove('ativo');
}

// Fechar ao clicar fora da imagem
document.getElementById('imagemModal').addEventListener('click', function(e) {
  if (e.target === this) {
    fecharImagem();
  }
});

// ===== MODAIS DOS SERVIÇOS =====
// Serviço 1 - Estruturas Metálicas
document.getElementById('btnMais').addEventListener('click', function() {
  document.getElementById('caixaTexto').style.display = 'block';
});
document.getElementById('btnFechar').addEventListener('click', function() {
  document.getElementById('caixaTexto').style.display = 'none';
});

// Serviço 2 - Portões
document.getElementById('btnMais2').addEventListener('click', function() {
  document.getElementById('caixaTexto2').style.display = 'block';
});
document.getElementById('btnFechar2').addEventListener('click', function() {
  document.getElementById('caixaTexto2').style.display = 'none';
});

// Serviço 3 - Calhas e Rufos
document.getElementById('btnMais3').addEventListener('click', function() {
  document.getElementById('caixaTexto3').style.display = 'block';
});
document.getElementById('btnFechar3').addEventListener('click', function() {
  document.getElementById('caixaTexto3').style.display = 'none';
});

// Serviço 4 - Elétrica
document.getElementById('btnMais4').addEventListener('click', function() {
  document.getElementById('caixaTexto4').style.display = 'block';
});
document.getElementById('btnFechar4').addEventListener('click', function() {
  document.getElementById('caixaTexto4').style.display = 'none';
});