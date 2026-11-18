JOGO2.registrar({
  id: "diretorios-atalhos",
  titulo: "Diretórios e Atalhos",
  disciplina: "🗂️ Sistemas de Arquivos",
  descricao: "Atividade de estudo e revisão do capítulo 25: diretórios, caminhos de acesso, implementação de diretórios, atalhos simbólicos e físicos e tradução de caminhos de acesso.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Diretórios</h3>
    <p>Um diretório (pasta ou folder) é um contêiner de arquivos e de outros diretórios, com nome e atributos. Cada sistema de arquivos tem um diretório raiz. Os primeiros sistemas tinham só o diretório raiz; depois vieram os subdiretórios, e os sistemas atuais oferecem muitos níveis, ou mesmo ilimitados, formando uma hierarquia em árvore (como a estrutura FHS do Linux). Cada processo tem um diretório de trabalho (ou corrente), usado como local default quando não informa caminhos; ele é herdado do processo pai e pode ser mudado por chamadas de sistema como chdir.</p>

    <h3>Caminhos de acesso</h3>
    <p>O caminho de acesso é a posição do arquivo na hierarquia, formado pela sequência de nomes de diretórios a partir da raiz, separados por um caractere que depende do sistema (\\ no Windows e / nos UNIX). Os elementos especiais .. (diretório anterior) e . (diretório atual) podem aparecer no caminho. Há três formas de referência: direta (só o nome, no diretório de trabalho), absoluta (a partir da raiz, sem depender do diretório de trabalho) e relativa (a partir do diretório de trabalho). O caminho absoluto mais curto é o caminho canônico.</p>

    <h3>Implementação de diretórios</h3>
    <p>Um diretório é implementado como um arquivo cujo conteúdo é uma tabela de entradas (arquivos, diretórios, atalhos e arquivos especiais); cada entrada tem ao menos o nome, o tipo e a localização física (número do i-node ou do bloco inicial). O diretório não contém fisicamente os arquivos, apenas os relaciona. Cada diretório tem as entradas . (ele mesmo) e .. (seu pai). Nos sistemas antigos, o diretório raiz ficava nos blocos de inicialização, o que limitava suas entradas; nos recentes, um registro no VBR aponta para ele. Uma tabela simples (MS-DOS, Ext2) tem busca O(n); Ext4, ZFS e NTFS usam hashes e árvores.</p>

    <h3>Atalhos</h3>
    <p>Atalhos (links) são referências indiretas a arquivos ou diretórios, que evitam replicar dados e criam múltiplos caminhos para o mesmo conteúdo. O atalho simbólico (soft link) é um pequeno arquivo de texto com o caminho do arquivo original; pode apontar para outro dispositivo, para diretórios e para outros atalhos, mas fica quebrado se o original for movido, renomeado ou removido. O atalho físico (hard link) é outra referência ao mesmo conteúdo no dispositivo, com um contador de referências (o conteúdo só é removido quando chega a zero); só vale dentro do mesmo volume e geralmente não é permitido para diretórios.</p>

    <h3>Tradução dos caminhos de acesso</h3>
    <p>Para abrir um arquivo, o núcleo faz a localização de arquivo (file lookup): percorre o caminho, lendo o i-node e o conteúdo de cada diretório, a partir da raiz, até obter o i-node do arquivo. No exemplo do capítulo, foram necessárias 6 leituras de disco para um caminho de 3 níveis, e caminhos mais longos custam mais. Para reduzir o custo, o núcleo mantém um cache de resolução de nomes (tabela hash com política LRU), consultado do nome completo para o prefixo, removendo a última parte a cada tentativa. Para um atalho simbólico, lê-se seu conteúdo e resolve-se o caminho nele indicado.</p>
  `,
  fases: [
    {
      titulo: "Fundamentos",
      perguntas: [
        {
          categoria: "Diretórios",
          pergunta: "Qual afirmação sobre diretórios é verdadeira?",
          opcoes: [
            "Os primeiros sistemas de arquivos já implementavam árvores de diretórios com níveis ilimitados",
            "Um diretório contém fisicamente os arquivos e subdiretórios que relaciona",
            "Um diretório é um contêiner de arquivos e de outros diretórios, e tem nome e atributos, como os arquivos",
            "Cada sistema de arquivos pode ter vários diretórios raiz independentes"
          ],
          correta: 2,
          explicacao: "Cada sistema de arquivos possui um diretório principal, a raiz, e os diretórios apenas relacionam os arquivos, sem conter fisicamente seu conteúdo."
        },
        {
          categoria: "Diretório de trabalho",
          pergunta: "Sobre o diretório de trabalho (ou corrente) de um processo, assinale a alternativa INCORRETA.",
          opcoes: [
            "Todo processo inicia sempre no diretório raiz e não pode mudar de diretório",
            "Ao ser criado, cada novo processo é associado a um diretório, usado como local default quando não informa caminhos de acesso",
            "Cada processo geralmente herda o diretório de trabalho de seu pai",
            "Um processo pode mudar de diretório por meio de chamadas de sistema, como chdir"
          ],
          correta: 0,
          explicacao: "O processo herda o diretório de trabalho de seu pai e pode mudar de diretório por chamadas de sistema como chdir."
        },
        {
          categoria: "Caminhos de acesso",
          pergunta: "Sobre os caminhos de acesso, julgue as afirmativas. I. O caractere separador de nomes no caminho é o mesmo em todos os sistemas operacionais. II. O Windows usa o caractere / como separador, e os sistemas UNIX usam o caractere \\. III. No caminho de acesso, o elemento .. indica o diretório anterior e o elemento . indica o próprio diretório atual. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "F, V, V",
            "V, F, F",
            "F, F, V"
          ],
          correta: 3,
          explicacao: "O Windows usa a barra invertida como separador e os sistemas UNIX usam a barra normal; outros sistemas podem usar caracteres como : e !."
        },
        {
          categoria: "Formas de referência",
          pergunta: "Qual afirmação sobre as formas de referenciar arquivos é verdadeira?",
          opcoes: [
            "Na referência direta, o caminho é indicado a partir do diretório raiz",
            "Na referência relativa, o caminho tem como início o diretório de trabalho do processo e pode usar .. para subir de nível",
            "Na referência absoluta, o caminho depende do diretório de trabalho do processo",
            "Na referência relativa, o caminho sempre inicia com o caractere separador"
          ],
          correta: 1,
          explicacao: "A referência absoluta parte da raiz e não depende do diretório de trabalho; a referência direta informa apenas o nome do arquivo."
        },
        {
          categoria: "Caminho canônico",
          pergunta: "Sobre os caminhos de acesso, assinale a alternativa INCORRETA.",
          opcoes: [
            "O caminho de acesso é a posição de um arquivo dentro do sistema de arquivos",
            "Normalmente o caminho é composto pela sequência de nomes de diretórios que levam ao arquivo, a partir da raiz",
            "O caminho canônico de um arquivo é sempre o caminho mais longo a partir da raiz",
            "Uma referência absoluta não depende do diretório de trabalho do processo"
          ],
          correta: 2,
          explicacao: "O caminho canônico é o caminho de acesso mais curto a um arquivo a partir do diretório raiz."
        }
      ]
    },
    {
      titulo: "Mecanismos",
      perguntas: [
        {
          categoria: "Implementação de diretórios",
          pergunta: "Como um diretório é implementado em um sistema de arquivos?",
          opcoes: [
            "Como um arquivo cujo conteúdo é uma relação de entradas, cada uma com ao menos o nome, o tipo e a localização física (número do i-node ou do bloco inicial) do arquivo ou subdiretório",
            "Como uma estrutura de hardware dedicada do disco, separada dos arquivos",
            "Como um arquivo que armazena fisicamente o conteúdo de todos os arquivos que ele relaciona",
            "Como uma entrada do mapa de bits de blocos livres da partição"
          ],
          correta: 0,
          explicacao: "Um diretório é um arquivo que contém uma tabela de entradas; ele apenas relaciona os arquivos e subdiretórios, sem conter fisicamente seu conteúdo."
        },
        {
          categoria: "Diretório raiz",
          pergunta: "Sobre a implementação do diretório raiz, julgue as afirmativas. I. Em sistemas antigos e simples, o diretório raiz estava definido nos blocos de inicialização, o que limitava o número de suas entradas. II. Nos sistemas mais recentes, um registro dentro dos blocos reservados aponta para a posição do diretório raiz, permitindo mais entradas. III. A entrada .. de um diretório representa o próprio diretório. Assinale a sequência correta.",
          opcoes: [
            "F, V, V",
            "V, F, F",
            "F, F, V",
            "V, V, F"
          ],
          correta: 3,
          explicacao: "A entrada . representa o próprio diretório, e a entrada .. representa seu diretório pai."
        },
        {
          categoria: "Resolução de atalho simbólico",
          pergunta: "Qual é a ordem correta dos eventos ao resolver um caminho que aponta para um atalho simbólico? (1) O núcleo lê o conteúdo do atalho, que é o caminho do arquivo original. (2) O núcleo resolve o caminho até localizar a entrada do atalho. (3) O núcleo aplica o procedimento de resolução ao caminho lido no atalho. (4) O núcleo obtém a localização do conteúdo do arquivo original.",
          opcoes: [
            "2, 3, 1, 4",
            "2, 1, 3, 4",
            "1, 2, 3, 4",
            "2, 1, 4, 3"
          ],
          correta: 1,
          explicacao: "Se o caminho aponta para um atalho simbólico, é preciso ler o conteúdo dele e aplicar a resolução de caminho ao caminho nele indicado."
        },
        {
          categoria: "Atalhos simbólicos e físicos",
          pergunta: "Texto de apoio: um atalho simbólico é um pequeno arquivo de texto com uma string com o caminho até o arquivo original; o alvo pode estar em outro dispositivo físico, e se o arquivo for movido, renomeado ou removido o atalho fica quebrado. Em um atalho físico, várias referências apontam para a mesma localização do conteúdo do arquivo no dispositivo; mantém-se um contador de referências, e o conteúdo só pode ser removido quando o número de referências chega a zero. Julgue as afirmativas. I. Um atalho simbólico pode apontar para um arquivo em outro dispositivo físico. II. Se o arquivo original for removido, o atalho físico fica imediatamente quebrado. III. O conteúdo de um arquivo com atalhos físicos só é removido quando o contador de referências chega a zero.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 2,
          explicacao: "O conteúdo de um arquivo só é removido quando o contador de referências chega a zero, e por isso o atalho físico não fica quebrado."
        },
        {
          categoria: "Atalhos físicos",
          pergunta: "Qual afirmação sobre atalhos físicos (hard links) é verdadeira?",
          opcoes: [
            "Só podem ser feitos para arquivos dentro do mesmo sistema de arquivos (mesmo volume), e geralmente não são permitidos para diretórios",
            "Podem apontar para arquivos em outro disco ou em uma unidade de rede",
            "Ficam quebrados quando o arquivo original é renomeado",
            "São implementados como um pequeno arquivo de texto com o caminho do arquivo original"
          ],
          correta: 0,
          explicacao: "Atalhos físicos de diretórios transformariam a árvore de diretórios em um grafo, o que complicaria rotinas recursivas como utilitários de backup."
        },
        {
          categoria: "Exemplos de atalhos",
          pergunta: "Sobre os atalhos em sistemas UNIX, julgue as afirmativas. I. Em um diretório, duas entradas podem ser atalhos para o mesmo arquivo, como libcryptui.so e libcryptui.so.0 para libcryptui.so.0.0.0. II. Um atalho só pode apontar para arquivos, nunca para diretórios. III. Atalhos simbólicos não podem apontar para outros atalhos. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "F, V, V",
            "F, F, V",
            "V, F, F"
          ],
          correta: 3,
          explicacao: "Atalhos simbólicos podem apontar para diretórios (como /lib para /usr/lib) ou mesmo para outros atalhos (como /usr/bin/shell para /bin/sh)."
        },
        {
          categoria: "Cache de resolução de nomes",
          pergunta: "O cache de resolução de nomes contém as entradas /home/daniel/arq1, /home/daniel, /home e /, mas não contém /home/maziero/imagens/foto.jpg. Ao consultar /home/maziero/imagens/foto.jpg, qual é a ordem correta das consultas? (1) /home. (2) /home/maziero/imagens/foto.jpg. (3) /home/maziero. (4) /home/maziero/imagens.",
          opcoes: [
            "2, 3, 4, 1",
            "2, 4, 3, 1",
            "4, 2, 3, 1",
            "2, 4, 1, 3"
          ],
          correta: 1,
          explicacao: "A consulta parte do nome completo e remove a última parte a cada tentativa, até encontrar uma localização conhecida (neste caso, /home)."
        },
        {
          categoria: "Cache de resolução de nomes",
          pergunta: "Texto de apoio: para atenuar o custo de localização, o núcleo mantém um cache de resolução de nomes, em que cada entrada contém um nome absoluto de arquivo ou diretório e o número do i-node correspondente. Esse cache geralmente é organizado como uma tabela hash e gerenciado com a política LRU (Least Recently Used). A consulta é feita de forma iterativa, partindo do nome completo e removendo a última parte a cada consulta, até encontrar uma localização conhecida. Julgue as afirmativas. I. O cache guarda nomes absolutos e os respectivos números de i-node. II. O cache geralmente é gerenciado com a política FIFO. III. A consulta parte do nome completo e remove a última parte a cada tentativa.",
          opcoes: [
            "I e III, apenas",
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 0,
          explicacao: "O cache geralmente é gerenciado com a política LRU (menos recentemente usado), e não com FIFO."
        }
      ]
    },
    {
      titulo: "Aplicação",
      perguntas: [
        {
          categoria: "Estruturas de diretórios",
          pergunta: "Sobre a lista (índice) de entradas de um diretório, julgue as afirmativas. I. Uma tabela simples, como no MS-DOS e no Ext2, é mais simples, mas tem baixo desempenho em diretórios com muitos itens. II. Sistemas como Ext4, ZFS e NTFS usam estruturas como hashes e árvores, com melhor desempenho de busca. III. Em uma lista linear, o desempenho da busca independe do número de itens do diretório.",
          opcoes: [
            "I e III, apenas",
            "II e III, apenas",
            "I e II, apenas",
            "I, II e III"
          ],
          correta: 2,
          explicacao: "Em uma lista linear com n elementos, a complexidade da busca é O(n), então o desempenho piora com o número de itens."
        },
        {
          categoria: "Localização de arquivos",
          pergunta: "Qual é a ordem correta das leituras de disco para localizar o i-node do arquivo /home/daniel/arq1? (1) O conteúdo de /home. (2) O i-node de /. (3) O i-node de /home. (4) O conteúdo de /. (5) O i-node de /home/daniel. (6) O conteúdo de /home/daniel.",
          opcoes: [
            "2, 3, 4, 1, 5, 6",
            "2, 4, 3, 1, 5, 6",
            "4, 2, 3, 1, 5, 6",
            "2, 4, 3, 1, 6, 5"
          ],
          correta: 1,
          explicacao: "Em cada nível, lê-se o i-node do diretório, para verificar a permissão e achar seus blocos, e depois o conteúdo dele, para achar o i-node da entrada seguinte."
        },
        {
          categoria: "Custo de localização",
          pergunta: "Texto de apoio: no exemplo do capítulo, foram necessárias 6 leituras no disco para localizar o i-node do arquivo /home/daniel/arq1, cujo caminho de acesso tem 3 níveis. Um arquivo com um caminho mais longo, de 16 níveis, apresenta um custo de localização bem mais elevado. Para atenuar o custo, o núcleo mantém um cache de resolução de nomes. Julgue as afirmativas. I. Para o caminho de 3 níveis do exemplo foram necessárias 6 leituras de disco. II. Um caminho com mais níveis apresenta um custo de localização mais elevado. III. O cache de resolução de nomes aumenta o custo de localização dos arquivos.",
          opcoes: [
            "I e III, apenas",
            "II e III, apenas",
            "I, II e III",
            "I e II, apenas"
          ],
          correta: 3,
          explicacao: "O cache de resolução de nomes foi criado para atenuar o custo de localização e melhorar o desempenho geral do acesso a arquivos."
        },
        {
          categoria: "Atalhos e Windows",
          pergunta: "Sobre os atalhos, julgue as afirmativas. I. O NTFS suporta atalhos simbólicos e físicos, embora os simbólicos só tenham sido introduzidos no Windows Vista. II. Atalhos físicos para diretórios transformariam a árvore de diretórios em um grafo, o que complica rotinas recursivas, como utilitários de backup. III. Atalhos simbólicos podem apontar para diretórios ou mesmo para outros atalhos.",
          opcoes: [
            "I, II e III",
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas"
          ],
          correta: 0,
          explicacao: "As três afirmativas descrevem corretamente os atalhos no NTFS, a restrição a atalhos físicos para diretórios e o alcance dos atalhos simbólicos."
        },
        {
          categoria: "Exemplo de atalhos em UNIX",
          pergunta: "Texto de apoio: na figura de exemplo, a entrada /bin/sh é um atalho simbólico para o arquivo /bin/bash. Atalhos simbólicos podem apontar para diretórios (/lib para /usr/lib) ou para outros atalhos (/usr/bin/shell para /bin/sh). As entradas /bin/cp e /usr/bin/copy apontam para o mesmo conteúdo no disco, por isso são atalhos físicos para esse conteúdo. Julgue as afirmativas. I. A entrada /bin/sh é um atalho simbólico para o arquivo /bin/cp. II. As entradas /bin/cp e /usr/bin/copy são atalhos físicos para o mesmo conteúdo. III. A entrada /lib é um atalho simbólico para um diretório.",
          opcoes: [
            "I e II, apenas",
            "I e III, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 2,
          explicacao: "A entrada /bin/sh é um atalho simbólico para o arquivo /bin/bash, e não para /bin/cp."
        },
        {
          categoria: "Evolução dos diretórios",
          pergunta: "Qual é a ordem correta da evolução dos diretórios nos sistemas de arquivos? (1) Subdiretórios, um nível de diretórios abaixo do diretório raiz. (2) Apenas o diretório raiz, com todos os arquivos. (3) Muitos níveis de diretórios, ou mesmo níveis ilimitados.",
          opcoes: [
            "2, 3, 1",
            "2, 1, 3",
            "1, 2, 3",
            "1, 3, 2"
          ],
          correta: 1,
          explicacao: "Os primeiros sistemas só tinham o diretório raiz; depois vieram os subdiretórios, e os sistemas atuais oferecem uma estrutura muito mais flexível."
        },
        {
          categoria: "Formas de referência",
          pergunta: "Texto de apoio: na referência direta, somente o nome do arquivo é informado, e considera-se que ele está, ou será criado, no diretório de trabalho do processo. Na referência absoluta, o caminho é indicado a partir do diretório raiz, sem depender do diretório de trabalho. Na referência relativa, o caminho tem como início o diretório de trabalho e pode usar elementos .. O caminho de acesso mais curto a partir da raiz é o caminho canônico. Julgue as afirmativas. I. Na referência direta, somente o nome do arquivo é informado. II. A referência relativa tem como início o diretório de trabalho do processo. III. O caminho canônico é o caminho de acesso mais curto a partir do diretório raiz.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 3,
          explicacao: "As três afirmativas descrevem corretamente as referências direta e relativa e o caminho canônico."
        }
      ]
    }
  ]
});
