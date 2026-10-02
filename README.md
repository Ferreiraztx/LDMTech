# LDMtech Portfolio

Portfólio institucional da LDMtech, empresa de tecnologia e desenvolvimento digital. A página apresenta a marca, suas soluções, projetos selecionados e um canal de contato em uma experiência visual escura, responsiva e orientada por elementos de interface.

## Visão geral

O projeto foi criado para comunicar a LDMtech como uma empresa que combina estratégia, design e desenvolvimento para criar soluções digitais sob medida.

A página inclui:

- Hero institucional com composição visual tecnológica
- Seção sobre a LDMtech
- Lista de soluções oferecidas
- Projetos com imagens reais e links externos
- Animações sutis e interações de hover
- Menu responsivo para dispositivos móveis
- Contato direto por e-mail e WhatsApp
- Suporte a `prefers-reduced-motion`

## Tecnologias

- TypeScript
- Vite
- HTML semântico
- CSS puro
- Google Fonts: Manrope e DM Mono

## Requisitos

- Node.js 18 ou superior
- npm

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:5173/
```

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com Vite |
| `npm run build` | Executa a verificação TypeScript e gera o bundle de produção |
| `npm run preview` | Serve localmente o build de produção |

## Estrutura do projeto

```text
LDMTech/
├── public/
│   ├── Pahragon.jpg
│   ├── lavacar.png
│   └── lamborghini.png
├── src/
│   ├── components/
│   │   ├── brand.ts
│   │   ├── contact.ts
│   │   ├── footer.ts
│   │   ├── header.ts
│   │   ├── hero.ts
│   │   └── sections.ts
│   ├── features/
│   │   └── navigation.ts
│   ├── main.ts
│   └── vite-env.d.ts
├── index.html
├── styles.css
├── package.json
└── tsconfig.json
```

## Organização do código

### Componentes

Os arquivos em `src/components` geram o markup de cada parte visual da página:

- `brand.ts`: identidade e assinatura LDMtech
- `header.ts`: cabeçalho e navegação principal
- `hero.ts`: primeira dobra e painel visual
- `sections.ts`: apresentação, soluções, projetos e manifesto
- `contact.ts`: seção e formulário de contato
- `footer.ts`: rodapé

### Funcionalidades

Os arquivos em `src/features` concentram comportamentos interativos:

- `navigation.ts`: abertura e fechamento do menu mobile

## Projetos apresentados

- **Pahragon**: site institucional e experiência de reservas. A imagem direciona para [pahragon-teal.vercel.app](https://pahragon-teal.vercel.app).
- **Lava Car**: experiência digital para agendamento e serviços automotivos.
- **Lamborghini**: experiência visual premium para o segmento automotivo.

As imagens dos projetos ficam em `public/` e podem ser substituídas sem alterar a estrutura dos componentes.

## Build de produção

Para gerar a versão otimizada:

```bash
npm run build
```

O resultado será criado na pasta `dist/`.

## Observações

A seção de contato utiliza `mailto:` para e-mail e um link direto do WhatsApp com mensagem inicial preenchida.

## Licença

Projeto privado da LDMtech.
