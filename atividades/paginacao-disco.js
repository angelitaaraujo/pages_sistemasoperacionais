JOGO2.registrar({
  id: "paginacao-disco",
  titulo: "Paginação em Disco",
  disciplina: "🧠 Gerência de Memória",
  descricao: "Atividade de estudo e revisão do capítulo 17: extensão da memória RAM em disco, faltas de página, algoritmos de substituição (FIFO, OPT, LRU e aproximações), conjunto de trabalho, anomalia de Belady e thrashing.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Estendendo a memória RAM</h3>
    <p>Dispositivos de armazenamento secundário podem funcionar como extensão da memória RAM, de forma transparente para os processos. As técnicas são: overlays (o programador organiza o programa em módulos carregados na mesma região em momentos distintos), swapping (move um processo ocioso inteiro para o disco, com swap-out e swap-in) e paging (move páginas individuais, conjuntos de páginas ou segmentos para o disco, com page-out e page-in), a técnica mais usada nos sistemas atuais.</p>

    <h3>A paginação em disco</h3>
    <p>O núcleo escolhe as páginas a retirar da memória por algoritmos de substituição de páginas. Na tabela de páginas, o flag de presença da página é desligado e a posição dela no disco é registrada. A área de disco usada é a área de troca (swap area), que pode ser um disco exclusivo, uma partição ou um arquivo. Quando um processo acessa uma página ausente, a MMU gera uma falta de página; o núcleo verifica se a página é válida (se não for, aborta o processo), suspende o processo, abre espaço se necessário escolhendo uma página vítima, carrega a página e acorda o processo.</p>

    <h3>Eficiência da paginação</h3>
    <p>O tempo de acesso de um disco rígido é cerca de 100.000 vezes maior que o da RAM, então faltas de página frequentes aumentam o tempo médio de acesso e reduzem o desempenho. A frequência de faltas depende do tamanho da RAM em relação à demanda dos processos, do comportamento dos processos (localidade de referências) e da escolha das páginas removidas. Critérios de escolha de vítimas incluem a idade da página, a frequência de acessos, a data do último acesso, a prioridade do processo, o conteúdo da página e páginas especiais.</p>

    <h3>Algoritmos de substituição de páginas</h3>
    <p>O FIFO remove as páginas mais antigas, sem considerar sua importância. O algoritmo ótimo (OPT) remove a página que ficará mais tempo sem uso; não é implementável, mas serve de limite mínimo de comparação. O LRU remove a página há mais tempo sem acesso e é uma aproximação implementável do OPT, porém caro. O RANDOM escolhe páginas aleatoriamente. As aproximações do LRU são a segunda chance (ou relógio, que usa o bit de referência), o NRU (usa os bits R e M) e o envelhecimento (contadores deslocados para a direita, com o bit R no bit mais significativo).</p>

    <h3>Conjunto de trabalho, anomalia de Belady e thrashing</h3>
    <p>O conjunto de trabalho (working set) é o conjunto de páginas acessadas na história recente de um processo; o algoritmo WSClock o combina com o algoritmo do relógio usando um prazo de validade τ. A anomalia de Belady ocorre em algoritmos como o FIFO, em que aumentar o número de quadros aumenta o número de faltas de página; os algoritmos de pilha, como OPT e LRU, não a apresentam. O thrashing ocorre quando a soma dos conjuntos de trabalho dos processos prontos é maior que a RAM disponível, e o desempenho do sistema cai fortemente.</p>
  `,
  fases: [
    {
      titulo: "Fundamentos",
      perguntas: [
        {
          categoria: "Extensão da memória RAM",
          pergunta: "Qual afirmação sobre as técnicas de extensão da memória RAM em disco é verdadeira?",
          opcoes: [
            "O paging move páginas individuais, conjuntos de páginas ou segmentos para o disco e é a técnica mais usada nos sistemas operacionais atuais",
            "O swapping move páginas individuais para o disco e é a técnica mais usada hoje em sistemas de uso geral",
            "Os overlays são gerenciados automaticamente pelo núcleo, sem esforço do programador",
            "O swapping é a técnica preferida nos sistemas operacionais de uso geral atuais"
          ],
          correta: 0,
          explicacao: "O paging é a técnica mais usada nos sistemas atuais, enquanto o swapping é pouco empregado hoje e os overlays exigem esforço do programador."
        },
        {
          categoria: "Mecanismo básico",
          pergunta: "Sobre a paginação em disco, assinale a alternativa INCORRETA.",
          opcoes: [
            "As páginas a retirar da memória são escolhidas pelo núcleo, de acordo com algoritmos de substituição de páginas",
            "Para cada página transferida ao disco, o flag de presença é desligado e a posição da página no disco é registrada na tabela de páginas",
            "A área de troca só pode ser um arquivo reservado dentro do sistema de arquivos",
            "A área de disco usada para armazenar as páginas é geralmente chamada de área de troca (swap area)"
          ],
          correta: 2,
          explicacao: "A área de troca pode ser um disco exclusivo, uma partição do disco principal ou um arquivo reservado no sistema de arquivos."
        },
        {
          categoria: "Overlays, swapping e paging",
          pergunta: "Sobre as técnicas de extensão da memória, julgue as afirmativas. I. No swapping, um processo ocioso é movido da RAM para o disco (swap-out) e depois carregado de volta (swap-in). II. Nos overlays, o núcleo escolhe automaticamente os módulos a carregar, sem esforço do programador. III. No paging, somente processos inteiros podem ser movidos para o disco. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "V, F, F",
            "F, V, V",
            "F, F, V"
          ],
          correta: 1,
          explicacao: "Nos overlays o programador organiza os módulos, e o paging move páginas individuais, conjuntos de páginas ou mesmo segmentos."
        },
        {
          categoria: "Falta de página",
          pergunta: "O que ocorre quando um processo tenta acessar uma página que não está presente na memória RAM?",
          opcoes: [
            "O núcleo aborta imediatamente o processo, sem verificar a validade da página",
            "A MMU carrega sozinha a página do disco para a RAM",
            "O processo continua a execução com os dados da página anterior",
            "A MMU gera uma interrupção de falta de página (page fault), desviando a execução para o núcleo"
          ],
          correta: 3,
          explicacao: "Se a página não está presente na RAM, a MMU gera uma interrupção de falta de página, e o núcleo verifica a validade e traz a página de volta."
        },
        {
          categoria: "Eficiência da paginação",
          pergunta: "Sobre a eficiência da paginação em disco, assinale a alternativa INCORRETA.",
          opcoes: [
            "Um disco rígido típico tem tempo de acesso cerca de 100.000 vezes menor que o da memória RAM",
            "Cada falta de página implica em um acesso ao disco, ou em dois acessos se a RAM estiver cheia e outra página tiver de ser removida antes",
            "Faltas de página muito frequentes aumentam o tempo médio de acesso à memória e diminuem o desempenho geral do sistema",
            "A frequência de faltas depende do tamanho da RAM, do comportamento dos processos e da escolha das páginas removidas"
          ],
          correta: 0,
          explicacao: "O tempo de acesso de um disco rígido típico é cerca de 100.000 vezes maior que o da RAM, e por isso as faltas de página prejudicam o desempenho."
        }
      ]
    },
    {
      titulo: "Mecanismos",
      perguntas: [
        {
          categoria: "Algoritmo FIFO",
          pergunta: "Qual afirmação sobre o algoritmo FIFO de substituição de páginas é verdadeira?",
          opcoes: [
            "Ele escolhe as páginas que estão há mais tempo sem serem acessadas",
            "Na cadeia de referências do capítulo, ele gera menos faltas de página que o algoritmo ótimo",
            "Seu principal defeito é considerar somente a idade da página, sem levar em conta sua importância",
            "Ele só pode ser implementado com hardware dedicado"
          ],
          correta: 2,
          explicacao: "O FIFO é simples de implementar, mas considera só a idade da página, e pode remover páginas antigas muito usadas, como bibliotecas compartilhadas."
        },
        {
          categoria: "Algoritmos OPT e LRU",
          pergunta: "Sobre os algoritmos de substituição de páginas, julgue as afirmativas. I. O algoritmo ótimo (OPT) é implementável, pois o comportamento futuro dos processos pode ser previsto com precisão. II. O algoritmo LRU escolhe as páginas que foram acessadas há menos tempo. III. Para uma dada cadeia de referências, nenhum algoritmo gera menos faltas de página que o algoritmo ótimo. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "F, V, V",
            "V, F, F",
            "F, F, V"
          ],
          correta: 3,
          explicacao: "O OPT não é implementável e o LRU escolhe as páginas há mais tempo sem acesso; o OPT define o limite mínimo de faltas de página."
        },
        {
          categoria: "Tratamento da falta de página",
          pergunta: "Qual é a ordem correta das ações do mecanismo de paginação quando um processo acessa uma página ausente da RAM, havendo espaço livre na memória? (1) O núcleo verifica se a página é válida. (2) A MMU gera uma interrupção de falta de página. (3) O processo é suspenso. (4) A página é carregada na memória e a tabela de páginas é ajustada. (5) O processo é acordado.",
          opcoes: [
            "2, 3, 1, 4, 5",
            "2, 1, 3, 4, 5",
            "1, 2, 3, 4, 5",
            "2, 1, 4, 3, 5"
          ],
          correta: 1,
          explicacao: "Após a interrupção, o núcleo verifica a validade da página, suspende o processo, carrega a página, ajusta a tabela e então acorda o processo."
        },
        {
          categoria: "Segunda chance",
          pergunta: "Texto de apoio: o algoritmo da segunda chance melhora o FIFO analisando o bit de referência de cada página candidata. Se a página foi acessada recentemente, ela recebe uma segunda chance, voltando para o fim da fila com o bit de referência ajustado para zero. Se todas as páginas forem muito acessadas, o algoritmo varre todas, zera os bits e escolhe a primeira página da fila, como faria o FIFO. Julgue as afirmativas. I. Uma página com bit de referência 1 volta ao fim da fila com o bit zerado. II. O algoritmo evita substituir páginas antigas mas muito acessadas. III. Se todas as páginas forem muito acessadas, o algoritmo escolhe a última página da fila.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 0,
          explicacao: "Se todas as páginas forem muito acessadas, o algoritmo acaba escolhendo a primeira página da fila, como faria o FIFO."
        },
        {
          categoria: "Algoritmo NRU",
          pergunta: "No algoritmo NRU, que usa os bits R (referência) e M (modificação), qual classe de páginas é a melhor candidata à substituição?",
          opcoes: [
            "R = 1 e M = 1: páginas referenciadas recentemente e modificadas",
            "R = 1 e M = 0: páginas referenciadas recentemente, de conteúdo inalterado",
            "R = 0 e M = 0: páginas não referenciadas recentemente e não modificadas, que podem ser simplesmente retiradas da memória",
            "R = 0 e M = 1: páginas não referenciadas recentemente, mas que precisam ser gravadas na área de troca"
          ],
          correta: 2,
          explicacao: "As páginas com R = 0 e M = 0 são as melhores candidatas, pois podem ser retiradas da memória sem serem gravadas na área de troca."
        },
        {
          categoria: "Algoritmo do envelhecimento",
          pergunta: "Sobre o algoritmo do envelhecimento, julgue as afirmativas. I. A cada página é associado um contador inteiro de N bits, geralmente de 8 bits. II. A cada período, o contador é deslocado 1 bit para a direita e o valor do bit de referência é colocado no bit mais significativo. III. O valor do bit de referência é simplesmente somado ao contador. Assinale a sequência correta.",
          opcoes: [
            "F, V, V",
            "V, V, F",
            "V, F, F",
            "F, F, V"
          ],
          correta: 1,
          explicacao: "A soma simples faria o contador chegar rapidamente ao overflow e não diferenciaria acessos recentes dos mais antigos."
        },
        {
          categoria: "Algoritmo FIFO",
          pergunta: "Na aplicação do algoritmo FIFO à cadeia de referências do capítulo, com 3 quadros, qual é a ordem correta dos eventos iniciais? (1) p0 é carregada em q1. (2) p2 substitui p7. (3) p7 é carregada em q0. (4) p1 é carregada em q2.",
          opcoes: [
            "3, 4, 1, 2",
            "1, 3, 4, 2",
            "3, 1, 2, 4",
            "3, 1, 4, 2"
          ],
          correta: 3,
          explicacao: "As páginas são acessadas na ordem 7, 0, 1, 2; só o acesso à página 2 exige substituir a página mais antiga, a p7."
        },
        {
          categoria: "Comparação entre algoritmos",
          pergunta: "Texto de apoio: a cadeia de referências do capítulo tem 20 acessos a 6 páginas distintas. Com uma memória física de 3 quadros, o algoritmo FIFO gera 15 faltas de página, o algoritmo ótimo (OPT) gera 9 faltas e o algoritmo LRU gera 12 faltas. Julgue as afirmativas. I. O FIFO gera 6 faltas de página a mais que o algoritmo ótimo. II. O LRU gera 15 faltas de página, o mesmo número do FIFO. III. O algoritmo ótimo gera 9 faltas, o menor número possível para essa cadeia.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 2,
          explicacao: "O LRU gera 12 faltas de página, três a mais que o algoritmo ótimo, e não 15 como o FIFO."
        }
      ]
    },
    {
      titulo: "Aplicação",
      perguntas: [
        {
          categoria: "Anomalia de Belady",
          pergunta: "Sobre a anomalia de Belady, julgue as afirmativas. I. Em alguns algoritmos, como o FIFO, aumentar o número de quadros de memória pode aumentar o número de faltas de página. II. No exemplo do capítulo, o FIFO passa de 22 para 24 faltas de página ao aumentar a memória de 4 para 5 quadros. III. Os algoritmos de pilha, como o OPT e o LRU, também apresentam a anomalia de Belady.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 0,
          explicacao: "Os algoritmos de pilha, como o OPT e o LRU, não apresentam a anomalia de Belady."
        },
        {
          categoria: "Algoritmo NRU",
          pergunta: "Qual é a ordem de preferência para substituição de páginas no algoritmo NRU, da melhor para a pior candidata? (1) R = 1 e M = 1. (2) R = 0 e M = 0. (3) R = 1 e M = 0. (4) R = 0 e M = 1.",
          opcoes: [
            "2, 3, 4, 1",
            "4, 2, 3, 1",
            "2, 4, 1, 3",
            "2, 4, 3, 1"
          ],
          correta: 3,
          explicacao: "O NRU tenta substituir primeiro as páginas de nível 0 (00), depois as de nível 1 (01), depois as 10 e, por último, as 11, que são a pior escolha."
        },
        {
          categoria: "Algoritmo WSClock",
          pergunta: "Texto de apoio: no WSClock, define-se um prazo de validade τ, e a idade de uma página p é i(p) = t_now − t_a(p), em que t_a(p) é a data do seu último acesso. Ao encontrar uma página não referenciada (R = 0) com i(p) ≤ τ, a página está no conjunto de trabalho e é ignorada. Se i(p) > τ e M = 0, a página pode ser substituída; se M = 1, agenda-se a escrita da página em disco e o ponteiro avança. Julgue as afirmativas. I. Uma página com R = 0 e i(p) ≤ τ pertence ao conjunto de trabalho e é ignorada. II. Uma página com R = 1 é substituída imediatamente. III. Uma página com R = 0, i(p) > τ e M = 1 tem a escrita em disco agendada e o ponteiro avança.",
          opcoes: [
            "I e II, apenas",
            "I e III, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 1,
          explicacao: "Ao encontrar uma página referenciada (R = 1), o WSClock atualiza a data do último acesso, limpa o bit R e avança o ponteiro, sem substituí-la."
        },
        {
          categoria: "Thrashing",
          pergunta: "Sobre o thrashing, julgue as afirmativas. I. Ele pode ocorrer quando a soma dos conjuntos de trabalho dos processos prontos para execução é maior que a memória RAM disponível. II. No thrashing, a taxa de uso do processador diminui, pois muitos processos ficam suspensos aguardando a paginação. III. Ele pode ser evitado aumentando a memória RAM, limitando o número máximo de processos ativos ou mudando a política de escalonamento.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III",
            "I e III, apenas"
          ],
          correta: 2,
          explicacao: "As três afirmativas descrevem corretamente a causa, o efeito sobre o processador e as formas de evitar o thrashing."
        },
        {
          categoria: "Impacto das faltas de página",
          pergunta: "Texto de apoio: em um sistema com RAM de 60 ns e disco de troca de 6 ms, com uma falta de página a cada milhão de acessos, o tempo médio de acesso é de 66 ns se a memória não está saturada e de 72 ns se está saturada. Com uma falta a cada 100.000 acessos, o tempo médio sobe para 120 ns no primeiro caso e 180 ns no segundo. Julgue as afirmativas. I. Com a memória saturada, cada falta de página exige apenas um acesso ao disco. II. Se a frequência de faltas aumenta para uma a cada 100.000 acessos, o tempo médio com memória não saturada sobe para 120 ns. III. O tempo médio de 72 ns corresponde à situação de memória saturada.",
          opcoes: [
            "II e III, apenas",
            "I e II, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 0,
          explicacao: "Com a memória saturada, é preciso antes remover outra página, o que exige dois acessos ao disco por falta de página."
        },
        {
          categoria: "Tratamento com memória cheia",
          pergunta: "Qual é a ordem correta das ações do mecanismo de paginação quando a memória RAM está cheia? (1) A página vítima é transferida para o disco e a tabela de páginas é ajustada. (2) Uma página vítima é escolhida. (3) A página faltante é carregada e a tabela de páginas do processo é ajustada. (4) A MMU gera uma interrupção de falta de página. (5) O processo é suspenso.",
          opcoes: [
            "4, 5, 1, 2, 3",
            "4, 2, 5, 1, 3",
            "5, 4, 2, 1, 3",
            "4, 5, 2, 1, 3"
          ],
          correta: 3,
          explicacao: "Sem espaço em RAM, o núcleo escolhe uma vítima e a transfere para o disco antes de carregar a página faltante, o que torna o atendimento mais demorado."
        },
        {
          categoria: "Conjunto de trabalho",
          pergunta: "Texto de apoio: o conjunto de páginas acessadas na história recente de um processo é chamado de conjunto de trabalho (working set). A composição do conjunto de trabalho é dinâmica, variando à medida que o processo executa. Se um processo tiver todas as páginas de seu conjunto de trabalho na memória, ele sofrerá poucas faltas de página. Julgue as afirmativas. I. O conjunto de trabalho é formado por todas as páginas do processo. II. A composição do conjunto de trabalho varia à medida que o processo executa. III. Com o conjunto de trabalho na memória, somente acessos a novas páginas podem gerar faltas de página.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 1,
          explicacao: "O conjunto de trabalho reúne apenas as páginas acessadas na história recente, e por isso a afirmativa I é falsa."
        }
      ]
    }
  ]
});
