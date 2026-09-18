JOGO2.registrar({
  id: "impasses",
  titulo: "Impasses (Deadlocks)",
  disciplina: "🔲 Gerência de Processador",
  descricao: "Atividade de estudo e revisão do capítulo 13: conceito de impasse, exemplo clássico, quatro condições necessárias, grafos de alocação de recursos, prevenção, impedimento (algoritmo do banqueiro), detecção e resolução de impasses.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>O que é um impasse (deadlock)?</h3>
    <p>Um <strong>impasse</strong> (deadlock) é uma situação em que duas ou mais tarefas ficam bloqueadas permanentemente, cada uma aguardando um recurso que está retido por outra tarefa do conjunto. Nenhuma das tarefas envolvidas consegue progredir, e o sistema pode parar parcial ou completamente.</p>

    <h3>Exemplo clássico</h3>
    <p>Duas tarefas precisam acessar duas contas bancárias para realizar transferências. A tarefa A bloqueia a conta X e tenta bloquear a conta Y; simultaneamente, a tarefa B bloqueia a conta Y e tenta bloquear a conta X. Ambas ficam esperando eternamente pelo recurso que a outra detém.</p>

    <h3>Quatro condições necessárias para o impasse</h3>
    <ul>
      <li><strong>Exclusão mútua:</strong> os recursos envolvidos não podem ser compartilhados; apenas uma tarefa por vez pode usá-los.</li>
      <li><strong>Posse e espera (hold and wait):</strong> uma tarefa retém um recurso enquanto aguarda a obtenção de outros recursos.</li>
      <li><strong>Não preempção:</strong> os recursos não podem ser retirados à força de uma tarefa; apenas a própria tarefa pode liberá-los.</li>
      <li><strong>Espera circular:</strong> existe um ciclo de tarefas no qual cada uma aguarda um recurso retido pela seguinte.</li>
    </ul>
    <p>Essas quatro condições são necessárias, mas não suficientes, para a ocorrência de um impasse. Se qualquer uma delas for eliminada, o impasse não pode ocorrer.</p>

    <h3>Grafos de alocação de recursos</h3>
    <p>Um grafo de alocação de recursos representa graficamente as relações entre tarefas e recursos. Tarefas são representadas por círculos, recursos por quadrados, arestas de solicitação (tarefa → recurso) e arestas de alocação (recurso → tarefa). A presença de um ciclo no grafo pode indicar um impasse. Com recursos de instância única, um ciclo garante impasse; com múltiplas instâncias, um ciclo é necessário mas não suficiente.</p>

    <h3>Técnicas de tratamento de impasses</h3>
    <ul>
      <li><strong>Prevenção:</strong> eliminar uma das quatro condições necessárias. Exemplos: spooling (elimina exclusão mútua), solicitar todos os recursos no início (elimina posse e espera), preempção de recursos (elimina não preempção), ordenação de recursos (elimina espera circular).</li>
      <li><strong>Impedimento (avoidance):</strong> o sistema avalia cada solicitação de recurso e só a concede se o estado resultante for seguro. O algoritmo do banqueiro (Banker's Algorithm) é o exemplo clássico: ele verifica se existe uma sequência segura de execução para todas as tarefas.</li>
      <li><strong>Detecção e resolução:</strong> o sistema permite que impasses ocorram, mas os detecta (por exemplo, por meio de ciclos no grafo de alocação) e os resolve, geralmente eliminando uma ou mais tarefas envolvidas ou forçando a liberação de recursos.</li>
    </ul>
  `,
  fases: [
    {
      titulo: "Conceito e condições do impasse",
      perguntas: [
        {
          categoria: "Conceito de impasse",
          pergunta: "Um impasse (deadlock) é uma situação em que duas ou mais tarefas ficam bloqueadas permanentemente porque:",
          opcoes: [
            "cada uma aguarda um recurso retido por outra tarefa do conjunto",
            "o processador não consegue executar todas ao mesmo tempo",
            "a memória disponível é insuficiente para todas as tarefas",
            "o sistema operacional foi reiniciado inesperadamente"
          ],
          correta: 0,
          explicacao: "No impasse, cada tarefa do conjunto aguarda um recurso que está retido por outra tarefa do mesmo conjunto, formando um bloqueio mútuo permanente."
        },
        {
          categoria: "Exemplo clássico",
          pergunta: "No exemplo clássico de impasse com duas contas bancárias, a situação de deadlock ocorre quando:",
          opcoes: [
            "ambas as contas têm saldo insuficiente para as transferências solicitadas",
            "a tarefa A bloqueia a conta X e a tarefa B bloqueia a conta Y, e cada uma espera pela outra",
            "o banco central define uma taxa de juros que impede as transferências entre as contas",
            "o sistema operacional não consegue alocar memória para as transações"
          ],
          correta: 1,
          explicacao: "O deadlock ocorre quando A bloqueia X e espera Y, enquanto B bloqueia Y e espera X — ambas aguardam eternamente pelo recurso que a outra detém."
        },
        {
          categoria: "Condições necessárias",
          pergunta: "A condição de exclusão mútua, necessária para a ocorrência de um impasse, significa que:",
          opcoes: [
            "os recursos envolvidos podem ser compartilhados por várias tarefas simultaneamente",
            "apenas uma tarefa por vez pode utilizar cada recurso envolvido",
            "as tarefas devem executar em modo exclusivo no processador",
            "os recursos são alocados apenas para tarefas do sistema operacional"
          ],
          correta: 1,
          explicacao: "A exclusão mútua exige que os recursos não sejam compartilháveis — apenas uma tarefa por vez pode utilizá-los."
        },
        {
          categoria: "Condições necessárias",
          pergunta: "A condição de posse e espera (hold and wait) para ocorrência de impasse significa que:",
          opcoes: [
            "a tarefa libera todos os recursos antes de solicitar novos",
            "os recursos podem ser retirados à força de qualquer tarefa",
            "a tarefa retém um recurso enquanto aguarda a obtenção de outros",
            "não existe um ciclo de espera entre as tarefas"
          ],
          correta: 2,
          explicacao: "Na condição de posse e espera, a tarefa mantém os recursos já alocados enquanto solicita e aguarda novos recursos."
        },
        {
          categoria: "Condições necessárias",
          pergunta: "A condição de não preempção, necessária para o impasse, estabelece que:",
          opcoes: [
            "o sistema operacional pode retirar recursos de qualquer tarefa a qualquer momento",
            "os recursos só podem ser liberados voluntariamente pela tarefa que os detém",
            "as tarefas de maior prioridade podem preemptar recursos das de menor prioridade",
            "os recursos são automaticamente devolvidos ao sistema após um tempo limite"
          ],
          correta: 1,
          explicacao: "A não preempção significa que os recursos não podem ser retirados à força; apenas a tarefa que os detém pode liberá-los."
        },
        {
          categoria: "Condições necessárias",
          pergunta: "A condição de espera circular para ocorrência de impasse significa que:",
          opcoes: [
            "as tarefas são organizadas em uma fila circular de prioridades",
            "existe um ciclo no qual cada tarefa aguarda um recurso retido pela seguinte",
            "os recursos são alocados em ordem circular de endereços de memória",
            "o processador alterna as tarefas em um ciclo infinito de execução"
          ],
          correta: 1,
          explicacao: "Na espera circular, existe um ciclo de tarefas: T1 espera recurso de T2, T2 espera recurso de T3, ..., Tn espera recurso de T1."
        }
      ]
    },
    {
      titulo: "Grafos de alocação de recursos",
      perguntas: [
        {
          categoria: "Grafos de alocação",
          pergunta: "Em um grafo de alocação de recursos, as tarefas são representadas por:",
          opcoes: [
            "quadrados",
            "losangos",
            "triângulos",
            "círculos"
          ],
          correta: 3,
          explicacao: "Em um grafo de alocação de recursos, tarefas são representadas por círculos e recursos por quadrados."
        },
        {
          categoria: "Grafos de alocação",
          pergunta: "Em um grafo de alocação de recursos, os recursos são representados por:",
          opcoes: [
            "círculos",
            "quadrados",
            "losangos",
            "setas"
          ],
          correta: 1,
          explicacao: "Recursos são representados por quadrados no grafo de alocação, enquanto tarefas são círculos."
        },
        {
          categoria: "Grafos de alocação",
          pergunta: "Uma aresta direcionada de uma tarefa para um recurso no grafo de alocação indica:",
          opcoes: [
            "que o recurso está alocado à tarefa",
            "que a tarefa está solicitando o recurso",
            "que o recurso foi liberado pela tarefa",
            "que a tarefa terminou sua execução"
          ],
          correta: 1,
          explicacao: "Uma aresta de tarefa → recurso representa uma solicitação: a tarefa está aguardando aquele recurso."
        },
        {
          categoria: "Grafos de alocação",
          pergunta: "Uma aresta direcionada de um recurso para uma tarefa no grafo de alocação indica:",
          opcoes: [
            "que a tarefa está solicitando o recurso",
            "que o recurso foi liberado pela tarefa",
            "que o recurso está alocado à tarefa",
            "que a tarefa foi bloqueada pelo recurso"
          ],
          correta: 2,
          explicacao: "Uma aresta de recurso → tarefa representa alocação: o recurso está atualmente atribuído àquela tarefa."
        },
        {
          categoria: "Grafos de alocação",
          pergunta: "Em sistemas com recursos de instância única, a presença de um ciclo no grafo de alocação:",
          opcoes: [
            "garante que não há impasse no sistema",
            "indica que o sistema está em estado seguro",
            "garante a existência de um impasse",
            "mostra que todas as tarefas terminaram"
          ],
          correta: 2,
          explicacao: "Com recursos de instância única, um ciclo no grafo de alocação garante a existência de um impasse."
        },
        {
          categoria: "Grafos de alocação",
          pergunta: "Em sistemas com recursos de múltiplas instâncias, a presença de um ciclo no grafo de alocação:",
          opcoes: [
            "é necessária mas não suficiente para garantir impasse",
            "garante que não há impasse no sistema",
            "elimina a possibilidade de espera circular",
            "prova que o sistema está em estado seguro"
          ],
          correta: 0,
          explicacao: "Com múltiplas instâncias, um ciclo é necessário para o impasse, mas não suficiente — pode haver ciclo sem impasse se houver recursos disponíveis para quebrá-lo."
        }
      ]
    },
    {
      titulo: "Prevenção, impedimento e detecção",
      perguntas: [
        {
          categoria: "Prevenção",
          pergunta: "A técnica de spooling, que permite que várias tarefas compartilhem um dispositivo sem acesso exclusivo, elimina qual condição necessária para o impasse?",
          opcoes: [
            "Posse e espera",
            "Espera circular",
            "Exclusão mútua",
            "Não preempção"
          ],
          correta: 2,
          explicacao: "O spooling elimina a exclusão mútua ao permitir que várias tarefas compartilhem o mesmo dispositivo (como uma impressora) sem precisar de acesso exclusivo."
        },
        {
          categoria: "Prevenção",
          pergunta: "A estratégia de exigir que uma tarefa solicite todos os recursos de que precisa antes de começar a executar elimina qual condição necessária para o impasse?",
          opcoes: [
            "Exclusão mútua",
            "Posse e espera",
            "Não preempção",
            "Espera circular"
          ],
          correta: 1,
          explicacao: "Ao solicitar todos os recursos no início, a tarefa não retém recursos enquanto espera por outros — elimina a condição de posse e espera."
        },
        {
          categoria: "Prevenção",
          pergunta: "A ordenação de recursos, na qual todas as tarefas devem solicitar os recursos em uma ordem predefinida, elimina qual condição necessária para o impasse?",
          opcoes: [
            "Exclusão mútua",
            "Posse e espera",
            "Não preempção",
            "Espera circular"
          ],
          correta: 3,
          explicacao: "A ordenação de recursos impede a formação de ciclos de espera, eliminando a condição de espera circular."
        },
        {
          categoria: "Impedimento",
          pergunta: "O algoritmo do banqueiro (Banker's Algorithm) é uma técnica de:",
          opcoes: [
            "detecção de impasses já ocorridos",
            "prevenção de impasses por eliminação de condições",
            "impedimento (avoidance) de impasses",
            "resolução de impasses por eliminação de tarefas"
          ],
          correta: 2,
          explicacao: "O algoritmo do banqueiro é uma técnica de impedimento (avoidance): ele avalia cada solicitação e só a concede se o estado resultante for seguro."
        },
        {
          categoria: "Impedimento",
          pergunta: "No algoritmo do banqueiro, um estado é considerado seguro quando:",
          opcoes: [
            "todas as tarefas já terminaram sua execução",
            "existe uma sequência na qual todas as tarefas podem terminar sem impasse",
            "nenhuma tarefa solicitou recursos ao sistema",
            "todos os recursos estão disponíveis e nenhum foi alocado"
          ],
          correta: 1,
          explicacao: "Um estado seguro é aquele para o qual existe pelo menos uma sequência de execução na qual todas as tarefas conseguem obter seus recursos e terminar."
        },
        {
          categoria: "Detecção e resolução",
          pergunta: "Na técnica de detecção e resolução de impasses, após detectar um impasse, uma possível ação de resolução é:",
          opcoes: [
            "aumentar a prioridade de todas as tarefas envolvidas",
            "eliminar uma ou mais tarefas envolvidas no impasse",
            "adicionar mais memória RAM ao sistema",
            "recompilar o kernel do sistema operacional"
          ],
          correta: 1,
          explicacao: "Uma forma comum de resolver impasses é eliminar (abortar) uma ou mais tarefas envolvidas, liberando seus recursos para as demais."
        }
      ]
    }
  ]
});