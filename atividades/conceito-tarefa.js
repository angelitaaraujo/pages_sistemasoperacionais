JOGO2.registrar({
  id: "conceito-tarefa",
  titulo: "O Conceito de Tarefa",
  disciplina: "Sistemas Operacionais",
  descricao: "Revise o conceito de tarefa, a gerência do processador e o ciclo de vida dos processos.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>O conceito de tarefa</h3>
    <p>Uma <strong>tarefa</strong>, ou processo, é um programa em execução. O sistema operacional gerencia as tarefas e alterna seu uso do processador de forma justa e eficiente.</p>
    <h3>Objetivos da gerência de tarefas</h3>
    <ul>
      <li><strong>Multiplexar o processador:</strong> permitir que várias tarefas compartilhem a CPU.</li>
      <li><strong>Abstrair o processador:</strong> livrar o programador de controlar diretamente o tempo de uso da CPU.</li>
    </ul>
    <h3>Modelos de gerência</h3>
    <ul>
      <li><strong>Monotarefa:</strong> apenas uma tarefa executa por vez.</li>
      <li><strong>Monitor de sistema:</strong> programa residente que intercala trabalhos de usuários e rotinas de manutenção.</li>
      <li><strong>Multitarefa cooperativa:</strong> cada tarefa cede voluntariamente o processador.</li>
      <li><strong>Multitarefa preemptiva:</strong> o núcleo interrompe uma tarefa para entregar a CPU a outra.</li>
    </ul>
    <h3>Ciclo de vida</h3>
    <p>Uma tarefa pode estar nos estados Entrada, Pronto, Executando, Suspenso e Término. Transições comuns incluem Entrada → Pronto, Pronto → Executando, Executando → Suspenso e Suspenso → Pronto.</p>
  `,
  fases: [
    {
      titulo: "Conceito e objetivos da tarefa",
      perguntas: [
        {
          categoria: "Conceito de tarefa",
          pergunta: "O que é uma tarefa no contexto de sistemas operacionais?",
          opcoes: ["Um arquivo armazenado em disco", "A unidade de trabalho que representa a execução de um programa", "O código-fonte do núcleo", "Um dispositivo de hardware"],
          correta: 1,
          explicacao: "Uma tarefa ou processo representa um programa em execução, com código, dados e contexto de execução."
        },
        {
          categoria: "Objetivos",
          pergunta: "Um dos principais objetivos do sistema operacional ao gerenciar tarefas é:",
          opcoes: ["Manter todas as tarefas em modo núcleo", "Impedir aplicações de usar o processador", "Multiplexar o processador e abstrair seu uso", "Executar cada tarefa em uma CPU física diferente"],
          correta: 2,
          explicacao: "O SO compartilha o processador entre tarefas e abstrai esse gerenciamento para as aplicações."
        },
        {
          categoria: "Abstração",
          pergunta: "A abstração do processador oferecida pelo SO tem como objetivo principal:",
          opcoes: ["Fazer o programador controlar cada ciclo da CPU", "Eliminar a necessidade de memória RAM", "Liberar o programador do gerenciamento do tempo de CPU", "Substituir chamadas de sistema"],
          correta: 2,
          explicacao: "A abstração permite que o programador não precise controlar diretamente o compartilhamento do processador."
        },
        {
          categoria: "Monotarefa",
          pergunta: "Um leitor de MP3 simples que executa uma única tarefa por vez é exemplo de sistema:",
          opcoes: ["Multitarefa", "De tempo compartilhado", "Monotarefa", "Distribuído"],
          correta: 2,
          explicacao: "Sistemas monotarefa executam apenas uma tarefa por vez, ocupando os recursos da máquina."
        },
        {
          categoria: "Abstração",
          pergunta: "A sensação de que cada tarefa possui seu próprio processador caracteriza:",
          opcoes: ["Separação entre política e mecanismo", "Abstração do processador", "Prioridade de tarefas", "Comunicação entre tarefas"],
          correta: 1,
          explicacao: "A abstração do processador cria a impressão de que cada tarefa dispõe exclusivamente da CPU."
        }
      ]
    },
    {
      titulo: "Gerência de tarefas",
      perguntas: [
        {
          categoria: "Sistema monotarefa",
          pergunta: "Em um sistema monotarefa, as tarefas executam-se:",
          opcoes: ["Uma após a outra, usando todo o sistema", "Em paralelo em múltiplos processadores", "Concorrentemente em interfaces sincronizadas", "Somente em modo núcleo"],
          correta: 0,
          explicacao: "Em sistemas monotarefa, apenas uma tarefa executa por vez e ocupa os recursos disponíveis."
        },
        {
          categoria: "Monitor de sistema",
          pergunta: "Na história dos sistemas operacionais, o monitor de sistema era:",
          opcoes: ["Um sensor de temperatura da CPU", "Um programa residente que intercala trabalhos e rotinas de manutenção", "Um antivírus para mainframes", "Um hardware de monitoramento de rede"],
          correta: 1,
          explicacao: "O monitor de sistema permanecia na memória e organizava a execução sequencial de trabalhos e rotinas de manutenção."
        },
        {
          categoria: "Multitarefa cooperativa",
          pergunta: "Em um sistema multitarefa cooperativo, a alternância entre tarefas ocorre quando:",
          opcoes: ["O núcleo interrompe tarefas a cada quantum", "Cada tarefa cede voluntariamente o processador", "Um dispositivo externo escolhe a tarefa", "Não há alternância possível"],
          correta: 1,
          explicacao: "No modelo cooperativo, as próprias tarefas devem ceder a CPU; uma tarefa mal-comportada pode bloquear o sistema."
        },
        {
          categoria: "Multitarefa preemptiva",
          pergunta: "No tempo compartilhado preemptivo, o núcleo interrompe a tarefa em execução para:",
          opcoes: ["Entregar a CPU a outra tarefa antes da monopolização", "Esperar o encerramento completo da tarefa", "Atender apenas ao fim do expediente", "Remover toda tarefa da memória"],
          correta: 0,
          explicacao: "A preempção usa um quantum de tempo para impedir que uma tarefa monopolize o processador."
        },
        {
          categoria: "Escalonamento",
          pergunta: "Nos sistemas multitarefa preemptivos, quem define qual tarefa executa e por quanto tempo?",
          opcoes: ["O programador da aplicação", "O usuário final", "O núcleo do sistema operacional, por meio do escalonador", "O controlador de disco"],
          correta: 2,
          explicacao: "O escalonador, parte do núcleo do sistema operacional, controla a escolha e o tempo de execução das tarefas."
        }
      ]
    },
    {
      titulo: "Ciclo de vida das tarefas",
      perguntas: [
        {
          categoria: "Estados da tarefa",
          pergunta: "Uma tarefa pronta para executar, mas aguardando o processador, está no estado:",
          opcoes: ["Executando", "Suspenso", "Pronto", "Término"],
          correta: 2,
          explicacao: "No estado Pronto, a tarefa pode executar, mas ainda aguarda a escolha do escalonador."
        },
        {
          categoria: "Estados da tarefa",
          pergunta: "A transição Executando → Suspenso geralmente ocorre quando:",
          opcoes: ["A tarefa termina", "A tarefa cede voluntariamente a CPU", "A tarefa solicita uma operação de entrada e saída", "O quantum expira"],
          correta: 2,
          explicacao: "Ao solicitar uma operação de E/S, a tarefa aguarda o evento e fica suspensa, liberando a CPU."
        },
        {
          categoria: "Estados da tarefa",
          pergunta: "A transição Suspenso → Pronto ocorre quando:",
          opcoes: ["A tarefa é encerrada", "O evento aguardado, como uma operação de E/S, termina", "O núcleo remove a tarefa da memória", "A tarefa sofre uma falha de compilação"],
          correta: 1,
          explicacao: "Quando o evento aguardado termina, o SO coloca a tarefa de volta na fila de prontas."
        },
        {
          categoria: "Estados da tarefa",
          pergunta: "Na sequência Entrada → Pronto → Executando → Suspenso → Pronto → Executando → Término, o estado final é:",
          opcoes: ["Executando", "Suspenso", "Término", "Entrada"],
          correta: 2,
          explicacao: "A sequência termina em Término, quando a tarefa encerra sua execução e libera os recursos."
        },
        {
          categoria: "Escalonamento",
          pergunta: "A transição Pronto → Executando é responsabilidade de:",
          opcoes: ["Usuário no terminal", "Escalonador ou despachante do sistema", "Da própria tarefa", "Driver de disco"],
          correta: 1,
          explicacao: "O escalonador escolhe uma tarefa da fila de prontas e entrega a ela o processador."
        }
      ]
    }
  ]
});
