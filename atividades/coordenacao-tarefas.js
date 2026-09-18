JOGO2.registrar({
  id: "so-cap10-coordenacao-tarefas",
  titulo: "Coordenação entre tarefas",
  disciplina: "🔲 Gerência de Processador",
  descricao: "Atividade de estudo e revisão do capítulo 10: concorrência, condições de corrida, condições de Bernstein, seção crítica, exclusão mútua, soluções por inibição de interrupções, variável de trava, alternância de uso, algoritmo de Peterson e operações atômicas (TSL, XCHG, CAS).",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Concorrência e condições de corrida</h3>
    <p>A <strong>concorrência</strong> ocorre quando duas ou mais tarefas compartilham o acesso a um mesmo recurso e suas execuções se intercalam no tempo. Quando o resultado final de uma computação depende da ordem em que as tarefas acessam o recurso compartilhado, temos uma <strong>condição de corrida</strong> (race condition).</p>

    <h3>Condições de Bernstein</h3>
    <p>As condições de Bernstein definem quando duas tarefas podem executar concorrentemente sem risco de condição de corrida. Se os conjuntos de leitura (R) e escrita (W) de duas tarefas não se sobrepõem de forma conflitante — ou seja, se R1 ∩ W2 = ∅, R2 ∩ W1 = ∅ e W1 ∩ W2 = ∅ — então elas podem executar em paralelo com segurança.</p>

    <h3>Seção crítica</h3>
    <p>Uma <strong>seção crítica</strong> é um trecho de código no qual uma tarefa acessa um recurso compartilhado. Para garantir a exclusão mútua, apenas uma tarefa por vez pode estar executando sua seção crítica relativa a um mesmo recurso. Uma solução de exclusão mútua deve atender a quatro requisitos:</p>
    <ul>
      <li><strong>Exclusão mútua:</strong> apenas uma tarefa por vez na seção crítica.</li>
      <li><strong>Progresso:</strong> se nenhuma tarefa está na seção crítica e há tarefas esperando, a decisão de quem entra deve ser tomada em tempo finito.</li>
      <li><strong>Espera limitada:</strong> uma tarefa não deve esperar indefinidamente para entrar na seção crítica.</li>
      <li><strong>Independência de velocidade:</strong> a solução não pode depender da velocidade relativa das tarefas.</li>
    </ul>

    <h3>Soluções de exclusão mútua</h3>
    <ul>
      <li><strong>Inibição de interrupções:</strong> desabilita as interrupções durante a seção crítica. Simples, mas só funciona em sistemas monoprocessados e impede o sistema de responder a eventos externos.</li>
      <li><strong>Variável de trava (busy variable):</strong> usa uma variável compartilhada para indicar se a seção crítica está ocupada. Pode falhar se a verificação e a atribuição não forem atômicas.</li>
      <li><strong>Alternância de uso (strict alternation):</strong> as tarefas alternam obrigatoriamente o acesso à seção crítica. Viola o requisito de progresso, pois uma tarefa pode estar pronta mas não pode entrar porque não é sua vez.</li>
      <li><strong>Algoritmo de Peterson:</strong> solução clássica para duas tarefas, combinando uma variável de turno e uma flag de interesse. Atende todos os requisitos de exclusão mútua.</li>
      <li><strong>Operações atômicas (TSL, XCHG, CAS):</strong> instruções especiais do processador que realizam leitura e escrita de forma indivisível. TSL (Test and Set Lock) lê e escreve um valor em uma única operação atômica. XCHG troca o conteúdo de dois registradores atomicamente. CAS (Compare and Swap) compara e troca um valor apenas se ele for igual a um esperado.</li>
    </ul>
  `,
  fases: [
    {
      titulo: "Concorrência e condições de corrida",
      perguntas: [
        {
          categoria: "Concorrência",
          pergunta: "A concorrência entre tarefas ocorre quando duas ou mais tarefas:",
          opcoes: [
            "executam exclusivamente em processadores distintos",
            "compartilham o acesso a um mesmo recurso com execuções intercaladas",
            "acessam apenas recursos privados e não compartilhados",
            "são executadas uma após a outra sem intercalação"
          ],
          correta: 1,
          explicacao: "A concorrência ocorre quando tarefas compartilham recursos e suas execuções se intercalam no tempo, podendo gerar condições de corrida."
        },
        {
          categoria: "Condições de corrida",
          pergunta: "Uma condição de corrida (race condition) é caracterizada quando:",
          opcoes: [
            "o resultado da computação independe da ordem de acesso ao recurso compartilhado",
            "as tarefas executam em processadores separados sem compartilhar dados",
            "o resultado final depende da ordem em que as tarefas acessam o recurso compartilhado",
            "a tarefa de maior prioridade sempre executa antes das demais"
          ],
          correta: 2,
          explicacao: "Uma condição de corrida ocorre quando o resultado depende da ordem de acesso ao recurso compartilhado, podendo variar a cada execução."
        },
        {
          categoria: "Condições de Bernstein",
          pergunta: "As condições de Bernstein determinam se duas tarefas podem:",
          opcoes: [
            "compartilhar o mesmo espaço de endereçamento de memória",
            "executar concorrentemente sem risco de condição de corrida",
            "acessar o mesmo arquivo no sistema de arquivos",
            "ser escalonadas com a mesma prioridade no processador"
          ],
          correta: 1,
          explicacao: "As condições de Bernstein verificam se os conjuntos de leitura e escrita de duas tarefas são disjuntos, permitindo execução concorrente segura."
        },
        {
          categoria: "Condições de Bernstein",
          pergunta: "Para que duas tarefas possam executar concorrentemente com segurança segundo Bernstein, é necessário que:",
          opcoes: [
            "W1 ∩ W2 ≠ ∅ e R1 ∩ W2 = ∅",
            "R1 ∩ W2 = ∅, R2 ∩ W1 = ∅ e W1 ∩ W2 = ∅",
            "R1 ∩ R2 = ∅ e W1 ∩ W2 ≠ ∅",
            "R1 ∩ W2 ≠ ∅ e R2 ∩ W1 ≠ ∅"
          ],
          correta: 1,
          explicacao: "As condições de Bernstein exigem que os conjuntos de leitura e escrita não se sobreponham de forma conflitante: R1∩W2=∅, R2∩W1=∅ e W1∩W2=∅."
        },
        {
          categoria: "Concorrência",
          pergunta: "Em um sistema com tarefas concorrentes que compartilham uma variável, uma condição de corrida pode ser evitada quando:",
          opcoes: [
            "as tarefas executam em processadores com velocidades diferentes",
            "o acesso ao recurso compartilhado é devidamente sincronizado",
            "a variável compartilhada é declarada como global no código",
            "cada tarefa possui sua própria cópia da variável em memória"
          ],
          correta: 1,
          explicacao: "A sincronização adequada do acesso ao recurso compartilhado evita condições de corrida, garantindo que apenas uma tarefa por vez o acesse."
        },
        {
          categoria: "Condições de corrida",
          pergunta: "Um exemplo clássico de condição de corrida ocorre quando duas tarefas:",
          opcoes: [
            "executam cálculos matemáticos independentes sem compartilhar dados",
            "leem e escrevem uma mesma variável compartilhada sem sincronização",
            "acessam arquivos diferentes em diretórios distintos do sistema",
            "utilizam exclusivamente recursos locais de cada processador"
          ],
          correta: 1,
          explicacao: "O exemplo clássico é quando duas tarefas leem e escrevem uma variável compartilhada sem sincronização, e o resultado depende da ordem das operações."
        }
      ]
    },
    {
      titulo: "Seção crítica e exclusão mútua",
      perguntas: [
        {
          categoria: "Seção crítica",
          pergunta: "Uma seção crítica é definida como um trecho de código no qual uma tarefa:",
          opcoes: [
            "executa operações matemáticas de alta complexidade",
            "realiza chamadas de sistema para o núcleo do SO",
            "acessa um recurso compartilhado com outras tarefas",
            "aloca memória dinamicamente no espaço de usuário"
          ],
          correta: 2,
          explicacao: "A seção crítica é o trecho de código onde a tarefa acessa um recurso compartilhado, exigindo exclusão mútua para evitar condições de corrida."
        },
        {
          categoria: "Exclusão mútua",
          pergunta: "O requisito de exclusão mútua estabelece que:",
          opcoes: [
            "todas as tarefas devem executar suas seções críticas simultaneamente",
            "apenas uma tarefa por vez pode estar em sua seção crítica relativa a um mesmo recurso",
            "nenhuma tarefa pode ter seções críticas em seu código",
            "a tarefa de maior prioridade sempre entra primeiro na seção crítica"
          ],
          correta: 1,
          explicacao: "A exclusão mútua garante que apenas uma tarefa por vez execute sua seção crítica relativa a um mesmo recurso compartilhado."
        },
        {
          categoria: "Exclusão mútua",
          pergunta: "O requisito de progresso em soluções de exclusão mútua determina que:",
          opcoes: [
            "a tarefa que está na seção crítica deve progredir o mais rápido possível",
            "se nenhuma tarefa está na seção crítica, a decisão de quem entra deve ser tomada em tempo finito",
            "todas as tarefas devem progredir igualmente em suas execuções",
            "a tarefa com menor prioridade nunca deve entrar na seção crítica"
          ],
          correta: 1,
          explicacao: "O progresso exige que, se ninguém está na seção crítica e há tarefas esperando, a escolha de quem entra deve ocorrer em tempo finito."
        },
        {
          categoria: "Exclusão mútua",
          pergunta: "O requisito de espera limitada em exclusão mútua significa que:",
          opcoes: [
            "uma tarefa pode esperar indefinidamente para entrar na seção crítica",
            "o tempo de espera na seção crítica é ilimitado para tarefas de maior prioridade",
            "uma tarefa não deve esperar indefinidamente para entrar na seção crítica",
            "apenas tarefas de tempo real podem ter espera limitada"
          ],
          correta: 2,
          explicacao: "A espera limitada garante que nenhuma tarefa fique esperando eternamente para entrar na seção crítica, prevenindo a inanição."
        },
        {
          categoria: "Exclusão mútua",
          pergunta: "O requisito de independência de velocidade em exclusão mútua estabelece que:",
          opcoes: [
            "a solução depende da velocidade relativa entre as tarefas concorrentes",
            "a solução não pode depender da velocidade relativa das tarefas",
            "as tarefas mais rápidas devem ter prioridade na seção crítica",
            "o processador deve executar todas as tarefas na mesma velocidade"
          ],
          correta: 1,
          explicacao: "A independência de velocidade exige que a solução funcione corretamente independentemente da velocidade relativa de execução das tarefas."
        },
        {
          categoria: "Seção crítica",
          pergunta: "Para garantir a exclusão mútua, o código de uma tarefa deve ser organizado em:",
          opcoes: [
            "região de entrada, seção crítica e região de saída",
            "apenas a seção crítica, sem regiões de entrada e saída",
            "seção crítica, região de espera e região de término",
            "região de entrada, região de saída e região de espera"
          ],
          correta: 0,
          explicacao: "A organização típica inclui: região de entrada (solicita acesso), seção crítica (acessa o recurso) e região de saída (libera o recurso)."
        }
      ]
    },
    {
      titulo: "Soluções de exclusão mútua",
      perguntas: [
        {
          categoria: "Inibição de interrupções",
          pergunta: "A solução de inibição de interrupções para exclusão mútua consiste em:",
          opcoes: [
            "desabilitar as interrupções durante a execução da seção crítica",
            "aumentar a prioridade da tarefa que está na seção crítica",
            "criar uma fila de interrupções para cada tarefa do sistema",
            "redirecionar todas as interrupções para um processador secundário"
          ],
          correta: 0,
          explicacao: "A inibição de interrupções desabilita as interrupções durante a seção crítica, impedindo que o sistema alterne de contexto e outra tarefa acesse o recurso."
        },
        {
          categoria: "Inibição de interrupções",
          pergunta: "Uma limitação da solução por inibição de interrupções é que ela:",
          opcoes: [
            "funciona apenas em sistemas com múltiplos processadores",
            "impede o sistema de responder a eventos externos durante a seção crítica",
            "exige hardware especializado não disponível em processadores comuns",
            "só pode ser usada por tarefas do espaço de usuário"
          ],
          correta: 1,
          explicacao: "Ao desabilitar as interrupções, o sistema não responde a eventos externos, o que pode causar perda de dados ou atrasos críticos."
        },
        {
          categoria: "Variável de trava",
          pergunta: "A solução por variável de trava (busy variable) pode falhar porque:",
          opcoes: [
            "a variável nunca pode ser alterada após a inicialização",
            "a verificação e a atribuição da variável podem não ser atômicas",
            "a variável ocupa muito espaço na memória principal",
            "apenas o sistema operacional pode criar variáveis de trava"
          ],
          correta: 1,
          explicacao: "Se a verificação (testar se está livre) e a atribuição (marcar como ocupado) não forem atômicas, duas tarefas podem passar pela verificação simultaneamente."
        },
        {
          categoria: "Alternância de uso",
          pergunta: "A solução por alternância de uso (strict alternation) viola qual requisito da exclusão mútua?",
          opcoes: [
            "Exclusão mútua",
            "Espera limitada",
            "Progresso",
            "Independência de velocidade"
          ],
          correta: 2,
          explicacao: "A alternância viola o progresso porque uma tarefa pode estar pronta para entrar na seção crítica, mas não pode porque não é sua vez."
        },
        {
          categoria: "Algoritmo de Peterson",
          pergunta: "O algoritmo de Peterson resolve a exclusão mútua para quantas tarefas?",
          opcoes: [
            "N tarefas, sendo N qualquer número inteiro positivo",
            "Apenas uma tarefa por processador",
            "Duas tarefas",
            "Até quatro tarefas simultâneas"
          ],
          correta: 2,
          explicacao: "O algoritmo de Peterson é uma solução clássica para exclusão mútua entre exatamente duas tarefas, combinando variável de turno e flag de interesse."
        },
        {
          categoria: "Operações atômicas",
          pergunta: "A instrução TSL (Test and Set Lock) realiza em uma única operação indivisível:",
          opcoes: [
            "a comparação de dois valores e a troca condicional",
            "a leitura e a escrita de um valor na memória",
            "a troca do conteúdo entre dois registradores",
            "a soma de dois valores e o armazenamento do resultado"
          ],
          correta: 1,
          explicacao: "A instrução TSL lê o valor de uma posição de memória e escreve um novo valor nela em uma única operação atômica, garantindo exclusão mútua."
        }
      ]
    }
  ]
});