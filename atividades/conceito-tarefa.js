JOGO2.registrar({
  id: "conceito-tarefa",
  titulo: "O conceito de tarefa",
  disciplina: "🔲 Gerência de Processador",
  descricao: "Atividade de estudo e revisão do capítulo 4: o conceito de tarefa, objetivos do gerenciamento, sistemas monotarefa, monitor de sistema, multitarefa, tempo compartilhado e ciclo de vida das tarefas.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>O conceito de tarefa</h3>
    <p>Uma <strong>tarefa</strong> (ou processo) é a unidade básica de trabalho do sistema operacional, representando a execução de um programa. O SO é responsável por gerenciar todas as tarefas do sistema, alternando sua execução para compartilhar o processador de maneira justa e eficiente.</p>

    <h3>Objetivos do SO como gerente de tarefas</h3>
    <p>O SO tem dois objetivos principais ao gerenciar as tarefas:</p>
    <ul>
      <li><strong>Multiplexar o processador:</strong> permite que várias tarefas compartilhem o mesmo processador, dando a sensação de que cada uma tem seu próprio processador.</li>
      <li><strong>Abstração do processador:</strong> libera o programador da preocupação com gerenciamento do tempo de uso do processador, oferecendo a ideia de que a tarefa "possui" o processador.</li>
    </ul>

    <h3>Gerência de tarefas</h3>
    <ul>
      <li><strong>Sistemas monotarefa:</strong> somente uma tarefa pode executar por vez, ocupando todos os recursos da máquina (ex.: MS-DOS, leitores de MP3).</li>
      <li><strong>Monitor de sistema:</strong> um programa (monitor) fica residente na memória e faz a alternância entre o programa do usuário e as rotinas de manutenção (como em mainframes nos anos 60/70).</li>
      <li><strong>Sistemas multitarefa:</strong> soluções com núcleo (kernel) que gerencia a alternância entre as tarefas. A alternância de execução pode ocorrer de duas maneiras:</li>
      <ul>
        <li><strong>Cooperativa:</strong> as tarefas cedem voluntariamente o processador.</li>
        <li><strong>Preemptiva:</strong> o núcleo interrompe e retoma a tarefa, atribuindo-o a outra (utiliza tempo compartilhado).</li>
      </ul>
      <li><strong>Solução de tempo compartilhado (time-sharing):</strong> o processador é alternado entre as tarefas de forma tão rápida que o usuário tem a sensação de que todas executam simultaneamente.</li>
    </ul>

    <h3>Ciclo de vida da tarefa</h3>
    <p>Uma tarefa passa por diversos estados durante sua execução. Os principais estados são:</p>
    <ul>
      <li><strong>Entrada (E):</strong> a tarefa foi criada, mas ainda não está disponível para execução.</li>
      <li><strong>Pronto (P):</strong> a tarefa está aguardando o uso do processador para execução.</li>
      <li><strong>Executando (N):</strong> a tarefa está sendo executada no processador.</li>
      <li><strong>Suspenso (S):</strong> a tarefa está aguardando a ocorrência de um evento (E/S, etc.) para continuar.</li>
      <li><strong>Término (T):</strong> a tarefa foi encerrada e já não utiliza recursos do sistema.</li>
    </ul>
    <p>As transições principais são: E→P (nova tarefa fica pronta), P→N (pronta passa a executar), N→P (volta a ficar pronta), N→S (execução bloqueada), S→P (bloqueada fica pronta), P→T e S→T (término).</p>
  `,
  fases: [
    {
      titulo: "Conceito e objetivos da tarefa",
      perguntas: [
        {
          categoria: "Conceito de tarefa",
          pergunta: "O que é uma tarefa no contexto de sistemas operacionais?",
          opcoes: [
            "Um arquivo armazenado em disco que pode ser executado pelo usuário",
            "A unidade básica de trabalho que representa a execução de um programa",
            "O escalonador do núcleo do sistema operacional que gerencia a execução de processos",
            "Um dispositivo de hardware que executa instruções do sistema operacional"
          ],
          correta: 1,
          explicacao: "Uma tarefa (ou processo) é a unidade básica de trabalho que representa a execução de um programa, contendo código, dados e contexto."
        },
        {
          categoria: "Objetivos",
          pergunta: "Um dos principais objetivos do sistema operacional ao gerenciar tarefas é:",
          opcoes: [
            "Manter as tarefas sempre em modo núcleo para maior eficiência",
            "Impedir que as aplicações acessem o processador",
            "Multiplexar o processador e abstrair seu uso do desenvolvedor",
            "Executar cada tarefa em um processador físico diferente"
          ],
          correta: 2,
          explicacao: "O SO multiplexa o processador para várias tarefas compartilharem o mesmo hardware e abstrai seu gerenciamento, liberando o programador da programação concorrente."
        },
        {
          categoria: "Objetivos",
          pergunta: "A abstração do processador proporcionada pelo SO tem como principal objetivo:",
          opcoes: [
            "Fazer o programador lidar diretamente com o tempo de processamento",
            "Eliminar a necessidade de uso e gerenciamento de memória RAM no sistema",
            "Liberar o programador da preocupação com o gerenciamento do processador",
            "Substituir a utilização de chamadas de sistema"
          ],
          correta: 2,
          explicacao: "Ao abstrair o processador, o SO livra o programador de gerenciar o tempo de uso da CPU, criando a abstração de que cada tarefa 'possui' seu próprio processador."
        },
        {
          categoria: "Conceito de tarefa",
          pergunta: "Qual das seguintes afirmações sobre o conceito de tarefa está correta?",
          opcoes: [
            "Uma tarefa sempre usa apenas o processador durante todo seu ciclo de vida",
            "As tarefas podem ser gerenciadas pelo SO sem envolvimento do usuário",
            "Toda tarefa executa diretamente no hardware sem intermediação do SO",
            "Só é possível ter uma tarefa por vez no sistema"
          ],
          correta: 1,
          explicacao: "O SO gerencia a multiplexação do processador entre as tarefas, e o programador não precisa se preocupar com o compartilhamento do tempo de CPU."
        },
        {
          categoria: "Conceito de tarefa",
          pergunta: "O iPod, um reprodutor de MP3 que executa uma única tarefa, é exemplo de sistema:",
          opcoes: [
            "Sistema monotarefa",
            "Sistema multitarefa",
            "Sistema de tempo compartilhado",            
            "Sistema distribuído"
          ],
          correta: 0,
          explicacao: "Sistemas monotarefa executam apenas uma tarefa por vez, ocupando todos os recursos da máquina. Leitores de MP3 simples são exemplos típicos desse tipo de sistema."
        },
        {
          categoria: "Objetivos",
          pergunta: "O SO, ao multiplexar o processador, cria a ideia de que cada tarefa tem seu próprio processador. Isso caracteriza:",
          opcoes: [
            "A separação entre política e mecanismo",
            "A abstração do processador",
            "A prioridade das tarefas",
            "A comunicação entre tarefas"
          ],
          correta: 1,
          explicacao: "A abstração do processador dá a sensação de que cada tarefa possui o processador exclusivamente, simplificando a programação."
        }
      ]
    },
    {
      titulo: "Gerência de tarefas",
      perguntas: [
        {
          categoria: "Sistema monotarefa",
          pergunta: "Em um sistema chamado de monotarefa, as tarefas são executadas:",
          opcoes: [
            "Uma após a outra, utilizando todo o sistema",
            "Em paralelo verdadeiro, em múltiplos processadores",
            "Concorrentemente, em interfaces sincronizadas",
            "Somente em modo núcleo do sistema"
          ],
          correta: 0,
          explicacao: "Em sistemas monotarefa, apenas uma tarefa executa por vez, ocupando todos os recursos do sistema (ex.: MS-DOS)."
        },
        {
          categoria: "Monitor de sistema",
          pergunta: "No contexto da história dos SOs, o monitor de sistema (system monitor) era:",
          opcoes: [
            "Um dispositivo que periodicamente verificava a temperatura do processador",
            "Um programa residente em memória que alternava entre tarefas por interrupções",
            "O primeiro antivírus desenvolvido para mainframes, nos anos 70",
            "Um hardware dedicado de monitoração da rede local"
          ],
          correta: 1,
          explicacao: "O monitor de sistema ficava residente em memória e intercalava o programa do usuário com rotinas de manutenção, precedendo os sistemas atuais."
        },
        {
          categoria: "Sistemas multitarefa",
          pergunta: "Em um sistema multitarefa cooperativo, a alternância de execução entre tarefas:",
          opcoes: [
            "É controlada pelo núcleo, que interrompe a tarefa a cada quantum de tempo",            
            "É determinada por um árbitro de hardware no processador, que decide qual tarefa executa",
            "Não é possível, pois o processador é exclusivo de cada tarefa",
            "Acontece quando cada tarefa cede voluntariamente o processador às demais"
          ],
          correta: 3,
          explicacao: "No modelo cooperativo, as próprias tarefas cedem o processador; uma tarefa mal-comportada pode travar o sistema."
        },
        {
          categoria: "Solução de tempo compartilhado",
          pergunta: "Em um sistema preemptivo com tempo compartilhado, o núcleo interrompe a tarefa em execução e atribui o processador a outra:",
          opcoes: [
            "Somente quando a tarefa em execução o libera o processador voluntariamente",
            "Antes que a tarefa consiga monopolizar o processador por tempo demais",
            "Após o encerramento completo de uma tarefa, garantindo que todas terminem em tempo hábil",
            "Apenas nos instantes de final do expediente, quando o usuário não está mais ativo"
          ],
          correta: 1,
          explicacao: "Na preempção por tempo (time-slicing), o núcleo associa um quantum a cada tarefa e interrompe a execução para que todas tenham oportunidade de executar."
        },
        {
          categoria: "Gerência de tarefas",
          pergunta: "Nos sistemas multitarefa preemptivos, quem tem o controle sobre quem executa e por quanto tempo?",
          opcoes: [
            "O próprio programador, que define o tempo no código",
            "O usuário final, por meio de ferramenta de gerenciamento",
            "O núcleo do sistema operacional, como despachante (dispatcher)",
            "O hardware, com um escalonador de tarefas embutido"
          ],
          correta: 2,
          explicacao: "Em sistemas preemptivos, o núcleo (despachante) controla qual tarefa executa e por quanto tempo, utilizando políticas de escalonamento."
        },
        {
          categoria: "Solução de tempo compartilhado",
          pergunta: "A técnica de tempo compartilhado (time-sharing) produz a sensação de que:",
          opcoes: [
            "O sistema está executando as tarefas de forma assíncrona e independente",
            "O sistema está executando apenas uma tarefa de cada vez",
            "Várias tarefas executam simultaneamente, mas na verdade há alternância rápida",
            "A memória principal RAM foi duplicada para cada tarefa"
          ],
          correta: 2,
          explicacao: "No tempo compartilhado, a alternância rápida das tarefas no processador dá a impressão de execução simultânea, embora compartilhem o mesmo processador."
        }
      ]
    },
    {
      titulo: "Ciclo de vida das tarefas",
      perguntas: [
        {
          categoria: "Estados da tarefa",
          pergunta: "Uma tarefa que está pronta para executar, mas aguarda o processador, encontra-se no estado:",
          opcoes: [
            "Executando (N)",
            "Suspenso (S)",
            "Pronto (P)",
            "Término (T)"
          ],
          correta: 2,
          explicacao: "O estado Pronto (P) significa que a tarefa está apta a executar, mas ainda aguarda a escolha do despachante para receber o processador."
        },
        {
          categoria: "Estados da tarefa",
          pergunta: "A transição Executando → Suspenso (N→S) ocorre geralmente quando:",
          opcoes: [
            "A tarefa termina sua execução e libera o processador",
            "A tarefa cede o processador voluntariamente",
            "A tarefa solicita uma operação de entrada e saída (E/S)",
            "O quantum de tempo da tarefa expira"
          ],
          correta: 2,
          explicacao: "Quando uma tarefa precisa de uma operação de E/S (ler disco, teclado etc.), ela bloqueia e vai para Suspenso, liberando o processador para outra tarefa."
        },
        {
          categoria: "Estados da tarefa",
          pergunta: "A transição Suspenso → Pronto (S→P) ocorre quando:",
          opcoes: [
            "A tarefa é cancelada pelo software de configuração do sistema",
            "O evento que a tarefa aguardava (como uma E/S) é finalizado",
            "O núcleo decide remover a tarefa da memória",
            "A tarefa comete uma falha em sua execução"
          ],
          correta: 1,
          explicacao: "Ao ser completada a operação de E/S que a tarefa aguardava, o SO a devolve ao estado Pronto para que possa continuar executando."
        },
        {
          categoria: "Estados da tarefa",
          pergunta: "Considere a seguinte sequência de mudanças de estado: E→P→N→S→P→N→T. No final da sequência, a tarefa se encontra no estado:",
          opcoes: [
            "Executando (N)",
            "Suspenso (S)",
            "Término (T)",
            "Entrada (E)"
          ],
          correta: 2,
          explicacao: "A sequência mostra: Entrada → Pronto → Executando → Suspenso → Pronto → Executando → Término. O estado final é Término (T), quando a tarefa encerra."
        },
        {
          categoria: "Estados da tarefa",
          pergunta: "A transição Pronto → Executando (P→N) é de responsabilidade:",
          opcoes: [
            "Do usuário que inicia a tarefa no terminal",
            "Do escalonador (dispatcher) do sistema",
            "Da própria tarefa que decide executar",
            "Do driver de disco responsável pela alocação"
          ],
          correta: 1,
          explicacao: "O escalonador (dispatcher) escolhe a próxima tarefa a executar dentre a fila de prontas e faz a transição Pronto → Executando."
        },
        {
          categoria: "Ciclo de vida",
          pergunta: "Se uma tarefa ao ser iniciada (E) já vai diretamente para Suspenso (S) e depois retorna para Pronto (P), o que significa isso?",
          opcoes: [
            "A tarefa falhou ao tentar obter memória e precisou de recurso de terceiros",
            "A tarefa teve de esperar imediatamente um recurso ou evento para começar",
            "O núcleo decidiu suspender a tarefa por configuração incorreta",
            "A tarefa não pode transicionar diretamente sem passar por Pronto primeiro"
          ],
          correta: 1,
          explicacao: "Algumas tarefas aguardam um recurso mesmo na criação imediata (ex.: iniciar com a rede). Por isso vão ao Suspenso (E→S) antes de entrar na fila de prontos (S→P)."
        }
      ]
    }
  ]
});