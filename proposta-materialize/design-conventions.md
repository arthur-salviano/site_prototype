# Design Conventions - Proposta Materialize

## Paleta de Cores Oficial

### Cores Primárias
| Cor | HEX | RGB | Uso |
|-----|-----|-----|-----|
| Primária | `#005dac` | `rgb(0, 93, 172)` | Elementos principais, headers, navbars |
| Primária Escura | `#003d7a` | `rgb(0, 61, 122)` | Footer, hover states |
| Primária Clara | `#4d8dcc` | `rgb(77, 141, 204)` | Fundos, acentos |
| Accent/Amarelo | `#e6a817` | `rgb(230, 168, 23)` | Botões CTA, badges |

### Cores Secundárias (Material Design)
| Cor | HEX | Uso |
|-----|-----|-----|
| Teal | `#009688` | Links, acentos |
| Info | `#2196f3` | Categoria pós-graduação |
| Warning | `#ff9800` | Status em breve |
| Danger | `#f44336` | Erros |
| Success | `#4caf50` | Status ativo |

### Escala de Cinzas
| Cor | HEX | Uso |
|-----|-----|-----|
| Light | `#f5f5f5` | Fundos secundários |
| Gray Light | `#e0e0e0` | Bordas |
| Gray | `#9e9e9e` | Textos secundários |
| Gray Dark | `#616161` | Subtítulos |
| Dark | `#212121` | Textos principais |

## Tipografia

### Fonte Principal
- **Roboto** (Google Fonts) - Material Design standard

### Hierarquia Tipográfica
| Elemento | Tamanho | Peso | Line-height |
|----------|---------|------|-------------|
| H1 | 2.5rem (40px) | 300 | 1.2 |
| H2 | 2rem (32px) | 300 | 1.3 |
| H3 | 1.5rem (24px) | 400 | 1.4 |
| H4 | 1.25rem (20px) | 500 | 1.4 |
| H5 | 1rem (16px) | 500 | 1.5 |
| H6 | 0.875rem (14px) | 500 | 1.5 |
| Body | 1rem (16px) | 400 | 1.6 |
| Caption | 0.75rem (12px) | 400 | 1.4 |
| Overline | 0.625rem (10px) | 400 | 2 |

## Componentes Materialize

### Estrutura de Cards
```html
.card
├── .card-content
│   ├── .card-title
│   ├── .card-subtitle
│   └── p (conteúdo)
└── .card-action (opcional)
```

### Cards de Processos
```css
.process-card-mz {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.process-card-mz:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}
```

### Badges
- Border-radius: 12px
- Padding: 3px 10px
- Font-size: 0.7rem
- Font-weight: 600
- Text-transform: uppercase

### Botões
- Border-radius: 4px
- Text-transform: none (para botões principais)
- Box-shadow para elevação
- Efeito wave no clique

### Input Fields
- Espessura: underline
- Label flutuante
- Validação com cores Material

## Estrutura de Layout

### Grid Materialize
- 12 colunas
- Gutter: 16px
- Breakpoints:
  - s: 600px
  - m: 992px
  - l: 1200px

### Sidebar
- Largura: 4 colunas (33%)
- Cards com elevation
- Event list com日期

## Convenções de Nomenclatura

### Classes Customizadas
- `.brand-title` - Título principal da marca
- `.brand-subtitle` - Subtítulo
- `.nav-main` - Navbar principal
- `.hero-parallax` - Seção hero com parallax
- `.process-card-mz` - Cards de processos
- `.news-card-mz` - Cards de notícias
- `.sidebar-card-mz` - Cards da sidebar
- `.editais-card-mz` - Card de editais
- `.quick-link-item` - Links de acesso rápido
- `.section-title-mz` - Títulos de seção
- `.badge-*` - Badges de status

## Padrões de Responsividade

### Breakpoints
| Dispositivo | Classe | Largura |
|-------------|--------|---------|
| Mobile | s | < 601px |
| Tablet | m | 601-992px |
| Desktop | l | > 992px |

### Mobile First
- Navbar colapsa em sidenav
- Grid 1 coluna
- Hero com texto menor
- Ocultar elementos não essenciais

## Animações e Efeitos

### Transições
- Duração: 0.3s
- Easing: ease
- Hover: translateY(-5px)

### Parallax
- Altura: 450px
- Imagem de fundo com efeito depth

### Ondas (Waves)
- Efeito padrão Materialize
- Cor: rgba(255,255,255,0.2)

### Toast Notifications
- Duração: 3000ms
- Classes: rounded, teal, etc.

## Acessibilidade

### Contraste
- Texto mínimo: 4.5:1
- Texto grande (18px): 3:1

### Navegação
- Foco visível
- Tabulação lógica
- Atalhos acessíveis

### Semântica
- Header, nav, main, section, article, footer
- Hierarquia de títulos
- Labels em formulários
- Alt text em imagens

## Ícones

### Material Icons
- Uso: `<i class="material-icons">icon_name</i>`
- Tamanhos: tiny (12px), small (16px), medium (24px), large (32px)

### Ícones常用的
- home, school, work, person
- calendar_today, event, schedule
- description, assignment, file_download
- email, contact_mail
- search, menu, close
- arrow_forward, arrow_drop_down
- link, help, info

## Reutilização de Componentes

### Card de Processo
```html
<div class="col s12 m6">
    <div class="card process-card-mz">
        <div class="card-content">
            <span class="badge badge-graduacao">Graduação</span>
            <span class="badge badge-aberto right">Aberto</span>
            <span class="card-title">Título</span>
            <p class="grey-text">Descrição</p>
            <div class="process-info">
                <div class="valign-wrapper"><i class="material-icons tiny">calendar</i> Data</div>
            </div>
        </div>
        <div class="card-action">
            <a href="#" class="teal-text">Ver Detalhes</a>
            <a href="#" class="teal-text">Inscrever-se</a>
        </div>
    </div>
</div>
```

### Card de Notícia
```html
<div class="col s12 m6">
    <div class="card news-card-mz">
        <div class="card-content">
            <span class="grey-text text-darken-1"><i class="material-icons tiny">calendar_today</i> Data</span>
            <span class="card-title">Título</span>
            <p>Resumo</p>
        </div>
        <div class="card-action">
            <a href="#" class="teal-text">Ler mais</a>
        </div>
    </div>
</div>
```

### Quick Link
```html
<a href="#" class="quick-link-item">
    <i class="material-icons">icon</i>
    <span>Texto</span>
</a>
```

## Dependências

- Materialize CSS 1.0.0 (CDN)
- Material Icons (Google)
- Google Fonts: Roboto

## Versão
1.0.0
