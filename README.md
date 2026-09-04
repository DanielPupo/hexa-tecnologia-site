# Hexa Tecnologia

Site institucional e de geração de oportunidades desenvolvido para a **Hexa Tecnologia e Informática**, de Itapeva, SP.

O projeto apresenta os serviços da empresa, facilita o contato pelo WhatsApp e registra solicitações de atendimento em um banco de dados persistente.

## Funcionalidades

- Página institucional responsiva
- Apresentação de produtos, assistência técnica, IA, automação, segurança e redes
- Formulário de orçamento integrado ao Cloudflare D1
- Validação dos campos e proteção básica contra spam
- Acesso direto ao WhatsApp e Google Maps
- Página de privacidade
- Metadados para SEO e compartilhamento em redes sociais
- Layout adaptado para computadores, tablets e celulares

## Tecnologias

- React 19
- Next.js 16
- Vinext e Vite
- TypeScript
- Tailwind CSS
- Drizzle ORM
- Cloudflare Workers e D1

## Executando localmente

É necessário ter Node.js 22.13 ou superior e pnpm instalados.

```bash
pnpm install
pnpm dev
```

A aplicação ficará disponível em `http://localhost:3000`.

Para gerar uma nova migração após alterações em `db/schema.ts`:

```bash
pnpm db:generate
```

Para validar a versão de produção:

```bash
pnpm build
```

## Estrutura principal

```text
app/
  api/orcamentos/     API do formulário
  privacidade/        Página de privacidade
  globals.css         Identidade visual e responsividade
  layout.tsx          Metadados e estrutura global
  page.tsx            Página inicial
db/
  index.ts            Conexão com o banco
  schema.ts           Modelo de dados dos contatos
drizzle/              Migrações SQLite/D1
public/               Imagens e arquivos públicos
```

## Banco de dados

O projeto utiliza o binding `DB` do Cloudflare D1. As solicitações enviadas pelo formulário são armazenadas na tabela `leads`.

O arquivo `.openai/hosting.json` presente neste repositório contém apenas os nomes lógicos dos recursos. Identificadores privados de ambientes de produção não são versionados.

## Hospedagem

Por utilizar uma API e banco D1, o projeto deve ser publicado em um ambiente compatível com Cloudflare Workers. O GitHub Pages sozinho não executa o backend.

## Uso

Projeto demonstrativo criado para apresentação comercial à Hexa Tecnologia. Antes de colocá-lo em operação oficial, confirme identidade visual, textos, dados comerciais e política de tratamento de dados com a empresa.

