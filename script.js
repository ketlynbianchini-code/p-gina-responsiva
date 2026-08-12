// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
  initPostButtons();
});

/**
 * Inicializa os botões das postagens
 */
function initPostButtons() {
  const buttons = document.querySelectorAll('.btn-primary');

  buttons.forEach((button) => {
    // 1. Feedback ao clicar (Alert)
    button.addEventListener('click', (e) => {
      // Encontra o título do post relativo ao botão clicado
      const postCard = e.target.closest('.post');
      const postTitle = postCard.querySelector('.post-title').innerText;
      
      alert(`🎉 Obrigado pelo interesse!\nVocê está sendo redirecionado para o artigo:\n"${postTitle}"`);
    });

    // 2. Efeito visual "Ripple" (Onda) ao clicar
    button.addEventListener('mousedown', function(e) {
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;
      
      const ripples = document.createElement('span');
      ripples.style.left = x + 'px';
      ripples.style.top = y + 'px';
      ripples.classList.add('ripple'); // Necessário adicionar CSS para .ripple
      
      this.appendChild(ripples);
      
      setTimeout(() => {
        ripples.remove();
      }, 600); // Remove após a animação
    });
  });
}

// Nota: Para o efeito ripple funcionar perfeitamente,
// adicione este pequeno trecho ao final do seu style.css:
/*
.btn-primary {
  position: relative;
  overflow: hidden;
}
.ripple {
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  pointer-events: none;
  border-radius: 50%;
  animation: animateRipple 0.6s linear;
}
@keyframes animateRipple {
  0% { width: 0px; height: 0px; opacity: 0.5; }
  100% { width: 500px; height: 500px; opacity: 0; }
}
*/
