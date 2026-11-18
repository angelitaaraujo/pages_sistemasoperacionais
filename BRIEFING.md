# BRIEFING — Questionários das Partes IV, V e VI

Leia este arquivo inteiro antes de começar. Execute um item da fila por vez,
na ordem, sem pedir aprovação entre eles.

## Fonte

- Texto do capítulo em `livro/txt/cap_XX.txt`.
- Use apenas o capítulo indicado no item da fila. Não consulte outros capítulos.
- Se `livro/txt/` não existir, PARE e me avise. Não leia os PDFs diretamente.
- Antes de gerar, confira se o .txt tem conteúdo real: menos de 2.000 caracteres
  ou ausência de texto corrido indica conversão falha. Nesse caso PARE e avise
  qual capítulo precisa de nova conversão. Não preencha lacunas por conta própria.

## Saída

Um arquivo por capítulo em `atividades/<slug>.js`, seguindo o `CLAUDE.md`.

| Item | Capítulo | Arquivo | Tema |
|---|---|---|---|
| 1 | cap_14 | hardware-memoria.js | Hardware de memória |
| 2 | cap_15 | uso-da-memoria.js | Uso da memória |
| 3 | cap_16 | alocacao-memoria.js | Alocação de memória |
| 4 | cap_17 | paginacao-disco.js | Paginação em disco |
| 5 | cap_19 | hardware-es.js | Hardware de entrada/saída |
| 6 | cap_20 | software-es.js | Software de entrada/saída |
| 7 | cap_21 | discos-ssd.js | Discos rígidos e SSD |
| 8 | cap_22 | conceito-arquivo.js | O conceito de arquivo |
| 9 | cap_23 | uso-arquivos.js | Uso de arquivos |
| 10 | cap_24 | sistemas-arquivos.js | Sistemas de arquivos |
| 11 | cap_25 | diretorios-atalhos.js | Diretórios e atalhos |

## Estrutura do arquivo

`JOGO2.registrar({ id, titulo, disciplina, descricao, vidas, niveis, teoria, fases })`

- `id` igual ao nome do arquivo, sem `.js`.
- Usar `disciplina`, `vidas` e `niveis` como nos arquivos existentes; não omitir.
- 3 fases, 20 questões: 5 na fase 1, 8 na fase 2, 7 na fase 3.
- Cada questão: `categoria, pergunta, opcoes` (exatamente 4), `correta`
  (índice numérico de 0 a 3), `explicacao` (uma frase).
- Vírgula obrigatória antes de `explicacao`.
- `teoria`: 4 a 6 tópicos curtos em `<h3>`/`<p>`, cobrindo os conceitos centrais
  do capítulo.

## Formatos das questões

Todos renderizados como múltipla escolha de 4 alternativas. O motor não suporta
múltipla marcação nem somatório, então esses formatos viram combinações.

1. **Única correta** — quatro afirmações no enunciado, uma verdadeira.
2. **Foco negativo** — o enunciado pede a INCORRETA; as outras três são verdadeiras.
3. **V/F em sequência** — afirmativas I, II, III no enunciado; alternativas são
   sequências ("V, V, F", "F, V, V", "V, F, F", "F, F, V").
4. **Múltiplas respostas** — afirmativas I, II, III; alternativas são combinações
   ("I e II, apenas", "II e III, apenas", "I e III, apenas", "I, II e III").
5. **Ordenação** — o enunciado pede a ordem correta de etapas ou eventos;
   alternativas são sequências diferentes.
6. **Itens complementares** — texto de apoio de 2 a 3 linhas do próprio capítulo,
   seguido de afirmativas I, II, III; alternativas trazem as combinações corretas.

Distribuição:

- Fase 1 "Fundamentos" — 5 fáceis: formatos 1, 2, 3. O formato 2 aparece duas
  vezes nesta fase; a alternância não pode ter dois formatos iguais seguidos.
- Fase 2 "Mecanismos" — 8 médias: formatos 1, 3, 5, 6.
- Fase 3 "Aplicação" — 7 difíceis: formatos 4, 5, 6. O formato 4 aparece duas
  vezes nesta fase.
- Não repetir o mesmo formato em duas questões consecutivas.
- Cada formato deve aparecer pelo menos duas vezes no arquivo.

## Conteúdo

- Só o capítulo indicado. Não inventar sistemas, números, autores, exemplos de
  código nem dados ausentes no texto.
- Distratores devem ser plausíveis e temáticos, nunca absurdos.
- Nomes próprios em português, como no livro.

## Regra de arquivo existente

A única alteração autorizada em arquivo existente é adicionar em
`atividades.html` uma linha, logo após a última tag script de atividades/
já presente:

    <script src="atividades/<slug>.js"></script>

Nada mais. Não alterar, renomear nem reformatar nenhum outro arquivo.

## Verificação obrigatória, após cada arquivo

Rodar, na raiz do repositório:

    docker run --rm -v "$PWD":/app:ro -w /app node:22-alpine node --check atividades/<slug>.js

- Passou: marque o item como concluído na fila e siga para o próximo.
- Falhou: corrija apenas a linha apontada e rode de novo.
- Falhou duas vezes no mesmo arquivo: PARE e me avise qual é o arquivo.

## Fila

- [x] 1 — cap_14 → hardware-memoria.js
- [x] 2 — cap_15 → uso-da-memoria.js
- [x] 3 — cap_16 → alocacao-memoria.js
- [x] 4 — cap_17 → paginacao-disco.js
- [x] 5 — cap_19 → hardware-es.js
- [x] 6 — cap_20 → software-es.js
- [x] 7 — cap_21 → discos-ssd.js
- [x] 8 — cap_22 → conceito-arquivo.js
- [x] 9 — cap_23 → uso-arquivos.js
- [x] 10 — cap_24 → sistemas-arquivos.js
- [x] 11 — cap_25 → diretorios-atalhos.js

Ao concluir cada item, troque `[ ]` por `[x]` neste próprio arquivo, para eu
poder retomar se a sessão for interrompida.

## Proibido

- Gerar dois arquivos na mesma resposta.
- Alterar arquivo existente, exceto a linha de script em `atividades.html`.
- Criar CSS novo em `css/`.
- Alterar `js/motor.js` ou `js/motor2.js`.
- Renomear ou reformatar os arquivos já existentes em `atividades/`.