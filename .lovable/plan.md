## Configurar Preset Vercel para Deploy

### Objetivo
Ajustar o projeto para deploy na Vercel via GitHub.

### Tarefas
1. **Configurar `vite.config.ts`** — Alterar o preset do Nitro de `cloudflare` (padrão) para `vercel`.
2. **Verificar build** — Garantir que o projeto compila sem erros após a mudança.

### Detalhes Técnicos
- O projeto usa TanStack Start v1 com Nitro como runtime server.
- O preset padrão é `cloudflare`; para a Vercel, o preset deve ser `vercel`.
- A configuração será feita no `vite.config.ts` dentro do bloco `tanstackStart`.

### Próximos Passos (fora do escopo deste plano)
- Conectar o projeto ao GitHub via menu Plus (+) → GitHub → Connect project.
- Importar o repositório na Vercel com:
  - Framework Preset: `Vite`
  - Build Command: `bun run build` (ou `npm run build`)
  - Output Directory: `.output/public`
