JOGO2.registrar({
  id: "arquiteturas-so",
  titulo: "Arquiteturas de SOs",
  disciplina: "ℹ️ Introdução a Sistemas Operacionais",
  descricao: "Atividade de estudo e revisão do capítulo 3: sistemas monolíticos, micronúcleo, em camadas, híbridos e arquiteturas avançadas (máquinas virtuais, contêineres, exonúcleo e uninúcleo).",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Sistemas monolíticos</h3>
    <p>No modelo monolítico, todo o código do sistema operacional é compilado em um único bloco executável, executado em modo núcleo. O núcleo é uma única imagem binária que contém todas as funcionalidades do SO. A comunicação entre os componentes é feita por chamadas de função diretas, o que torna o sistema muito eficiente, mas dificulta a manutenção e a evolução. Exemplos: Linux, FreeBSD e MS-DOS.</p>

    <h3>Sistemas micronúcleo (microkernel)</h3>
    <p>O micronúcleo reduz ao mínimo o código executado em modo núcleo, mantendo apenas os mecanismos essenciais: gerência de tarefas, troca de contexto, comunicação entre tarefas e tratamento de interrupções. Os demais serviços (sistemas de arquivos, gerência de memória, drivers) executam como processos no espaço de usuário. A comunicação entre os componentes é feita por troca de mensagens, o que aumenta a segurança e a modularidade, mas reduz o desempenho devido ao custo das trocas de contexto. Exemplos: Minix 3, Mach, Chorus, QNX.</p>

    <h3>Sistemas em camadas</h3>
    <p>O sistema é organizado em camadas sobrepostas, cada uma oferecendo serviços para a camada imediatamente superior. Cada camada só pode se comunicar com as camadas adjacentes. Essa estrutura favorece a modularidade e a depuração, mas pode impor restrições rígidas de comunicação entre camadas não adjacentes. Exemplo clássico: MULTICS. O HAL (Hardware Abstraction Layer) do Windows NT também segue esse princípio em parte de sua arquitetura.</p>

    <h3>Sistemas híbridos</h3>
    <p>A maioria dos SOs modernos adota uma abordagem híbrida, combinando características de múltiplas arquiteturas. O kernel pode ter um núcleo monolítico mas com estrutura modular (carregamento dinâmico de módulos), ou combinar um micronúcleo com serviços executados em modo núcleo por razões de desempenho. Exemplos: Windows NT (kernel híbrido com HAL, micrônúcleo e módulos executivos executando em modo núcleo) e macOS XNU (combinação do kernel Mach com BSD).</p>

    <h3>Arquiteturas avançadas</h3>
    <ul>
      <li><strong>Máquinas virtuais (hipervisores):</strong> criam ambientes isolados que simulam um computador completo, permitindo executar vários SOs em uma mesma máquina física. Exemplos: VMware, KVM, Xen, VirtualBox.</li>
      <li><strong>Contêineres:</strong> compartilham o mesmo núcleo do SO hospedeiro, mas isolam processos em espaços de usuário independentes. Mais leves que VMs. Exemplos: Docker, FreeBSD Jails, Solaris Zones, Kubernetes.</li>
      <li><strong>Sistemas exonúcleo (exokernel):</strong> reduzem o núcleo ao mínimo extremo, apenas multiplexando e protegendo os recursos físicos. As aplicações decidem como gerenciar os recursos, com bibliotecas (libOS) em espaço de usuário. Exemplos: Aegis/ExOS, Nemesis.</li>
      <li><strong>Sistemas uninúcleo (unikernel):</strong> aplicação e SO são compilados juntos em uma única imagem executável, que executa diretamente sobre o hardware ou sobre um hipervisor. Elimina a separação entre modo usuário e modo núcleo. Exemplos: OSv, MirageOS, TinyOS.</li>
    </ul>
  `,
  fases: [
    {
      titulo: "Sistemas monolíticos e micronúcleo",
      perguntas: [
        {
          categoria: "Sistemas monolíticos",
          pergunta: "Em um sistema operacional monolítico, como os componentes do núcleo se comunicam entre si?",
          opcoes: [
            "Por troca de mensagens entre processos",
            "Por chamadas de função diretas",
            "Através de um barramento de hardware",
            "Por meio de um sistema de arquivos"
          ],
          correta: 1,
          explicacao: "Em núcleos monolíticos, os componentes se comunicam por chamadas de função diretas, o que torna o sistema muito eficiente, mas dificulta a manutenção."
        },
        {
          categoria: "Sistemas monolíticos",
          pergunta: "Qual das seguintes alternativas é uma desvantagem dos sistemas operacionais monolíticos?",
          opcoes: [
            "Baixo desempenho geral do sistema",
            "Dificuldade de manutenção e evolução",
            "Grande quantidade de trocas de contexto",
            "Dependência de troca de mensagens"
          ],
          correta: 1,
          explicacao: "Por serem compilados em um único bloco, alterar um componente monolítico exige recompilar todo o núcleo, o que dificulta a manutenção e evolução."
        },
        {
          categoria: "Sistemas monolíticos",
          pergunta: "Qual destes sistemas operacionais é um exemplo clássico de arquitetura monolítica?",
          opcoes: [
            "Minix 3",
            "QNX",
            "Linux",
            "Mach"
          ],
          correta: 2,
          explicacao: "O Linux é um exemplo clássico de kernel monolítico (embora suporte módulos carregáveis dinamicamente). Minix 3, QNX e Mach são micronúcleos."
        },
        {
          categoria: "Sistemas micronúcleo",
          pergunta: "No modelo micronúcleo, os serviços como sistemas de arquivos e drivers de dispositivo executam:",
          opcoes: [
            "No mesmo espaço de endereçamento do núcleo",
            "No hardware diretamente, sem intermediação",
            "Como processos no espaço de usuário",
            "Em um processador separado dedicado"
          ],
          correta: 2,
          explicacao: "No micronúcleo, apenas os mecanismos essenciais executam em modo núcleo; os demais serviços executam como processos no espaço de usuário."
        },
        {
          categoria: "Sistemas micronúcleo",
          pergunta: "Qual mecanismo os sistemas micronúcleo utilizam para a comunicação entre seus componentes?",
          opcoes: [
            "Chamadas de função diretas com ponteiros",
            "Acesso direto à memória compartilhada",
            "Troca de mensagens entre processos",
            "Instruções privilegiadas do processador"
          ],
          correta: 2,
          explicacao: "A comunicação entre os componentes de um micronúcleo é feita por troca de mensagens, o que aumenta a modularidade, mas reduz o desempenho."
        },
        {
          categoria: "Sistemas micronúcleo",
          pergunta: "Uma desvantagem característica dos sistemas micronúcleo em relação aos monolíticos é:",
          opcoes: [
            "Maior dificuldade para adicionar novos drivers",
            "Menor segurança entre os componentes",
            "Menor desempenho devido às trocas de contexto",
            "Impossibilidade de executar em hardware moderno"
          ],
          correta: 2,
          explicacao: "A comunicação por troca de mensagens entre componentes em espaços diferentes exige trocas de contexto frequentes, o que reduz o desempenho."
        }
      ]
    },
    {
      titulo: "Sistemas em camadas e híbridos",
      perguntas: [
        {
          categoria: "Sistemas em camadas",
          pergunta: "Na arquitetura em camadas, como as camadas se relacionam entre si?",
          opcoes: [
            "Cada camada se comunica livremente com qualquer outra camada",
            "Cada camada oferece serviços apenas para a camada imediatamente superior",
            "A camada mais externa executa em modo núcleo",
            "Todas as camadas compartilham o mesmo espaço de endereçamento"
          ],
          correta: 1,
          explicacao: "Em sistemas em camadas, cada camada só se comunica com as camadas adjacentes, oferecendo serviços para a camada imediatamente superior."
        },
        {
          categoria: "Sistemas em camadas",
          pergunta: "Qual sistema operacional clássico é um exemplo de arquitetura em camadas?",
          opcoes: [
            "MS-DOS",
            "FreeBSD",
            "MULTICS",
            "Minix 3"
          ],
          correta: 2,
          explicacao: "O MULTICS é o exemplo clássico de sistema organizado em camadas. O HAL do Windows NT também segue princípios semelhantes."
        },
        {
          categoria: "Sistemas em camadas",
          pergunta: "Uma limitação da arquitetura em camadas é:",
          opcoes: [
            "O alto custo de troca de mensagens entre os componentes",
            "A rigidez na comunicação entre camadas não adjacentes",
            "A impossibilidade de executar múltiplas tarefas",
            "A falta de suporte a diferentes hardwares"
          ],
          correta: 1,
          explicacao: "A restrição de que cada camada só se comunica com as adjacentes impõe rigidez, dificultando que uma camada mais alta acesse diretamente serviços de camadas inferiores."        },
        {
          categoria: "Sistemas híbridos",
          pergunta: "A abordagem híbrida na construção de sistemas operacionais busca:",
          opcoes: [
            "Usar exclusivamente o modelo de micronúcleo com módulos no usuário",
            "Executar todo o sistema exclusivamente em modo núcleo",
            "Combinar características de diferentes arquiteturas para obter o melhor de cada uma",
            "Eliminar completamente os drivers de dispositivo do sistema"
          ],
          correta: 2,
          explicacao: "Sistemas híbridos combinam aspectos de arquiteturas monolíticas, micronúcleo e em camadas, buscando desempenho, modularidade e segurança."
        },
        {
          categoria: "Sistemas híbridos",
          pergunta: "O kernel XNU, usado no macOS, é um sistema híbrido que combina:",
          opcoes: [
            "O kernel Linux com o sistema de arquivos Ext4",
            "O micronúcleo Mach com código do BSD",
            "O núcleo monolítico do Windows com o HAL",
            "O monitor de máquina virtual com contêineres Docker"
          ],
          correta: 1,
          explicacao: "O XNU (X is Not UNIX) combina o micronúcleo Mach com serviços do BSD, formando um kernel híbrido usado no macOS e iOS."
        },
        {
          categoria: "Sistemas híbridos",
          pergunta: "O Windows NT utiliza uma arquitetura híbrida que inclui uma camada de abstração de hardware chamada:",
          opcoes: [
            "HAL (Hardware Abstraction Layer)",
            "VFS (Virtual File System)",
            "API (Application Programming Interface)",
            "UEFI (Unified Extensible Firmware Interface)"
          ],
          correta: 0,
          explicacao: "O HAL (Hardware Abstraction Layer) do Windows NT abstrai as diferenças de hardware, permitindo que o mesmo kernel funcione em plataformas distintas."
        }
      ]
    },
    {
      titulo: "Arquiteturas avançadas",
      perguntas: [
        {
          categoria: "Máquinas virtuais",
          pergunta: "Um hipervisor (VMM) tem como função principal:",
          opcoes: [
            "Gerenciar a alocação de memória para um único sistema operacional",
            "Criar e gerenciar ambientes isolados que simulam um computador completo",
            "Compilar programas escritos em linguagens de alto nível",
            "Gerenciar o escalonamento de tarefas em um único núcleo"
          ],
          correta: 1,
          explicacao: "O hipervisor (máquina virtual) cria ambientes isolados que simulam um computador completo, permitindo executar vários SOs em uma mesma máquina física."
        },
        {
          categoria: "Contêineres",
          pergunta: "Qual a principal diferença entre contêineres e máquinas virtuais tradicionais?",
          opcoes: [
            "Contêineres compartilham o núcleo do SO hospedeiro, enquanto VMs têm seu próprio kernel",
            "Contêineres executam diretamente no hardware, enquanto VMs usam um hipervisor",
            "Contêineres só funcionam em sistemas Windows",
            "Contêineres são mais pesados que máquinas virtuais"
          ],
          correta: 0,
          explicacao: "Contêineres compartilham o núcleo do SO hospedeiro, o que os torna mais leves que VMs, que incluem um kernel completo em cada ambiente."
        },
        {
          categoria: "Contêineres",
          pergunta: "Qual das seguintes tecnologias é um exemplo de sistema de contêineres?",
          opcoes: [
            "VMware ESXi",
            "Xen",
            "Docker",
            "QEMU"
          ],
          correta: 2,
          explicacao: "Docker é uma tecnologia de contêineres. VMware ESXi, Xen e QEMU são hipervisores de máquinas virtuais."
        },
        {
          categoria: "Sistemas exonúcleo",
          pergunta: "Em um sistema exonúcleo (exokernel), o núcleo é responsável apenas por:",
          opcoes: [
            "Gerenciar todos os dispositivos e sistemas de arquivos",
            "Multiplexar e proteger os recursos físicos",
            "Interpretar bytecode e executar aplicações Java",
            "Executar serviços de rede e segurança"
          ],
          correta: 1,
          explicacao: "O exonúcleo reduz o núcleo ao mínimo, apenas multiplexando e protegendo os recursos físicos; as aplicações decidem como gerenciá-los via bibliotecas."
        },
        {
          categoria: "Sistemas uninúcleo",
          pergunta: "Em um sistema uninúcleo (unikernel), a aplicação e o sistema operacional são:",
          opcoes: [
            "Executados em modo usuário e modo núcleo separadamente",
            "Compilados em uma única imagem executável que roda diretamente sobre o hardware",
            "Distribuídos em diferentes máquinas interligadas por rede",
            "Organizados em camadas que se comunicam por mensagens"
          ],
          correta: 1,
          explicacao: "No unikernel, aplicação e SO são compilados juntos em uma única imagem executável, eliminando a separação entre modo usuário e modo núcleo."
        },
        {
          categoria: "Arquiteturas avançadas",
          pergunta: "Qual das alternativas lista corretamente exemplos de cada arquitetura avançada?",
          opcoes: [
            "VMware (contêiner), Docker (VM), Aegis (exonúcleo), OSv (monolítico)",
            "KVM (VM), FreeBSD Jails (contêiner), Aegis (exonúcleo), MirageOS (unikernel)",
            "Xen (unikernel), Kubernetes (VM), Nemesis (monolítico), QNX (contêiner)",
            "VirtualBox (contêiner), Docker (exonúcleo), OSv (VM), VMware (unikernel)"
          ],
          correta: 1,
          explicacao: "KVM é um hipervisor (VM), FreeBSD Jails é contêiner, Aegis/ExOS é exokernel e MirageOS é unikernel — todos classificados corretamente."
        }
      ]
    }
  ]
});