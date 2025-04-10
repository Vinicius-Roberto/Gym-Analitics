const menuToggle = document.getElementById('menu-toggle');
const headerAside = document.getElementById('header-aside');  // A referência correta ao header

menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();  // Evita que o clique no ícone do menu feche o menu imediatamente
    headerAside.classList.toggle('active');  // Alterna a classe 'active' para mostrar/ocultar o menu
});

// Fechar o menu se clicar fora
document.addEventListener('click', (event) => {
    if (!headerAside.contains(event.target) && !menuToggle.contains(event.target)) {
        headerAside.classList.remove('active');  // Fecha o menu se o clique for fora
    }
});
