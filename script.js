// Espera o HTML carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. BOTÃO DE CLIQUE
    const botao = document.getElementById('botaoClique');
    
    botao.addEventListener('click', function() {
        alert('Olá! Bem-vindo ao meu primeiro site! 🎉');
        console.log('Botão foi clicado!');
    });

    // 2. FORMULÁRIO DE CONTATO
    const formulario = document.getElementById('meuForm');
    
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio real do formulário
        
        // Pega os valores dos campos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        // Validação simples
        if (nome && email && mensagem) {
            alert(`Obrigado pelo contato, ${nome}! Entraremos em contato em breve.`);
            
            // Limpa o formulário
            formulario.reset();
        } else {
            alert('Por favor, preencha todos os campos!');
        }
    });

    // 3. EFEITO DE SCROLL SUAVE NOS LINKS DO MENU
    const links = document.querySelectorAll('.menu a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            const elemento = document.querySelector(href);
            
            if (elemento) {
                elemento.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 4. MENSAGEM NO CONSOLE
    console.log('Site carregado com sucesso!');
    console.log('Aprendendo JavaScript é divertido! 😊');
    
});