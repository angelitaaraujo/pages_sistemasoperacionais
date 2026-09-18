JOGO2.registrar({
  id: "gestao-tarefas",
  titulo: "[Extra] Tópicos em gestão de tarefas",
  disciplina: "🔲 Gerência de Processador",
  descricao: "Atividade de estudo e revisão do capítulo 7: inversão de prioridade, herança de prioridade, o caso Mars Pathfinder e demais tópicos em gestão de tarefas.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Inversão de prioridade</h3>
    <p>A <strong>inversão de prioridade</strong> é um problema que ocorre em sistemas com escalonamento por prioridade quando uma tarefa de alta prioridade é indiretamente impedida de executar por uma tarefa de baixa prioridade. Isso acontece quando:</p>
    <ul>
      <li>Uma tarefa de baixa prioridade (Tb) adquire um recurso compartilhado (como um mutex).</li>
      <li>Uma tarefa de média prioridade (Tm), que não precisa do recurso, preempta Tb e começa a executar.</li>
      <li>Uma tarefa de alta prioridade (Ta) tenta adquirir o recurso que Tb possui, mas precisa esperar Tb liberá-lo.</li>
      <li>Como Tm está executando e Tb não consegue executar para liberar o recurso, Ta fica bloqueada por tempo indeterminado.</li>
    </ul>
    <p>O resultado é que uma tarefa de baixa prioridade (Tb) acaba definindo indiretamente o tempo de execução de uma tarefa de alta prioridade (Ta), invertendo a ordem esperada de prioridades.</p>

    <h3>Herança de prioridade</h3>
    <p>A <strong>herança de prioridade</strong> (priority inheritance) é uma técnica para evitar a inversão de prioridade. Quando uma tarefa de alta prioridade Ta tenta acessar um recurso mantido por uma tarefa de baixa prioridade Tb, Tb herda temporariamente a prioridade de Ta. Com isso:</p>
    <ul>
      <li>Tb passa a ter a mesma prioridade de Ta enquanto mantém o recurso.</li>
      <li>Tb volta a executar (agora com prioridade mais alta) e libera o recurso mais rapidamente.</li>
      <li>Ao liberar o recurso, Tb retorna à sua prioridade original.</li>
      <li>Ta pode então adquirir o recurso e executar.</li>
    </ul>
    <p>A herança de prioridade resolve o problema de bloqueio por tempo indeterminado, mas não evita que o bloqueio ocorra — apenas limita sua duração.</p>

    <h3>O caso Mars Pathfinder</h3>
    <p>Em 1997, a sonda Mars Pathfinder da NASA apresentou reinicializações constantes durante sua missão em Marte. A causa era um problema de <strong>inversão de prioridade</strong> no sistema operacional VxWorks:</p>
    <ul>
      <li>Uma tarefa de baixa prioridade (coleta de dados meteorológicos) adquiria um mutex.</li>
      <li>Uma tarefa de média prioridade (comunicação via rádio) executava por longos períodos.</li>
      <li>Uma tarefa de alta prioridade (barramento de dados) tentava acessar o mutex e ficava bloqueada.</li>
      <li>O watchdog timer detectava que a tarefa de alta prioridade não executava e reiniciava o sistema.</li>
    </ul>
    <p>A solução foi ativar o mecanismo de <strong>herança de prioridade</strong> no VxWorks, que já estava disponível no sistema, mas não estava habilitado. Após a ativação, o problema foi resolvido e a sonda continuou sua missão com sucesso.</p>

    <h3>Outras técnicas</h3>
    <ul>
      <li><strong>Teto de prioridade (priority ceiling):</strong> cada recurso compartilhado recebe um teto de prioridade igual à maior prioridade entre as tarefas que podem acessá-lo. Uma tarefa só acessa o recurso se sua prioridade for maior que o teto de todos os recursos atualmente bloqueados.</li>
      <li><strong>Protocolo de herança de prioridade:</strong> similar à herança simples, mas com regras mais rigorosas para evitar bloqueios encadeados.</li>
    </ul>
  `,
  fases: [
    {
      titulo: "Inversão de prioridade",
      perguntas: [
        {
          categoria: "Conceito",
          pergunta: "A inversão de prioridade ocorre quando uma tarefa de alta prioridade é indiretamente impedida de executar por uma tarefa de:",
          opcoes: [
            "prioridade dinâmica que acabou de ser criada",
            "baixa prioridade que retém um recurso compartilhado",
            "alta prioridade que está em estado suspenso",
            "média prioridade que liberou o processador"
          ],
          correta: 1,
          explicacao: "A inversão ocorre quando uma tarefa de baixa prioridade retém um recurso que a tarefa de alta prioridade necessita, enquanto uma tarefa de média prioridade impede a baixa de executar."
        },
        {
          categoria: "Conceito",
          pergunta: "Em um cenário de inversão de prioridade, três tarefas estão envolvidas. São elas:",
          opcoes: [
            "alta, baixa e média prioridade",
            "núcleo, sistema e usuário",
            "tempo real, lote e interativa",
            "pai, filho e órfã"
          ],
          correta: 0,
          explicacao: "O cenário clássico envolve três tarefas: uma de alta prioridade (Ta), uma de média prioridade (Tm) e uma de baixa prioridade (Tb)."
        },
        {
          categoria: "Conceito",
          pergunta: "Na inversão de prioridade, a tarefa de média prioridade acaba prejudicando a tarefa de alta prioridade porque:",
          opcoes: [
            "compartilha o mesmo recurso que a tarefa de alta prioridade",
            "possui prioridade mais baixa que a tarefa de alta prioridade",
            "libera o recurso antes que a tarefa de alta possa utilizá-lo",
            "executa e impede que a tarefa de baixa prioridade libere o recurso"
          ],
          correta: 3,
          explicacao: "A tarefa de média prioridade preempta a de baixa prioridade (que detém o recurso) e executa por tempo prolongado, impedindo que a baixa prioridade libere o recurso para a alta."
        },
        {
          categoria: "Conceito",
          pergunta: "O resultado direto da inversão de prioridade em um sistema de tempo real é:",
          opcoes: [
            "aumento da eficiência do processador com mais tarefas executando",
            "redução do tempo de resposta das tarefas de média prioridade",
            "bloqueio da tarefa de alta prioridade por tempo indeterminado",
            "liberação automática de todos os recursos do sistema"
          ],
          correta: 2,
          explicacao: "A inversão de prioridade faz com que a tarefa de alta prioridade fique bloqueada por tempo indeterminado, o que pode levar a falhas em sistemas de tempo real."
        },
        {
          categoria: "Conceito",
          pergunta: "Em sistemas de tempo real, a inversão de prioridade é considerada um problema grave porque:",
          opcoes: [
            "aumenta o consumo de energia do processador",
            "dificulta a instalação de novos drivers de dispositivo",
            "pode violar os prazos de execução das tarefas críticas",
            "reduz a quantidade de memória disponível para as aplicações"
          ],
          correta: 2,
          explicacao: "Em sistemas de tempo real, violar prazos pode causar falhas catastróficas. A inversão de prioridade impede que tarefas críticas cumpram seus prazos."
        },
        {
          categoria: "Conceito",
          pergunta: "Para que a inversão de prioridade ocorra, é necessário que:",
          opcoes: [
            "todas as tarefas tenham a mesma prioridade de execução",
            "o sistema utilize exclusivamente escalonamento cooperativo",
            "o processador possua múltiplos núcleos de execução",
            "exista um recurso compartilhado acessado por tarefas de diferentes prioridades"
          ],
          correta: 3,
          explicacao: "A inversão de prioridade depende de um recurso compartilhado (como um mutex) que seja acessado por tarefas com prioridades distintas."
        }
      ]
    },
    {
      titulo: "Herança de prioridade",
      perguntas: [
        {
          categoria: "Herança de prioridade",
          pergunta: "Na herança de prioridade, quando uma tarefa de alta prioridade tenta acessar um recurso mantido por uma de baixa prioridade, a tarefa de baixa prioridade:",
          opcoes: [
            "é suspensa até que a tarefa de alta prioridade termine",
            "herda temporariamente a prioridade da tarefa de alta prioridade",
            "transfere o recurso diretamente para a tarefa de alta prioridade",
            "tem sua prioridade reduzida para evitar novos bloqueios"
          ],
          correta: 1,
          explicacao: "A tarefa de baixa prioridade herda a prioridade da tarefa de alta, permitindo que ela execute e libere o recurso mais rapidamente."
        },
        {
          categoria: "Herança de prioridade",
          pergunta: "Após a tarefa de baixa prioridade liberar o recurso no mecanismo de herança de prioridade, sua prioridade:",
          opcoes: [
            "permanece elevada permanentemente",
            "é transferida para a tarefa de média prioridade",
            "retorna ao valor original que possuía antes da herança",
            "é reduzida abaixo do valor original"
          ],
          correta: 2,
          explicacao: "Ao liberar o recurso, a tarefa de baixa prioridade retorna à sua prioridade original, cessando o efeito da herança."
        },
        {
          categoria: "Herança de prioridade",
          pergunta: "A herança de prioridade resolve a inversão de prioridade ao:",
          opcoes: [
            "eliminar completamente a necessidade de bloqueio de recursos no sistema",
            "aumentar a prioridade da tarefa de média prioridade para que ela libere o processador",
            "remover o recurso compartilhado do sistema para evitar conflitos",
            "permitir que a tarefa de baixa prioridade execute e libere o recurso mais cedo"
          ],
          correta: 3,
          explicacao: "A herança de prioridade eleva temporariamente a prioridade da tarefa que detém o recurso, permitindo que ela execute e o libere mais rapidamente."
        },
        {
          categoria: "Herança de prioridade",
          pergunta: "Uma limitação da herança de prioridade é que ela:",
          opcoes: [
            "não evita o bloqueio, apenas limita sua duração",
            "impede completamente que o bloqueio ocorra no sistema",
            "funciona apenas em sistemas com um único processador",            
            "exige que todas as tarefas tenham a mesma prioridade"
          ],
          correta: 0,
          explicacao: "A herança de prioridade não impede que o bloqueio ocorra — a tarefa de alta ainda precisa esperar. Ela apenas limita o tempo de espera."
        },
        {
          categoria: "Herança de prioridade",
          pergunta: "No protocolo de teto de prioridade (priority ceiling), cada recurso compartilhado recebe um teto igual:",
          opcoes: [
            "à menor prioridade entre as tarefas que acessam o recurso",
            "à maior prioridade entre as tarefas que podem acessá-lo",
            "à prioridade média de todas as tarefas do sistema",
            "à prioridade atual da tarefa que está executando"
          ],
          correta: 1,
          explicacao: "O teto de prioridade de um recurso é definido como a maior prioridade entre todas as tarefas que podem acessá-lo."
        },
        {
          categoria: "Herança de prioridade",
          pergunta: "Uma tarefa só pode acessar um recurso no protocolo de teto de prioridade se sua prioridade for:",
          opcoes: [
            "menor que o teto de todos os recursos bloqueados no momento",
            "igual à prioridade da tarefa que criou o recurso",
            "maior que o teto de todos os recursos atualmente bloqueados",
            "diferente da prioridade das demais tarefas do sistema"
          ],
          correta: 2,
          explicacao: "No teto de prioridade, a tarefa só acessa o recurso se sua prioridade for maior que o teto de todos os recursos atualmente bloqueados, evitando bloqueios encadeados."
        }
      ]
    },
    {
      titulo: "Mars Pathfinder e aplicações",
      perguntas: [
        {
          categoria: "Mars Pathfinder",
          pergunta: "A sonda Mars Pathfinder da NASA, em 1997, apresentava reinicializações constantes causadas por:",
          opcoes: [
            "um erro de hardware no barramento de dados da sonda",
            "um problema de inversão de prioridade no sistema operacional VxWorks",
            "uma falha na comunicação via rádio com a base na Terra",
            "um vazamento de memória no subsistema de coleta de dados"
          ],
          correta: 1,
          explicacao: "A Mars Pathfinder sofria reinicializações devido à inversão de prioridade no VxWorks, que impedia a tarefa de alta prioridade de executar dentro do prazo."
        },
        {
          categoria: "Mars Pathfinder",
          pergunta: "Na missão Mars Pathfinder, a tarefa de alta prioridade que ficava bloqueada era responsável por:",
          opcoes: [
            "coletar dados meteorológicos da superfície de Marte",
            "gerenciar o barramento de dados da sonda",
                    "controlar a comunicação via rádio com a Terra",
            "processar as imagens capturadas pelas câmeras"
          ],
          correta: 1,
          explicacao: "A tarefa de alta prioridade geria o barramento de dados. Quando ficava bloqueada pela inversão de prioridade, o watchdog timer reiniciava o sistema."
        },
        {
          categoria: "Mars Pathfinder",
          pergunta: "O watchdog timer da Mars Pathfinder reiniciava o sistema porque detectava que:",
          opcoes: [
            "a temperatura da sonda ultrapassava os limites seguros",
            "a tarefa de alta prioridade não executava dentro do prazo esperado",
            "a bateria da sonda estava com carga insuficiente",
            "o disco rígido da sonda estava com setores danificados"
          ],
          correta: 1,
          explicacao: "O watchdog timer monitorava a execução da tarefa de alta prioridade. Quando ela não executava a tempo (devido à inversão), o watchdog reiniciava o sistema."
        },
        {
          categoria: "Mars Pathfinder",
          pergunta: "A solução aplicada para resolver o problema da Mars Pathfinder foi:",
          opcoes: [
            "substituir o sistema operacional VxWorks por um kernel Linux",
            "aumentar a prioridade da tarefa de coleta de dados meteorológicos",
            "ativar o mecanismo de herança de prioridade já disponível no VxWorks",
            "remover a tarefa de comunicação via rádio do sistema"
          ],
          correta: 2,
          explicacao: "O VxWorks já possuía o mecanismo de herança de prioridade, mas ele não estava ativado. Ao ativá-lo, o problema foi resolvido."
        },
        {
          categoria: "Mars Pathfinder",
          pergunta: "No caso Mars Pathfinder, a tarefa de baixa prioridade que adquiria o mutex era responsável por:",
          opcoes: [
            "gerenciar o barramento de dados da sonda",
            "coletar dados meteorológicos na superfície",
            "controlar a orientação dos painéis solares",
            "transmitir imagens para a base na Terra"
          ],
          correta: 1,
          explicacao: "A tarefa de coleta de dados meteorológicos (baixa prioridade) adquiria o mutex, enquanto a tarefa de barramento de dados (alta prioridade) ficava bloqueada."
        },
        {
          categoria: "Aplicações",
          pergunta: "Além da herança de prioridade, outra técnica para lidar com inversão de prioridade em sistemas de tempo real é:",
          opcoes: [
            "o escalonamento Round-Robin com quantum reduzido",            
            "a eliminação de todas as tarefas de média prioridade",
            "o uso exclusivo de escalonamento cooperativo",
            "o protocolo de teto de prioridade (priority ceiling)"
          ],
          correta: 3,
          explicacao: "O protocolo de teto de prioridade é outra técnica que evita inversões ao definir um teto para cada recurso, controlando quais tarefas podem acessá-lo."
        }
      ]
    }
  ]
});