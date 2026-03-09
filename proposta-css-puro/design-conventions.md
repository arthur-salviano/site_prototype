# Design Conventions - Proposta CSS Puro

## Paleta de Cores Oficial

### Cores Primárias
| Cor | HEX | RGB | Uso |
|-----|-----|-----|-----|
| Primária | `#005dac` | `rgb(0, 93, 172)` | Elementos principais, headers, navbars |
| Primária Escura | `#003d7a` | `rgb(0, 61, 122)` | Footer, hover states |
| Primária Clara | `#4d8dcc` | `rgb(77, 141, 204)` | Fundos, acentos |
| Accent | `#e6a817` | `rgb(230, 168, 23)` | Botões CTA, badges |
| Accent Escuro | `#c48c0f` | `rgb(200, 140, 15)` | Hover states |

### Cores de Feedback
| Cor | HEX | RGB | Uso |
|-----|-----|-----|-----|
| Success | `#10b981` | `rgb(16, 185, 129)` | Status ativo, sucesso |
| Warning | `#f59e0b` | `rgb(245, 158, 11)` | Avisos |
| Danger | `#ef4444` | `rgb(239, 68, 68)` | Erros |
| Info | `#3b82f6` | `rgb(59, 130, 246)` | Informações |

### Escala de Cinzas
| Nome | HEX | Uso |
|------|-----|-----|
| 50 | `#f9fafb` | Fundos |
| 100 | `#f3f4f6` | Fundos claros |
| 200 | `#e5e7eb` | Bordas |
| 300 | `#d1d5db` | Linhas |
| 400 | `#9ca3af` | Textos desabilitados |
| 500 | `#6b7280` | Textos secundários |
| 600 | `#4b5563` | Subtítulos |
| 700 | `#374151` | Textos |
| 800 | `#1f2937` | Títulos claros |
| 900 | `#111827` | Títulos |

## Tipografia

### Fontes
- **Títulos:** Merriweather (Google Fonts) - serif
- **Corpo:** Inter (Google Fonts) - sans-serif

### Hierarquia Tipográfica
| Elemento | Tamanho | Peso | Line-height |
|----------|---------|------|-------------|
| H1 | 2.5rem | 700 | 1.3 |
| H2 | 2rem | 700 | 1.3 |
| H3 | 1.5rem | 700 | 1.4 |
| H4 | 1.25rem | 700 | 1.4 |
| H5 | 1rem | 700 | 1.5 |
| H6 | 0.875rem | 700 | 1.5 |
| Body | 1rem | 400 | 1.6 |
| Small | 0.875rem | 400 | 1.5 |
| Caption | 0.75rem | 400 | 1.4 |

## Espaçamento (Variáveis CSS)

| Nome | Valor |
|------|-------|
| xs | 0.25rem (4px) |
| sm | 0.5rem (8px) |
| md | 1rem (16px) |
| lg | 1.5rem (24px) |
| xl | 2rem (32px) |
| 2xl | 3rem (48px) |

## Bordas

| Nome | Valor |
|------|-------|
| sm | 4px |
| md | 8px |
| lg | 12px |
| xl | 16px |
| full | 9999px |

## Sombras

| Nome | Valor |
|------|-------|
| sm | 0 1px 2px 0 rgba(0, 0, 0, 0.05) |
| md | 0 4px 6px -1px rgba(0, 0, 0, 0.1) |
| lg | 0 10px 15px -3px rgba(0, 0, 0, 0.1) |
| xl | 0 20px 25px -5px rgba(0, 0, 0, 0.1) |

## Transições

| Nome | Duração |
|------|---------|
| fast | 150ms ease |
| base | 250ms ease |
| slow | 350ms ease |

## Convenções de Nomenclatura

### Metodologia BEM-like
```
.block {}
.block__element {}
.block--modifier {}
.block__element--modifier {}
```

### Classes Principais
- `.topbar` - Barra superior
- `.header` - Cabeçalho
- `.header-brand` - Área da marca
- `.brand-title` - Título da marca
- `.brand-subtitle` - Subtítulo
- `.btn-candidate` - Botão candidato
- `.navbar` - Navegação principal
- `.nav-menu` - Menu de navegação
- `.nav-item` - Item do menu
- `.nav-link` - Link do menu
- `.dropdown-menu` - Menu dropdown
- `.hero` - Seção hero
- `.hero-card` - Card principal
- `.hero-sidebar` - Sidebar do hero
- `.section` - Seção genérica
- `.section-title` - Título de seção
- `.process-card` - Card de processo
- `.news-card` - Card de notícia
- `.table-card` - Card com tabela
- `.quick-card` - Card de acesso rápido
- `.footer` - Rodapé
- `.badge-*` - Badges de status

## Estrutura de Layout

### Container
- Max-width: 1280px
- Padding: var(--space-lg)
- Centralizado

