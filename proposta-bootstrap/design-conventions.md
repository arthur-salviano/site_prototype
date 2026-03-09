# Design Conventions - Proposta Bootstrap

## Paleta de Cores Oficial

### Cores Primárias
| Cor | HEX | RGB | Uso |
|-----|-----|-----|-----|
| Primária | `#005dac` | `rgb(0, 93, 172)` | Elementos principais, headers, botões |
| Primária Escura | `#003d7a` | `rgb(0, 61, 122)` | Hover states, footer |
| Primária Clara | `#4d8dcc` | `rgb(77, 141, 204)` | Fundos, acentos |

### Cores Secundárias
| Cor | HEX | RGB | Uso |
|-----|-----|-----|-----|
| Secundária | `#6c757d` | `rgb(108, 117, 125)` | Textos secundários |
| Accent/Amarelo | `#e6a817` | `rgb(230, 168, 23)` | Destaques, botões CTA |

### Cores de Feedback
| Cor | HEX | RGB | Uso |
|-----|-----|-----|-----|
| Sucesso | `#198754` | `rgb(25, 135, 84)` | Mensagens de sucesso |
| Aviso | `#ffc107` | `rgb(255, 193, 7)` | Avisos, alertas |
| Erro | `#dc3545` | `rgb(220, 53, 69)` | Erros, alertas negativos |
| Informação | `#0dcaf0` | `rgb(13, 202, 240)` | Informações |

### Escala de Cinzas
| Cor | HEX | Uso |
|-----|-----|-----|
| Gray 100 | `#f8f9fa` | Fundos claros |
| Gray 200 | `#e9ecef` | Bordas, separadores |
| Gray 300 | `#dee2e6` | Linhas de tabela |
| Gray 400 | `#ced4da` | Placeholders |
| Gray 500 | `#adb5bd` | Textos desabilitados |
| Gray 600 | `#6c757d` | Textos secundários |
| Gray 700 | `#495057` | Textos importantes |
| Gray 800 | `#343a40` | Títulos claros |
| Gray 900 | `#212529` | Textos principais |

## Tipografia

### Fontes
- **Títulos:** `Montserrat` (Google Fonts)
- **Corpo:** `Open Sans` (Google Fonts)

### Hierarquia Tipográfica
| Elemento | Tamanho | Peso | Line-height |
|----------|---------|------|-------------|
| H1 | 2.5rem (40px) | 700 | 1.2 |
| H2 | 2rem (32px) | 600 | 1.3 |
| H3 | 1.5rem (24px) | 600 | 1.4 |
| H4 | 1.25rem (20px) | 600 | 1.4 |
| H5 | 1rem (16px) | 600 | 1.5 |
| H6 | 0.875rem (14px) | 600 | 1.5 |
| Body | 1rem (16px) | 400 | 1.6 |
| Small | 0.875rem (14px) | 400 | 1.5 |

## Espaçamento Padrão

| Nome | Valor |
|------|-------|
| xs | 0.25rem (4px) |
| sm | 0.5rem (8px) |
| md | 1rem (16px) |
| lg | 1.5rem (24px) |
| xl | 2rem (32px) |
| xxl | 3rem (48px) |

## Convenções de Layout

### Container
- Max-width: 1320px (Bootstrap padrão)
- Padding horizontal: var(--spacing-md)
- Centralizado com margin: 0 auto

### Grid
- 12 colunas
- Gutter: 1.5rem (var(--spacing-lg))
- Breakpoints: 576px, 768px, 992px, 1200px, 1400px

### Breakpoints
| Dispositivo | Largura |
|-------------|---------|
| Mobile | < 576px |
| Tablet | 576px - 991px |
| Desktop | ≥ 992px |
| Large Desktop | ≥ 1200px |

## Convenções de Nomenclatura de Classes

### Padrão BEM (Block Element Modifier)
```
.bloco {}
.bloco__elemento {}
.bloco--modificador {}
.bloco__elemento--modificador {}
```

### Classes Customizadas
- `.title-main` - Título principal do header
- `.subtitle` - Subtítulo
- `.section-title` - Títulos de seções
- `.btn-candidate` - Botão área do candidato
- `.process-card` - Cards de processos seletivos
- `.news-card` - Cards de notícias
- `.quick-link` - Links de acesso rápido
- `.banner-card` - Card do banner principal
- `.sidebar-card` - Card da barra lateral
- `.bg-nav` - Background do navbar

## Estrutura de Componentes

### Header Institucional
```
.header-institutional
├── .top-bar (info bar)
├── .container
│   ├── .row
│   │   ├── .col-md-2 (logo UFRN)
│   │   ├── .col-md-8 (título)
│   │   └── .col-md-2 (botão candidato)
```

