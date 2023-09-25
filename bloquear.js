// Adiciona um novo estado no histórico
window.history.pushState(null, null, document.URL);

// Detecta quando o usuário tenta voltar
window.addEventListener('popstate', function () {
    window.history.pushState(null, null, document.URL);
});

// Desabilita a funcionalidade do botão de voltar
window.history.forward();