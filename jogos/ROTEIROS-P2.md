# Roteiros P2 — guardados, não implementar ainda

Este arquivo não é lido na implementação das páginas de `ROTEIROS.md`.
As regras comuns (estrutura, CSS, teclado, reset) estão em `ROTEIROS.md`.

---

## tabela-multinivel

Arquivo separado (`jogos/tabela-multinivel.html`), não um modo dentro de
`traducao-enderecos`: o objetivo é outro (espaço ocupado).

**Objetivo.** O aluno percorre a árvore de dois níveis com p2 e p1 e explica a
economia de espaço da tabela multinível.

**Livro.** Cap. 14, seção 14.7.3, Figuras 14.10, 14.11 e 14.12.

**Dados exatos.**
- Arquitetura de 32 bits, páginas de 4 KBytes: cada entrada ocupa cerca de
  32 bits (4 bytes): 20 bits de quadro e 12 de informações e flags.
- Tabela linear: 2^20 entradas = 4 MBytes (4 × 2^20 bytes).
- Processo pequeno (Fig. 14.10): 100 páginas mapeadas no início (TEXT, DATA e
  HEAP) e 20 no fim (STACK) = 120 páginas = 480 KBytes; 1.048.456 páginas não
  mapeadas; a tabela é quase 10 vezes maior que o processo.
- Tabela de dois níveis (Fig. 14.11): cada subtabela tem 1.024 entradas;
  3 × 1.024 ponteiros de 32 bits = 12 KBytes; índices mapeados 0–99 numa
  subtabela e 1004–1023 na outra.
- `01803E9Ah` → `0000 0001 10 | 00 0000 0011 | 1110 1001 1010`
  → p2 = `006h`, p1 = `003h`, offset = `E9Ah`.
- Passos (Fig. 14.12):
  1. decompor em offset de 12 bits e dois índices de 10 bits;
  2. p2 indexa a tabela externa e dá o endereço de uma tabela interna;
  3. p1 indexa essa tabela interna e dá o quadro `2Fh`;
  4. quadro + offset = `0002FE9Ah`.
- Fig. 14.12, conferida no PDF:
  - tabela externa: entradas 1–4 = vazias; entrada 6 → tabela interna;
    entradas 0, 5, 7 e 8 = "aponta para tabela não mostrada na figura";
  - tabela interna: 0 = `2Bh`, 1 = `AAh`, 2 = `13h`, 3 = `2Fh`, 4 = vazia
    (1 e 2 numeradas pela contiguidade entre as entradas 0 e 3);
  - `1Ah` e `76h` são da Fig. 14.9, não desta, e não entram.
- Processo que ocupa todo o espaço: uma tabela de primeiro nível e 1.024 de
  segundo nível = (1 + 1.024) × 4 KB, 0,098% a mais que a linear
  (1.024 × 4 KB).
- Intel 80386: dois níveis, 1.024 entradas de 4 bytes. Intel Core i7: quatro
  níveis, 512 entradas de 8 bytes. Nos dois casos, cada subtabela ocupa
  exatamente uma página de 4 KBytes.

**Grafia.** Nota fixa na tela: "página = 20 bits, 5 dígitos hexadecimais
(01803h); índices p2/p1 = 10 bits, 3 dígitos (006h, 003h); offset = 12 bits,
3 dígitos (E9Ah)". O livro também escreve `0006h` e `0003h` na
decomposição; a página usa só `006h` e `003h`, a forma dos passos 1–3.

**Cenas.**
1. Painel A (espaço): Fig. 14.10 (linear, 4 MB) ao lado da Fig. 14.11
   (dois níveis, 12 KB) para o mesmo processo. Uma alternância mostra o
   processo ocupando tudo: (1 + 1.024) × 4 KB contra 1.024 × 4 KB, com o
   0,098% a mais.
2. Painel B (percurso): barra de bits 10 | 10 | 12 com `01803E9A`.
   Os passos 1–4 acendem a tabela externa, a interna e o quadro.