### Grid System
- CSS Grid para layouts principais
- Flexbox para alinhamentos
- Auto-fit para responsividade

### Breakpoints
| Dispositivo | Largura |
|-------------|---------|
| Mobile | < 480px |
| Tablet | 481px - 768px |
| Desktop | 769px - 1024px |
| Large | > 1024px |

## Componentes

### Header
```html
<header class="header">
    <div class="container">
        <div class="header-content">
            <div class="header-brand">
                <img src="logo.png" class="header-logo">
                <div class="header-text">
                    <h1 class="brand-title">TÍTULO</h1>
                    <p class="brand-subtitle">Subtítulo</p>
                </div>
            </div>
            <a class="btn-candidate">Área do Candidato</a>
        </div>
    </div>
</header>
```

### Navbar
```html
<nav class="navbar">
    <div class="container">
        <div class="navbar-content">
            <ul class="nav-menu">
                <li class="nav-item has-dropdown">
                    <a class="nav-link">Menu <i class="fas fa-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </li>
            </ul>
            <form class="search-box">
                <input type="search" placeholder="Buscar...">
                <button><i class="fas fa-search"></i></button>
            </form>
        </div>
    </div>
</nav>
```

### Card de Processo
```html
<article class="process-card">
    <div class="card-header">
        <span class="badge badge-graduacao">Graduação</span>
        <span class="badge badge-open">Aberto</span>
    </div>
    <div class="card-body">
        <h3 class="card-title">Título</h3>
        <p class="card-text">Descrição</p>
        <div class="card-info">
            <span><i class="far fa-calendar"></i> Data</span>
            <span><i class="fas fa-graduation-cap"></i> Vagas</span>
        </div>
    </div>
    <div class="card-footer">
        <a class="btn btn-sm btn-outline">Ver Detalhes</a>
        <a class="btn btn-sm btn-primary">Inscrever-se</a>
    </div>
</article>
```

### Card de Notícia
```html
<article class="news-card">
    <div class="news-content">
        <span class="news-date"><i class="far fa-calendar"></i> Data</span>
        <h3 class="news-title">Título</h3>
        <p class="news-excerpt">Resumo</p>
        <a class="news-link">Ler mais <i class="fas fa-arrow-right"></i></a>
    </div>
</article>
```

### Quick Link
```html
<a class="quick-card">
    <div class="quick-icon"><i class="fas fa-icon"></i></div>
    <span>Texto</span>
</a>
```

## Padrões de Botões

### Primary
```css
.btn-primary {
    background: var(--primary);
    color: var(--white);
    font-weight: 600;
    padding: var(--space-sm) var(--space-xl);
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
}
```

### Outline
```css
.btn-outline {
    background: transparent;
    border: 2px solid var(--primary);
    color: var(--primary);
    font-weight: 600;
}
```

### CTA (Área do Candidato)
```css
.btn-candidate {
    background: linear-gradient(135deg, var(--accent), var(--accent-dark));
    color: var(--gray-900);
    font-weight: 600;
    box-shadow: var(--shadow-md);
}
```

## Padrões de Responsividade

### Mobile First
```css
/* Estilos base para mobile */

/* Tablet */
@media (min-width: 481px) {
    /* Ajustes para tablet */
}

/* Desktop */
@media (min-width: 769px) {
    /* Ajustes para desktop */
}

/* Large Desktop */
@media (min-width: 1025px) {
    /* Ajustes para large */
}
```

### Ajustes Mobile
- Navbar colapsa em menu hamburger
- Grid 1 coluna
- Fontes reduzidas
- Padding reduzido
- Ocultar elementos não essenciais

## Animações

### Transições de Hover
```css
.element:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}
```

### Entrada de Elementos
```css
.element {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.element.visible {
    opacity: 1;
    transform: translateY(0);
}
```

### Menu Mobile
```css
.mobile-menu {
    position: fixed;
    right: -100%;
    transition: right var(--transition-base);
}

.mobile-menu.active {
    right: 0;
}
```

## Acessibilidade

### Contraste
- Texto mínimo: 4.5:1 (WCAG AA)
- Texto grande: 3:1
- Elementos interativos: 3:1

### Foco
- Outline visível
- Cores de foco consistentes

### Semântica
- Header, nav, main, section, article, footer
- Hierarquia de títulos (H1-H6)
- Labels em formulários
- Alt text em imagens

### Navegação por Teclado
- Tabulação lógica
- Atalho ESC para fechar modais/menus

## Ícones

### Font Awesome 6
- Usage: `<i class="fas fa-icon-name"></i>`
- Thin: `<i class="far fa-icon-name"></i>`
- Brands: `<i class="fab fa-brand"></i>`

## Dependências

- Font Awesome 6.4.2 (CDN)
- Google Fonts: Inter, Merriweather

## Versão
1.0.0
