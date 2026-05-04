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
├── App.jsx                   # agrupa todas as seções em ordem
├── data/                     # conteúdo separado do markup
│   ├── hero.js               # tag, nome, subtitle, badges, CTA, rotatedStat
│   ├── about.js              # parágrafos de bio + array de stats
│   ├── experience.js         # array com 5 experiências profissionais
│   ├── skills.js             # array com 8 ferramentas/habilidades
│   └── contact.js            # description, CTA e links de contato
├── styles/
│   ├── global.css            # :root vars, reset, body::before grid, .container, h1/h2/section
│   └── animations.css        # @keyframes fadeUp
└── components/
    ├── Hero/                 # header full-viewport com animação stagger
    ├── About/                # grid 2 colunas: bio + stat boxes laranja
    ├── Experience/           # timeline vertical com 5 cards
    ├── Skills/               # grid auto-fill com 8 skill cards
    ├── Contact/              # caixa centralizada com CTA e links
    ├── Footer/               # copyright
    └── shared/
        ├── Button/           # âncora .btn — usada em Hero e Contact
        └── SectionHeader/    # label + h2 — usada em About, Experience, Skills, Contact
```

## Design system

Tema dark técnico/engineering. Variáveis definidas em `src/styles/global.css`:

| Variável      | Valor     | Uso                          |
|---------------|-----------|------------------------------|
| `--bg`        | `#0d0f14` | fundo da página              |
| `--surface`   | `#161a22` | fundo de cards               |
| `--border`    | `#242936` | bordas e grid de fundo       |
| `--accent`    | `#00c2a8` | teal — destaque primário     |
| `--accent2`   | `#ff6b35` | laranja — stats e empresas   |
| `--text`      | `#e8eaf0` | texto principal              |
| `--muted`     | `#7a8099` | texto secundário             |
| `--font-head` | Bebas Neue | headings H1/H2               |
| `--font-body` | DM Sans    | corpo do texto               |
| `--font-mono` | DM Mono    | labels, badges, datas        |

Google Fonts carregados em `index.html`.

## Regras CSS

- **Global** (`global.css`): `:root`, reset, `body`, `body::before` (grid de fundo), `.container`, `h1`, `h2`, `section`, `.section-label`
- **CSS Modules** (`*.module.css`): tudo específico de um componente — layout, hover, pseudo-elementos, `@media`
- `.container` é uma classe global (não módulo) porque é usada como wrapper div dentro de cada seção
- `@keyframes fadeUp` é global pois é referenciada pelo nome em múltiplos módulos

## Animações

O Hero usa `fadeUp` com stagger: cada filho direto de `.heroInner` recebe `animationDelay` via prop `style` inline (não nth-child, para evitar problemas com hash de CSS Modules).

## Atualizar conteúdo

Todo o conteúdo textual fica nos arquivos `src/data/`. Para editar:

- **Experiências**: `src/data/experience.js` — array de objetos `{ date, role, company, description }`
- **Habilidades**: `src/data/skills.js` — array de objetos `{ icon, name, level }`
- **Contato**: `src/data/contact.js` — links e email do CTA
- **Hero**: `src/data/hero.js` — badges, texto e CTA do header
- **Sobre**: `src/data/about.js` — parágrafos de bio e números de stats

## Navegação

Sem React Router — scroll por âncoras nativas (`#sobre`, `#experiencia`, `#habilidades`, `#contato`). `scroll-behavior: smooth` definido em `global.css`.

## Ambiente

WSL2 — usar sempre o Node.js Linux via nvm, nunca o npm do Windows (que falha em UNC paths).
Node instalado via nvm em `~/.nvm`. Para ativar: `export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh"`.
