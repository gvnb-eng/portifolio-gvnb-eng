# Portfólio GVNB Eng

Portfólio pessoal de Gustavo Vieira Nunes Brito — Engenheiro Mecânico HVAC.
SPA React + Vite com CSS Modules, sem dependências além de react/react-dom.

## Comandos

```bash
# Instalar dependências (usar nvm Linux, não o npm Windows)
export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh"
npm install

npm run dev      # dev server em http://localhost:5173
npm run build    # build de produção em dist/
npm run preview  # preview do build em http://localhost:4173
```

## Estrutura

```
src/
├── main.jsx                  # entry point — importa CSS global e monta React
├── App.jsx                   # monta Navbar + seções em ordem
├── data/                     # todo o conteúdo separado do markup
│   ├── hero.js               # nome, subtitle, badges, CTA
│   ├── about.js              # parágrafos de bio + array de stats
│   ├── experience.js         # array com 5 experiências profissionais
│   ├── skills.js             # array com 8 ferramentas/habilidades
│   └── contact.js            # description, CTA e links de contato
├── styles/
│   ├── global.css            # :root vars, reset, .container, h1/h2, utilitários
│   └── animations.css        # @keyframes fadeUp
└── components/
    ├── Navbar/               # navbar fixa no topo — logo + links + CTA
    ├── Hero/                 # header full-viewport, gradiente maroon, badges dourados
    ├── About/                # fundo branco, grid 2 colunas: bio + stat cards
    ├── Experience/           # fundo maroon escuro, grid de cards com borda dourada
    ├── Skills/               # fundo creme, grid de skill cards com hover effect
    ├── Contact/              # 2 colunas: info de contato + formulário
    ├── Footer/               # fundo preto, logo + links + copyright
    └── shared/
        ├── Button/           # âncora .btn (mantido, pode ser reutilizado)
        └── SectionHeader/    # label + h2 (mantido, pode ser reutilizado)
```

## Design system

Tema profissional/corporativo com fundo claro. Variáveis definidas em `src/styles/global.css`:

| Variável          | Valor       | Uso                                    |
|-------------------|-------------|----------------------------------------|
| `--primary`       | `#7a1c1c`   | vinho — cor principal, bordas, títulos |
| `--primary-dark`  | `#5c1515`   | vinho escuro — hero e experience bg    |
| `--primary-hover` | `#9b2525`   | hover em elementos primary             |
| `--accent`        | `#c9a227`   | dourado — CTAs, eyebrows, destaques    |
| `--accent-hover`  | `#e0b82d`   | hover nos botões dourados              |
| `--bg`            | `#ffffff`   | fundo branco (About, Skills, Contact)  |
| `--bg-alt`        | `#f5f0eb`   | creme quente (Skills, form bg)         |
| `--surface`       | `#ffffff`   | fundo de cards brancos                 |
| `--border`        | `#e0d6cc`   | bordas suaves                          |
| `--text`          | `#1e1e1e`   | texto principal                        |
| `--muted`         | `#6b6b6b`   | texto secundário                       |
| `--font-head`     | Bebas Neue  | headings H1/H2                         |
| `--font-body`     | DM Sans     | corpo do texto                         |
| `--font-mono`     | DM Mono     | labels, badges, datas, nav             |

Google Fonts carregados em `index.html`.

## Utilitários globais

Classes definidas em `global.css` e usadas diretamente no JSX:

- `.container` — max-width 1100px, centrado, padding lateral
- `.section-eyebrow` — label superior em dourado com traço decorativo à esquerda
- `.divider` — barra dourada de 56×3px; `.divider.center` para centralizar
- `h2.light` — h2 em branco (usado em seções de fundo escuro)

## Regras CSS

- **Global** (`global.css`): `:root`, reset, `.container`, `h1`, `h2`, `section`, utilitários `.section-eyebrow` e `.divider`
- **CSS Modules** (`*.module.css`): tudo específico de um componente — layout, hover, pseudo-elementos, `@media`
- `.container` permanece global pois é usado como wrapper em cada seção
- `@keyframes fadeUp` é global pois é referenciado pelo nome em múltiplos módulos

## Lógica de seções por fundo

| Seção       | Fundo              | Cor primária dos elementos |
|-------------|--------------------|-----------------------------|
| Navbar      | `#111` (preto)     | vinho na borda inferior     |
| Hero        | gradiente maroon   | texto branco, CTAs dourados |
| About       | branco             | vinho nos stats             |
| Experience  | gradiente maroon   | dourado nas bordas/datas    |
| Skills      | creme `#f5f0eb`    | vinho na borda inferior     |
| Contact     | branco + creme     | vinho na borda superior     |
| Footer      | `#111` (preto)     | vinho no logo               |

## Animações

`fadeUp` definido em `animations.css` (global). O Hero aplica a animação com stagger via `style={{ animationDelay }}` inline em cada elemento filho — evita depender de `nth-child` que quebraria com hash de CSS Modules.

## Atualizar conteúdo

Todo o conteúdo textual fica nos arquivos `src/data/`. Para editar:

- **Experiências**: `src/data/experience.js` — array `{ date, role, company, description }`
- **Habilidades**: `src/data/skills.js` — array `{ icon, name, level }`
- **Contato**: `src/data/contact.js` — links, email do CTA e description
- **Hero**: `src/data/hero.js` — nome, subtitle, badges, CTA
- **Sobre**: `src/data/about.js` — parágrafos de bio e números de stats

## Navegação

Sem React Router — scroll por âncoras nativas (`#sobre`, `#experiencia`, `#habilidades`, `#contato`).
`scroll-behavior: smooth` definido em `global.css`. Navbar usa `position: fixed` com `z-index: 100`.

## Ambiente

WSL2 — usar sempre o Node.js Linux via nvm, nunca o npm do Windows (falha em UNC paths).
Node instalado via nvm em `~/.nvm`. Para ativar: `export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh"`.
