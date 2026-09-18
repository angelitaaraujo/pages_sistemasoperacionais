JOGO2.registrar({
  id: "conceitos-basicos",
  titulo: "Conceitos Básicos de SO",
  disciplina: "ℹ️ Introdução a Sistemas Operacionais",
  descricao: "Atividade de estudo e revisão do capítulo 1: objetivos do SO, abstração e gerência de recursos, funcionalidades, categorias e um breve histórico.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>O que é um sistema operacional?</h3>
    <p>O sistema operacional (SO) é o software responsável por fazer a ponte entre o hardware e as aplicações. Ele possui dois objetivos centrais:</p>
    <ul>
      <li><strong>Abstração de recursos:</strong> esconder a complexidade do hardware, oferecendo ao programador interfaces simples, homogêneas e padronizadas. Exemplos: arquivos (abstração do disco), memória virtual (abstração da memória) e tarefas (abstração do processador).</li>
      <li><strong>Gerência de recursos:</strong> definir políticas de uso dos recursos de forma justa e segura, resolvendo conflitos entre usuários e aplicações. Exemplos: escalonamento de tarefas e alocação de memória.</li>
    </ul>
    <h3>Funcionalidades do SO</h3>
    <ul>
      <li><strong>Gerência do processador:</strong> escalonamento e execução das tarefas.</li>
      <li><strong>Gerência da memória:</strong> alocação, proteção e virtualização da memória RAM.</li>
      <li><strong>Gerência de dispositivos:</strong> controle das operações de entrada e saída.</li>
      <li><strong>Gerência de arquivos:</strong> armazenamento persistente e organizado dos dados.</li>
      <li><strong>Proteção:</strong> segurança e isolamento entre usuários e aplicações.</li>
    </ul>
    <h3>Categorias de sistemas operacionais</h3>
    <ul>
      <li><strong>Lote (batch):</strong> executa programas sem interação direta do usuário.</li>
      <li><strong>Rede e distribuído:</strong> atuam sobre várias máquinas; o distribuído as apresenta como um único sistema.</li>
      <li><strong>Multiusuário:</strong> permite que vários usuários compartilhem a máquina ao mesmo tempo.</li>
      <li><strong>Servidor, desktop e móvel:</strong> dedicados a servidores, computadores pessoais e dispositivos móveis.</li>
      <li><strong>Embarcado:</strong> equipamentos com recursos limitados e função específica.</li>
      <li><strong>Tempo real:</strong> respostas dentro de prazos previsíveis; pode ser rígido ou flexível.</li>
    </ul>
    <h3>Um breve histórico</h3>
    <ul>
      <li><strong>Anos 1940-1950:</strong> programação direta do hardware, sem sistema operacional.</li>
      <li><strong>1961:</strong> CTSS, um dos primeiros sistemas de tempo compartilhado (MIT).</li>
      <li><strong>1965:</strong> OS/360 (IBM).</li>
      <li><strong>1969:</strong> UNIX (Bell Labs).</li>
      <li><strong>1981:</strong> MS-DOS (monousuário e monotarefa).</li>
      <li><strong>1984/1985:</strong> Mac OS e Windows.</li>
      <li><strong>1991:</strong> Linux, criado por Linus Torvalds.</li>
      <li><strong>1993:</strong> Windows NT.</li>
      <li><strong>2007:</strong> Android para dispositivos móveis.</li>
    </ul>
  `,
  fases: [
    {
      titulo: "Objetivos de um SO",
      perguntas: [
        {
          categoria: "Objetivos",
          pergunta: "Qual é o principal objetivo de um sistema operacional?",
          opcoes: [
            "Abstrair e gerenciar os recursos do hardware",
            "Compilar os programas escritos pelo usuário",
            "Substituir o processador do computador",
            "Aumentar a frequência da memória RAM"
          ],
          correta: 0,
          explicacao: "O SO tem dois objetivos centrais: abstrair os recursos do hardware, oferecendo interfaces simples, e gerenciá-los, definindo políticas de uso justo."
        },
        {
          categoria: "Abstração",
          pergunta: "O que caracteriza a abstração de recursos realizada pelo SO?",
          opcoes: [
            "Restringir o acesso dos usuários aos programas",
            "Ocultar a complexidade do hardware por meio de interfaces simples",
            "Eliminar a necessidade de hardware no computador",
            "Duplicar os recursos físicos disponíveis"
          ],
          correta: 1,
          explicacao: "A abstração esconde a complexidade do hardware e apresenta ao programador uma interface simples e homogênea, como arquivos, memória virtual e tarefas."
        },
        {
          categoria: "Abstração",
          pergunta: "Qual mecanismo abstrai o endereçamento da memória física para as aplicações?",
          opcoes: [
            "Memória cache",
            "Registradores",
            "Memória virtual",
            "Unidade de disco"
          ],
          correta: 2,
          explicacao: "A memória virtual desvincula os endereços usados pelas aplicações dos endereços físicos da memória RAM, abstraindo o hardware de memória."
        },
        {
          categoria: "Abstração",
          pergunta: "A abstração que permite às aplicações acessar o disco sem conhecer seus detalhes físicos é:",
          opcoes: [
            "O conceito de setores",
            "O conceito de arquivos",
            "O conceito de cache",
            "O conceito de barramentos"
          ],
          correta: 1,
          explicacao: "Os arquivos são a abstração do disco: as aplicações manipulam nomes e conteúdos sem se preocupar com trilhas, setores ou cilindros."
        },
        {
          categoria: "Gerência de recursos",
          pergunta: "Qual é o papel da gerência de recursos em um sistema operacional?",
          opcoes: [
            "Garantir que todos os programas usem o mesmo hardware",
            "Impedir que aplicações acessem os dispositivos",
            "Definir políticas de uso e resolver conflitos de acesso ao hardware",
            "Substituir recursos defeituosos automaticamente"
          ],
          correta: 2,
          explicacao: "Cabe à gerência de recursos definir políticas justas de uso do hardware e mediar conflitos entre usuários e aplicações."
        },
        {
          categoria: "Gerência de recursos",
          pergunta: "A separação entre política e mecanismo é um princípio de projeto que permite ao SO:",
          opcoes: [
            "Executar programas sem usar o processador",
            "Definir o que fazer sem se prender a como fazer",
            "Criar interfaces gráficas para o usuário",
            "Armazenar arquivos em qualquer dispositivo"
          ],
          correta: 1,
          explicacao: "Ao separar a política (o que fazer) do mecanismo (como fazer), o SO pode alterar regras de uso de um recurso sem reescrever toda a implementação."
        }
      ]
    },
    {
      titulo: "Funcionalidades e categorias",
      perguntas: [
        {
          categoria: "Funcionalidades",
          pergunta: "Qual funcionalidade do SO é responsável por escalonar o uso do processador?",
          opcoes: [
            "Gerência da memória",
            "Gerência de arquivos",
            "Gerência do processador",
            "Gerência de dispositivos"
          ],
          correta: 2,
          explicacao: "A gerência do processador define como as tarefas compartilham o processador, por meio de mecanismos de escalonamento."
        },
        {
          categoria: "Funcionalidades",
          pergunta: "Ao criar, ler e proteger os dados persistidos em disco, o SO exerce a funcionalidade de:",
          opcoes: [
            "Gerência de redes",
            "Gerência do processador",
            "Gerência de memória",
            "Gerência de arquivos"
          ],
          correta: 3,
          explicacao: "A gerência de arquivos organiza o armazenamento persistente, cuidando da criação, leitura, escrita e proteção dos arquivos."
        },
        {
          categoria: "Categorias",
          pergunta: "Sistemas operacionais de tempo real são projetados para:",
          opcoes: [
            "Processar grandes lotes de dados sem interação",
            "Responder a eventos dentro de prazos previsíveis",
            "Gerenciar uma rede de computadores autônomos",
            "Executar somente um usuário por vez"
          ],
          correta: 1,
          explicacao: "SOs de tempo real devem responder aos eventos dentro de limites de tempo previsíveis; quando os prazos são inegociáveis, o sistema é de tempo real rígido."
        },
        {
          categoria: "Categorias",
          pergunta: "Um SO que gerencia recursos de várias máquinas interligadas, apresentando-as como um único sistema, é classificado como:",
          opcoes: [
            "Sistema de rede",
            "Sistema distribuído",
            "Sistema embarcado",
            "Sistema de lote"
          ],
          correta: 1,
          explicacao: "No SO distribuído os usuários enxergam as várias máquinas como um único sistema; já o SO de rede mantém as máquinas independentes, apenas compartilhando recursos."
        },
        {
          categoria: "Categorias",
          pergunta: "Android e iOS são exemplos de sistemas operacionais da categoria:",
          opcoes: [
            "Sistema de desktop",
            "Sistema de mainframe",
            "Sistema móvel",
            "Sistema de tempo real"
          ],
          correta: 2,
          explicacao: "SOs móveis são projetados para smartphones e tablets, com foco em economia de energia e interfaces sensíveis ao toque."
        },
        {
          categoria: "Categorias",
          pergunta: "SOs embarcados são caracterizados por:",
          opcoes: [
            "Atender a centenas de usuários simultâneos",
            "Exigir grande quantidade de memória RAM",
            "Operar apenas em grandes servidores",
            "Rodar em equipamentos com recursos limitados e função específica"
          ],
          correta: 3,
          explicacao: "SOs embarcados operam em dispositivos com poucos recursos e funções específicas, como eletrodomésticos, semáforos e sistemas automotivos."
        }
      ]
    },
    {
      titulo: "Um breve histórico",
      perguntas: [
        {
          categoria: "História",
          pergunta: "Qual destes sistemas operacionais foi lançado primeiro?",
          opcoes: [
            "Windows",
            "Linux",
            "OS/360",
            "Android"
          ],
          correta: 2,
          explicacao: "O OS/360 (IBM) foi lançado em 1965; o UNIX em 1969, o Windows em 1985, o Linux em 1991 e o Android em 2007."
        },
        {
          categoria: "História",
          pergunta: "Em qual ano foi desenvolvido o sistema UNIX?",
          opcoes: [
            "1981",
            "1969",
            "1991",
            "1965"
          ],
          correta: 1,
          explicacao: "O UNIX foi criado em 1969 nos laboratórios Bell, por Ken Thompson e Dennis Ritchie."
        },
        {
          categoria: "História",
          pergunta: "O CTSS, desenvolvido no MIT, foi um marco histórico por ser um dos primeiros sistemas:",
          opcoes: [
            "De lote",
            "Embarcados",
            "De tempo real",
            "De tempo compartilhado"
          ],
          correta: 3,
          explicacao: "O CTSS (1961) foi um dos primeiros sistemas de tempo compartilhado, permitindo que vários usuários usassem a máquina simultaneamente."
        },
        {
          categoria: "História",
          pergunta: "O kernel Linux foi lançado por Linus Torvalds em:",
          opcoes: [
            "1991",
            "1985",
            "1993",
            "1969"
          ],
          correta: 0,
          explicacao: "Em 1991, Linus Torvalds anunciou a primeira versão do kernel Linux, que se tornaria um dos SOs mais utilizados no mundo."
        },
        {
          categoria: "História",
          pergunta: "Qual foi a ordem cronológica correta de lançamento destes sistemas?",
          opcoes: [
            "Windows → UNIX → Linux → MS-DOS",
            "UNIX → MS-DOS → Windows → Linux",
            "MS-DOS → UNIX → Linux → Windows",
            "Linux → Windows → UNIX → MS-DOS"
          ],
          correta: 1,
          explicacao: "O UNIX surgiu em 1969, o MS-DOS em 1981, o Windows em 1985 e o Linux em 1991."
        },
        {
          categoria: "História",
          pergunta: "O MS-DOS, lançado pela Microsoft em 1981, era um sistema operacional:",
          opcoes: [
            "Multiusuário e multitarefa",
            "De rede distribuído",
            "Monousuário e monotarefa",
            "De tempo real rígido"
          ],
          correta: 2,
          explicacao: "O MS-DOS era um SO monousuário e monotarefa, que executava uma única tarefa por vez."
        }
      ]
    }
  ]
});