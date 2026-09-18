JOGO2.registrar({
  id: "mecanismos-comunicacao",
  titulo: "Mecanismos de comunicação",
  disciplina: "🔲 Gerência de Processador",
  descricao: "Atividade de estudo e revisão do capítulo 8: objetivos e escopo da comunicação entre tarefas, sincronização, formato de envio, capacidade do canal, confiabilidade e número de participantes.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Objetivos da comunicação entre tarefas</h3>
    <p>A <strong>comunicação entre tarefas</strong> tem dois objetivos principais: permitir a <strong>troca de informações</strong> entre tarefas e viabilizar a <strong>coordenação</strong> de suas execuções. Sem comunicação, tarefas concorrentes não conseguem cooperar para produzir um resultado conjunto.</p>

    <h3>Escopo da comunicação</h3>
    <ul>
      <li><strong>Intra-processo:</strong> comunicação entre as threads de um mesmo processo, que compartilham o espaço de endereçamento.</li>
      <li><strong>Inter-processos:</strong> comunicação entre processos distintos executando na mesma máquina.</li>
      <li><strong>Inter-sistemas:</strong> comunicação entre processos que executam em máquinas diferentes, geralmente por meio de uma rede.</li>
    </ul>

    <h3>Sincronização</h3>
    <ul>
      <li><strong>Comunicação síncrona:</strong> o emissor fica bloqueado até que a mensagem seja recebida pelo destinatário, garantindo sincronização entre eles.</li>
      <li><strong>Comunicação assíncrona:</strong> o emissor envia a mensagem e continua executando, sem aguardar a entrega ou confirmação.</li>
      <li><strong>Comunicação semissíncrona:</strong> o emissor é bloqueado apenas até que a mensagem seja depositada no canal, não até seu processamento.</li>
    </ul>

    <h3>Formato de envio</h3>
    <ul>
      <li><strong>Por mensagens:</strong> as informações são trocadas em unidades estruturadas, preservando os limites entre elas.</li>
      <li><strong>Por fluxo de dados (stream):</strong> as informações são transmitidas como uma sequência contínua, sem delimitação entre unidades.</li>
    </ul>

    <h3>Capacidade do canal</h3>
    <ul>
      <li><strong>Capacidade nula (n=0):</strong> não há buffer; o emissor só envia quando o receptor está pronto, caracterizando comunicação síncrona.</li>
      <li><strong>Capacidade infinita (n=∞):</strong> há sempre espaço no buffer, de modo que o emissor nunca fica bloqueado ao enviar.</li>
      <li><strong>Capacidade finita (0&lt;n&lt;∞):</strong> há um buffer limitado; o emissor pode ser bloqueado quando o buffer está cheio.</li>
    </ul>

    <h3>Confiabilidade do canal</h3>
    <ul>
      <li><strong>Perda de dados:</strong> mensagens podem ser perdidas durante a transmissão.</li>
      <li><strong>Perda de integridade:</strong> o conteúdo das mensagens pode ser corrompido.</li>
      <li><strong>Perda de ordem:</strong> a ordem de chegada das mensagens pode ser alterada.</li>
    </ul>

    <h3>Número de participantes</h3>
    <ul>
      <li><strong>Comunicação 1:1:</strong> um emissor e um receptor, como em canais ponto a ponto.</li>
      <li><strong>Comunicação M:N:</strong> vários emissores e/ou receptores, como em caixas postais (mailbox) e barramentos de mensagens (message bus).</li>
    </ul>
  `,
  fases: [
    {
      titulo: "Objetivos e escopo da comunicação",
      perguntas: [
        {
          categoria: "Objetivos",
          pergunta: "Qual é o principal objetivo da comunicação entre tarefas em um sistema operacional?",
          opcoes: [
            "Permitir que tarefas troquem informações e coordenem suas execuções",
            "Substituir o escalonamento de tarefas realizado pelo núcleo",
            "Eliminar a necessidade de memória compartilhada no sistema",
            "Aumentar a prioridade das tarefas em execução no processador"
          ],
          correta: 0,
          explicacao: "A comunicação entre tarefas permite a troca de informações e a coordenação entre elas, viabilizando aplicações concorrentes e distribuídas."
        },
        {
          categoria: "Escopo",
          pergunta: "A comunicação entre as threads de um mesmo processo é classificada como escopo:",
          opcoes: [
            "inter-sistemas",
            "inter-processos",
            "inter-redes",
            "intra-processo"
          ],
          correta: 3,
          explicacao: "O escopo intra-processo envolve a comunicação entre as threads de um mesmo processo, que compartilham o espaço de endereçamento."
        },
        {
          categoria: "Escopo",
          pergunta: "A comunicação entre processos distintos executando na mesma máquina é classificada como escopo:",
          opcoes: [
            "intra-processo",
            "inter-processos",
            "inter-sistemas",
            "inter-threads"
          ],
          correta: 1,
          explicacao: "O escopo inter-processos envolve a comunicação entre processos distintos que executam na mesma máquina."
        },
        {
          categoria: "Escopo",
          pergunta: "A comunicação entre processos que executam em máquinas diferentes é classificada como escopo:",
          opcoes: [
            "intra-processo",
            "inter-processos",
            "inter-sistemas",
            "inter-threads"
          ],
          correta: 2,
          explicacao: "O escopo inter-sistemas envolve a comunicação entre processos que executam em máquinas distintas, geralmente por meio de uma rede."
        },
        {
          categoria: "Objetivos",
          pergunta: "Além da troca de informações, a comunicação entre tarefas permite que elas:",
          opcoes: [
            "acessem diretamente os registradores do processador",
            "substituam o núcleo nas operações de entrada e saída",
            "eliminem a necessidade de sincronização entre si",
            "coordenem suas execuções e sincronizem suas atividades"
          ],
          correta: 3,
          explicacao: "A comunicação entre tarefas viabiliza tanto a troca de dados quanto a coordenação e sincronização das atividades das tarefas."
        },
        {
          categoria: "Objetivos",
          pergunta: "Em uma aplicação concorrente, a comunicação entre tarefas é necessária principalmente para:",
          opcoes: [
            "permitir a troca de dados e a coordenação entre as tarefas",
            "garantir que todas as tarefas tenham a mesma prioridade",
            "reduzir o número de processos criados pelo sistema",
            "aumentar o tempo de resposta das tarefas interativas"
          ],
          correta: 0,
          explicacao: "Em aplicações concorrentes, as tarefas precisam trocar dados e se coordenar para produzir o resultado esperado."
        }
      ]
    },
    {
      titulo: "Sincronização e formato de envio",
      perguntas: [
        {
          categoria: "Sincronização",
          pergunta: "Na comunicação síncrona, a tarefa que envia uma mensagem:",
          opcoes: [
            "continua executando sem aguardar a entrega da mensagem",
            "armazena a mensagem em um buffer e segue seu fluxo",
            "fica bloqueada até que a mensagem seja recebida",
            "descarta a mensagem se o receptor não estiver pronto"
          ],
          correta: 2,
          explicacao: "Na comunicação síncrona, o emissor fica bloqueado até que o receptor receba a mensagem, garantindo a sincronização entre eles."
        },
        {
          categoria: "Sincronização",
          pergunta: "Na comunicação assíncrona, a tarefa que envia uma mensagem:",
          opcoes: [
            "continua sua execução sem aguardar a entrega da mensagem",
            "fica bloqueada até que o receptor confirme o recebimento",
            "somente envia quando o receptor estiver pronto",
            "espera o término completo da tarefa receptora"
          ],
          correta: 0,
          explicacao: "Na comunicação assíncrona, o emissor envia a mensagem e continua executando, sem esperar pela entrega ou confirmação."
        },
        {
          categoria: "Sincronização",
          pergunta: "Na comunicação semissíncrona, o comportamento do emissor é:",
          opcoes: [
            "idêntico ao da comunicação totalmente assíncrona",
            "bloqueado apenas até o depósito da mensagem no canal",
            "bloqueado até que o receptor processe a mensagem",
            "independente do estado do canal de comunicação"
          ],
          correta: 1,
          explicacao: "Na comunicação semissíncrona, o emissor é bloqueado apenas até que a mensagem seja depositada no canal, não até seu processamento."
        },
        {
          categoria: "Formato de envio",
          pergunta: "Quando a comunicação entre tarefas é realizada por meio de mensagens estruturadas, o formato de envio é denominado:",
          opcoes: [
            "fluxo de dados contínuo",
            "canal de bytes",
            "stream de caracteres",
            "troca de mensagens"
          ],
          correta: 3,
          explicacao: "No formato por mensagens, as informações são trocadas em unidades estruturadas, preservando os limites entre elas."
        },
        {
          categoria: "Formato de envio",
          pergunta: "Quando a comunicação entre tarefas é realizada como uma sequência contínua de dados, o formato de envio é denominado:",
          opcoes: [
            "fluxo de dados (stream)",
            "troca de mensagens",
            "pacote estruturado",
            "quadro de comunicação"
          ],
          correta: 0,
          explicacao: "No formato por fluxo de dados, as informações são transmitidas como uma sequência contínua, sem delimitação entre unidades."
        },
        {
          categoria: "Formato de envio",
          pergunta: "A principal diferença entre a comunicação por mensagens e por fluxo de dados está:",
          opcoes: [
            "na velocidade de transmissão dos dados",
            "no tipo de hardware utilizado",
            "na preservação dos limites entre as unidades de dados",
            "na quantidade de tarefas envolvidas"
          ],
          correta: 2,
          explicacao: "Na comunicação por mensagens, os limites entre as unidades são preservados; no fluxo de dados, a informação é contínua."
        }
      ]
    },
    {
      titulo: "Capacidade, confiabilidade e participantes",
      perguntas: [
        {
          categoria: "Capacidade do canal",
          pergunta: "Um canal de comunicação com capacidade nula é aquele em que:",
          opcoes: [
            "o emissor pode enviar várias mensagens sem bloqueio",
            "o emissor só envia quando o receptor está pronto para receber",
            "as mensagens são armazenadas em um buffer infinito",
            "os dados são perdidos quando o canal está cheio"
          ],
          correta: 1,
          explicacao: "Em um canal de capacidade nula (n=0), não há buffer: o emissor só consegue enviar quando o receptor está pronto, caracterizando comunicação síncrona."
        },
        {
          categoria: "Capacidade do canal",
          pergunta: "Um canal de comunicação com capacidade infinita é aquele em que:",
          opcoes: [
            "o emissor fica bloqueado a cada mensagem enviada",
            "somente uma mensagem pode ser armazenada por vez",
            "as mensagens são descartadas quando o buffer enche",
            "o emissor nunca fica bloqueado ao enviar mensagens"
          ],
          correta: 3,
          explicacao: "Em um canal de capacidade infinita (n=∞), há sempre espaço no buffer, de modo que o emissor nunca fica bloqueado ao enviar."
        },
        {
          categoria: "Capacidade do canal",
          pergunta: "Em um canal de capacidade finita, quando o buffer está cheio, o emissor:",
          opcoes: [
            "perde a mensagem e continua executando normalmente",
            "descarta todas as mensagens armazenadas no buffer",
            "pode ser bloqueado até que haja espaço disponível",
            "transfere a mensagem diretamente para o disco"
          ],
          correta: 2,
          explicacao: "Em um canal de capacidade finita (0<n<∞), há um buffer limitado; quando ele está cheio, o emissor pode ser bloqueado até liberar espaço."
        },
        {
          categoria: "Confiabilidade",
          pergunta: "Quando uma mensagem enviada por uma tarefa não chega ao seu destino, o canal apresenta:",
          opcoes: [
            "perda de dados",
            "perda de integridade",
            "perda de ordem",
            "perda de sincronização"
          ],
          correta: 0,
          explicacao: "A perda de dados ocorre quando mensagens são perdidas durante a transmissão, não chegando ao destinatário."
        },
        {
          categoria: "Confiabilidade",
          pergunta: "Quando o conteúdo de uma mensagem chega alterado ou corrompido ao destinatário, o canal apresenta:",
          opcoes: [
            "perda de dados",
            "perda de integridade",
            "perda de ordem",
            "perda de capacidade"
          ],
          correta: 1,
          explicacao: "A perda de integridade ocorre quando o conteúdo das mensagens é corrompido durante a transmissão."
        },
        {
          categoria: "Participantes",
          pergunta: "A comunicação do tipo M:N, na qual várias tarefas podem enviar e receber mensagens por um ponto comum, é implementada por meio de:",
          opcoes: [
            "um canal ponto a ponto exclusivo",
            "uma fila de impressão compartilhada",
            "um buffer de capacidade nula",
            "uma caixa postal (mailbox) ou barramento de mensagens"
          ],
          correta: 3,
          explicacao: "Na comunicação M:N, mecanismos como caixas postais (mailbox) e barramentos de mensagens (message bus) permitem que várias tarefas troquem mensagens."
        }
      ]
    }
  ]
});