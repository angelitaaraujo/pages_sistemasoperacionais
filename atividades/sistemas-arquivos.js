JOGO2.registrar({
  id: "sistemas-arquivos",
  titulo: "Sistemas de Arquivos",
  disciplina: "🗂️ Sistemas de Arquivos",
  descricao: "Atividade de estudo e revisão do capítulo 24: arquitetura em camadas, partições e montagem de volumes, gestão e caching de blocos, alocação de arquivos, espaço livre, falhas e recuperação (journaling e copy-on-write) e o sistema Ext4.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Arquitetura geral e espaços de armazenamento</h3>
    <p>A implementação de arquivos é organizada em camadas: dispositivos, controladores, drivers, gerência de blocos (mapeia blocos lógicos em físicos e faz caching), alocação de arquivos, sistema de arquivos virtual (VFS: diretórios, atalhos, permissões, travas e registro dos arquivos abertos), interface do sistema de arquivos e bibliotecas de E/S. Os dados de um arquivo são o seu conteúdo; os metadados são seus atributos e as informações de controle. Um disco tem uma área de configuração (MBR, com a tabela de partições) e partições, cada uma com um bloco de inicialização (VBR). Antes do uso, um volume é formatado; para acessá-lo, o sistema o monta, em um ponto de montagem.</p>

    <h3>Gestão de blocos e caching</h3>
    <p>Os blocos lógicos (clusters) são grupos de 2ⁿ blocos físicos consecutivos e a unidade mínima de alocação. Blocos grandes tornam a E/S mais eficiente, mas geram fragmentação interna; blocos pequenos fazem o oposto. O cache de blocos usa quatro estratégias: read-through, read-ahead, write-through (escrita síncrona, sem ganho de desempenho) e write-back (a escrita real é posterior; mais rápida, mas com risco de perda de dados em um crash). Em geral, dados usam write-back e metadados usam write-through.</p>

    <h3>Alocação de arquivos</h3>
    <p>Na alocação contígua, os blocos são consecutivos: o acesso é rápido, mas o tamanho máximo deve ser conhecido e há fragmentação externa. Na encadeada simples, cada bloco aponta para o próximo: é flexível, mas o acesso aleatório é lento e um bloco defeituoso compromete os seguintes. Na encadeada com FAT, os ponteiros ficam em uma tabela única. Na indexada, o i-node guarda o índice de blocos (com limite de tamanho); na indexada multinível, há ponteiros indiretos (o Ext2/3/4 usa 12 diretos, 1 indireto, 1 duplamente e 1 triplamente indireto). Na alocação por extensões, o arquivo é um conjunto de grupos de blocos contíguos.</p>

    <h3>Gestão do espaço livre</h3>
    <p>O sistema registra os blocos livres por um mapa de bits (cada bit representa um bloco; simples e compacto), por uma lista de blocos livres (cada bloco livre aponta para o próximo; ineficiente, e melhorada com vetores de ponteiros), por uma tabela de extensões livres ([bloco inicial, tamanho]) ou, na FAT, pela própria tabela de alocação. Na alocação indexada também é preciso registrar quais i-nodes estão livres.</p>

    <h3>Falhas, recuperação e o Ext4</h3>
    <p>Um crash durante uma sequência de operações pode deixar o sistema de arquivos inconsistente. A verificação com o fsck percorre as estruturas, mas pode ser muito demorada. Com o journaling, as alterações são registradas antes em um diário (write-ahead logging) e, após um crash, as operações pendentes são completadas; costuma proteger só os metadados. Nos sistemas copy-on-write (ZFS, BTRFS), o novo conteúdo vai para um bloco livre, preservando versões anteriores (snapshots). O Ext4 usa blocos de 4 KB em grupos, com superbloco, descritores de grupos, bitmaps, tabela de i-nodes, journaling, alocação indexada multinível e por extensões.</p>
  `,
  fases: [
    {
      titulo: "Fundamentos",
      perguntas: [
        {
          categoria: "Arquitetura em camadas",
          pergunta: "Qual afirmação sobre as camadas da implementação de arquivos é verdadeira?",
          opcoes: [
            "A camada de gerência de blocos implementa a noção de arquivos e diretórios",
            "O sistema de arquivos virtual (VFS) constrói as abstrações de diretórios e atalhos, gerencia permissões e travas e mantém o registro de cada arquivo aberto pelos processos",
            "As bibliotecas de entrada/saída ficam abaixo da interface do sistema de arquivos, junto aos drivers",
            "Os controladores são programas do núcleo que configuram os dispositivos físicos"
          ],
          correta: 1,
          explicacao: "A noção de arquivo só existe nas camadas superiores, e os controladores são circuitos eletrônicos dedicados ao controle dos dispositivos."
        },
        {
          categoria: "Dados e metadados",
          pergunta: "Sobre dados e metadados de um arquivo, assinale a alternativa INCORRETA.",
          opcoes: [
            "Os dados de um arquivo são o seu conteúdo em si",
            "Os metadados incluem os atributos do arquivo, como nome, datas e permissões de acesso",
            "Também são metadados as informações de gestão do sistema de arquivos, como os mapas de blocos livres",
            "O conteúdo de um arquivo, como uma música ou uma fotografia, faz parte dos metadados"
          ],
          correta: 3,
          explicacao: "O conteúdo do arquivo são os dados; os metadados são os atributos e as informações de controle para localizar e manter o conteúdo no disco."
        },
        {
          categoria: "Discos e partições",
          pergunta: "Sobre a organização de um disco em partições, julgue as afirmativas. I. O espaço de armazenamento de um dispositivo é dividido em uma pequena área de configuração, no início do disco, e uma ou mais partições. II. A tabela de partições fica no bloco de inicialização (VBR) de cada partição. III. Todos os volumes de um computador devem receber o mesmo sistema de arquivos. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "F, V, V",
            "V, F, F",
            "F, F, V"
          ],
          correta: 2,
          explicacao: "A tabela de partições fica na área de configuração (MBR), e cada volume pode ser formatado de forma independente, com um sistema de arquivos distinto."
        },
        {
          categoria: "Montagem de volumes",
          pergunta: "O que é a montagem de um volume?",
          opcoes: [
            "O procedimento em que o sistema lê o bloco de inicialização do volume, que descreve o tipo de sistema de arquivos, cria as estruturas em memória que o representam no núcleo e define um identificador para o acesso dos processos",
            "O procedimento de preencher o volume com as estruturas de dados necessárias para armazenar arquivos e diretórios",
            "O procedimento de fechar todos os arquivos abertos no volume e remover as estruturas de memória usadas para gerenciá-lo",
            "O procedimento de combinar vários discos físicos em um único volume lógico"
          ],
          correta: 0,
          explicacao: "Preencher o volume com as estruturas é a formatação, e fechar os arquivos e remover as estruturas em memória é a desmontagem."
        },
        {
          categoria: "Pontos de montagem",
          pergunta: "Sobre os pontos de montagem de volumes, assinale a alternativa INCORRETA.",
          opcoes: [
            "Nos sistemas UNIX, os volumes secundários são montados como subdiretórios na árvore do volume principal",
            "No Windows, cada volume é sempre identificado por uma letra, e não é possível montar volumes como subdiretórios",
            "Em DOS e Windows, é comum identificar cada volume por uma letra, como A:, C: e D:",
            "O ponto de montagem é a referência fornecida aos processos e usuários para o acesso ao volume"
          ],
          correta: 1,
          explicacao: "O sistema de arquivos NTFS do Windows também permite a montagem de volumes como subdiretórios da árvore principal, da mesma forma que o UNIX."
        }
      ]
    },
    {
      titulo: "Mecanismos",
      perguntas: [
        {
          categoria: "Blocos físicos e lógicos",
          pergunta: "Qual afirmação sobre blocos físicos e blocos lógicos é verdadeira?",
          opcoes: [
            "Blocos lógicos menores aumentam a eficiência de entrada/saída e diminuem a quantidade de blocos a gerenciar",
            "Blocos lógicos maiores diminuem a fragmentação interna",
            "O número de blocos físicos em cada bloco lógico varia a cada arquivo criado",
            "Um bloco lógico (cluster) é um grupo de 2ⁿ blocos físicos consecutivos e é a unidade mínima de alocação de arquivos e diretórios"
          ],
          correta: 3,
          explicacao: "O número de blocos físicos por bloco lógico é fixo e definido ao formatar a partição; blocos maiores aumentam a fragmentação interna."
        },
        {
          categoria: "Fragmentação interna",
          pergunta: "Sobre o tamanho dos blocos lógicos, julgue as afirmativas. I. Blocos lógicos grandes eliminam a fragmentação interna. II. Blocos lógicos menores implicam mais blocos a gerenciar e menos bytes transferidos em cada operação de leitura ou escrita. III. Alguns sistemas de arquivos, como o UFS do Solaris e o ReiserFS do Linux, permitem a alocação de partes de blocos lógicos. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "V, F, F",
            "F, V, V",
            "F, F, V"
          ],
          correta: 2,
          explicacao: "Blocos grandes geram muita fragmentação interna: um arquivo de 200 bytes ocupa um bloco inteiro, e em um de 32 KB desperdiçaria 32.568 bytes."
        },
        {
          categoria: "Caching de leitura",
          pergunta: "Qual é a ordem correta dos eventos em uma leitura com a estratégia read-through, quando o bloco ainda não está no cache? (1) O bloco é lido do disco. (2) O bloco é copiado no cache. (3) O cache é consultado e o bloco não está nele. (4) O bloco é entregue ao processo.",
          opcoes: [
            "3, 1, 2, 4",
            "1, 3, 2, 4",
            "3, 2, 1, 4",
            "3, 1, 4, 2"
          ],
          correta: 0,
          explicacao: "Leituras seguintes do mesmo bloco poderão ser atendidas diretamente pelo cache, sem acessar o disco."
        },
        {
          categoria: "Write-through e write-back",
          pergunta: "Texto de apoio: no write-through, o conteúdo é escrito diretamente no disco enquanto o processo aguarda a conclusão da operação, e não há ganho de desempenho na escrita. No write-back, os dados são copiados para o cache e o processo é liberado; a escrita efetiva no disco é feita depois, o que melhora o desempenho, mas há o risco de perda de dados se ocorrer um erro ou falta de energia antes da transferência para o disco. Julgue as afirmativas. I. No write-through, o processo aguarda a conclusão da escrita no disco. II. No write-back, o processo é liberado antes da escrita efetiva no disco. III. O write-back elimina qualquer risco de perda de dados.",
          opcoes: [
            "II e III, apenas",
            "I e II, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 1,
          explicacao: "No write-back há risco de perda de dados em um crash, por isso os metadados costumam ser escritos com write-through."
        },
        {
          categoria: "Alocação contígua",
          pergunta: "Qual afirmação sobre a alocação contígua de arquivos é verdadeira?",
          opcoes: [
            "O acesso aleatório é lento, pois exige ler todos os blocos anteriores",
            "Não sofre fragmentação externa",
            "O tamanho máximo do arquivo não precisa ser conhecido no momento da criação",
            "Os dados ficam em blocos consecutivos e o acesso sequencial e aleatório é rápido, mas a estratégia é pouco flexível e sujeita à fragmentação externa"
          ],
          correta: 3,
          explicacao: "A posição de cada byte é calculada a partir do bloco inicial, mas o tamanho máximo deve ser conhecido na criação e há fragmentação externa."
        },
        {
          categoria: "Alocação encadeada e FAT",
          pergunta: "Sobre as alocações encadeada simples e FAT, julgue as afirmativas. I. Na alocação encadeada simples, o acesso aleatório é rápido, pois basta o ponteiro do bloco inicial. II. Na alocação encadeada simples, se um bloco for corrompido, apenas ele fica inacessível. III. Na FAT, os ponteiros dos blocos ficam em uma tabela única, no início da partição, e cópias dela são geralmente mantidas. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "V, F, F",
            "F, F, V",
            "F, V, V"
          ],
          correta: 2,
          explicacao: "Na alocação encadeada simples, o acesso aleatório é prejudicado, e se um bloco é corrompido todos os blocos posteriores também ficam inacessíveis."
        },
        {
          categoria: "Criação de arquivos",
          pergunta: "Qual é a ordem correta das operações com metadados para criar o arquivo /home/user/novo.txt? (1) Incluir uma nova entrada na tabela do diretório /home/user/. (2) Preencher o inode com os atributos do arquivo. (3) Localizar o inode do diretório /home/user/. (4) Encontrar um inode livre e marcá-lo como ocupado.",
          opcoes: [
            "4, 2, 3, 1",
            "4, 3, 2, 1",
            "2, 4, 3, 1",
            "4, 2, 1, 3"
          ],
          correta: 0,
          explicacao: "Um crash entre essas operações pode deixar o sistema de arquivos inconsistente, por exemplo com um inode ocupado que não está referenciado em nenhum diretório."
        },
        {
          categoria: "Alocação indexada multinível",
          pergunta: "Texto de apoio: nos sistemas de arquivos Ext2/3/4 do Linux, os i-nodes têm 12 ponteiros diretos, um ponteiro indireto, um duplamente indireto e um triplamente indireto. Considerando blocos lógicos de 4 KBytes e ponteiros de 4 bytes, cada bloco de ponteiros contém 1.024 ponteiros, e o tamanho máximo de um arquivo é de cerca de 4 TBytes. Julgue as afirmativas. I. Os i-nodes do Ext2/3/4 têm 12 ponteiros diretos. II. Com blocos de 4 KBytes e ponteiros de 4 bytes, cada bloco de ponteiros contém 1.024 ponteiros. III. O tamanho máximo de arquivo desse exemplo é de cerca de 4 KBytes.",
          opcoes: [
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III",
            "I e II, apenas"
          ],
          correta: 3,
          explicacao: "Com os ponteiros diretos e indiretos, o tamanho máximo de um arquivo no exemplo é de cerca de 4 TBytes, e não 4 KBytes."
        }
      ]
    },
    {
      titulo: "Aplicação",
      perguntas: [
        {
          categoria: "Alocação por extensões",
          pergunta: "Sobre a alocação por extensões, julgue as afirmativas. I. Cada arquivo é alocado no disco como um conjunto de grupos de blocos contíguos, denominados extensões. II. Os metadados de cada extensão são numerosos, pois é mantido um ponteiro para cada bloco do arquivo. III. Um arquivo de 10 GBytes pode usar uma só extensão, enquanto um arquivo de 100 KBytes muito espalhado pode usar dezenas de extensões.",
          opcoes: [
            "I e II, apenas",
            "I e III, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 1,
          explicacao: "Os metadados de cada extensão são poucos: o bloco lógico inicial, o bloco físico inicial e a quantidade de blocos."
        },
        {
          categoria: "Journaling",
          pergunta: "Qual é a ordem correta dos eventos em um sistema de arquivos com journal, quando não ocorre falha? (1) O sistema realiza as operações no sistema de arquivos. (2) O sistema precisa fazer uma alteração que exige várias operações. (3) O registro das operações no journal é descartado. (4) O sistema registra no journal quais escritas serão realizadas.",
          opcoes: [
            "2, 1, 4, 3",
            "4, 2, 1, 3",
            "2, 4, 1, 3",
            "2, 4, 3, 1"
          ],
          correta: 2,
          explicacao: "As escritas são registradas antes de realizadas, por isso a técnica é conhecida como write-ahead logging; se ocorrer um crash, o sistema completa as operações pendentes ao reiniciar."
        },
        {
          categoria: "Registro (journal)",
          pergunta: "Texto de apoio: no journaling, as alterações que serão efetuadas no sistema de arquivos são registradas previamente em um diário, em uma área do disco separada do sistema de arquivos. Usualmente o journaling se aplica somente aos metadados, por desempenho; se ele for estendido aos dados dos arquivos, cada bloco de dados precisa ser escrito no disco duas vezes: uma no registro e outra no seu destino final. Julgue as afirmativas. I. O registro das operações é escrito antes das alterações no sistema de arquivos. II. O journal fica em uma área misturada aos blocos de dados do sistema de arquivos. III. Se o journaling for estendido aos dados, cada bloco de dados será escrito duas vezes.",
          opcoes: [
            "I e III, apenas",
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 0,
          explicacao: "O journal fica no disco, em uma área separada do sistema de arquivos."
        },
        {
          categoria: "Verificação e copy-on-write",
          pergunta: "Sobre a recuperação de falhas em sistemas de arquivos, julgue as afirmativas. I. Na verificação feita pelo fsck, checa-se, entre outros pontos, se cada bloco de dados em uso é referenciado por um único inode. II. Em um sistema de arquivos copy-on-write, o novo conteúdo é escrito em um bloco livre e os metadados são ajustados para apontar para ele, preservando a versão anterior. III. Os snapshots dos sistemas copy-on-write permitem resgatar versões anteriores de um arquivo ou diretório.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 3,
          explicacao: "As três afirmativas descrevem corretamente a verificação do fsck, o funcionamento do copy-on-write e os snapshots."
        },
        {
          categoria: "Estrutura do Ext4",
          pergunta: "Texto de apoio: uma partição Ext4 é dividida em blocos de 4 KBytes, organizados em grupos de blocos contíguos de mesmo tamanho. O superbloco contém uma descrição detalhada da partição, como o tipo e a versão do sistema de arquivos, o tamanho dos blocos e a localização do journal. Cada inode do Ext4 contém 4 descritores de extensões e pode apontar para uma árvore de descritores, se mais extensões forem necessárias. Julgue as afirmativas. I. Uma partição Ext4 usa blocos de 512 bytes. II. O superbloco contém uma descrição detalhada da partição. III. Cada inode do Ext4 contém 4 descritores de extensões.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 1,
          explicacao: "Uma partição Ext4 é dividida em blocos de 4 KBytes, e não de 512 bytes."
        },
        {
          categoria: "Grupo 0 do Ext4",
          pergunta: "Qual é a ordem das áreas que compõem o grupo 0 de uma partição Ext4? (1) Tabela de inodes. (2) Superbloco. (3) Bitmap de blocos. (4) Blocos de dados. (5) Tabela de descritores de grupos. (6) Bitmap de inodes.",
          opcoes: [
            "2, 5, 3, 6, 1, 4",
            "5, 2, 3, 6, 1, 4",
            "2, 5, 6, 3, 1, 4",
            "2, 5, 3, 6, 4, 1"
          ],
          correta: 0,
          explicacao: "O grupo 0 tem o superbloco, a tabela de descritores de grupos, os bitmaps de blocos e de inodes, a tabela de inodes e, por fim, os blocos de dados."
        },
        {
          categoria: "Gestão do espaço livre",
          pergunta: "Texto de apoio: na abordagem de mapa de bits, cada bit representa um bloco lógico da partição, que pode estar livre ou ocupado; o mapa é simples de implementar e bem compacto. Na abordagem de lista de blocos livres, cada bloco livre contém um ponteiro para o próximo bloco livre do disco, o que é ineficiente, por exigir um acesso a disco para cada bloco livre requisitado. Julgue as afirmativas. I. No mapa de bits, cada bit representa um byte do disco. II. A lista simples de blocos livres é ineficiente, por exigir um acesso a disco para cada bloco livre requisitado. III. O mapa de bits é simples de implementar e bem compacto.",
          opcoes: [
            "I e II, apenas",
            "I e III, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 2,
          explicacao: "No mapa de bits cada bit representa um bloco lógico, e não um byte do disco."
        }
      ]
    }
  ]
});
