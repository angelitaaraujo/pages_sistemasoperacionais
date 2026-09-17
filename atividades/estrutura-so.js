JOGO2.registrar({
  id: "estrutura-so",
  titulo: "Estrutura de um SO",
  disciplina: "Sistemas Operacionais",
  descricao: "Atividade de estudo e revisão do capítulo 2: elementos do sistema operacional, elementos de hardware (arquitetura, interrupções e níveis de privilégio) e chamadas de sistema.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Elementos do sistema operacional</h3>
    <ul>
      <li><strong>Kernel (núcleo):</strong> componente central do SO, sempre residente em memória, responsável pelas funções essenciais, como a gerência de tarefas, de memória e de dispositivos.</li>
      <li><strong>Código de inicialização (boot):</strong> carrega o kernel na memória quando o computador é ligado.</li>
      <li><strong>Drivers de dispositivos:</strong> módulos que controlam a comunicação com dispositivos de hardware específicos.</li>
      <li><strong>Programas utilitários:</strong> ferramentas de apoio aos usuários e administradores (gerenciadores de arquivos, editores etc.).</li>
    </ul>
    <h3>Elementos de hardware</h3>
    <ul>
      <li><strong>Arquitetura de von Neumann:</strong> o computador é formado por processador, memória e dispositivos de entrada e saída, interligados por barramentos (de dados, endereços e controle).</li>
      <li><strong>Memória cache:</strong> memória rápida situada entre o processador e a memória principal, usada para acelerar o acesso aos dados frequentemente utilizados.</li>
      <li><strong>MMU (Memory Management Unit):</strong> hardware responsável por traduzir os endereços virtuais das aplicações em endereços físicos da memória.</li>
      <li><strong>Controladores de dispositivos:</strong> interfaces que ligam o processador aos dispositivos de entrada e saída.</li>
    </ul>
    <h3>Interrupções e exceções</h3>
    <ul>
      <li><strong>Interrupção (IRQ):</strong> sinal gerado por um dispositivo de hardware para solicitar a atenção do processador (ex.: chegada de dados do teclado).</li>
      <li><strong>Exceção:</strong> situação gerada pela própria instrução em execução (ex.: divisão por zero, falha de página).</li>
      <li><strong>IVT (tabela de vetores de interrupção):</strong> tabela que armazena os endereços das rotinas de tratamento de cada interrupção.</li>
      <li><strong>Tratamento:</strong> o processador salva o contexto, identifica a causa, desvia para a rotina de tratamento, executa-a e, ao final, restaura o contexto e retoma a execução.</li>
    </ul>
    <h3>Níveis de privilégio</h3>
    <ul>
      <li><strong>Modo núcleo:</strong> acesso total aos recursos do hardware; é onde executam o kernel e os drivers.</li>
      <li><strong>Modo usuário:</strong> acesso restrito aos recursos; é onde executam as aplicações.</li>
      <li>Processadores Intel x86 possuem quatro níveis (anéis 0 a 3); sistemas como Linux e Windows usam apenas o anel 0 (núcleo) e o anel 3 (usuário).</li>
      <li>Instruções privilegiadas somente podem ser executadas em modo núcleo.</li>
    </ul>
    <h3>Chamadas de sistema (system calls)</h3>
    <ul>
      <li>Mecanismo pelo qual uma aplicação solicita serviços ao núcleo (ex.: ler um arquivo, criar uma tarefa, alocar memória).</li>
      <li>A aplicação prepara os parâmetros e executa uma instrução especial (trap/syscall), que transfere o controle ao núcleo.</li>
      <li>O núcleo valida os parâmetros, executa o serviço solicitado e retorna o resultado à aplicação.</li>
      <li>Funções de biblioteca, como <em>printf</em> e <em>malloc</em>, são interfaces de alto nível que podem acionar uma ou mais chamadas de sistema.</li>
    </ul>
  `,
  fases: [
    {
      titulo: "Elementos do SO e hardware",
      perguntas: [
        {
          categoria: "Elementos do SO",
          pergunta: "Qual é o componente central do sistema operacional, sempre residente em memória, responsável pelas funções essenciais do sistema?",
          opcoes: [
            "O kernel (núcleo)",
            "O código de boot",
            "O programa utilitário",
            "O editor de textos"
          ],
          correta: 0,
          explicacao: "O kernel (núcleo) é o componente central do SO, residente em memória, responsável pelas funções essenciais, como gerência de tarefas, memória e dispositivos."
        },
        {
          categoria: "Elementos do SO",
          pergunta: "Os drivers de dispositivos são módulos do sistema operacional responsáveis por:",
          opcoes: [
            "Carregar o kernel na memória ao ligar a máquina",
            "Auxiliar usuários e administradores em tarefas rotineiras",
            "Controlar a comunicação com um dispositivo de hardware específico",
            "Traduzir endereços virtuais em endereços físicos"
          ],
          correta: 2,
          explicacao: "Os drivers são módulos que controlam a comunicação com dispositivos de hardware específicos; a tradução de endereços é função da MMU."
        },
        {
          categoria: "Elementos do SO",
          pergunta: "Os programas utilitários de um sistema operacional têm como principal função:",
          opcoes: [
            "Executar as instruções do programa em modo núcleo",
            "Gerenciar as interrupções geradas pelos dispositivos",
            "Definir as políticas de escalonamento do processador",
            "Oferecer serviços básicos de apoio aos usuários e administradores"
          ],
          correta: 3,
          explicacao: "Os programas utilitários oferecem serviços básicos de apoio, como editores, gerenciadores de arquivos e ferramentas de administração."
        },
        {
          categoria: "Arquitetura de hardware",
          pergunta: "Na arquitetura de von Neumann, os três componentes essenciais do computador são:",
          opcoes: [
            "Cache, registradores e unidade de controle",
            "Processador, memória e dispositivos de entrada e saída",
            "Kernel, drivers e programas utilitários",
            "Barramento, placa-mãe e fonte de alimentação"
          ],
          correta: 1,
          explicacao: "Na arquitetura de von Neumann, o computador é formado por processador, memória e dispositivos de entrada e saída, interligados por barramentos."
        },
        {
          categoria: "Arquitetura de hardware",
          pergunta: "Os barramentos de um computador têm como função:",
          opcoes: [
            "Armazenar os arquivos abertos pela aplicação",
            "Traduzir os endereços virtuais em endereços físicos",
            "Interligar os componentes e permitir a troca de dados entre eles",
            "Definir a prioridade das tarefas em execução"
          ],
          correta: 2,
          explicacao: "Os barramentos (de dados, endereços e controle) interligam os componentes do computador e permitem a troca de dados entre eles."
        },
        {
          categoria: "Arquitetura de hardware",
          pergunta: "A memória cache é utilizada para:",
          opcoes: [
            "Ampliar a capacidade de armazenamento permanente do disco",
            "Acelerar o acesso do processador aos dados frequentemente utilizados",
            "Substituir a memória principal em sistemas embarcados",
            "Armazenar os endereços das rotinas de interrupção"
          ],
          correta: 1,
          explicacao: "A memória cache fica entre o processador e a memória principal, acelerando o acesso aos dados usados com frequência."
        }
      ]
    },
    {
      titulo: "Interrupções e níveis de privilégio",
      perguntas: [
        {
          categoria: "Interrupções e exceções",
          pergunta: "Uma interrupção (IRQ) é um sinal que:",
          opcoes: [
            "É gerado por um dispositivo de hardware para solicitar a atenção do processador",
            "É gerado pela aplicação para terminar sua execução",
            "Indica a ocorrência de um erro de sintaxe no programa",
            "É enviado pelo disco para ampliar a memória disponível"
          ],
          correta: 0,
          explicacao: "A interrupção é um sinal gerado por um dispositivo de hardware, como o teclado ou o disco, para solicitar a atenção do processador."
        },
        {
          categoria: "Interrupções e exceções",
          pergunta: "A principal diferença entre interrupção e exceção é que:",
          opcoes: [
            "As interrupções surgem de erros de programação, enquanto as exceções vêm dos dispositivos",
            "As interrupções são geradas pelo hardware externo, enquanto as exceções decorrem da instrução em execução",
            "As exceções são tratadas apenas no modo usuário",
            "As interrupções só ocorrem quando o sistema é iniciado"
          ],
          correta: 1,
          explicacao: "Interrupções são geradas por dispositivos externos; exceções são decorrentes da própria instrução em execução, como uma divisão por zero."
        },
        {
          categoria: "Interrupções e exceções",
          pergunta: "A tabela de vetores de interrupção (IVT) armazena:",
          opcoes: [
            "Os dados transferidos entre o processador e o disco",
            "As senhas dos usuários do sistema",
            "Os endereços das rotinas de tratamento das interrupções",
            "A lista de tarefas prontas para executar"
          ],
          correta: 2,
          explicacao: "A IVT armazena os endereços das rotinas de tratamento, permitindo ao processador desviar para a rotina correta de cada interrupção."
        },
        {
          categoria: "Interrupções e exceções",
          pergunta: "Durante o tratamento de uma interrupção, a sequência correta de ações é:",
          opcoes: [
            "Executar a rotina de tratamento antes de salvar o contexto",
            "Salvar o contexto, desviar para a rotina, executá-la e restaurar o contexto",
            "Restaurar o contexto, executar a rotina e desviar ao final",
            "Identificar a causa somente depois de restaurar o contexto"
          ],
          correta: 1,
          explicacao: "O processador salva o contexto atual, identifica a causa, desvia para a rotina de tratamento, executa-a e, ao final, restaura o contexto e retoma a execução."
        },
        {
          categoria: "Níveis de privilégio",
          pergunta: "No processador Intel x86, o nível mais privilegiado, usado pelo núcleo do sistema operacional, é:",
          opcoes: [
            "O anel (ring) 1",
            "O anel (ring) 3",
            "O anel (ring) 0",
            "O modo usuário de execução"
          ],
          correta: 2,
          explicacao: "Nos processadores x86, o anel 0 é o nível mais privilegiado, onde executa o núcleo; os sistemas Linux e Windows usam também o anel 3 para as aplicações."
        },
        {
          categoria: "Níveis de privilégio",
          pergunta: "As instruções privilegiadas, como as de gerência de memória e de dispositivos, somente podem ser executadas:",
          opcoes: [
            "Pelos programas utilitários do sistema",
            "Por qualquer tarefa do sistema",
            "Pelos programas de aplicação",
            "Pelo sistema operacional em modo núcleo"
          ],
          correta: 3,
          explicacao: "Instruções privilegiadas exigem o modo núcleo, pois manipulam recursos críticos que não podem ser acessados diretamente pelas aplicações."
        }
      ]
    },
    {
      titulo: "Chamadas de sistema",
      perguntas: [
        {
          categoria: "Chamadas de sistema",
          pergunta: "Uma chamada de sistema (system call) é o mecanismo pelo qual:",
          opcoes: [
            "O kernel solicita dados ao usuário",
            "As aplicações solicitam serviços ao núcleo do sistema operacional",
            "O hardware informa a ocorrência de um erro",
            "O usuário finaliza a sessão no sistema"
          ],
          correta: 1,
          explicacao: "A chamada de sistema é a interface entre as aplicações e o núcleo, permitindo solicitar serviços como leitura de arquivos e alocação de memória."
        },
        {
          categoria: "Chamadas de sistema",
          pergunta: "Quando uma aplicação em modo usuário precisa executar uma chamada de sistema, ela:",
          opcoes: [
            "Executa uma instrução especial que transfere o controle ao núcleo",
            "Acessa diretamente os registradores do processador",
            "Reinicia o sistema operacional",
            "Envia uma interrupção ao dispositivo desejado"
          ],
          correta: 0,
          explicacao: "A aplicação prepara os parâmetros e executa uma instrução especial (trap/syscall), que transfere o controle ao núcleo para executar o serviço."
        },
        {
          categoria: "Chamadas de sistema",
          pergunta: "Qual é o papel das funções de biblioteca, como printf e malloc, em relação ao núcleo?",
          opcoes: [
            "Elas executam diretamente as instruções privilegiadas",
            "Elas substituem o kernel do sistema operacional",
            "Elas definem as políticas de segurança do sistema",
            "Elas oferecem uma interface de alto nível que pode acionar chamadas de sistema"
          ],
          correta: 3,
          explicacao: "Funções de biblioteca são interfaces de alto nível que podem acionar uma ou mais chamadas de sistema para realizar o serviço desejado."
        },
        {
          categoria: "Chamadas de sistema",
          pergunta: "Em um sistema Linux, a operação de abrir um arquivo é realizada pelo programa de aplicação por meio:",
          opcoes: [
            "Da função de biblioteca printf()",
            "Da instrução privilegiada do kernel",
            "Da chamada de sistema open()",
            "Do utilitário de gerência de disco"
          ],
          correta: 2,
          explicacao: "Abrir um arquivo é realizado pela chamada de sistema open(); printf é uma função de biblioteca que aciona outras chamadas, como write()."
        },
        {
          categoria: "Chamadas de sistema",
          pergunta: "Após executar o serviço solicitado, o núcleo retorna à aplicação:",
          opcoes: [
            "O endereço da rotina de tratamento da interrupção",
            "O resultado da chamada de sistema e o controle da execução",
            "A tabela de vetores do sistema",
            "O contexto completo do processador"
          ],
          correta: 1,
          explicacao: "Ao concluir o serviço, o núcleo retorna o resultado da chamada e restitui o controle da execução à aplicação."
        },
        {
          categoria: "Chamadas de sistema",
          pergunta: "Qual é a sequência típica de execução de uma chamada de sistema?",
          opcoes: [
            "A aplicação executa o serviço diretamente no hardware",
            "O núcleo prepara os parâmetros e a aplicação executa o serviço",
            "O resultado retorna antes de o núcleo executar o serviço",
            "A aplicação prepara os parâmetros, o núcleo executa o serviço e retorna o resultado"
          ],
          correta: 3,
          explicacao: "A aplicação prepara os parâmetros e executa a chamada; o núcleo executa o serviço solicitado e, ao final, retorna o resultado à aplicação."
        }
      ]
    }
  ]
});