### Navbar
```
.navbar
├── .navbar-expand-lg
├── .navbar-dark
├── .bg-nav
├── .container
│   ├── .navbar-toggler
│   ├── .navbar-collapse
│   │   ├── .navbar-nav
│   │   │   ├── .nav-item
│   │   │   └── .nav-item.dropdown
│   │   └── .search-form
```

### Card de Processo Seletivo
```
.process-card (card.h-100.border-0.shadow-sm)
├── .card-body
│   ├── .d-flex (badges)
│   ├── .card-title
│   ├── .card-text
│   ├── .d-flex (informações)
│   └── .d-flex (botões)
```

## Padrões de Botões

### Botão Primário
```css
.btn-primary {
    background-color: var(--primary);
    border-color: var(--primary);
    font-weight: 500;
    border-radius: var(--border-radius);
    padding: 0.5rem 1rem;
}
```

### Botão Candidato (CTA Principal)
```css
.btn-candidate {
    background-color: var(--accent);
    color: var(--dark);
    font-weight: 600;
    border-radius: var(--border-radius);
    padding: 0.5rem 1.25rem;
    transition: all 0.3s ease;
}
```

### Estados de Botões
- Hover: Escurecer 10-15%
- Active: Escurecer 20%
- Disabled: Opacity 0.65

## Padrões de Cards

### Border-radius
- Padrão: 8px (var(--border-radius))
- Large: 12px (var(--border-radius-lg))

### Sombras
- sm: `0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)`
- padrão: `0 0.5rem 1rem rgba(0, 0, 0, 0.15)`
- lg: `0 1rem 3rem rgba(0, 0, 0, 0.175)`

### Hover
- Transform: translateY(-5px)
- Box-shadow: var(--shadow-lg)

## Padrões de Tabelas

### Estrutura
```html
.table
├── thead
│   └── tr
│       └── th (background: gray-100, border-bottom: 2px solid primary)
└── tbody
    └── tr (hover: background gray-100)
```

### Estilos
- Font-size: 0.9rem
- Padding: var(--spacing-md)
- Hover: background-color var(--gray-100)

## Padrões de Formulários

### Inputs
- Border-radius: var(--border-radius)
- Border: 1px solid var(--gray-400)
- Focus: border-color var(--primary), box-shadow

### Buscar
```html
.search-form
├── .form-control (border-radius: var(--border-radius) 0 0 var(--border-radius))
└── .btn-search (border-radius: 0 var(--border-radius) var(--border-radius) 0)
```

## Padrões de Navegação

### Navbar
- Background: gradiente linear de primary para primary-dark
- Links: cor branca com opacity 0.9
- Hover: background-color rgba(255,255,255,0.1)
- Dropdown: box-shadow, border-radius

### Breadcrumbs
- Separador: /
- Tamanho: small
- Cor: gray-600

## Padrões de Responsividade

### Mobile First
- Estrutura base para mobile
- @media (min-width: 576px) - phones landscape
- @media (min-width: 768px) - tablets
- @media (min-width: 992px) - desktops
- @media (min-width: 1200px) - large desktops

### Ajustes Mobile
- Ocultar top-bar
- Centralizar header
- Menu hamburger
- Grid 1 coluna
- Fontes reduzidas

## Boas Práticas de Acessibilidade

### Contraste
- Texto em cima de fundo branco: mínimo 4.5:1
- Texto grande (18px+): mínimo 3:1

### Navegação por Teclado
- Foco visível em todos os elementos interativos
- Ordem de tabulação lógica
- Atalhos de teclado documentados

### Semântica HTML
- Use header, nav, main, section, article, footer
- Hierarquia de títulos (H1-H6)
- Labels em formulários
- Alt text em imagens

### Leitores de Tela
- ARIA labels quando necessário
- Aria-hidden para ícones decorativos
- Tabelas com headers corretos

## Como Reutilizar Componentes

### Cards de Processos
```html
<div class="col-md-6 col-lg-4">
    <div class="card h-100 border-0 shadow-sm process-card">
        <div class="card-body">
            <!-- Conteúdo -->
        </div>
    </div>
</div>
```

### Cards de Notícias
```html
<div class="col-md-4">
    <article class="card border-0 shadow-sm news-card h-100">
        <div class="card-body">
            <!-- Conteúdo -->
        </div>
    </article>
</div>
```

### Links Rápidos
```html
<div class="col-6 col-md-3">
    <a href="#" class="text-decoration-none">
        <div class="card border-0 shadow-sm h-100 quick-link">
            <div class="card-body text-center">
                <i class="bi bi-icone display-4 text-primary"></i>
                <p class="mt-2 mb-0 text-dark">Texto</p>
            </div>
        </div>
    </a>
</div>
```

## Dependências

- Bootstrap 5.3.2 (CDN)
- Bootstrap Icons 1.11.1 (CDN)
- Google Fonts: Montserrat, Open Sans

## Versão
1.0.0
