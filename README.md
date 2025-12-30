# 🕵️‍♂️ The Impostor Game

Impostor é um jogo social inspirado em jogos de dedução, onde um jogador
é secretamente o **Impostor** e tenta se misturar enquanto os outros
tentam descobri-lo.

O jogo foi desenvolvido para rodar no navegador, com foco em **mobile**,
usando **Next.js**.

------------------------------------------------------------------------

## 🎮 Como funciona

-   Os jogadores são cadastrados localmente
-   Uma categoria de palavras é escolhida
-   Uma palavra é sorteada
-   Um jogador aleatório é definido como **Impostor**
-   Cada jogador vê seu papel **um por vez**
-   A palavra só aparece ao **segurar o card**

------------------------------------------------------------------------

## 🧠 Regras principais

-   Apenas **1 jogador é o Impostor**
-   O Impostor **não vê a palavra**
-   Os demais jogadores veem a **mesma palavra**
-   A palavra só é revelada ao **pressionar e segurar**
-   Nada é salvo de forma sensível no `localStorage`

------------------------------------------------------------------------

## 🛠️ Tecnologias

-   **Next.js (App Router)**
-   **React**
-   **TypeScript**
-   **Tailwind CSS**
-   **LocalStorage** (estado local do jogo)

------------------------------------------------------------------------

## 📁 Estrutura do projeto

    app/
     ├── page.tsx
     ├── game/
     │   └── page.tsx
    components/
     └── game/
         └── WordCard.tsx
    data/
     └── wordCategories.ts

------------------------------------------------------------------------

## 💾 Dados no LocalStorage

``` ts
localStorage.setItem('players', JSON.stringify([
  { id: '1', name: 'Carlos' },
  { id: '2', name: 'Ingrid' },
]));

localStorage.setItem('category', 'comidas');
```

⚠️ Nunca são salvos: - Palavra sorteada - Papel do jogador

------------------------------------------------------------------------

## ▶️ Como rodar o projeto

``` bash
pnpm install
pnpm dev
```

Acesse: http://localhost:3000

------------------------------------------------------------------------

## 🚀 Roadmap (Próximos passos)

-   [ ] Múltiplos impostores
-   [ ] Timer por rodada
-   [ ] Multiplayer online
-   [ ] Sistema de salas
-   [ ] Upgrades na interface
-   [ ] Full Responsivo
