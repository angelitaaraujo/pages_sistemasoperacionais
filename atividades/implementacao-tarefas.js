JOGO2.registrar({
  id: "so-cap5-implementacao-tarefas",
  titulo: "Implementação de tarefas",
  disciplina: "🔲 Gerência de Processador",
  descricao: "Atividade de estudo e revisão do capítulo 5: contextos e descritor de tarefa, trocas de contexto, processos e hierarquia de processos, threads, modelos de threads e uso de processos versus threads.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Contextos</h3>
    <p>O <strong>contexto de uma tarefa</strong> é o conjunto de informações que define seu estado de execução. Ele é formado por três partes:</p>
    <ul>
      <li><strong>Contexto de hardware:</strong> registradores do processador, contador de programa (PC), palavra de estado do processador (PSW/status) e ponteiro de pilha.</li>
      <li><strong>Contexto de software:</strong> lista de arquivos abertos, áreas de memória alocadas e demais recursos associados à tarefa.</li>
      <li><strong>Descritor de tarefa (PCB):</strong> estrutura de dados que identifica a tarefa (ID), indica seu estado e armazena suas informações de gerência (prioridade, dono, tempo de processador usado, recursos alocados).</li>
    </ul>

    <h3>Trocas de contexto</h3>
    <p>Quando o processador alterna entre tarefas, o SO precisa <strong>salvar o contexto</strong> da tarefa que sai e <strong>restaurar o contexto</strong> da tarefa que entra. Um despachante escolhe a próxima tarefa a executar e realiza a troca. O custo da troca de contexto é o tempo de processador gasto para salvar e restaurar os contextos, tempo esse que não é usado para trabalho útil.</p>

    <h3>Processos</h3>
    <ul>
      <li><strong>Conceito:</strong> um processo é um programa em execução, com seu código, dados, pilha e contexto associados. O programa é estático; o processo é dinâmico.</li>
      <li><strong>Gestão de processos:</strong> o SO cria, escala e encerra processos por meio de chamadas de sistema. O descritor de tarefa é criado quando o processo é criado.</li>
      <li><strong>Hierarquia de processos:</strong> um processo pode criar outros processos (filhos), formando uma árvore de processos. O processo que origina é o <strong>processo pai</strong>; o criado é o <strong>processo filho</strong>.</li>
    </ul>

    <h3>Threads</h3>
    <ul>
      <li><strong>Definição:</strong> uma thread é uma unidade de execução dentro de um processo. Um processo pode conter uma ou mais threads, que compartilham seu espaço de endereçamento e seus recursos.</li>
      <li><strong>Contexto de thread:</strong> cada thread possui pilha, contexto e identificador próprios, mas compartilha o código, os dados e os arquivos abertos do processo.</li>
      <li><strong>Modelos de threads:</strong></li>
      <ul>
        <li><strong>Muitos-para-um:</strong> vários threads de usuário mapeados para um único thread do núcleo; uma chamada de sistema bloqueante pode bloquear todos os threads do processo.</li>
        <li><strong>Um-para-um:</strong> cada thread de usuário é mapeado para um thread do núcleo; permite paralelismo real, mas tem custo maior.</li>
        <li><strong>Muitos-para-muitos:</strong> vários threads de usuário mapeados para vários threads do núcleo.</li>
      </ul>
    </ul>

    <h3>Processos versus threads</h3>
    <p>Criar uma thread é mais barato que criar um processo, e a troca entre threads de um mesmo processo é mais rápida que a troca entre processos. Por outro lado, os processos oferecem maior isolamento entre si, já que cada um possui espaço de endereçamento próprio, enquanto as threads de um mesmo processo compartilham memória e recursos.</p>
  `,
  fases: [
    {
      titulo: "Contextos e troca de contexto",
      perguntas: [
        {
          categoria: "Contextos",
          pergunta: "O conjunto de informações que define o estado de execução de uma tarefa, incluindo o valor dos registradores do processador e o contador de programa, é denominado:",
          opcoes: [
            "descritor de tarefa",
            "contexto de hardware",
            "contexto de software",
            "tabela de páginas"
          ],
          correta: 1,
          explicacao: "O contexto de hardware reúne os registradores, o contador de programa (PC), a palavra de estado do processador (PSW) e o ponteiro de pilha da tarefa."
        },
        {
          categoria: "Contextos",
          pergunta: "A lista de arquivos abertos e as áreas de memória alocadas por uma tarefa fazem parte do seu:",
          opcoes: [
            "contexto de hardware",
            "descritor de interrupção",
            "contexto de software",
            "registrador de controle"
          ],
          correta: 2,
          explicacao: "O contexto de software reúne os recursos associados à tarefa, como arquivos abertos, áreas de memória alocadas e demais informações de uso."
        },
        {
          categoria: "Contextos",
          pergunta: "As informações de gerência de uma tarefa, como prioridade, dono, tempo de processador utilizado e recursos alocados, são armazenadas no:",
          opcoes: [
            "registrador de estado do processador",
            "contador de programa (PC)",
            "contexto de hardware",
            "descritor de tarefa (PCB)"
          ],
          correta: 3,
          explicacao: "O descritor de tarefa (PCB) é a estrutura de dados que identifica a tarefa, indica seu estado e guarda suas informações de gerência."
        },
        {
          categoria: "Trocas de contexto",
          pergunta: "Durante uma troca de contexto, o sistema operacional realiza a seguinte sequência de ações:",
          opcoes: [
            "salva o contexto da tarefa A e restaura o contexto da tarefa B",
            "apaga o contexto da tarefa A e reinicia a tarefa B do zero",
            "mantém o contexto da tarefa A e executa a tarefa B com ele",
            "interrompe a execução de todas as tarefas do sistema"
          ],
          correta: 0,
          explicacao: "A troca de contexto consiste em salvar o contexto da tarefa que sai do processador e restaurar o contexto da tarefa que entra em execução."
        },
        {
          categoria: "Trocas de contexto",
          pergunta: "O custo principal das trocas de contexto está relacionado:",
          opcoes: [
            "à quantidade de memória RAM instalada no computador",
            "à velocidade da rede de comunicação utilizada",
            "ao tempo de processador gasto para salvar e restaurar os contextos",
            "ao número de dispositivos de entrada e saída disponíveis"
          ],
          correta: 2,
          explicacao: "O custo da troca de contexto é o tempo de processador usado para salvar e restaurar os contextos, tempo que não é aproveitado para trabalho útil."
        },
        {
          categoria: "Trocas de contexto",
          pergunta: "O componente do sistema operacional responsável por escolher a próxima tarefa a executar e realizar a troca de contexto é o:",
          opcoes: [
            "compilador de aplicações",
            "gerenciador de arquivos",
            "tradutor de endereços",
            "despachante (dispatcher)"
          ],
          correta: 3,
          explicacao: "O despachante seleciona a próxima tarefa na fila de prontos e executa a troca de contexto, salvando e restaurando os contextos necessários."
        }
      ]
    },
    {
      titulo: "Processos e hierarquia",
      perguntas: [
        {
          categoria: "Conceito de processo",
          pergunta: "Um processo pode ser definido corretamente como:",
          opcoes: [
            "um arquivo binário armazenado no disco rígido",
            "um programa em execução, com seus dados e contexto associados",
            "o hardware responsável por executar as instruções",
            "uma ferramenta de gerência de arquivos do sistema"
          ],
          correta: 1,
          explicacao: "Um processo é um programa em execução, incluindo código, dados, pilha e contexto. O programa sozinho é apenas um arquivo estático."
        },
        {
          categoria: "Conceito de processo",
          pergunta: "A principal diferença entre um programa e um processo é que:",
          opcoes: [
            "o programa é estático e o processo é dinâmico, pois representa sua execução",
            "o processo é estático e o programa é dinâmico no sistema",
            "ambos são sempre idênticos no ambiente de execução",
            "o programa existe em memória e o processo existe apenas em disco"
          ],
          correta: 0,
          explicacao: "O programa é o arquivo estático com o código; o processo é a entidade dinâmica criada quando o programa é carregado e executado."
        },
        {
          categoria: "Gestão de processos",
          pergunta: "As operações de criação e término de processos são realizadas pelo sistema operacional por meio de:",
          opcoes: [
            "interrupções de hardware",
            "instruções privilegiadas de entrada e saída",
            "chamadas de sistema",
            "drivers de dispositivos"
          ],
          correta: 2,
          explicacao: "O SO oferece chamadas de sistema para criar e encerrar processos, como fork e exit em sistemas Unix."
        },
        {
          categoria: "Gestão de processos",
          pergunta: "O descritor de tarefa (PCB) de um processo é criado pelo sistema operacional quando o processo:",
          opcoes: [
            "é compilado pelo programador",
            "é criado no sistema",
            "é copiado para o disco rígido",
            "é transmitido pela rede"
          ],
          correta: 1,
          explicacao: "No momento da criação do processo, o SO monta seu descritor de tarefa, que passa a identificar e acompanhar o processo durante todo o seu ciclo de vida."
        },
        {
          categoria: "Hierarquia de processos",
          pergunta: "Na hierarquia de processos, o processo que origina outro processo é denominado:",
          opcoes: [
            "processo irmão",
            "processo filho",
            "processo órfão",
            "processo pai"
          ],
          correta: 3,
          explicacao: "O processo pai é aquele que cria outros processos (filhos), formando uma árvore hierárquica de processos no sistema."
        },
        {
          categoria: "Hierarquia de processos",
          pergunta: "Em sistemas que adotam hierarquia de processos, um processo filho é criado:",
          opcoes: [
            "a partir de uma chamada de sistema feita pelo processo pai",
            "apenas quando o sistema operacional é reiniciado",
            "pelo usuário final, sem intervenção do sistema operacional",
            "automaticamente, sem qualquer relação com o processo pai"
          ],
          correta: 0,
          explicacao: "O processo filho é criado por uma chamada de sistema do processo pai, como fork em Unix, passando a fazer parte da árvore de processos."
        }
      ]
    },
    {
      titulo: "Threads e processos versus threads",
      perguntas: [
        {
          categoria: "Definição de thread",
          pergunta: "Uma thread pode ser definida corretamente como:",
          opcoes: [
            "uma unidade de execução dentro de um processo, que compartilha seu espaço de endereçamento",
            "um processo independente que não compartilha memória",
            "um dispositivo de hardware de processamento",
            "um tipo especial de arquivo executável do sistema"
          ],
          correta: 0,
          explicacao: "A thread é a unidade de execução dentro do processo; as threads de um mesmo processo compartilham código, dados e recursos."
        },
        {
          categoria: "Definição de thread",
          pergunta: "Sobre os elementos compartilhados e próprios das threads de um mesmo processo, é correto afirmar que elas:",
          opcoes: [
            "possuem espaços de endereçamento próprios e independentes",
            "compartilham também o identificador de cada outra thread",
            "possuem pilhas e contextos próprios, mas compartilham o espaço de endereçamento",
            "não podem compartilhar nenhum recurso do processo"
          ],
          correta: 2,
          explicacao: "Cada thread tem pilha, contexto e identificador próprios, mas as threads do mesmo processo compartilham o espaço de endereçamento e os recursos."
        },
        {
          categoria: "Modelos de threads",
          pergunta: "No modelo de threads muitos-para-um, uma thread de usuário que realiza uma chamada de sistema bloqueante pode:",
          opcoes: [
            "bloquear todos os threads do processo",
            "continuar executando normalmente",
            "transferir o processo para outro processador",
            "liberar a memória virtual do processo"
          ],
          correta: 0,
          explicacao: "No modelo muitos-para-um, todos os threads de usuário são mapeados para um único thread do núcleo; uma chamada bloqueante bloqueia o processo inteiro."
        },
        {
          categoria: "Modelos de threads",
          pergunta: "No modelo de threads um-para-um, cada thread de usuário é mapeado:",
          opcoes: [
            "para um processador diferente",
            "para um thread do núcleo (kernel)",
            "para uma área do disco rígido",
            "para uma fila de impressão"
          ],
          correta: 1,
          explicacao: "No modelo um-para-um, cada thread de usuário corresponde a um thread do núcleo, permitindo que threads distintos executem em paralelo."
        },
        {
          categoria: "Processos versus threads",
          pergunta: "Em relação ao custo de criação, é correto afirmar que:",
          opcoes: [
            "criar um processo é mais caro que criar uma thread",
            "criar uma thread é mais caro que criar um processo",
            "processo e thread possuem exatamente o mesmo custo de criação",
            "threads não podem ser criadas durante a execução de um programa"
          ],
          correta: 0,
          explicacao: "Criar uma thread é mais barato que criar um processo, pois exige menos alocação de recursos e menos trabalho do sistema operacional."
        },
        {
          categoria: "Processos versus threads",
          pergunta: "Uma vantagem da utilização de threads em relação a processos é o:",
          opcoes: [
            "maior isolamento de memória entre as unidades de execução",
            "menor custo de criação e de troca de contexto",
            "uso exclusivo do processador por cada thread",
            "dispensa do escalonamento pelo sistema operacional"
          ],
          correta: 1,
          explicacao: "Threads são mais leves que processos: custam menos para criar e a troca entre threads do mesmo processo é mais rápida que a troca entre processos."
        }
      ]
    }
  ]
});