// Interatividade dos botões dos cards
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.article-btn');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      alert(`Você clicou no botão do Card ${index + 1}!`);
    });
  });
});
