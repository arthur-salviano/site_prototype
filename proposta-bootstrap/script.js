document.addEventListener('DOMContentLoaded', function() {
    // Ativar popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Ativar tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Menu dropdown em dispositivos móveis
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
    }

    // Fechar menu ao clicar em um link (mobile)
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                navbarCollapse.classList.remove('show');
            }
        });
    });

    // Efeito de scroll no header
    const header = document.querySelector('.header-institutional');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '';
        }
    });

    // Busca rápida - submit ao pressionar Enter
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('input[type="search"]');
            if (searchInput.value.trim()) {
                console.log('Busca:', searchInput.value);
                alert('Funcionalidade de busca: ' + searchInput.value);
            }
        });
    }

    // Cards de processos seletivos - animação de hover
    const processCards = document.querySelectorAll('.process-card');
    processCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Links rápidos - clique
    const quickLinks = document.querySelectorAll('.quick-link');
    quickLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.querySelector('p').textContent;
            console.log('Navegando para:', text);
        });
    });

    // Tabela de editais - botões de download
    const downloadButtons = document.querySelectorAll('.table .btn-outline-secondary');
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Baixando/edital');
            alert('Download do edital iniciado');
        });
    });

    // Botão Área do Candidato
    const candidateBtn = document.querySelector('.btn-candidate');
    if (candidateBtn) {
        candidateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://comperve.ufrn.br/candidato', '_blank');
        });
    }

    // Animações de entrada
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

    document.querySelectorAll('.process-card, .news-card, .quick-link').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Log de inicialização
    console.log('COMPERVE Portal - Proposta Bootstrap inicializado');
    console.log('Versão: 1.0.0');
});