**O aluno manipula:** a alternância do painel A; o índice p2 (entre as
entradas da tabela externa); Passo, Play e Reset; o modo "prever", em que
digita p2 e p1 antes do passo 1.
**É automático:** o percurso da árvore, as contas de espaço e o log.

**Casos de borda.**
- p2 numa entrada vazia (1–4): a subtabela "não precisa ser alocada"; o acesso
  gera falta de página, sem simular o tratamento.
- p2 em 0, 5, 7 ou 8: mostra "aponta para tabela não mostrada na figura", sem
  quadro inventado.
- p1 na entrada 4 da tabela interna (vazia): falta de página.

**Deu certo quando:** o aluno extrai p2 e p1 de `01803E9Ah` sozinho, explica
por que 12 KB < 4 MB para o processo da Fig. 14.10 e por que a tabela
multinível fica 0,098% maior quando o processo ocupa todo o espaço.

---

## hierarquia-memoria

Complemento ao `caminho-da-memoria.html`, que já tem a pirâmide.

**Objetivo.** O aluno distingue tempo de acesso de taxa de transferência e
prevê qual meio vence em cada grandeza.

**Livro.** Cap. 14, seção 14.1, Fig. 14.1 e Tabela 14.1.

**Dados exatos (Tabela 14.1).**
- Cache L2: 1 ns e 1 GB/s (1 ns por byte).
- RAM: 60 ns e 1 GB/s (1 ns por byte).
- Flash NAND: 2 ms e 10 MB/s (100 ns por byte).
- Disco SATA: 5 ms e 100 MB/s (10 ns por byte).
- DVD-ROM: "de 100 ms a vários minutos" e 10 MB/s (100 ns por byte).
- Fig. 14.1: capacidades por nível e a fronteira volátil/não-volátil.

**Cenas.**
1. Duas colunas lado a lado (latência e taxa), barras em escala log com a
   escala visível. O DVD aparece como faixa textual
   "100 ms a vários minutos" na coluna de latência, não como barra.
2. O aluno ordena os meios por latência e depois por taxa, e confirma.
3. Revelação: destaque dos contrastes do próprio texto (SATA × Flash;
   L2 × RAM).

**Sem tempo total.**

**O aluno manipula:** a ordenação dos meios por latência e depois por taxa
(arrastar, ou setas + Enter); o botão Confirmar; Reset.
**É automático:** o desenho das barras em escala log, a faixa textual do DVD,
a revelação dos contrastes e o log.

**Caso de borda.** O DVD não entra na ordenação por latência, porque o valor é
uma faixa; ele aparece fixo ao lado com a explicação.

**Deu certo quando:** o aluno explica por que o disco SATA perde para a Flash
em latência (5 ms contra 2 ms) mas ganha em taxa (100 MB/s contra 10 MB/s), e
por que L2 e RAM têm a mesma taxa com latências diferentes.

---

## tlb

Complemento ao `caminho-da-memoria.html`, que já tem hit/miss com tabela.

**Objetivo.** O aluno monta a fórmula do tempo médio e prevê o efeito da taxa
de acerto.

**Livro.** Cap. 14, seção 14.7.4, Figura 14.13 (passos 1–8).

**Dados exatos.**
- 2 GHz (0,5 ns por ciclo), RAM de 50 ns, acerto de 0,5 ns (1 ciclo), erro de
  30 ns (60 ciclos).
- A 95%: tmédio = 51,975 ns (+1,975 ns, 4,0%).
- A 80%: +12,8%; a 99%: +1,6%. Os ns dessas duas taxas são calculados pela
  mesma fórmula e aparecem marcados como "calculado".
- Fatores: tamanho (16–256 entradas; 80386: 64 de dados e 32 de código;
  Core i7: 96 e 142), padrão de acessos, trocas de contexto, substituição.

**Cenas.**
1. O fluxo da Fig. 14.13 com hit (1→2→3) e miss (1→2→4–6→7→8).
2. Seletor restrito a 80% / 95% / 99%.
3. Fórmula montada termo a termo (acerto, erro, RAM).
4. O percentual fica oculto até o aluno escolher entre 4,0%, 12,8% e 1,6%.
5. "Troca de contexto" esvazia o TLB e o próximo acesso vira miss.

