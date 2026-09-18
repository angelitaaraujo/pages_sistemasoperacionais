JOGO2.registrar({
  id: "mecanismos-coordenacao",
  titulo: "Mecanismos de coordenação",
  disciplina: "🔲 Gerência de Processador",
  descricao: "Atividade de estudo e revisão do capítulo 11: semáforos, operações down e up, semáforos binários e mutexes, variáveis de condição e monitores.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Semáforos</h3>
    <p>O <strong>semáforo</strong> é um mecanismo de coordenação proposto por Edsger Dijkstra para garantir a exclusão mútua e a sincronização entre tarefas. Um semáforo é uma variável inteira não negativa, associada a uma fila de tarefas bloqueadas, e é manipulado por três operações:</p>
    <ul>
      <li><strong>init(s, v):</strong> inicializa o semáforo s com o valor v.</li>
      <li><strong>down(s) ou P(s):</strong> se o valor de s for maior que zero, decrementa-o; caso contrário, a tarefa é bloqueada e colocada na fila do semáforo.</li>
      <li><strong>up(s) ou V(s):</strong> incrementa o valor de s e, se houver tarefas bloqueadas na fila, libera uma delas.</li>
    </ul>
    <p>As operações down e up devem ser <strong>atômicas</strong>, ou seja, não podem ser interrompidas no meio de sua execução, para evitar condições de corrida sobre o próprio semáforo.</p>

    <h3>Semáforos binários e mutexes</h3>
    <ul>
      <li><strong>Semáforo binário:</strong> assume apenas os valores 0 e 1, sendo usado para exclusão mútua.</li>
      <li><strong>Mutex:</strong> um semáforo binário simplificado, usado exclusivamente para exclusão mútua. A tarefa que executou a operação de bloqueio (lock) é a única autorizada a executar a operação de desbloqueio (unlock).</li>
    </ul>
    <p>Na API POSIX, os mutexes são manipulados por funções como pthread_mutex_init, pthread_mutex_lock, pthread_mutex_trylock, pthread_mutex_unlock e pthread_mutex_destroy. No Windows, há CreateMutex, WaitForSingleObject e ReleaseMutex.</p>

    <h3>Variáveis de condição</h3>
    <p>Uma <strong>variável de condição</strong> está associada a uma condição lógica do programa e permite que uma tarefa aguarde até que essa condição seja satisfeita. As operações principais são:</p>
    <ul>
      <li><strong>wait(c):</strong> bloqueia a tarefa até que a condição c seja sinalizada.</li>
      <li><strong>signal(c) ou notify(c):</strong> libera uma tarefa bloqueada na condição c.</li>
      <li><strong>broadcast(c):</strong> libera todas as tarefas bloqueadas na condição c.</li>
    </ul>
    <p>As variáveis de condição devem ser usadas em conjunto com um mutex, que protege o acesso à condição e aos dados compartilhados. Na API POSIX, são usadas as funções pthread_cond_wait, pthread_cond_signal e pthread_cond_broadcast.</p>

    <h3>Monitores</h3>
    <p>O <strong>monitor</strong> é um mecanismo de coordenação de alto nível, proposto por Per Brinch Hansen e Charles Hoare em 1972. Um monitor encapsula:</p>
    <ul>
      <li>um recurso compartilhado;</li>
      <li>as rotinas de acesso a esse recurso;</li>
      <li>um mutex que garante a exclusão mútua;</li>
      <li>um invariante que define o estado consistente do recurso.</li>
    </ul>
    <p>O compilador insere automaticamente as operações de bloqueio e desbloqueio (lock/unlock) nas rotinas do monitor, garantindo que apenas uma tarefa por vez acesse o recurso. Em Java, o mecanismo é implementado pela palavra-chave synchronized.</p>
  `,
  fases: [
    {
      titulo: "Semáforos e operações",
      perguntas: [
        {
          categoria: "Semáforos",
          pergunta: "O semáforo, mecanismo de coordenação proposto por Edsger Dijkstra, é uma variável que:",
          opcoes: [
            "armazena apenas os valores 0 e 1 para controle de fluxo",
            "assume valores inteiros não negativos e é associada a uma fila de tarefas bloqueadas",
            "guarda o endereço da seção crítica de cada tarefa",
            "mantém o valor do contador de programa da tarefa em execução"
          ],
          correta: 1,
          explicacao: "O semáforo é uma variável inteira não negativa associada a uma fila de tarefas bloqueadas, manipulada pelas operações init, down e up."
        },
        {
          categoria: "Semáforos",
          pergunta: "A operação init(s, v) em um semáforo tem como função:",
          opcoes: [
            "incrementar o valor do semáforo s",
            "bloquear uma tarefa na fila do semáforo s",
            "inicializar o semáforo s com o valor v",
            "liberar uma tarefa bloqueada no semáforo s"
          ],
          correta: 2,
          explicacao: "A operação init(s, v) inicializa o semáforo s com o valor v, definindo seu estado inicial antes do uso."
        },
        {
          categoria: "Semáforos",
          pergunta: "Na operação down(s) ou P(s), quando o valor do semáforo s é igual a zero, a tarefa que a executa:",
          opcoes: [
            "é bloqueada e colocada na fila do semáforo",
            "decrementa o semáforo e continua executando",
            "incrementa o semáforo e libera outra tarefa",
            "é encerrada imediatamente pelo sistema"
          ],
          correta: 0,
          explicacao: "Se o valor de s é zero, a tarefa não pode decrementá-lo e é bloqueada, sendo colocada na fila do semáforo até que outra tarefa execute up."
        },
        {
          categoria: "Semáforos",
          pergunta: "Na operação up(s) ou V(s), quando o valor do semáforo s é incrementado e há tarefas bloqueadas na fila, o sistema:",
          opcoes: [
            "mantém todas as tarefas bloqueadas na fila",
            "bloqueia a tarefa que executou a operação up",
            "descarta a fila de tarefas do semáforo",
            "libera uma das tarefas bloqueadas na fila"
          ],
          correta: 3,
          explicacao: "A operação up incrementa o valor de s e, se houver tarefas bloqueadas, libera uma delas da fila do semáforo."
        },
        {
          categoria: "Semáforos",
          pergunta: "Para que o semáforo funcione corretamente, as operações down e up devem ser:",
          opcoes: [
            "atômicas, não podendo ser interrompidas no meio da execução",
            "executadas apenas em modo usuário do sistema",
            "sempre acompanhadas de uma operação de entrada e saída",
            "realizadas exclusivamente pelo processo pai"
          ],
          correta: 0,
          explicacao: "As operações down e up devem ser atômicas para evitar condições de corrida sobre o próprio semáforo durante sua manipulação."
        },
        {
          categoria: "Semáforos",
          pergunta: "Um semáforo que assume apenas os valores 0 e 1, utilizado para exclusão mútua, é denominado:",
          opcoes: [
            "semáforo contador",
            "semáforo binário",
            "semáforo de fila",
            "semáforo de recurso"
          ],
          correta: 1,
          explicacao: "O semáforo binário assume apenas os valores 0 e 1 e é usado para garantir a exclusão mútua no acesso a um recurso compartilhado."
        }
      ]
    },
    {
      titulo: "Mutexes",
      perguntas: [
        {
          categoria: "Mutexes",
          pergunta: "Um mutex é um mecanismo de coordenação que se diferencia do semáforo binário por:",
          opcoes: [
            "permitir que várias tarefas executem a operação de desbloqueio",
            "ser usado exclusivamente para exclusão mútua, com lock e unlock pela mesma tarefa",
            "assumir valores inteiros maiores que um para contar recursos",
            "dispensar qualquer operação de inicialização antes do uso"
          ],
          correta: 1,
          explicacao: "O mutex é um semáforo binário simplificado, usado exclusivamente para exclusão mútua; a tarefa que faz o lock é a única autorizada a fazer o unlock."
        },
        {
          categoria: "Mutexes",
          pergunta: "Na API POSIX, a função utilizada para bloquear (adquirir) um mutex é:",
          opcoes: [
            "pthread_mutex_lock",
            "pthread_mutex_init",
            "pthread_mutex_unlock",
            "pthread_mutex_destroy"
          ],
          correta: 0,
          explicacao: "pthread_mutex_lock adquire o mutex, bloqueando a tarefa se ele estiver ocupado. pthread_mutex_unlock o libera."
        },
        {
          categoria: "Mutexes",
          pergunta: "Na API POSIX, a função pthread_mutex_trylock tem como comportamento:",
          opcoes: [
            "bloquear a tarefa até que o mutex seja liberado",
            "destruir o mutex e liberar seus recursos",
            "inicializar o mutex com o estado desbloqueado",
            "tentar adquirir o mutex sem bloquear a tarefa se ele estiver ocupado"
          ],
          correta: 3,
          explicacao: "pthread_mutex_trylock tenta adquirir o mutex; se ele estiver ocupado, retorna imediatamente sem bloquear a tarefa."
        },
        {
          categoria: "Mutexes",
          pergunta: "Na API POSIX, a função responsável por liberar (desbloquear) um mutex é:",
          opcoes: [
            "pthread_mutex_lock",
            "pthread_mutex_unlock",
            "pthread_mutex_init",
            "pthread_mutex_trylock"
          ],
          correta: 1,
          explicacao: "pthread_mutex_unlock libera o mutex, permitindo que outra tarefa bloqueada possa adquiri-lo."
        },
        {
          categoria: "Mutexes",
          pergunta: "No Windows, a função utilizada para adquirir um mutex é:",
          opcoes: [
            "ReleaseMutex",
            "CreateMutex",
            "WaitForSingleObject",
            "DeleteMutex"
          ],
          correta: 2,
          explicacao: "No Windows, WaitForSingleObject é usada para aguardar e adquirir o mutex. CreateMutex o cria e ReleaseMutex o libera."
        },
        {
          categoria: "Mutexes",
          pergunta: "No Windows, a função responsável por liberar um mutex adquirido é:",
          opcoes: [
            "ReleaseMutex",
            "CreateMutex",
            "WaitForSingleObject",
            "OpenMutex"
          ],
          correta: 0,
          explicacao: "ReleaseMutex libera o mutex no Windows, enquanto CreateMutex o cria e WaitForSingleObject o adquire."
        }
      ]
    },
    {
      titulo: "Variáveis de condição e monitores",
      perguntas: [
        {
          categoria: "Variáveis de condição",
          pergunta: "Uma variável de condição está associada a uma condição lógica do programa e permite que uma tarefa:",
          opcoes: [
            "aguarde até que a condição seja satisfeita",
            "execute a seção crítica sem exclusão mútua",
            "incremente o valor de um semáforo contador",
            "altere a prioridade das demais tarefas"
          ],
          correta: 0,
          explicacao: "A variável de condição permite que uma tarefa aguarde até que uma condição lógica seja satisfeita, sendo sinalizada por outra tarefa."
        },
        {
          categoria: "Variáveis de condição",
          pergunta: "A operação wait(c) em uma variável de condição tem como efeito:",
          opcoes: [
            "liberar todas as tarefas bloqueadas na condição c",
            "bloquear a tarefa até que a condição c seja sinalizada",
            "incrementar o valor associado à condição c",
            "encerrar a tarefa que executou a operação"
          ],
          correta: 1,
          explicacao: "A operação wait(c) bloqueia a tarefa até que a condição c seja sinalizada por outra tarefa."
        },
        {
          categoria: "Variáveis de condição",
          pergunta: "A operação broadcast(c) em uma variável de condição tem como efeito:",
          opcoes: [
            "liberar todas as tarefas bloqueadas na condição c",
            "bloquear a tarefa que executou a operação",
            "liberar apenas a primeira tarefa da fila da condição c",
            "destruir a variável de condição c"
          ],
          correta: 0,
          explicacao: "A operação broadcast(c) libera todas as tarefas bloqueadas na condição c, ao contrário de signal, que libera apenas uma."
        },
        {
          categoria: "Variáveis de condição",
          pergunta: "Para funcionar corretamente, as variáveis de condição devem ser usadas em conjunto com:",
          opcoes: [
            "um semáforo contador de recursos",
            "uma fila de mensagens do sistema",
            "um mutex que protege o acesso à condição",
            "um buffer de memória compartilhada"
          ],
          correta: 2,
          explicacao: "As variáveis de condição devem ser usadas com um mutex, que protege o acesso à condição e aos dados compartilhados."
        },
        {
          categoria: "Monitores",
          pergunta: "O monitor, mecanismo de coordenação proposto por Hansen e Hoare, encapsula:",
          opcoes: [
            "um recurso compartilhado, suas rotinas de acesso, um mutex e um invariante",
            "apenas um semáforo binário e sua fila de tarefas",
            "uma variável de condição e um buffer de mensagens",
            "o descritor de tarefa e o contexto de hardware"
          ],
          correta: 0,
          explicacao: "O monitor encapsula um recurso compartilhado, as rotinas de acesso, um mutex para exclusão mútua e um invariante que define o estado consistente."
        },
        {
          categoria: "Monitores",
          pergunta: "Em um monitor, a garantia de exclusão mútua é obtida porque:",
          opcoes: [
            "o programador insere manualmente as operações de lock e unlock em cada rotina",
            "o compilador insere automaticamente as operações de bloqueio e desbloqueio nas rotinas",
            "o sistema operacional escalona as rotinas do monitor com prioridade máxima",
            "as rotinas do monitor executam em modo núcleo do sistema"
          ],
          correta: 1,
          explicacao: "No monitor, o compilador insere automaticamente as operações de lock/unlock nas rotinas, garantindo que apenas uma tarefa por vez acesse o recurso."
        }
      ]
    }
  ]
});