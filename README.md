# 🚀 Flexbox Post Feed: Edição Premium

[![Licença: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CSS3: Flexbox](https://img.shields.io/badge/CSS3-Flexbox-blue.svg)](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout)
[![JavaScript: ES6+](https://img.shields.io/badge/JS-ES6+-yellow.svg)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

Esta é uma versão aprimorada e esteticamente refinada de um feed de postagens, desenvolvida para demonstrar o domínio de técnicas avançadas do **CSS Flexbox**. O layout foca em cards horizontais largos (full-width), ideais para blogs modernos e painéis de controle.

## ✨ Destaques do Projeto

* **Design Responsivo:** Adaptável a diferentes tamanhos de tela.
* **Flexbox Mastery:** Uso preciso de `flex-direction`, `flex` shorthand e `align-self`.
* **UI/UX Moderna:** Cores suaves, sombras suaves, bordas arredondadas e microinterações no hover.
* **Código Limpo:** Utilização de Variáveis CSS (Custom Properties) para fácil tematização.

## 🛠️ O Desafio Técnico (Resolvido)

O objetivo deste projeto foi aplicar os seguintes conceitos de Flexbox no arquivo `style.css`:

1.  **Layout Interno em Linha:** O container `article` usa `flex-direction: row` para organizar imagem e texto lado a lado.
2.  **Cards Full-Width:** A classe `.card` utiliza `flex: 1 1 100%` para garantir que cada postagem ocupe toda a largura disponível na lista.
3.  **Alinhamento Assimétrico:** A imagem do post quebra o alinhamento centralizado padrão do pai usando `align-self: flex-start`, posicionando-se no topo do card.

## 📸 Preview Visual (Estrutural)

```text
+-------------------------------------------------------+
|  [IMAGEM]  TÍTULO DO POST                          |
|  (Topo)    Descrição breve e elegante...           |
|            Tags: #CSS #WebDesign        [Botão]    |
+-------------------------------------------------------+
