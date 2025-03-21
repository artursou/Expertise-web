const explanatoryTexts = document.querySelectorAll('.explanatoryText');

explanatoryTexts.forEach((element, index) => {
    element.style.marginLeft = `${index * 60}px`; 
});

const textarea = document.getElementById('myTextarea');

textarea.addEventListener('input', function () {
  this.style.height = 'auto'; // Redefine a altura para recalcular
  this.style.height = (this.scrollHeight) + 'px'; // Ajusta a altura conforme o conteúdo
});

// Adiciona um evento de clique ao botão
document.getElementById("buttonHeaderOrcamento").addEventListener("click", function() {
    // Rola a página até a seção alvo com uma animação suave
    document.getElementById("formTitle").scrollIntoView({ behavior: 'smooth' });
});

// Adiciona um evento de clique ao botão
document.getElementById("buttonHeaderContatos").addEventListener("click", function() {
    // Rola a página até a seção alvo com uma animação suave
    document.getElementById("bottomHeader").scrollIntoView({ behavior: 'smooth' });
});