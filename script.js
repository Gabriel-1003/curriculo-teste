// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== MENU MOBILE (HAMBURGUER) ==========
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Anima o ícone do menu
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.toggle('active'));
        });
    }

    // ========== FECHA O MENU AO CLICAR EM UM LINK ==========
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // ========== SCROLL SUAVE PARA OS LINKS ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========== FORMULÁRIO DE CONTATO ==========
    const formContato = document.getElementById('form-contato');
    
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Pega os valores dos campos
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const assunto = document.getElementById('assunto').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            
            // Validação simples
            if (!nome || !email || !assunto || !mensagem) {
                alert('Por favor, preencha todos os campos!');
                return;
            }
            
            if (!validarEmail(email)) {
                alert('Por favor, digite um e-mail válido!');
                return;
            }
            
            // Simula envio bem-sucedido
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`);
            formContato.reset();
        });
    }

    // ========== FUNÇÃO PARA VALIDAR E-MAIL ==========
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // ========== DESTACAR LINK DO MENU AO ROLAR ==========
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight/3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // ========== EFEITO DE APARECER AO ROLAR ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplica o efeito para cards de projeto e outras seções
    document.querySelectorAll('.projeto-card, .sobre-content, .skill-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ========== RELÓGIO SIMPLES (OPCIONAL) ==========
    function atualizarRelogio() {
        const agora = new Date();
        const horas = agora.getHours().toString().padStart(2, '0');
        const minutos = agora.getMinutes().toString().padStart(2, '0');
        const segundos = agora.getSeconds().toString().padStart(2, '0');
        
        // Se quiser mostrar um relógio em algum lugar
        // document.getElementById('relogio').textContent = `${horas}:${minutos}:${segundos}`;
    }
    
    // Atualiza o relógio a cada segundo (opcional)
    // setInterval(atualizarRelogio, 1000);

    // ========== MENSAGEM DE BOAS-VINDAS NO CONSOLE ==========
    console.log('🚀 Site carregado com sucesso!');
    console.log('👨‍💻 Desenvolvido com ❤️ por um dev iniciante');
    console.log('📚 Aprendendo JavaScript todos os dias!');

    // ========== CONTADOR DE VISUALIZAÇÕES (OPCIONAL) ==========
    if (localStorage.getItem('visitas')) {
        let visitas = parseInt(localStorage.getItem('visitas')) + 1;
        localStorage.setItem('visitas', visitas);
        console.log(`👀 Você visitou este site ${visitas} vezes`);
    } else {
        localStorage.setItem('visitas', '1');
        console.log('👀 Primeira visita! Bem-vindo!');
    }

    // ========== BOTÃO VOLTAR AO TOPO (OPCIONAL) ==========
    const criarBotaoTopo = () => {
        const botao = document.createElement('button');
        botao.innerHTML = '↑';
        botao.id = 'btn-topo';
        botao.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            font-size: 24px;
            display: none;
            transition: all 0.3s;
            z-index: 999;
        `;

        botao.addEventListener('mouseenter', () => {
            botao.style.backgroundColor = '#2980b9';
            botao.style.transform = 'scale(1.1)';
        });

        botao.addEventListener('mouseleave', () => {
            botao.style.backgroundColor = '#3498db';
            botao.style.transform = 'scale(1)';
        });

        botao.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        document.body.appendChild(botao);

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                botao.style.display = 'block';
            } else {
                botao.style.display = 'none';
            }
        });
    };

    criarBotaoTopo();

});