JOGO2.registrar({
  id: "alocacao-memoria",
  titulo: "Alocação de Memória",
  disciplina: "🧠 Gerência de Memória",
  descricao: "Atividade de estudo e revisão do capítulo 16: alocadores de memória, fragmentação, estratégias de alocação, desfragmentação, alocadores Buddy e Slab e alocação no espaço de usuário.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Alocadores de memória</h3>
    <p>O alocador de memória é o mecanismo responsável pela alocação e liberação de áreas de memória RAM, mantendo o registro de quais áreas estão em uso e quais estão livres. Ele existe em três contextos: o alocador de memória física (organiza a memória física e define as áreas alocáveis e as reservadas), o alocador de espaço de núcleo (aloca estruturas pequenas, como descritores de arquivos, de processos e sockets) e o alocador de espaço de usuário (atende operações como malloc e free, em geral por bibliotecas como a LibC).</p>

    <h3>Fragmentação</h3>
    <p>A fragmentação externa ocorre quando a memória livre é dividida em buracos entre as áreas alocadas: pode haver memória livre suficiente no total, mas nenhuma área contínua grande o bastante para uma requisição. A fragmentação interna é o desperdício dentro da área alocada, causado por arredondamentos; na memória paginada, as alocações são sempre em múltiplos inteiros de páginas, e em média se perde meia página por processo.</p>

    <h3>Estratégias de alocação e desfragmentação</h3>
    <p>Para minimizar a fragmentação externa, as estratégias são: first-fit (primeira área livre que satisfaça o pedido; é rápida), best-fit (menor área possível que receba a alocação), worst-fit (maior área livre possível) e next-fit (variante do first-fit que percorre a lista a partir da última área alocada ou liberada). As mais eficientes são best-fit e first-fit, esta bem mais rápida. A desfragmentação move áreas de memória para concatenar as livres; só se aplica a áreas físicas, exige ajustar as informações de endereçamento e deve ser rápida e pouco frequente.</p>

    <h3>Alocador Buddy</h3>
    <p>O Buddy binário aloca blocos de tamanho 2ⁿ (uma requisição de 85 KBytes recebe um bloco de 128 KBytes). Para atender uma requisição, procura o menor bloco 2ⁿ que a comporte; se não houver, divide um bloco maior em dois buddies e usa um deles. Ao liberar um bloco, verifica se o seu buddy também está livre e, se estiver, funde os dois (coalescência), repetindo o processo. O Linux o usa para a alocação de memória física (page frames).</p>

    <h3>Alocador Slab e alocação no espaço de usuário</h3>
    <p>O alocador Slab, proposto para o SunOS 5.4, é especializado em objetos de núcleo: define um cache para cada tipo de objeto, dividido em slabs (cheios, vazios ou parciais) cujos objetos têm o mesmo tamanho. Um objeto é entregue de um slab parcial, ou de um slab vazio, ou de um novo slab criado com páginas pedidas ao alocador físico. No espaço de usuário, a seção HEAP é gerida por bibliotecas como a LibC (com alocadores como DLmalloc e PTmalloc) ou por técnicas como o memory pool, usado em sistemas de tempo real.</p>
  `,
  fases: [
    {
      titulo: "Fundamentos",
      perguntas: [
        {
          categoria: "Alocadores de memória",
          pergunta: "O que é um alocador de memória?",
          opcoes: [
            "Um componente da MMU que traduz endereços lógicos em físicos",
            "Um mecanismo que apenas libera memória, sem registrar o que está em uso",
            "O mecanismo que aloca e libera áreas de memória, mantendo o registro de quais áreas estão em uso e quais estão livres",
            "Uma estratégia usada exclusivamente em memória paginada, sem relação com o núcleo"
          ],
          correta: 2,
          explicacao: "O alocador é o mecanismo responsável pela alocação e liberação de áreas de memória, e mantém um registro contínuo das áreas usadas e livres."
        },
        {
          categoria: "Contextos de alocação",
          pergunta: "Sobre os alocadores de memória, assinale a alternativa INCORRETA.",
          opcoes: [
            "O alocador de espaço de usuário é implementado diretamente pelo núcleo, sem uso de bibliotecas",
            "O alocador de memória física organiza a memória física, definindo as áreas alocáveis e as reservadas, como BIOS e DMA",
            "O alocador de espaço de núcleo obtém áreas do alocador físico para alocar estruturas como descritores de arquivos e sockets",
            "As bibliotecas do espaço de usuário interagem com o núcleo para pedir o redimensionamento da seção HEAP"
          ],
          correta: 0,
          explicacao: "O alocador de espaço de usuário geralmente é implementado por bibliotecas providas pelo sistema operacional, como a LibC."
        },
        {
          categoria: "Fragmentação",
          pergunta: "Sobre a fragmentação de memória, julgue as afirmativas. I. A fragmentação externa ocorre dentro das áreas alocadas, quando o processo recebe mais memória do que solicitou. II. A fragmentação interna fragmenta a memória livre, fora das áreas alocadas. III. Na fragmentação externa, pode haver memória livre suficiente no total e mesmo assim a requisição não ser atendida, por não existir uma área livre contínua grande o bastante. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "F, V, V",
            "V, F, F",
            "F, F, V"
          ],
          correta: 3,
          explicacao: "A fragmentação externa ocorre na memória livre, fora das áreas alocadas, e a interna é o desperdício dentro da área alocada; só a afirmativa III é verdadeira."
        },
        {
          categoria: "Estratégias de alocação",
          pergunta: "Qual afirmação sobre as estratégias de alocação de memória é verdadeira?",
          opcoes: [
            "O best-fit escolhe sempre a maior área livre possível",
            "O first-fit escolhe a primeira área livre que satisfaça o pedido e tem como vantagem a rapidez",
            "O worst-fit escolhe a menor área possível que possa receber a alocação",
            "O next-fit percorre sempre a lista a partir do início, como o worst-fit"
          ],
          correta: 1,
          explicacao: "O first-fit escolhe a primeira área livre que satisfaça o pedido, o que o torna rápido, sobretudo se a lista de áreas livres for muito longa."
        },
        {
          categoria: "Desfragmentação",
          pergunta: "Sobre a desfragmentação da memória, assinale a alternativa INCORRETA.",
          opcoes: [
            "Ao mover um processo, suas informações de endereçamento (base/limite, tabelas de segmentos ou de páginas) devem ser ajustadas",
            "Ela só pode ser aplicada a áreas de memória físicas",
            "Ela pode ser aplicada, por exemplo, à gestão da seção heap de um processo",
            "Como as áreas não podem ser acessadas durante o procedimento, ele deve ser rápido e pouco frequente"
          ],
          correta: 2,
          explicacao: "A desfragmentação só se aplica a áreas físicas e não pode ser usada, por exemplo, na gestão da seção heap de um processo."
        }
      ]
    },
    {
      titulo: "Mecanismos",
      perguntas: [
        {
          categoria: "Alocador Buddy",
          pergunta: "Qual afirmação sobre o alocador Buddy binário é verdadeira?",
          opcoes: [
            "Uma requisição de 85 KBytes recebe um bloco de 128 KBytes, pois os blocos têm tamanho 2ⁿ",
            "Uma requisição de 85 KBytes recebe exatamente 85 KBytes",
            "Ele foi proposto para o SunOS 5.4 e só aloca objetos de núcleo",
            "Ao liberar um bloco, o alocador nunca verifica o seu par (buddy)"
          ],
          correta: 0,
          explicacao: "O Buddy binário sempre aloca blocos de tamanho 2ⁿ, então uma requisição de 85 KBytes recebe um bloco de 128 KBytes."
        },
        {
          categoria: "Alocador Slab",
          pergunta: "Sobre o alocador Slab, julgue as afirmativas. I. Ele foi inicialmente proposto para o núcleo do sistema operacional SunOS 5.4. II. Cada cache guarda objetos de tipos variados, com tamanhos diferentes. III. Um slab cheio é aquele em que todos os objetos estão livres. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "V, F, F",
            "F, V, V",
            "F, F, V"
          ],
          correta: 1,
          explicacao: "Cada cache é definido para um tipo de objeto, com slabs de objetos do mesmo tamanho, e um slab cheio tem todos os objetos em uso."
        },
        {
          categoria: "Alocador Buddy",
          pergunta: "Qual é a ordem correta dos passos do alocador Buddy binário ao receber uma requisição de 40 KBytes, quando não há bloco livre de 64 KBytes, mas há um de 128 KBytes? (1) O alocador divide o bloco de 128 KBytes em dois blocos de 64 KBytes (buddies). (2) O alocador procura um bloco livre de 64 KBytes. (3) O alocador usa um dos buddies para a alocação. (4) O alocador, sem achar o bloco de 64 KBytes, procura um bloco livre de 128 KBytes.",
          opcoes: [
            "2, 1, 4, 3",
            "4, 2, 1, 3",
            "2, 4, 3, 1",
            "2, 4, 1, 3"
          ],
          correta: 3,
          explicacao: "O alocador procura primeiro o menor bloco 2ⁿ que comporte a requisição e, se não o encontra, divide um bloco maior em dois buddies e usa um deles."
        },
        {
          categoria: "Alocador Slab",
          pergunta: "Texto de apoio: quando um novo objeto de núcleo é requisitado, o alocador Slab entrega um objeto livre de um slab parcial; se não houver slabs parciais, entrega um objeto livre de um slab vazio, o que torna esse slab parcial; se não houver slabs vazios, pede mais páginas de RAM ao alocador de memória física para criar um novo slab. Julgue as afirmativas. I. A primeira escolha do alocador é um slab parcial. II. Entregar um objeto de um slab vazio altera o status desse slab para parcial. III. Quando não há slabs parciais, o alocador sempre cria um novo slab.",
          opcoes: [
            "II e III, apenas",
            "I e III, apenas",
            "I e II, apenas",
            "I, II e III"
          ],
          correta: 2,
          explicacao: "Sem slabs parciais, o alocador usa um slab vazio e só cria um novo slab quando não existem slabs vazios."
        },
        {
          categoria: "Fragmentação interna",
          pergunta: "Em um sistema com páginas de 4 KBytes (4.096 bytes), um processo solicita 550.000 bytes. Quanto de memória ele recebe?",
          opcoes: [
            "552.960 bytes (135 páginas), ou seja, 2.960 bytes a mais que o solicitado",
            "550.000 bytes, exatamente o solicitado",
            "548.864 bytes (134 páginas), ou seja, 1.136 bytes a menos que o solicitado",
            "557.056 bytes (136 páginas), ou seja, 7.056 bytes a mais que o solicitado"
          ],
          correta: 0,
          explicacao: "Na memória paginada as alocações são sempre em múltiplos inteiros de páginas, então 134,284 páginas viram 135 páginas, ou 552.960 bytes."
        },
        {
          categoria: "Fragmentação interna",
          pergunta: "Sobre a fragmentação interna, julgue as afirmativas. I. Em média, para cada processo haverá uma perda de 1/2 página de memória. II. Páginas de menor tamanho reduzem essa perda, mas geram tabelas de páginas maiores e com maior custo de gerência. III. Ela não afeta a memória paginada, apenas as partições e os segmentos. Assinale a sequência correta.",
          opcoes: [
            "F, V, V",
            "V, F, F",
            "F, F, V",
            "V, V, F"
          ],
          correta: 3,
          explicacao: "A fragmentação interna afeta todas as formas de organização de memória e, na memória paginada, não é possível decidir o nível de arredondamento."
        },
        {
          categoria: "Alocador Buddy",
          pergunta: "Qual é a ordem correta dos passos do alocador Buddy binário ao liberar um bloco de memória? (1) O alocador verifica se o par (buddy) do bloco liberado também está livre. (2) O alocador funde os dois blocos em um bloco maior. (3) O alocador analisa o novo bloco em relação ao seu par e continua as fusões. (4) O bloco alocado é liberado.",
          opcoes: [
            "1, 4, 2, 3",
            "4, 1, 2, 3",
            "4, 2, 1, 3",
            "4, 1, 3, 2"
          ],
          correta: 1,
          explicacao: "Depois de liberado o bloco, o alocador verifica o buddy, funde os dois se ambos estiverem livres e repete a análise com o novo bloco (coalescência)."
        },
        {
          categoria: "Estratégias de alocação",
          pergunta: "Texto de apoio: para minimizar a fragmentação externa, cada pedido de alocação pode ser analisado para encontrar a área livre que melhor o atenda. Pesquisas demonstraram que as abordagens mais eficientes são a best-fit e a first-fit, sendo esta última bem mais rápida. Julgue as afirmativas. I. O best-fit escolhe a menor área possível que possa receber a alocação, mas algumas áreas livres podem ficar pequenas demais e inúteis. II. O worst-fit escolhe sempre a menor área livre possível. III. O next-fit é uma variante do first-fit, que percorre a lista de áreas a partir da última área alocada ou liberada.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 2,
          explicacao: "O worst-fit escolhe sempre a maior área livre possível, para que a sobra seja grande o bastante para outras alocações."
        }
      ]
    },
    {
      titulo: "Aplicação",
      perguntas: [
        {
          categoria: "Alocação no espaço de usuário",
          pergunta: "Sobre a alocação de memória no espaço de usuário, julgue as afirmativas. I. A gerência da seção HEAP fica usualmente a cargo de bibliotecas de sistema, como a LibC, que oferecem funções como malloc e free. II. As implementações mais simples de alocadores de usuário usam a estratégia worst-fit. III. DLmalloc e PTmalloc, usadas nos sistemas GNU/Linux, usam diversas técnicas para evitar a fragmentação e agilizar a alocação de blocos.",
          opcoes: [
            "I e II, apenas",
            "I e III, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 1,
          explicacao: "As implementações mais simples seguem o esquema da alocação básica com a estratégia best-fit, e não worst-fit."
        },
        {
          categoria: "Alocador Slab",
          pergunta: "Qual é a ordem correta dos eventos no alocador Slab, desde a liberação de um objeto até a devolução de memória ao alocador físico? (1) O objeto é marcado como livre. (2) Todos os objetos do slab ficam livres e ele é marcado como vazio. (3) O alocador descarta o slab vazio, liberando suas áreas junto ao alocador de memória física. (4) O sistema precisa liberar memória para outros usos.",
          opcoes: [
            "1, 2, 4, 3",
            "1, 4, 2, 3",
            "4, 1, 2, 3",
            "1, 2, 3, 4"
          ],
          correta: 0,
          explicacao: "O objeto liberado é marcado como livre, o slab sem objetos em uso fica vazio e, se o sistema precisar de memória, os slabs vazios são descartados."
        },
        {
          categoria: "Exemplo do alocador Buddy",
          pergunta: "Texto de apoio: no exemplo do capítulo, o alocador Buddy binário gerencia 1 MByte (1.024 KBytes), com o menor bloco alocável de 64 KBytes, e recebe a sequência: aloca 200 KB (a1), aloca 100 KB (a2), aloca 150 KB (a3), libera a1 e libera a2. Os blocos têm sempre tamanho 2ⁿ. Julgue as afirmativas. I. A requisição a1 recebe um bloco de 512 KBytes. II. A requisição a2 recebe um bloco de 128 KBytes. III. A requisição a3 recebe um bloco de 256 KBytes.",
          opcoes: [
            "I e II, apenas",
            "I e III, apenas",
            "I, II e III",
            "II e III, apenas"
          ],
          correta: 3,
          explicacao: "O menor bloco 2ⁿ que comporta 200 KB é de 256 KB, o de 100 KB é de 128 KB e o de 150 KB é de 256 KB."
        },
        {
          categoria: "Fragmentação e estratégias",
          pergunta: "Sobre a fragmentação e as estratégias de alocação, julgue as afirmativas. I. Pesquisas indicam que as abordagens mais eficientes são a best-fit e a first-fit, esta última bem mais rápida. II. A desfragmentação é tratada como um problema de otimização combinatória, e no exemplo do capítulo as três soluções produzem o mesmo resultado, uma área livre contínua de 450 MB. III. Arredondar uma requisição de 80 MB para 100 MB evita um fragmento livre de 20 MB, mas gera fragmentação interna.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III",
            "I e III, apenas"
          ],
          correta: 2,
          explicacao: "As três afirmativas descrevem corretamente a eficiência do best-fit e do first-fit, a desfragmentação como otimização combinatória e a fragmentação interna por arredondamento."
        },
        {
          categoria: "Fragmentação externa",
          pergunta: "Texto de apoio: após uma sequência de alocações e liberações, o sistema do exemplo ainda tem 600 MB de memória livre, mas somente requisições de até 300 MB podem ser aceitas, pois esse é o tamanho da maior área livre contínua disponível. Julgue as afirmativas. I. O fenômeno descrito é a fragmentação externa. II. Uma requisição de 400 MB não poderia ser atendida. III. A fragmentação externa não influencia o esforço de gerência da memória livre.",
          opcoes: [
            "I e II, apenas",
            "I e III, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 0,
          explicacao: "Quanto mais fragmentada a memória livre, maior o esforço para gerenciá-la, pois mais longas são as listas encadeadas de áreas livres."
        },
        {
          categoria: "Sequência do alocador Buddy",
          pergunta: "No exemplo do alocador Buddy do capítulo, as requisições são: aloca 200 KB (a1), aloca 100 KB (a2), aloca 150 KB (a3), libera a1 e libera a2. Qual é a ordem em que os eventos abaixo ocorrem? (1) libera a1. (2) aloca 150 KB (a3). (3) aloca 200 KB (a1). (4) libera a2. (5) aloca 100 KB (a2).",
          opcoes: [
            "3, 2, 5, 1, 4",
            "3, 5, 2, 1, 4",
            "5, 3, 2, 1, 4",
            "3, 5, 2, 4, 1"
          ],
          correta: 1,
          explicacao: "As alocações ocorrem na ordem a1, a2 e a3, e depois são liberadas primeiro a1 e em seguida a2."
        },
        {
          categoria: "Memory pool",
          pergunta: "Texto de apoio: uma técnica muito usada em sistemas de tempo real é o memory pool (reserva de memória). Nessa técnica, um conjunto de blocos de mesmo tamanho é pré-alocado, constituindo um pool. A aplicação pode obter e liberar blocos desse pool com rapidez, pois o alocador só precisa registrar quais blocos estão livres ou ocupados. Julgue as afirmativas. I. O pool é formado por blocos de mesmo tamanho, pré-alocados. II. O alocador precisa percorrer listas de áreas livres de tamanhos diferentes e fundir fragmentos a cada liberação. III. O memory pool é muito usado em sistemas de tempo real.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III",
            "I e III, apenas"
          ],
          correta: 3,
          explicacao: "Como os blocos do pool têm o mesmo tamanho, o alocador só precisa registrar quais estão livres ou ocupados, o que torna o acesso rápido."
        }
      ]
    }
  ]
});
