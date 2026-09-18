JOGO2.registrar({
  id: "comunicacao-unix",
  titulo: "Mecanismos de comunicação em UNIX",
  disciplina: "🔲 Gerência de Processador",
  descricao: "Atividade de estudo e revisão do capítulo 9: pipes anônimos e nomeados (FIFOs), filas de mensagens POSIX e System V, e memória compartilhada POSIX e System V.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Pipes</h3>
    <p>Pipes são o mecanismo de comunicação mais simples entre processos em sistemas UNIX. Existem dois tipos:</p>
    <ul>
      <li><strong>Pipes anônimos:</strong> criados pela chamada de sistema <em>pipe()</em>, permitem comunicação unidirecional entre processos com parentesco (pai e filho). Os dados fluem em uma única direção: um processo escreve na extremidade de escrita e o outro lê na extremidade de leitura.</li>
      <li><strong>Pipes nomeados (FIFOs):</strong> criados pela chamada <em>mkfifo()</em>, possuem um nome no sistema de arquivos e permitem comunicação entre processos sem parentesco. Funcionam como um arquivo especial: um processo abre para escrita e outro para leitura.</li>
    </ul>
    <p>Em ambos os tipos, a comunicação é baseada em fluxo de bytes (stream), sem preservar os limites entre mensagens. A leitura é destrutiva: os dados lidos são removidos do pipe.</p>

    <h3>Filas de mensagens</h3>
    <p>Filas de mensagens permitem a troca de mensagens estruturadas entre processos, preservando os limites entre elas. Existem duas implementações principais:</p>
    <ul>
      <li><strong>POSIX:</strong> utiliza identificadores do tipo <em>mqd_t</em> e funções como <em>mq_open()</em>, <em>mq_send()</em>, <em>mq_receive()</em>, <em>mq_close()</em> e <em>mq_unlink()</em>. Cada mensagem possui uma prioridade associada.</li>
      <li><strong>System V:</strong> utiliza identificadores numéricos e funções como <em>msgget()</em>, <em>msgsnd()</em>, <em>msgrcv()</em> e <em>msgctl()</em>. As mensagens são identificadas por um tipo (long integer).</li>
    </ul>
    <p>Diferentemente dos pipes, as filas de mensagens preservam os limites entre as mensagens e permitem comunicação bidirecional entre processos não aparentados.</p>

    <h3>Memória compartilhada</h3>
    <p>A memória compartilhada é o mecanismo de comunicação mais eficiente, pois permite que dois ou mais processos acessem a mesma região de memória diretamente, sem necessidade de chamadas de sistema para cada troca de dados.</p>
    <ul>
      <li><strong>POSIX:</strong> utiliza funções como <em>shm_open()</em>, <em>mmap()</em>, <em>munmap()</em> e <em>shm_unlink()</em>. A região é criada como um objeto de memória compartilhada e mapeada no espaço de endereçamento dos processos.</li>
      <li><strong>System V:</strong> utiliza funções como <em>shmget()</em>, <em>shmat()</em>, <em>shmdt()</em> e <em>shmctl()</em>. A região é identificada por uma chave numérica.</li>
    </ul>
    <p>Por ser um meio de comunicação sem sincronização embutida, o acesso à memória compartilhada geralmente requer mecanismos adicionais de coordenação, como semáforos ou mutexes, para evitar condições de corrida.</p>
  `,
  fases: [
    {
      titulo: "Pipes anônimos e nomeados",
      perguntas: [
        {
          categoria: "Pipes anônimos",
          pergunta: "Um pipe anônimo, criado pela chamada de sistema pipe(), permite comunicação entre processos que:",
          opcoes: [
            "executam em máquinas diferentes conectadas por rede",
            "não possuem qualquer relação de parentesco entre si",
            "possuem uma relação de parentesco, como pai e filho",
            "compartilham o mesmo espaço de endereçamento"
          ],
          correta: 2,
          explicacao: "Pipes anônimos só funcionam entre processos com parentesco, geralmente entre um processo pai e seu filho, pois o descritor do pipe é herdado."
        },
        {
          categoria: "Pipes anônimos",
          pergunta: "Em um pipe anônimo, a direção do fluxo de dados é:",
          opcoes: [
            "unidirecional, com uma extremidade para escrita e outra para leitura",
            "bidirecional, permitindo que ambos os processos escrevam e leiam",
            "alternada, definida pelo processo que primeiro acessa o pipe",
            "circular, com os dados retornando ao emissor após a leitura"
          ],
          correta: 0,
          explicacao: "Pipes anônimos são unidirecionais: uma extremidade é usada para escrita e a outra para leitura, com os dados fluindo em uma única direção."
        },
        {
          categoria: "Pipes anônimos",
          pergunta: "A leitura de dados em um pipe anônimo é classificada como destrutiva porque:",
          opcoes: [
            "os dados lidos são removidos do pipe e não podem ser lidos novamente",
            "o pipe é destruído após a primeira leitura realizada",
            "os dados permanecem no pipe para leituras futuras",
            "o processo que lê é encerrado automaticamente"
          ],
          correta: 0,
          explicacao: "A leitura em pipes é destrutiva: uma vez lidos, os dados são removidos do pipe e não estão mais disponíveis."
        },
        {
          categoria: "Pipes nomeados (FIFOs)",
          pergunta: "Um pipe nomeado (FIFO) difere de um pipe anônimo principalmente porque:",
          opcoes: [
            "só pode ser usado por processos com parentesco direto",
            "a comunicação é baseada em troca de mensagens estruturadas",
            "possui um nome no sistema de arquivos e permite comunicação entre processos não aparentados",
            "os dados são preservados após a leitura"
          ],
          correta: 2,
          explicacao: "O FIFO possui um nome no sistema de arquivos, criado por mkfifo(), permitindo que processos sem parentesco se comuniquem."
        },
        {
          categoria: "Pipes nomeados (FIFOs)",
          pergunta: "A chamada de sistema utilizada para criar um pipe nomeado em sistemas UNIX é:",
          opcoes: [
            "pipe()",
            "open()",
            "mkfifo()",
            "mknod()"
          ],
          correta: 2,
          explicacao: "A função mkfifo() cria um pipe nomeado (FIFO) no sistema de arquivos, que pode ser acessado por processos não aparentados."
        },
        {
          categoria: "Pipes",
          pergunta: "Tanto pipes anônimos quanto pipes nomeados compartilham a seguinte característica:",
          opcoes: [
            "a comunicação preserva os limites entre as mensagens enviadas",
            "os dados fluem como um fluxo contínuo de bytes (stream)",
            "a comunicação é bidirecional entre os processos envolvidos",
            "as mensagens possuem prioridades associadas"
          ],
          correta: 1,
          explicacao: "Ambos os tipos de pipe utilizam fluxo de bytes (stream), sem preservar limites entre mensagens — diferentemente de filas de mensagens."
        }
      ]
    },
    {
      titulo: "Filas de mensagens",
      perguntas: [
        {
          categoria: "Filas de mensagens POSIX",
          pergunta: "Na implementação POSIX de filas de mensagens, o tipo utilizado para identificar uma fila é:",
          opcoes: [
            "int",
            "mqd_t",
            "key_t",
            "FILE *"
          ],
          correta: 1,
          explicacao: "Na API POSIX, filas de mensagens são identificadas por descritores do tipo mqd_t, retornados por mq_open()."
        },
        {
          categoria: "Filas de mensagens POSIX",
          pergunta: "Na API POSIX, a função utilizada para enviar uma mensagem a uma fila é:",
          opcoes: [
            "mq_receive()",
            "mq_send()",
            "msgsnd()",
            "mq_close()"
          ],
          correta: 1,
          explicacao: "A função mq_send() é usada para enviar mensagens em filas POSIX. mq_receive() é para receber, msgsnd() é da API System V."
        },
        {
          categoria: "Filas de mensagens POSIX",
          pergunta: "Na API POSIX de filas de mensagens, cada mensagem pode ter associado um valor de:",
          opcoes: [
            "tamanho máximo em bytes",
            "prioridade",
            "timestamp de criação",
            "identificador do processo destino"
          ],
          correta: 1,
          explicacao: "As mensagens POSIX possuem uma prioridade associada, que determina a ordem de recebimento (mensagens de maior prioridade são recebidas primeiro)."
        },
        {
          categoria: "Filas de mensagens System V",
          pergunta: "Na API System V, a função utilizada para criar ou acessar uma fila de mensagens é:",
          opcoes: [
            "msgget()",
            "mq_open()",
            "shmget()",
            "msgctl()"
          ],
          correta: 0,
          explicacao: "msgget() é a função System V para criar ou acessar uma fila de mensagens. mq_open() é da API POSIX e shmget() é para memória compartilhada."
        },
        {
          categoria: "Filas de mensagens System V",
          pergunta: "Na API System V, as mensagens são identificadas por um campo do tipo:",
          opcoes: [
            "prioridade (unsigned int)",
            "long integer (mtype)",
            "string de caracteres",
            "descritor de arquivo"
          ],
          correta: 1,
          explicacao: "Em System V, cada mensagem possui um tipo (mtype) do tipo long integer, usado para selecionar quais mensagens receber."
        },
        {
          categoria: "Filas de mensagens",
          pergunta: "Uma vantagem das filas de mensagens sobre os pipes é que elas:",
          opcoes: [
            "dispensam qualquer chamada de sistema para enviar dados",
            "são mais eficientes que a memória compartilhada",
            "preservam os limites entre as mensagens enviadas",
            "funcionam apenas entre processos com parentesco"
          ],
          correta: 2,
          explicacao: "Diferentemente dos pipes, as filas de mensagens preservam os limites entre as mensagens, permitindo que o receptor identifique cada unidade."
        }
      ]
    },
    {
      titulo: "Memória compartilhada",
      perguntas: [
        {
          categoria: "Memória compartilhada POSIX",
          pergunta: "Na API POSIX, a função utilizada para criar um objeto de memória compartilhada é:",
          opcoes: [
            "shmget()",
            "mmap()",
            "shm_open()",
            "shmat()"
          ],
          correta: 2,
          explicacao: "shm_open() cria ou abre um objeto de memória compartilhada POSIX. mmap() mapeia o objeto no espaço de endereçamento do processo."
        },
        {
          categoria: "Memória compartilhada POSIX",
          pergunta: "Na API POSIX, a função responsável por mapear um objeto de memória compartilhada no espaço de endereçamento do processo é:",
          opcoes: [
            "shm_open()",
            "mmap()",
            "shmat()",
            "munmap()"
          ],
          correta: 1,
          explicacao: "mmap() mapeia o objeto de memória compartilhada (criado por shm_open()) no espaço de endereçamento do processo. munmap() desfaz o mapeamento."
        },
        {
          categoria: "Memória compartilhada System V",
          pergunta: "Na API System V, a função utilizada para anexar uma região de memória compartilhada ao espaço de endereçamento do processo é:",
          opcoes: [
            "shmget()",
            "shmdt()",
            "shmat()",
            "shmctl()"
          ],
          correta: 2,
          explicacao: "shmat() (attach) anexa a região de memória compartilhada ao espaço de endereçamento. shmdt() (detach) a desanexa."
        },
        {
          categoria: "Memória compartilhada System V",
          pergunta: "Na API System V, a função shmget() é utilizada para:",
          opcoes: [
            "criar ou acessar uma região de memória compartilhada",
            "anexar a região ao espaço de endereçamento",
            "remover um objeto de memória compartilhada",
            "mapear a região no sistema de arquivos"
          ],
          correta: 0,
          explicacao: "shmget() cria ou acessa uma região de memória compartilhada System V, retornando um identificador para a região."
        },
        {
          categoria: "Memória compartilhada",
          pergunta: "A memória compartilhada é considerada o mecanismo de comunicação mais eficiente entre processos porque:",
          opcoes: [
            "dispensa qualquer mecanismo adicional de sincronização",
            "os processos acessam os dados sem chamadas de sistema a cada troca",
            "funciona apenas entre processos com parentesco direto",
            "os dados são copiados automaticamente entre os processos"
          ],
          correta: 1,
          explicacao: "Na memória compartilhada, os processos acessam diretamente a mesma região de memória, sem necessidade de chamadas de sistema para cada troca de dados."
        },
        {
          categoria: "Memória compartilhada",
          pergunta: "Por ser um meio de comunicação sem sincronização embutida, o uso de memória compartilhada geralmente requer:",
          opcoes: [
            "que os processos sejam executados em processadores distintos",
            "a utilização de pipes para coordenar o acesso",
            "mecanismos adicionais como semáforos ou mutexes",
            "que os dados sejam copiados para o disco a cada operação"
          ],
          correta: 2,
          explicacao: "Como a memória compartilhada não oferece sincronização intrínseca, é necessário usar semáforos, mutexes ou outros mecanismos para evitar condições de corrida."
        }
      ]
    }
  ]
});