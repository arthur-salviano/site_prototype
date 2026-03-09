document.addEventListener('DOMContentLoaded', function() {
    // Inicializar Sidenav
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // Inicializar Dropdown
    const dropdowns = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdowns, {
        coverTrigger: false,
        constrainWidth: false
    });

    // Inicializar Parallax
    const parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax);

    // Inicializar Tabs
    const tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs);

    // Inicializar Materialbox (lightbox)
    const materialboxed = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(materialboxed);

    // ScrollSpy
    const scrollSpy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollSpy, {
        scrollOffset: 50
    });

    // Carousel (se necessário)
    const carousel = document.querySelectorAll('.carousel');
    M.Carousel.init(carousel, {
        fullWidth: false,
        indicators: true
    });

    // Modal
    const modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);

    // Scroll to top animation
    const animateScroll = () => {
        const scrolled = window.scrollY;
        if (scrolled > 50) {
            document.querySelector('.header-main').style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
        } else {
            document.querySelector('.header-main').style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        }
    };

    window.addEventListener('scroll', animateScroll);

    // Search functionality
    const searchInput = document.querySelector('.search-form input[type="search"]');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = this.value.trim();
                if (query) {
                    console.log('Busca:', query);
                    alert('Funcionalidade de busca: ' + query);
                }
            }
        });

        // Limpar busca
        const searchClose = document.querySelector('.search-form .material-icons:last-child');
        if (searchClose) {
            searchClose.addEventListener('click', function() {
                searchInput.value = '';
            });
        }
    }

    // Cards de processos seletivos - animações
    const processCards = document.querySelectorAll('.process-card-mz');
    processCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15) !important';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1) !important';
        });
    });

    // Links rápidos - clique
    const quickLinks = document.querySelectorAll('.quick-link-item');
    quickLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.querySelector('span').textContent;
            console.log('Navegando para:', text);
            M.toast({html: 'Navegando para: ' + text, classes: 'teal'});
        });
    });

    // Botão Área do Candidato
    const candidateBtns = document.querySelectorAll('.btn-candidate');
    candidateBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                // Permite navegação normal se for um link real
                return;
            }
            e.preventDefault();
            window.open('https://comperve.ufrn.br/candidato', '_blank');
        });
    });

    // Tabela de editais - botões
    const downloadBtns = document.querySelectorAll('.editais-card-mz .btn-floating');
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Baixando/edital');
            M.toast({html: 'Download do edital iniciado', classes: 'teal'});
        });
    });

    // Links de notícias
    const newsLinks = document.querySelectorAll('.news-card-mz .card-action a');
    newsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Abrindo notícia');
            M.toast({html: 'Carregando notícia...', classes: 'teal'});
        });
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Animação de entrada para cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.process-card-mz, .news-card-mz, .quick-link-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Inicializar tooltips
    const tooltips = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltips);

    // Log de inicialização
    console.log('COMPERVE Portal - Proposta Materialize inicializado');
    console.log('Versão: 1.0.0');
    console.log('Materialize Version:', M.version);

    // Toast de boas-vindas (comentado para não incomodar)
    // M.toast({html: 'Bem-vindo ao portal COMPERVE', classes: 'rounded'});
});
