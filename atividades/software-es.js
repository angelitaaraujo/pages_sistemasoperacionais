JOGO2.registrar({
  id: "software-es",
  titulo: "Software de Entrada/Saída",
  disciplina: "🔌 Entrada e Saída",
  descricao: "Atividade de estudo e revisão do capítulo 20: arquitetura em camadas, classes de dispositivos, drivers, estratégias de interação (polling, eventos e DMA) e tratamento de interrupções.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Arquitetura de software de entrada/saída</h3>
    <p>O código de E/S do sistema operacional é estruturado em camadas. Acima dos dispositivos físicos e dos controladores (incluindo os de DMA e de interrupções, no chipset), a primeira camada de software no núcleo são os drivers, que interagem diretamente com cada controlador. Acima deles fica a interface genérica de dispositivos (generic device interface), que trata dispositivos similares por famílias. Depois vêm as abstrações mais complexas, como sistemas de arquivos e protocolos de rede, e, no topo, as chamadas de sistema oferecidas às aplicações (arquivos, diretórios e sockets).</p>

    <h3>Classes de dispositivos</h3>
    <p>Nos sistemas UNIX, os dispositivos são agrupados em classes: orientados a caracteres (transferência byte a byte, em sequência, como teclado e mouse), orientados a blocos (blocos de tamanho fixo e endereçáveis, como discos rígidos, CD-ROMs e fitas), de rede (mensagens de tamanho variável, enviadas em sequência, como Ethernet e Wifi) e gráficos (com uma área de memória compartilhada, o frame buffer). Dispositivos que não se encaixam, como os de áudio, são tratados de formas diferentes: o Windows cria classes adicionais, e no Linux o áudio é acessado como dispositivo orientado a caracteres.</p>

    <h3>Drivers de dispositivos</h3>
    <p>Um driver é o componente do sistema operacional que interage com um controlador de dispositivo; cada tipo de dispositivo tem o seu, geralmente capaz de tratar um único tipo ou uma família de dispositivos correlatos do mesmo fabricante. Um driver tem três grupos de funções: de entrada/saída (transferência de dados), de gerência (inicialização, configuração, energia e erros, parte delas acessível por ioctl no UNIX e DeviceIoControl no Windows) e de tratamento de eventos (ativadas por uma interrupção). Os drivers executam no núcleo, em modo privilegiado, o que os torna um dos maiores riscos à estabilidade e à segurança do sistema.</p>

    <h3>Estratégias de interação</h3>
    <p>Na interação controlada por programa (varredura, polling ou PIO), o driver aguarda a conclusão monitorando continuamente a porta de status, o que causa espera ocupada e a torna pouco eficiente; é usada sobretudo em sistemas embarcados dedicados. Na interação controlada por eventos, o driver inicia a operação e suspende a tarefa, e uma interrupção avisa a conclusão. No acesso direto à memória (DMA), o processador informa ao controlador de DMA o endereço e o tamanho da área, e o controlador de DMA transfere os dados entre a RAM e o dispositivo, avisando o processador por uma interrupção ao final; é indicado para grandes volumes de dados.</p>

    <h3>Tratamento de interrupções</h3>
    <p>Durante uma rotina de tratamento é usual inibir novas interrupções, e por isso o tratamento deve ser muito rápido. A maioria dos sistemas usa dois níveis: o tratador primário (FLIH ou top-half) executa rapidamente, reconhece a interrupção, cria um descritor de evento, o insere na fila de eventos pendentes do driver e o notifica; o tratador secundário (SLIH ou bottom-half) trata os eventos pendentes, geralmente como uma thread de núcleo de alta prioridade. Isso reduz o risco de perder interrupções e permite remover eventos redundantes. No Linux são usados tasklets e workqueues; no Windows, ISR e DPC; no Solaris, FreeBSD e MacOS X, interrupt threads.</p>
  `,
  fases: [
    {
      titulo: "Fundamentos",
      perguntas: [
        {
          categoria: "Arquitetura em camadas",
          pergunta: "Qual afirmação sobre a arquitetura de software de entrada/saída do sistema operacional é verdadeira?",
          opcoes: [
            "Os drivers ficam acima da camada de interface genérica de dispositivos",
            "A primeira camada de software no núcleo corresponde aos drivers, que interagem diretamente com cada controlador",
            "As chamadas de sistema para arquivos e sockets ficam logo acima dos controladores de hardware",
            "A interface genérica de dispositivos existe para que cada dispositivo seja tratado individualmente, com suas peculiaridades"
          ],
          correta: 1,
          explicacao: "Os drivers são a primeira camada de software no núcleo, e a interface genérica, acima deles, esconde as peculiaridades de cada dispositivo."
        },
        {
          categoria: "Classes de dispositivos",
          pergunta: "Sobre as classes de dispositivos nos sistemas de padrão UNIX, assinale a alternativa INCORRETA.",
          opcoes: [
            "Dispositivos orientados a caracteres transferem os dados byte por byte, em sequência, e não é possível alterar um byte já enviado",
            "Dispositivos orientados a blocos usam blocos de bytes de tamanho fixo, lidos ou escritos em posições específicas, ou seja, endereçáveis",
            "Dispositivos de rede enviam e recebem mensagens de tamanho variável, de forma sequencial",
            "Dispositivos orientados a blocos transferem os dados byte por byte, em sequência, e não são endereçáveis"
          ],
          correta: 3,
          explicacao: "Os dispositivos orientados a blocos usam blocos de tamanho fixo e endereçáveis; a transferência byte por byte em sequência é dos orientados a caracteres."
        },
        {
          categoria: "Exemplos de classes",
          pergunta: "Sobre os exemplos de classes de dispositivos, julgue as afirmativas. I. Discos rígidos, CD-ROMs e fitas magnéticas são exemplos típicos de dispositivos orientados a blocos. II. Mouse e teclado são exemplos clássicos de dispositivos orientados a blocos. III. Interfaces Ethernet e Wifi são dispositivos orientados a caracteres. Assinale a sequência correta.",
          opcoes: [
            "V, F, F",
            "V, V, F",
            "F, V, V",
            "F, F, V"
          ],
          correta: 0,
          explicacao: "Mouse e teclado são dispositivos orientados a caracteres, e as interfaces Ethernet e Wifi são dispositivos de rede."
        },
        {
          categoria: "Drivers",
          pergunta: "Qual afirmação sobre os drivers de dispositivos é verdadeira?",
          opcoes: [
            "Um único driver genérico atende os dispositivos de todos os fabricantes de uma mesma classe",
            "Os drivers executam em modo usuário, sem acesso privilegiado ao hardware",
            "Um driver é o componente do sistema operacional que interage com um controlador de dispositivo, e é geralmente capaz de tratar um único tipo de dispositivo ou uma família de dispositivos correlatos do mesmo fabricante",
            "Drivers mal construídos raramente afetam a estabilidade do sistema, pois ficam isolados do núcleo"
          ],
          correta: 2,
          explicacao: "Cada tipo de dispositivo tem seu próprio driver, e como eles executam no núcleo, em modo privilegiado, são um dos maiores riscos à estabilidade do sistema."
        },
        {
          categoria: "Funções de um driver",
          pergunta: "Sobre as funções de um driver de dispositivo, assinale a alternativa INCORRETA.",
          opcoes: [
            "As funções de entrada/saída transferem dados entre o dispositivo e o sistema operacional, de acordo com a classe do dispositivo",
            "As funções de tratamento de eventos são ativadas quando um processo de usuário solicita uma operação de leitura",
            "As funções de gerência tratam da inicialização, da configuração, do desligamento ou espera do dispositivo e do tratamento de erros",
            "O driver mantém estruturas de dados locais com informações sobre o dispositivo e as operações em andamento"
          ],
          correta: 1,
          explicacao: "As funções de tratamento de eventos são ativadas quando o dispositivo gera uma requisição de interrupção, e não por uma solicitação do processo."
        }
      ]
    },
    {
      titulo: "Mecanismos",
      perguntas: [
        {
          categoria: "Interação controlada por programa",
          pergunta: "Qual afirmação sobre a entrada/saída controlada por programa (polling) é verdadeira?",
          opcoes: [
            "O driver suspende a tarefa e espera uma interrupção do dispositivo",
            "É a estratégia preferida nos sistemas operacionais de propósito geral",
            "Substituir o teste contínuo por um teste periódico aumenta a taxa de transferência de dados",
            "O driver monitora continuamente os bits da porta de status até a conclusão da operação, o que caracteriza espera ocupada e a torna pouco eficiente com dispositivos lentos"
          ],
          correta: 3,
          explicacao: "A espera ocupada desperdiça recursos do processador, por isso a estratégia é pouco usada em sistemas operacionais de propósito geral."
        },
        {
          categoria: "Interação controlada por eventos",
          pergunta: "Sobre a entrada/saída controlada por eventos, julgue as afirmativas. I. O driver monitora continuamente a porta de status até a conclusão da operação. II. Ao ocorrer a interrupção, a rotina de tratamento suspende a tarefa solicitante. III. Após iniciar a operação, o driver suspende a tarefa solicitante, liberando o processador para outras tarefas. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "V, F, F",
            "F, F, V",
            "F, V, V"
          ],
          correta: 2,
          explicacao: "Na estratégia por eventos, o driver suspende a tarefa ao iniciar a operação, e a rotina de tratamento da interrupção a acorda na conclusão."
        },
        {
          categoria: "Acesso direto à memória",
          pergunta: "Qual é a ordem correta dos passos da escrita de dados da RAM para o controlador de um disco rígido usando DMA? (1) O controlador de DMA solicita ao controlador do disco a transferência de dados. (2) O processador informa ao controlador de DMA o endereço inicial e o tamanho da área de memória. (3) O controlador de DMA notifica o processador sobre a conclusão, por uma requisição de interrupção. (4) O controlador do disco recebe os dados da memória.",
          opcoes: [
            "2, 1, 4, 3",
            "2, 4, 1, 3",
            "1, 2, 4, 3",
            "2, 1, 3, 4"
          ],
          correta: 0,
          explicacao: "Depois que o processador configura o controlador de DMA, ele fica livre para outras tarefas até ser avisado, por uma interrupção, do fim da transferência."
        },
        {
          categoria: "Acesso direto à memória",
          pergunta: "Texto de apoio: os mecanismos de acesso direto à memória (DMA) permitem transferências diretas entre a memória principal e os controladores de entrada/saída, liberando o processador para outras tarefas. Como a configuração de cada operação de DMA é complexa, para pequenas transferências de dados acaba sendo mais rápido e simples usar o processador principal. Julgue as afirmativas. I. O DMA libera o processador durante a transferência de grandes blocos de dados. II. Para pequenas transferências, o DMA é sempre mais rápido que o uso do processador. III. O DMA é usado sobretudo com dispositivos que produzem ou consomem grandes volumes de dados, como discos e interfaces de rede.",
          opcoes: [
            "I e II, apenas",
            "I e III, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 1,
          explicacao: "Como configurar o DMA é complexo, para pequenas transferências é mais rápido e simples usar o processador principal."
        },
        {
          categoria: "Tratador primário e secundário",
          pergunta: "Qual é a função do tratador primário (FLIH, ou top-half) no tratamento de interrupções em dois níveis?",
          opcoes: [
            "Tratar os eventos pendentes, executando como uma thread de núcleo de alta prioridade",
            "Executar com as demais interrupções habilitadas, para permitir tratadores aninhados",
            "Remover da fila os eventos redundantes e executar a lógica específica do dispositivo",
            "Executar rapidamente, com as demais interrupções desabilitadas, reconhecendo a interrupção, criando um descritor de evento, inserindo-o na fila de eventos pendentes do driver e notificando o driver"
          ],
          correta: 3,
          explicacao: "O tratador primário só reconhece a interrupção e registra o evento; o trabalho restante fica para o tratador secundário."
        },
        {
          categoria: "Inibição de interrupções",
          pergunta: "Sobre o tratamento de interrupções, julgue as afirmativas. I. Durante a execução de uma rotina de tratamento, é usual manter as interrupções habilitadas, para permitir tratadores aninhados. II. Manter as interrupções inibidas por muito tempo pode ocasionar perda de dados ou outros problemas. III. O tratador secundário geralmente é escalonado como uma thread de núcleo de alta prioridade. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "V, F, F",
            "F, V, V",
            "F, F, V"
          ],
          correta: 2,
          explicacao: "É usual inibir novas interrupções durante o tratamento, para evitar tratadores aninhados, que tornariam o código dos drivers mais complexo."
        },
        {
          categoria: "Dois níveis de tratamento",
          pergunta: "Qual é a ordem correta das ações no tratamento de uma interrupção em dois níveis? (1) O tratador secundário trata os eventos pendentes. (2) O tratador primário reconhece a interrupção junto ao controlador de interrupções. (3) O tratador primário cria um descritor de evento com os dados da interrupção. (4) O tratador primário insere o descritor na fila de eventos pendentes do driver e o notifica.",
          opcoes: [
            "2, 3, 4, 1",
            "2, 4, 3, 1",
            "3, 2, 4, 1",
            "2, 3, 1, 4"
          ],
          correta: 0,
          explicacao: "O tratador primário reconhece a interrupção e registra o evento na fila do driver; depois o tratador secundário processa os eventos pendentes."
        },
        {
          categoria: "Variante com buffer",
          pergunta: "Texto de apoio: na entrada/saída por eventos, a operação é dividida em um bloco que a inicia, ativado pelo driver a pedido de um processo, e uma rotina de tratamento de interrupção, ativada a cada interrupção para informar a conclusão da última operação. Em uma variante mais eficiente, o driver recebe um buffer com uma sequência de bytes: a rotina de tratamento avança a posição no buffer e envia o próximo byte, ou acorda a tarefa quando o buffer terminou. Julgue as afirmativas. I. O bloco que inicia a operação é ativado por uma interrupção do dispositivo. II. A rotina de tratamento é ativada a cada interrupção, para informar a conclusão da última operação. III. Na variante com buffer, a tarefa só é acordada quando o buffer termina.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 1,
          explicacao: "O bloco que inicia a operação é ativado pelo driver a pedido de um processo ou thread, e não por uma interrupção."
        }
      ]
    },
    {
      titulo: "Aplicação",
      perguntas: [
        {
          categoria: "Tratamento de interrupções nos sistemas",
          pergunta: "Sobre o tratamento de interrupções em sistemas operacionais reais, julgue as afirmativas. I. No Linux, cada interrupção tem sua própria fila de eventos pendentes e seus próprios top-half e bottom-half, e os tratadores secundários são lançados como tasklets ou workqueues. II. O núcleo Windows NT implementa o tratamento primário por rotinas de serviço de interrupção (ISR), que agendam o tratamento secundário por um procedimento postergado (DPC). III. Solaris, FreeBSD e MacOS X usam o mesmo esquema de dois níveis do Linux, sem interrupt threads.",
          opcoes: [
            "I e III, apenas",
            "II e III, apenas",
            "I e II, apenas",
            "I, II e III"
          ],
          correta: 2,
          explicacao: "Solaris, FreeBSD e MacOS X usam interrupt threads: cada interrupção lança uma thread de núcleo, escalonada de acordo com sua prioridade."
        },
        {
          categoria: "E/S controlada por eventos",
          pergunta: "Qual é a ordem correta dos eventos em uma operação de saída de um byte controlada por eventos? (1) A rotina de tratamento acorda a tarefa. (2) O driver inicia a transferência para o controlador. (3) O controlador gera uma requisição de interrupção ao concluir. (4) O driver suspende a tarefa solicitante.",
          opcoes: [
            "2, 4, 3, 1",
            "2, 3, 4, 1",
            "4, 2, 3, 1",
            "2, 4, 1, 3"
          ],
          correta: 0,
          explicacao: "O driver inicia a operação e suspende a tarefa; quando o controlador interrompe, a rotina de tratamento acorda a tarefa suspensa."
        },
        {
          categoria: "Dispositivos gráficos e áudio",
          pergunta: "Texto de apoio: os dispositivos gráficos têm interface genérica constituída por funções para consultar e configurar o dispositivo e uma área de memória compartilhada entre o processador e o dispositivo, o frame buffer, que permite acesso direto à memória de vídeo. Dispositivos que não se enquadram nas classes comuns são tratados de modos diferentes: alguns sistemas, como o Windows, criam classes adicionais; outros, como os UNIX, os enquadram nas famílias existentes. No Linux, os dispositivos de áudio são acessados como dispositivos orientados a caracteres. Julgue as afirmativas. I. O frame buffer é uma área de memória compartilhada entre o processador e o dispositivo gráfico. II. O Windows enquadra todos os dispositivos nas classes dos sistemas UNIX, sem criar classes adicionais. III. No Linux, os dispositivos de áudio são acessados como dispositivos orientados a caracteres.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III",
            "I e III, apenas"
          ],
          correta: 3,
          explicacao: "O Windows agrupa os dispositivos em um número maior de categorias, criando classes adicionais para os que não se enquadram."
        },
        {
          categoria: "Acesso direto à memória",
          pergunta: "Sobre o acesso direto à memória (DMA), julgue as afirmativas. I. A ativação do DMA é síncrona quando feita explicitamente pelo processador, provavelmente em decorrência de uma chamada de sistema. II. A ativação pode ser assíncrona, quando iniciada por um dispositivo que tem dados a transferir para a memória, como uma interface de rede ao receber dados. III. Nos computadores pessoais com barramento PCI há um controlador de DMA central, com vários canais de DMA.",
          opcoes: [
            "I e III, apenas",
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 1,
          explicacao: "Nos PCs com barramento PCI não há controlador de DMA central: cada controlador de dispositivo pode assumir o barramento para fazer suas transferências."
        },
        {
          categoria: "Polling periódico",
          pergunta: "Texto de apoio: a estratégia básica de varredura pode ser modificada, substituindo o teste contínuo do status do dispositivo por um teste periódico (por exemplo, a cada 1 ms), o que permite ao processador executar outras tarefas enquanto o dispositivo está ocupado. Essa abordagem implica em uma menor taxa de transferência de dados e só é usada em dispositivos com baixa vazão. A entrada/saída por programa se concentra em sistemas embarcados dedicados. Julgue as afirmativas. I. O teste periódico permite ao processador executar outras tarefas enquanto o dispositivo está ocupado. II. O teste periódico implica em uma menor taxa de transferência de dados. III. A entrada/saída por programa é usada sobretudo em sistemas embarcados dedicados.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III",
            "I e III, apenas"
          ],
          correta: 2,
          explicacao: "As três afirmativas descrevem corretamente o teste periódico e o uso da E/S por programa em sistemas embarcados dedicados."
        },
        {
          categoria: "Camadas de software",
          pergunta: "Qual é a ordem correta das camadas da arquitetura de software de E/S, da mais próxima do hardware para a mais próxima das aplicações? (1) Interface genérica de dispositivos. (2) Drivers de dispositivos. (3) Chamadas de sistema. (4) Controladores de dispositivos. (5) Sistemas de arquivos e protocolos de rede.",
          opcoes: [
            "4, 1, 2, 5, 3",
            "2, 4, 1, 5, 3",
            "4, 2, 5, 1, 3",
            "4, 2, 1, 5, 3"
          ],
          correta: 3,
          explicacao: "Dos controladores de hardware sobe-se pelos drivers, pela interface genérica e pelas abstrações, até as chamadas de sistema no topo."
        },
        {
          categoria: "Vantagens dos dois níveis",
          pergunta: "Texto de apoio: uma interface de rede gera uma interrupção ao receber um pacote, que fica em seu buffer interno, de capacidade limitada, e deve ser transferido para a memória principal antes que outros pacotes cheguem. A estrutura em dois níveis permite um tratamento mais rápido de cada interrupção, o que minimiza o risco de perder interrupções simultâneas, e a fila de eventos pendentes pode ser analisada para remover eventos redundantes, como atualizações consecutivas de posição do mouse. Julgue as afirmativas. I. O pacote deve ser transferido para a memória antes que outros pacotes cheguem, pois o buffer da interface tem capacidade limitada. II. O tratador secundário executa com as demais interrupções desabilitadas. III. A fila de eventos pendentes pode ser analisada para remover eventos redundantes.",
          opcoes: [
            "I e III, apenas",
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 0,
          explicacao: "Quem executa com as demais interrupções desabilitadas é o tratador primário, e não o secundário."
        }
      ]
    }
  ]
});