**O aluno manipula:** a escolha do caminho mostrado no fluxo (hit ou miss);
Passo, Play e Reset; o seletor 80% / 95% / 99%; a escolha do percentual
(4,0%, 12,8% ou 1,6%); o botão "Troca de contexto".
**É automático:** a animação dos passos da Fig. 14.13, a montagem dos termos
da fórmula, o cálculo, a revelação do percentual depois da escolha, o
esvaziamento do TLB e o log.

**Caso de borda.** Reset no meio da montagem volta a 95% com os termos
ocultos.

**Deu certo quando:** o aluno associa cada taxa ao seu percentual antes de
revelar e explica qual termo domina o aumento.

---

## alocacao-variaveis

**Objetivo.** O aluno prevê onde cada variável é alocada e quantas instâncias
de `n`/`parcial` existem em cada instante da recursão.

**Livro.** Cap. 15, seções 15.3.1, 15.3.2 e 15.3.3.

**Dados exatos.**
- `int soma = 0` (4 bytes, DATA), `int i` (pilha).
- `fatorial(4)` e a saída literal do livro: "inicio: n = 4" …
  "Fatorial (4) = 24".
- `ptr = malloc(4096)` e `free(ptr)`.

**Nota no código:** "no original consta prt; erro tipográfico do livro".

**Cenas.**
1. Fatorial com a linha ativa, um quadro de pilha por chamada (`n` = 4, 3, 2,
   1; `parcial` indefinido) e a saída impressa em sincronia.
2. No retorno, `parcial` é preenchido com 1, 2, 6 e 24 e os quadros saem da
   pilha.
3. Cenário 2: `soma` em DATA, `i` na pilha, bloco do `malloc` no HEAP.

**O laço de `soma` até 1000 não é executado nem tem resultado mostrado:** o
livro não imprime esse valor.

**O aluno manipula:** Passo, Play e Reset; a troca entre o cenário do
fatorial e o cenário 2 (`soma`, `i` e `malloc`).
**É automático:** o destaque da linha ativa, o empilhamento e o desempilhamento
dos quadros, o preenchimento de `parcial`, a saída impressa em sincronia e o
log.

**Casos de borda.** Passo depois do fim fica desabilitado; reset volta ao
início de `main`.

**Deu certo quando:** na chamada com `n = 2`, o aluno diz quantas instâncias de
`parcial` existem (3) e qual é a próxima linha impressa.

---

## atribuicao-enderecos

**Objetivo.** O aluno associa cada momento de atribuição de endereços ao seu
agente e ao seu uso típico.

**Livro.** Cap. 15, seção 15.4, Figura 15.3.

**Dados exatos.**
- `soma.c` e a listagem Assembly do livro, literal.
- Os cinco momentos: edição, compilação (.COM), ligação (arquivo objeto,
  tabela de símbolos, ligador), carga (carregador, DLL) e execução (hardware).
- A combinação usada pelos SOs atuais: ligação + carga + execução.

**Nota na listagem:** "a listagem compara com 4 (`cmpl $0x4`), o que equivale
a `i ≤ 4`, diferente do `i < 10` do fonte". A instrução não é ligada ao laço
do C.

**Cenas.**
1. Linha do tempo da Fig. 15.3: fonte → objetos → executável → processo.
2. Clicar em `soma`, `i`, `main`, `printf` ou `exit` mostra o trecho Assembly
   correspondente, sem nomes, só endereços.
3. Desafio: associar cada momento ao agente e ao uso.

**O aluno manipula:** Passo e Reset na linha do tempo; o clique (ou Enter) em
`soma`, `i`, `main`, `printf` e `exit`; a associação de cada momento ao agente
e ao uso (arrastar, ou setas + Enter).
**É automático:** o avanço visual da linha do tempo, o destaque do trecho
Assembly correspondente, a frase do livro quando a associação está errada e o
log.

**Caso de borda.** Associação errada mostra a frase do livro sobre aquele
momento, sem penalidade de vida.

**Deu certo quando:** o aluno identifica que os SOs atuais combinam ligação,
carga e execução, e por que a execução depende de hardware.
