JOGO2.registrar({
  id: "hardware-es",
  titulo: "Hardware de Entrada/Saída",
  disciplina: "🔌 Entrada e Saída",
  descricao: "Atividade de estudo e revisão do capítulo 19: componentes de um dispositivo, barramentos, interface de acesso e portas, endereçamento de portas, interrupções e exceções.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Componentes de um dispositivo</h3>
    <p>Na entrada de dados, um sensor converte uma informação externa em sinal elétrico analógico, que passa por um conversor analógico-digital (CAD); a informação digital fica em um buffer, acessado pelo processador através de um controlador de entrada. Na saída, os dados vão a um controlador de saída, ficam em um buffer, passam por um conversor digital-analógico (CDA) e chegam a um atuador. Sensores e atuadores são transdutores. Dispositivos complexos têm um processador interno que executa o firmware, código do fabricante independente do sistema operacional.</p>

    <h3>Barramentos de acesso</h3>
    <p>Em um desktop moderno, dois controladores do chipset controlam os barramentos: a north bridge, ligada diretamente ao processador, cuida da RAM e dos dispositivos de alta velocidade (como AGP e PCI-Express); a south bridge cuida das portas de baixa ou média velocidade (seriais, paralelas, PCI padrão, USB e SATA) e integra o controlador de interrupções, o DMA, os temporizadores, o relógio de tempo real, o controle de energia e o acesso à BIOS. A velocidade dos dispositivos vai de poucos bytes por segundo, como o teclado, a gigabytes por segundo.</p>

    <h3>Interface de acesso e portas</h3>
    <p>Cada dispositivo oferece registradores, chamados portas de entrada/saída, para a comunicação com o processador: portas de entrada (escritas pelo dispositivo e lidas pelo processador), de saída (escritas pelo processador e lidas pelo dispositivo), de status (escritas pelo dispositivo e lidas pelo processador, para consultar o estado) e de controle (escritas pelo processador, para enviar comandos ou configurar). A interface paralela padrão (SPP) é um exemplo: P0 é a porta de dados, P1 a de status e P2 a de controle.</p>

    <h3>Endereçamento de portas</h3>
    <p>Na E/S mapeada em portas, o processador usa instruções específicas (IN e OUT nos processadores Intel) e um espaço de endereços de E/S independente da memória principal, distinguido pela linha IO/M do barramento de controle. Na E/S mapeada em memória, uma parte livre do espaço de endereços de memória é reservada para as portas, que são acessadas pelas mesmas instruções usadas para a memória. O IBM-PC usa uma abordagem híbrida para certos dispositivos. Há ainda hardware independente com processador dedicado, como os canais de E/S dos mainframes e as GPUs.</p>

    <h3>Interrupções e exceções</h3>
    <p>Quando o controlador precisa avisar o processador de um evento, envia uma requisição de interrupção (IRq). O processador salva seu estado, desvia para a rotina de tratamento da interrupção (cujo endereço está na Tabela de Interrupções), executa-a rapidamente e retoma o fluxo interrompido. As exceções, como divisão por zero e falta de página, usam o mesmo mecanismo. As interrupções passam por um controlador de interrupções programável (PIC ou APIC), que as encaminha em sequência, pode bloqueá-las e define prioridades. As interrupções tornam a E/S assíncrona e evitam que o processador consulte os dispositivos o tempo todo.</p>
  `,
  fases: [
    {
      titulo: "Fundamentos",
      perguntas: [
        {
          categoria: "Componentes de um dispositivo",
          pergunta: "Qual afirmação sobre os componentes de um dispositivo de entrada/saída é verdadeira?",
          opcoes: [
            "O sensor converte um sinal digital em um sinal elétrico analógico",
            "O conversor digital-analógico (CDA) é usado na entrada de dados, logo após o sensor",
            "O firmware de um dispositivo depende do sistema operacional do computador",
            "Na entrada, o sinal analógico do sensor passa por um conversor analógico-digital (CAD), e a informação digital fica em um buffer acessado pelo processador por meio de um controlador de entrada"
          ],
          correta: 3,
          explicacao: "Na entrada de dados, o sensor gera um sinal analógico que o CAD transforma em bits, guardados em um buffer acessível ao processador via controlador de entrada."
        },
        {
          categoria: "Sensores, atuadores e firmware",
          pergunta: "Sobre sensores, atuadores e firmware, assinale a alternativa INCORRETA.",
          opcoes: [
            "Sensores e atuadores são dispositivos transdutores, pois transformam energia externa em sinais elétricos, ou vice-versa",
            "O firmware é um código criado pelo fabricante do dispositivo, mas depende do sistema operacional do computador",
            "Dispositivos complexos, como discos rígidos, placas de rede e placas gráficas, possuem um processador ou microcontrolador interno",
            "Um disco rígido combina funcionalidades de entrada e de saída"
          ],
          correta: 1,
          explicacao: "O código do firmware é independente do sistema operacional do computador e contém as instruções para operar o hardware do dispositivo."
        },
        {
          categoria: "North bridge e south bridge",
          pergunta: "Sobre os controladores de barramento do chipset, julgue as afirmativas. I. A north bridge é conectada diretamente ao processador e é responsável pelo acesso à RAM e aos dispositivos de alta velocidade, como o PCI-Express. II. A south bridge controla barramentos de alta velocidade, como o AGP e o PCI-Express. III. A north bridge integra o controlador DMA e os temporizadores do sistema. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "F, V, V",
            "V, F, F",
            "F, F, V"
          ],
          correta: 2,
          explicacao: "A south bridge cuida das portas de baixa ou média velocidade e integra o DMA e os temporizadores; os barramentos de alta velocidade ficam na north bridge."
        },
        {
          categoria: "Portas de um dispositivo",
          pergunta: "Qual afirmação sobre as portas da interface de acesso de um dispositivo de entrada/saída é verdadeira?",
          opcoes: [
            "As portas de status são escritas pelo dispositivo e lidas pelo processador, para consultar o estado interno do dispositivo",
            "As portas de entrada são escritas pelo processador e lidas pelo dispositivo",
            "As portas de controle são escritas pelo dispositivo e lidas pelo processador",
            "As portas de saída são usadas pelo processador para receber dados do dispositivo"
          ],
          correta: 0,
          explicacao: "As portas de status são escritas pelo dispositivo e lidas pelo processador, que as usa para consultar o estado ou verificar se uma operação ocorreu sem erro."
        },
        {
          categoria: "Velocidade dos dispositivos",
          pergunta: "Sobre as velocidades típicas de transferência de dados de dispositivos, assinale a alternativa INCORRETA.",
          opcoes: [
            "Um teclado transfere cerca de 10 B/s e um mouse ótico, cerca de 100 B/s",
            "Uma interface de rede Gigabit Ethernet transfere cerca de 116 MB/s",
            "A interface SATA 3, de um disco rígido, transfere cerca de 600 MB/s",
            "A interface PCI Express, usada por GPUs e SSDs NVME, transfere cerca de 32 MB/s"
          ],
          correta: 3,
          explicacao: "A interface PCI Express transfere cerca de 32 GB/s, a mais rápida entre os dispositivos citados na tabela de velocidades."
        }
      ]
    },
    {
      titulo: "Mecanismos",
      perguntas: [
        {
          categoria: "Endereçamento de portas",
          pergunta: "Qual afirmação sobre o endereçamento de portas de entrada/saída é verdadeira?",
          opcoes: [
            "Na E/S mapeada em memória, são necessárias instruções específicas, como IN e OUT",
            "Na E/S mapeada em portas, o processador usa instruções específicas, como IN e OUT nos processadores Intel, e um espaço de endereços de E/S independente da memória principal",
            "Na E/S mapeada em portas, o endereço de porta 001Fh e o endereço de memória 001Fh apontam para a mesma informação",
            "O IBM-PC padrão mapeia todas as portas, de controle, status e dados, apenas no espaço de endereços de E/S"
          ],
          correta: 1,
          explicacao: "Na E/S mapeada em portas, o espaço de endereços de E/S é independente da memória principal, e o acesso é feito com instruções específicas como IN e OUT."
        },
        {
          categoria: "E/S mapeada em memória",
          pergunta: "Sobre as formas de endereçamento de portas, julgue as afirmativas. I. Na E/S mapeada em memória, uma parte não ocupada do espaço de endereços de memória é reservada para mapear as portas dos dispositivos. II. Na abordagem híbrida do IBM-PC, as portas de controle e status são mapeadas no espaço de E/S e as portas de dados, em memória. III. Na E/S mapeada em portas, o espaço de endereços de E/S compartilha os mesmos endereços da memória principal. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "F, V, V",
            "V, F, F",
            "F, F, V"
          ],
          correta: 0,
          explicacao: "A E/S mapeada em portas usa um espaço de endereços independente da memória principal, e a linha IO/M do barramento de controle distingue os dois tipos de endereço."
        },
        {
          categoria: "Tratamento de interrupção",
          pergunta: "Qual é a ordem correta dos eventos no tratamento de uma interrupção do teclado? (1) O controlador do teclado guarda o código da tecla em um buffer e envia uma requisição de interrupção. (2) O processador salva seu estado na pilha e desvia a execução para a rotina de tratamento. (3) O usuário pressiona uma tecla. (4) A rotina transfere o conteúdo do buffer do controlador para uma área de memória do núcleo. (5) O processador retorna ao fluxo de instruções que havia sido interrompido.",
          opcoes: [
            "3, 2, 1, 4, 5",
            "1, 3, 2, 4, 5",
            "3, 1, 2, 4, 5",
            "3, 1, 2, 5, 4"
          ],
          correta: 2,
          explicacao: "Depois da tecla pressionada e da interrupção, o processador salva o estado, executa a rotina de tratamento e só então retoma o fluxo interrompido."
        },
        {
          categoria: "Controlador de interrupções",
          pergunta: "Texto de apoio: as interrupções geradas pelos dispositivos são transmitidas a um controlador de interrupções programável (PIC ou APIC), parte do chipset, que as encaminha ao processador em sequência, uma a uma. Ao receber uma interrupção, o processador acessa a interface do PIC para identificar a origem e reconhecê-la. Interrupções já ocorridas, mas ainda não reconhecidas pelo processador, são chamadas de pendentes. Julgue as afirmativas. I. O PIC encaminha as interrupções ao processador em sequência. II. O processador reconhece a interrupção ao informar ao PIC que ela foi tratada. III. Interrupções pendentes são as que já foram reconhecidas pelo processador.",
          opcoes: [
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III",
            "I e II, apenas"
          ],
          correta: 3,
          explicacao: "Interrupções pendentes são as que já ocorreram, mas ainda não foram reconhecidas pelo processador."
        },
        {
          categoria: "Vantagem das interrupções",
          pergunta: "Por que o mecanismo de interrupção torna eficiente a interação do processador com os dispositivos periféricos?",
          opcoes: [
            "Porque elimina a necessidade de portas de status nos controladores",
            "Porque, sem interrupções, o processador perderia muito tempo consultando todos os dispositivos, e com elas a entrada/saída pode ser assíncrona",
            "Porque as rotinas de tratamento podem demorar o quanto for preciso, sem afetar o restante do sistema",
            "Porque o processador passa a tratar as interrupções sem nunca salvar seu estado"
          ],
          correta: 1,
          explicacao: "Com as interrupções, o processador não precisa esperar a conclusão das operações nem consultar os dispositivos, pois o dispositivo o avisa quando termina."
        },
        {
          categoria: "Rotinas de tratamento",
          pergunta: "Sobre o tratamento de interrupções, julgue as afirmativas. I. As rotinas de tratamento podem ser demoradas, pois ocorrem poucas interrupções por segundo. II. Cada entrada da Tabela de Interrupções contém o endereço da rotina de tratamento da interrupção correspondente. III. Cada requisição de interrupção deve disparar uma rotina de tratamento específica, pois os dispositivos são diferentes. Assinale a sequência correta.",
          opcoes: [
            "F, V, V",
            "V, V, F",
            "V, F, F",
            "F, F, V"
          ],
          correta: 0,
          explicacao: "Podem ocorrer centenas ou milhares de interrupções por segundo, por isso as rotinas de tratamento devem ser rápidas."
        },
        {
          categoria: "Interface paralela",
          pergunta: "Qual é a ordem correta dos eventos no controlador da interface paralela ao receber um dado? (1) O controlador lê o dado na porta P0. (2) O controlador gera um pulso em P1.ack. (3) Um pulso de P2.strobe informa que há um dado disponível em P0. (4) P1.busy passa a 0, informando que o controlador está ocupado. (5) P1.busy passa a 1, informando que o controlador está livre.",
          opcoes: [
            "3, 1, 4, 2, 5",
            "4, 3, 1, 2, 5",
            "3, 4, 1, 2, 5",
            "3, 4, 2, 1, 5"
          ],
          correta: 2,
          explicacao: "O controlador reage ao strobe, marca-se ocupado, lê o dado, confirma com o pulso ack e, ao final, informa que está livre."
        },
        {
          categoria: "North bridge e south bridge",
          pergunta: "Texto de apoio: a north bridge, diretamente conectada ao processador, é responsável pelo acesso à RAM e aos dispositivos de alta velocidade. A south bridge controla os barramentos e portas de baixa ou média velocidade, como as interfaces seriais e paralelas, o PCI padrão, o USB e o SATA, e integra componentes como controladores de áudio e rede on-board, controlador de interrupções, DMA, temporizadores, relógio de tempo real e acesso à BIOS. Julgue as afirmativas. I. A south bridge controla os barramentos USB e SATA. II. Os temporizadores que geram as interrupções de tempo usadas pelo escalonador ficam na north bridge. III. O relógio de tempo real faz parte da south bridge.",
          opcoes: [
            "I e II, apenas",
            "I e III, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 1,
          explicacao: "Os temporizadores, assim como o relógio de tempo real, são integrados à south bridge, e não à north bridge."
        }
      ]
    },
    {
      titulo: "Aplicação",
      perguntas: [
        {
          categoria: "Exceções",
          pergunta: "Sobre as exceções do processador, julgue as afirmativas. I. Exceções são eventos internos ao processador, como instruções inválidas e divisão por zero, que desviam a execução pelo mesmo mecanismo de interrupção. II. As rotinas de tratamento de exceção são registradas na tabela de interrupções. III. Na tabela de exceções dos processadores Intel x86 apresentada no capítulo, a exceção 14 corresponde ao erro de divisão por zero.",
          opcoes: [
            "I e III, apenas",
            "II e III, apenas",
            "I, II e III",
            "I e II, apenas"
          ],
          correta: 3,
          explicacao: "No Intel x86 a exceção 0 é o erro de divisão por zero, e a exceção 14 é a falta de página."
        },
        {
          categoria: "Saída de dados",
          pergunta: "Qual é a ordem correta dos eventos em uma saída de dados do processador para um dispositivo? (1) Os dados são armazenados em um buffer interno do controlador. (2) O processador envia os dados ao controlador de saída, pelo barramento. (3) Um conversor digital-analógico produz um sinal elétrico analógico. (4) Um atuador converte o sinal em efeitos físicos perceptíveis ao usuário.",
          opcoes: [
            "2, 1, 3, 4",
            "1, 2, 3, 4",
            "2, 3, 1, 4",
            "2, 1, 4, 3"
          ],
          correta: 0,
          explicacao: "Os dados chegam ao controlador de saída, ficam no buffer, são convertidos em sinal analógico pelo CDA e, por fim, usados pelo atuador."
        },
        {
          categoria: "Portas da interface paralela",
          pergunta: "Texto de apoio: na interface paralela padrão (SPP), a porta P1 é a porta de status: o bit paper_out em 1 indica falta de papel na impressora, o bit busy em 0 indica que o controlador está ocupado, e o bit select em 1 indica que a impressora está pronta. A porta P2 é a porta de controle, usada para configurar a interface e solicitar operações de saída ou entrada de dados. Julgue as afirmativas. I. O bit paper_out em 1 indica falta de papel na impressora. II. O bit busy em 0 indica que o controlador está livre. III. A porta P2 é usada para configurar a interface e solicitar operações de dados.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 2,
          explicacao: "O bit busy em 0 indica que o controlador está ocupado processando um comando, e não que está livre."
        },
        {
          categoria: "Controlador de interrupções",
          pergunta: "Sobre o controlador de interrupções programável (PIC), julgue as afirmativas. I. O PIC pode ser programado para bloquear ou ignorar algumas interrupções, impedindo que cheguem ao processador. II. O PIC permite definir prioridades entre as interrupções. III. Interrupções já ocorridas, mas ainda não reconhecidas pelo processador, são chamadas de pendentes.",
          opcoes: [
            "I e II, apenas",
            "I, II e III",
            "II e III, apenas",
            "I e III, apenas"
          ],
          correta: 1,
          explicacao: "O PIC, parte do chipset, bloqueia interrupções, define prioridades e mantém como pendentes as ainda não reconhecidas."
        },
        {
          categoria: "Canais de E/S e GPU",
          pergunta: "Texto de apoio: uma abordagem mais sofisticada para o controle de dispositivos é o uso de hardware independente, com processador dedicado, que se comunica com o processador principal por um barramento específico. Em mainframes, ela é denominada canais de entrada/saída (IO channels); em computadores pessoais, é usada em interfaces de vídeo ou áudio de alto desempenho, como as placas gráficas com aceleração, em que a GPU realiza a parte mais pesada do processamento da saída de vídeo. Julgue as afirmativas. I. Em mainframes, essa abordagem é denominada E/S mapeada em memória. II. Nas placas gráficas com aceleração, a GPU realiza a parte mais pesada do processamento da saída de vídeo. III. Essa abordagem usa um hardware independente, com processador dedicado, ligado ao processador principal por um barramento específico.",
          opcoes: [
            "II e III, apenas",
            "I e II, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 0,
          explicacao: "Em mainframes, a abordagem com hardware independente é chamada de canais de entrada/saída, e não de E/S mapeada em memória."
        },
        {
          categoria: "Entrada de dados",
          pergunta: "Qual é a ordem correta dos eventos em uma entrada de dados no computador? (1) Um sensor converte uma informação externa em sinal elétrico analógico. (2) A informação digital é armazenada em um buffer. (3) Um conversor analógico-digital transforma o sinal em informação digital. (4) O processador acessa o buffer por meio de um controlador de entrada.",
          opcoes: [
            "1, 2, 3, 4",
            "3, 1, 2, 4",
            "1, 3, 4, 2",
            "1, 3, 2, 4"
          ],
          correta: 3,
          explicacao: "O sensor gera o sinal analógico, o CAD o digitaliza, a informação fica no buffer e o processador a acessa pelo controlador de entrada."
        },
        {
          categoria: "Tabela de Interrupções",
          pergunta: "Texto de apoio: cada entrada da Tabela de Interrupções (IVT) contém o endereço da rotina de tratamento da interrupção correspondente; por exemplo, se a entrada 5 contém o valor 3C20h, a rotina de tratamento da IRq 5 inicia na posição 3C20h da memória RAM. Dependendo do hardware, a tabela pode residir em uma posição fixa da RAM, definida pelo fabricante do processador, ou ter sua posição indicada por um registrador da CPU. Julgue as afirmativas. I. A tabela de interrupções contém o código das rotinas de tratamento. II. A tabela pode residir em uma posição fixa da RAM, definida pelo fabricante do processador. III. Em algumas arquiteturas, a posição da tabela é indicada por um registrador da CPU.",
          opcoes: [
            "I e II, apenas",
            "I e III, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 2,
          explicacao: "A tabela contém os endereços das rotinas de tratamento, e não o código delas."
        }
      ]
    }
  ]
});
