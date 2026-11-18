# Repositório pages_sistemasoperacionais

Site didático de Sistemas Operacionais. HTML + CSS + JS puro, publicado no
GitHub Pages. Sem build, sem npm, sem framework. Todo caminho é relativo.

## Mapa das pastas

- `index.html` — página inicial do site.
- `atividades.html` — índice de quizzes; carrega `css/game2.css` e os arquivos
  de `atividades/` via `js/motor2.js`.
- `atividades/` — quizzes em `.js`, um arquivo por assunto.
- `game.html` — página de atividades; carrega `css/game.css` e os jogos via
  `js/motor.js`.
- `jogos/` — páginas autônomas de simulação e animação, uma por assunto, mais
  `jogos/index.html`.
- `css/` — base compartilhada (`styles.css`, `layer.css`, `basecoat.css`,
  `fonts.css`); uma por motor (`game.css`, `game2.css`); uma por jogo com
  prefixo próprio (`esc_styles.css`, `le_styles.css`, `pc_styles.css`,
  `ft_styles.css`).
- `js/` — motores (`motor.js`, `motor2.js`).
- `index_files/` — imagens e CSS do site.

## Regra de escopo

NÃO editar, mover, renomear nem reformatar arquivos já existentes em
`atividades/`, `jogos/`, `css/` e `js/` sem pedido explícito.
Trabalho novo entra sempre como arquivo novo, na pasta certa.

## Os dois formatos — não confundir

### 1. Quiz → `atividades/<slug>.js`

Arquivo que chama `JOGO2.registrar({ ... })` com estes campos, nesta ordem:

`id, titulo, disciplina, descricao, vidas, niveis, teoria, fases`

- `niveis` — lista de `{ nome, xp }`.
- `teoria` — HTML curto em template string, com `<h3>` e `<p>`.
- `fases` — lista de `{ titulo, perguntas }`.
- `perguntas` — lista de `{ categoria, pergunta, opcoes, correta, explicacao }`.
- `opcoes` — exatamente 4 alternativas.
- `correta` — índice numérico de 0 a 3.
- `explicacao` — uma frase, explicando por que a correta está certa.
- O motor também aceita `perguntas: [...]` direto na raiz, sem `fases`
  (`js/motor2.js:73`). Padrão do repositório: sempre usar 3 fases explícitas.
- Padrão dos arquivos atuais: 3 fases e 4 alternativas por pergunta.

`id` e nome do arquivo usam o mesmo slug, em minúsculas com hífen.
Exceções existentes que NÃO devem ser alteradas:
`atividades/gestao_tarefas.js` usa underscore;
`atividades/arquitetura-so.js` tem `id: "arquiteturas-so"` (com "s").

Atenção: `correta: 1,` precisa da vírgula antes de `explicacao`. Faltar a
vírgula quebra o arquivo inteiro e a atividade não registra.

### 2. Animação → `jogos/<slug>.html`

Página HTML completa e autônoma. Estrutura:

- `<html lang="pt-BR" data-theme="dark">`
- `<head>` com `../css/layer.css`, `../css/styles.css` e um CSS próprio em `../css/`
- `<header class="futuristic-header">` com `.top-bar-flex`, `.brand-title` e
  `.top-stats-strip`
- `<main class="app-main">` com, nesta ordem:
  - `<details class="theory-details">` → `theory-grid` / `theory-card`
  - `section.glass-card` com os controles da simulação
  - área de execução com filas e painéis
  - métricas ao vivo e log de eventos
  - missões e selos
- Modais em `div.modal-backdrop` com `div.modal-box`
- JavaScript em `<script>` no fim do `<body>`, dentro de uma IIFE com `'use strict'`

Padrão adotado para animações novas: seguir o `<head>` do `escalonamento.html`.
Os jogos antigos variam (CSS inline em `filosofos` e `caminho-da-memoria`,
Basecoat por CDN em `alocacao_memoria`) — não imitar essas variações.

Classes existentes que devem ser reaproveitadas: `glass-card`,
`btn-futuristic`, `btn-secondary-futuristic`, `btn-icon`, `control-label`,
`metric-card`, `metric-num`, `metric-lbl`, `pcb-chip`, `log-entry`,
`mission-row`, `badge-item`, `modal-backdrop`, `modal-box`, `report-table`.

CSS novo, quando necessário, em `css/<slug>_styles.css`.

## Estilo de resposta

- Sem saudação, sem "Claro!", sem repetir o pedido, sem resumo do que você fez.
- Um arquivo por vez. Nunca gerar dois arquivos na mesma resposta.
- Arquivo novo: entregar completo. Correção: entregar só o trecho alterado.
- Antes de escrever arquivo grande, mostrar o roteiro em texto e esperar aprovação.

## Verificação antes de dizer que terminou

- Quiz: o arquivo carrega sem erro e `JOGO2.registrar` é chamado uma vez.
- Página: abre sem erro no console, navega com teclado, não usa caminho absoluto.
- Caminhos relativos saindo de `atividades/` e `jogos/` começam com `../`.
- Nenhum arquivo existente foi alterado sem pedido.

## Conteúdo

- Fonte única: as seções do livro que eu indicar na mensagem.
- NÃO inventar sistemas, números, autores ou exemplos de código ausentes no texto.
- Manter os nomes em português como no livro.