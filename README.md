# E-commerce Site

Um projeto de e-commerce moderno construído com Vue 3, TypeScript e as melhores práticas de desenvolvimento.

## 🚀 Tecnologias

- **Vue 3** - Framework progressivo
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápido
- **Tailwind CSS** - Framework CSS utilitário
- **Pinia** - Gerenciamento de estado
- **Vue Router** - Roteamento SPA
- **Zod** - Validação de esquemas
- **VueUse** - Composables utilitários
- **Vee-validate** - Validação de formulários

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 🛠️ Scripts Disponíveis

| Script                 | Descrição                   |
| ---------------------- | --------------------------- |
| `npm run dev`          | Servidor de desenvolvimento |
| `npm run build`        | Build de produção           |
| `npm run preview`      | Preview da build            |
| `npm run lint`         | Lint e auto-fix             |
| `npm run lint:check`   | Verificar lint sem corrigir |
| `npm run format`       | Formatar código             |
| `npm run format:check` | Verificar formatação        |

## 📋 Padrões de Código

### ESLint & Prettier

- Configuração moderna com ESLint 9
- Prettier integrado para formatação consistente
- Regras específicas para Vue 3 e TypeScript
- Auto-fix em `npm run lint`

### Conventional Commits

Este projeto segue o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Exemplos de commits válidos
git commit -m "feat: Add user authentication"
git commit -m "fix: Resolve login validation error"
git commit -m "docs: Update README installation steps"
git commit -m "refactor: Improve component structure"
```

**Tipos permitidos:**

- `feat` - Nova funcionalidade
- `fix` - Correção de bug
- `docs` - Documentação
- `style` - Formatação, estilo
- `refactor` - Refatoração
- `test` - Testes
- `chore` - Configurações, ferramentas
- `perf` - Melhorias de performance
- `ci` - CI/CD
- `build` - Sistema de build
- `revert` - Reverter commits

### Git Hooks (Husky)

- **pre-commit**: Executa lint e verificação de formato
- **commit-msg**: Valida mensagem do commit

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── layout/         # Layout components
│   ├── product/        # Componentes de produto
│   └── ui/            # Componentes de UI
├── composables/        # Composables Vue
├── pages/             # Páginas da aplicação
├── router/            # Configuração de rotas
├── services/          # Serviços e APIs
├── stores/            # Stores Pinia
├── types/             # Tipos TypeScript
├── utils/             # Utilitários
└── assets/            # Assets estáticos
```

## ⚙️ Configurações

### Alias de Importação

- `@/` → `src/`

### Tailwind CSS

- Plugin `@tailwindcss/forms` habilitado
- Configuração extensível em `tailwind.config.js`

### TypeScript

- Configuração strict habilitada
- Path mapping para imports limpos
- Suporte completo ao Vue 3

### Vite

- HMR (Hot Module Replacement)
- Build otimizado
- Code splitting automático

## 🔧 Desenvolvimento

1. **Clone o repositório**
2. **Instale as dependências**: `npm install`
3. **Execute o projeto**: `npm run dev`
4. **Faça commits seguindo o padrão convencional**
5. **Os git hooks garantirão a qualidade do código**

## 📝 Notas

- O projeto usa **code splitting** para otimização de performance
- Todas as rotas são carregadas dinamicamente (lazy loading)
- Configuração de qualidade de código com lint automático
- Git hooks impedem commits com código mal formatado
