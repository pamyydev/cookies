## 🍪 **Cookinhos**  
![Imagem do Cookinhos](https://imgur.com/7wcWBaf.jpg)

O **Cookinhos** foi inicialmente criado para alertar as pessoas sobre os riscos relacionados à **segurança de cookies**. Cookies são uma parte essencial da experiência web, mas também podem representar riscos à privacidade e segurança dos usuários, caso não sejam utilizados corretamente. O blog busca educar os leitores sobre os impactos dos cookies na segurança online, abordando temas como rastreamento de dados, vulnerabilidades de cookies e melhores práticas para proteger a privacidade.

No entanto, o **Cookinhos** tem planos de se expandir e se tornar um espaço para **programadores**, **desenvolvedores** e entusiastas de tecnologia. Além de **segurança na web**, futuramente o blog abordará tópicos como **desenvolvimento de software**, **tendências tecnológicas**, **boas práticas de segurança** e muito mais.

Com a combinação do **Astro** e **Tailwind CSS**, o **Cookinhos** oferece uma plataforma moderna e de fácil manutenção, ideal para quem deseja se manter informado sobre temas tecnológicos e de segurança online.

## ✨ **Features**
- [x] Construído com **Astro** e **Tailwind CSS** para um desempenho ótimo e design responsivo
- [x] Transições suaves e animações que tornam a navegação agradável
- [x] Suporte a **modo claro / escuro** para uma melhor experiência do usuário
- [x] Tema **personalizável**, incluindo cores e banners
- [x] Design **responsivo** (se adapta bem a qualquer dispositivo)
- [ ] **Comentários** (funcionalidade futura)
- [x] **Busca** para ajudar os leitores a encontrar conteúdos relacionados à segurança e outros tópicos de tecnologia
- [ ] **Tabela de conteúdo (TOC)** (funcionalidade futura)

## 🚀 **Como Usar**
1. **Crie um novo repositório** a partir deste template ou faça um fork do repositório [aqui](https://github.com/pamyydev/cookies).
2. **Clone o repositório** e instale as dependências:
   ```bash
   pnpm install
   pnpm add sharp
   ```

   Se você não tem o **pnpm** instalado, instale-o globalmente com:
   ```bash
   npm install -g pnpm
   ```
3. **Personalize o blog**:
   Edite o arquivo de configuração em `src/config.ts` para ajustar as informações do seu blog, como nome, logo, cores e outros detalhes.

4. **Crie novos posts**:
   Utilize o comando abaixo para criar um novo post:
   ```bash
   pnpm new-post <nome-do-post>
   ```
   Isso cria um arquivo de post em `src/content/posts/`, onde você pode editar o conteúdo.

5. **Implante seu blog**:
   Depois de personalizar o blog, você pode implantá-lo em plataformas como **Vercel**, **Netlify**, ou **GitHub Pages**. Para isso, siga os guias de [deploy](https://docs.astro.build/en/guides/deploy/). Não se esqueça de editar a configuração do site no arquivo `astro.config.mjs`.

## ⚙️ **Frontmatter dos Posts**
Cada post do seu blog precisa começar com um bloco de metadados chamado *frontmatter*. Aqui está um exemplo:

```yaml
---
title: Segurança de Cookies: Protegendo Dados Pessoais na Web
published: 2025-03-23
description: Um alerta sobre os riscos de segurança associados ao uso inadequado de cookies.
image: ./cover.jpg
tags: [Segurança, Privacidade, Cookies]
category: Segurança na Web
draft: false
lang: pt      # Defina se o idioma do post for diferente do site
---
```

- `title`: O título do post.
- `published`: Data de publicação no formato `YYYY-MM-DD`.
- `description`: Uma breve descrição do conteúdo do post.
- `image`: Imagem de capa (opcional).
- `tags`: Tags que ajudam a classificar o post.
- `category`: A categoria do post, como "Segurança na Web", "Privacidade", "Programação", etc.
- `draft`: Defina como `true` para manter o post em rascunho.
- `lang`: Defina o idioma do post, se for diferente do idioma principal do site.

## 🧞 **Comandos**

Aqui estão alguns comandos úteis para trabalhar com o projeto:

| Comando                             | Ação                                               |
|:------------------------------------|:---------------------------------------------------|
| `pnpm install` AND `pnpm add sharp` | Instala as dependências do projeto                 |
| `pnpm dev`                          | Inicia o servidor de desenvolvimento local no `localhost:4321` |
| `pnpm build`                        | Construa o site para produção em `./dist/`          |
| `pnpm preview`                      | Visualize a versão de produção local antes de implantar |
| `pnpm new-post <nome-do-post>`      | Crie um novo post                                  |
| `pnpm astro ...`                    | Execute comandos do Astro CLI como `astro add`, `astro check` |
| `pnpm astro --help`                 | Obtenha ajuda sobre os comandos do Astro CLI        |

---