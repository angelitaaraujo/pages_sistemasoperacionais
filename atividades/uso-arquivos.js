JOGO2.registrar({
  id: "uso-arquivos",
  titulo: "Uso de Arquivos",
  disciplina: "🗂️ Sistemas de Arquivos",
  descricao: "Atividade de estudo e revisão do capítulo 23: interface de acesso e descritores, abertura de arquivos, formas de acesso, compartilhamento (travas e semânticas) e controle de acesso.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Interface de acesso e descritores</h3>
    <p>A interface de acesso a um arquivo é composta por um descritor de arquivo e por funções para manipulá-lo, em dois níveis: a interface de baixo nível, oferecida pelo núcleo por chamadas de sistema (dependente do sistema operacional), e a de alto nível, formada por funções da linguagem de programação, implementada sobre a de baixo nível por bibliotecas ou pelo suporte de execução, o que favorece a portabilidade. O descritor de baixo nível é, nos sistemas POSIX/UNIX, um número inteiro não negativo (posição em uma tabela de arquivos abertos do núcleo) e, no Windows, uma referência de arquivo (file handle). O de alto nível depende da linguagem: em C é um ponteiro FILE*; em Java e Python, um objeto.</p>

    <h3>Abertura e fechamento</h3>
    <p>Para abrir um arquivo, a aplicação solicita a abertura (como fopen em C), o suporte de execução invoca uma chamada de sistema e o núcleo localiza o arquivo no dispositivo, verifica as permissões do processo, cria uma estrutura na memória do núcleo, insere uma referência a ela na relação de arquivos abertos e devolve o descritor de baixo nível. O suporte de execução cria então o descritor de alto nível. O fechamento conclui as escritas pendentes e remove as estruturas da memória do núcleo; os arquivos abertos são fechados automaticamente quando o processo encerra.</p>

    <h3>Formas de acesso</h3>
    <p>No acesso sequencial, os dados são lidos ou escritos do início ao fim, com um ponteiro de acesso que avança a cada operação, e um flag de fim de arquivo (EoF) sinaliza o final. No acesso aleatório (ou direto), indica-se a posição de cada operação; nos sistemas POSIX, lseek e fseek reposicionam o ponteiro. No acesso mapeado em memória, o arquivo é associado a um vetor na memória e a paginação em disco traz os dados por falta de página (paginação sob demanda). O acesso indexado (OpenVMS) usa registros com chaves, e pode ser obtido por bibliotecas como BerkeleyDB e SQLite.</p>

    <h3>Compartilhamento de arquivos</h3>
    <p>Leituras concorrentes não causam problemas, mas escritas e leituras concorrentes podem gerar condições de disputa. As travas podem ser obrigatórias (impostas pelo núcleo, mais comuns no Windows) ou recomendadas (gerenciadas pelo suporte de execução e que podem ser ignoradas), e exclusivas (de escrita) ou compartilhadas (de leitura), o que implementa o modelo leitores/escritores. A semântica de compartilhamento define como as escritas de um processo são vistas pelos demais: imutável, UNIX (modificação imediatamente visível, em sistemas locais), de sessão (visível só após o fechamento, típica de sistemas de arquivos de rede) e de transação (begin ... end).</p>

    <h3>Controle de acesso</h3>
    <p>Cada arquivo tem um proprietário (e muitas vezes um grupo) e permissões de acesso. A forma mais difundida usa listas de controle de acesso (ACL), mas o UNIX adota um modelo simplificado: três tipos de usuários (proprietário, grupo e demais) e três permissões (ler, escrever e executar), em apenas 9 bits. O NTFS, no Windows, é mais flexível, e permite permissões a usuários individuais. O controle é geralmente feito só na abertura do arquivo: se as permissões mudarem depois, o processo mantém o acesso enquanto o arquivo estiver aberto, pois o controle contínuo teria impacto negativo no desempenho.</p>
  `,
  fases: [
    {
      titulo: "Fundamentos",
      perguntas: [
        {
          categoria: "Interface de acesso",
          pergunta: "Qual afirmação sobre os dois níveis de interface de acesso a arquivos é verdadeira?",
          opcoes: [
            "A interface de alto nível é definida por chamadas de sistema e depende do sistema operacional",
            "A interface de baixo nível é específica de cada linguagem de programação e independe do sistema operacional",
            "A interface de baixo nível é implementada sobre a interface de alto nível",
            "A interface de baixo nível é oferecida pelo sistema operacional por chamadas de sistema, e a de alto nível, composta de funções da linguagem, é implementada sobre ela, o que auxilia a portabilidade"
          ],
          correta: 3,
          explicacao: "A interface de alto nível é implementada sobre a de baixo nível, geralmente por uma biblioteca ou suporte de execução, e não depende do sistema operacional."
        },
        {
          categoria: "Descritores de arquivo",
          pergunta: "Sobre os descritores de arquivo, assinale a alternativa INCORRETA.",
          opcoes: [
            "Um descritor de arquivo é uma representação lógica de um arquivo em uso por um processo, criada no momento da abertura",
            "Nos sistemas POSIX/UNIX, o descritor de baixo nível é uma estrutura FILE mantida pela biblioteca C",
            "Em Java e Python, os descritores de alto nível são objetos de classes específicas",
            "Nos sistemas Windows, os arquivos abertos são representados pelo núcleo por referências de arquivos (file handles)"
          ],
          correta: 1,
          explicacao: "Nos sistemas POSIX/UNIX, o descritor de baixo nível é um número inteiro não negativo; a estrutura FILE é o descritor de alto nível da linguagem C."
        },
        {
          categoria: "Descritores de arquivo",
          pergunta: "Sobre os descritores de arquivo, julgue as afirmativas. I. Nos sistemas POSIX/UNIX, o descritor de baixo nível é um número inteiro não negativo, que indica a posição do arquivo em uma tabela de arquivos abertos mantida pelo núcleo. II. Os descritores de alto nível dependem do sistema operacional subjacente, o que dificulta a portabilidade. III. Cabe ao núcleo mapear o descritor de baixo nível no descritor de alto nível de cada linguagem. Assinale a sequência correta.",
          opcoes: [
            "V, F, F",
            "V, V, F",
            "F, V, V",
            "F, F, V"
          ],
          correta: 0,
          explicacao: "Os descritores de alto nível independem do sistema operacional, e o mapeamento é feito pelas bibliotecas e pelo suporte de execução de cada linguagem."
        },
        {
          categoria: "Acesso sequencial",
          pergunta: "Qual afirmação sobre o acesso sequencial a arquivos é verdadeira?",
          opcoes: [
            "Permite indicar a posição de cada leitura, sem a necessidade de um ponteiro de posição corrente",
            "É raramente implementado, sendo exclusivo de gerenciadores de bancos de dados",
            "Os dados são lidos ou escritos do início ao final, e um ponteiro de acesso avança a cada operação",
            "Quando o ponteiro atinge o final do arquivo, as escritas também deixam de ser permitidas"
          ],
          correta: 2,
          explicacao: "Ao atingir o final do arquivo as leituras deixam de ser permitidas, mas as escritas podem acrescentar dados ao final."
        },
        {
          categoria: "Acesso aleatório",
          pergunta: "Sobre o acesso aleatório (ou direto) a arquivos, assinale a alternativa INCORRETA.",
          opcoes: [
            "Permite indicar a posição onde cada leitura ou escrita deve ocorrer, sem a necessidade de um ponteiro de posição corrente",
            "É muito importante em gerenciadores de bancos de dados e aplicações congêneres",
            "A maioria dos sistemas usa o acesso sequencial como modo básico, mas oferece operações para mudar a posição do ponteiro, como lseek e fseek nos sistemas POSIX",
            "Exige sempre percorrer o arquivo sequencialmente até encontrar o dado desejado"
          ],
          correta: 3,
          explicacao: "Se a posição do dado é conhecida, não há necessidade de percorrer o arquivo sequencialmente até encontrá-lo."
        }
      ]
    },
    {
      titulo: "Mecanismos",
      perguntas: [
        {
          categoria: "Acesso mapeado em memória",
          pergunta: "Qual afirmação sobre o acesso mapeado em memória a arquivos é verdadeira?",
          opcoes: [
            "O conteúdo do arquivo é copiado integralmente para a memória RAM durante a abertura",
            "O arquivo é associado a um vetor de bytes na memória; a primeira leitura de uma posição gera uma falta de página, e o mecanismo de memória virtual lê o conteúdo do arquivo de forma transparente",
            "Esse acesso não usa o mecanismo de paginação em disco",
            "É usado apenas por aplicações de usuário, nunca pelo núcleo do sistema"
          ],
          correta: 1,
          explicacao: "O mapeamento usa a paginação em disco, e só as partes efetivamente acessadas são trazidas para a RAM."
        },
        {
          categoria: "Paginação sob demanda",
          pergunta: "Sobre as formas de acesso a arquivos, julgue as afirmativas. I. O acesso mapeado em memória é extensivamente usado pelo núcleo para carregar código executável na memória. II. Como somente as partes efetivamente acessadas do código são carregadas em RAM, o procedimento é conhecido como paginação sob demanda (demand paging). III. O acesso indexado é implementado no núcleo da maioria dos sistemas operacionais de mercado. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "F, V, V",
            "V, F, F",
            "F, F, V"
          ],
          correta: 0,
          explicacao: "A maioria dos sistemas de mercado não implementa o acesso indexado no núcleo, mas ele pode ser obtido por bibliotecas como BerkeleyDB e SQLite."
        },
        {
          categoria: "Abertura de arquivos",
          pergunta: "Qual é a ordem correta dos eventos na abertura de um arquivo? (1) O núcleo verifica se o processo tem as permissões necessárias. (2) A aplicação solicita a abertura do arquivo, como com fopen em C. (3) O núcleo localiza o arquivo no dispositivo físico, usando seu nome e caminho. (4) O suporte de execução invoca uma chamada de sistema para abrir o arquivo. (5) O núcleo cria a estrutura de dados na memória e devolve o descritor de baixo nível.",
          opcoes: [
            "2, 3, 4, 1, 5",
            "4, 2, 3, 1, 5",
            "2, 4, 3, 1, 5",
            "2, 4, 1, 3, 5"
          ],
          correta: 2,
          explicacao: "A aplicação chama a função, o suporte de execução faz a chamada de sistema, e o núcleo localiza o arquivo, confere as permissões e devolve o descritor de baixo nível."
        },
        {
          categoria: "Fechamento de arquivos",
          pergunta: "Texto de apoio: assim que o processo terminar de usar um arquivo, ele deve solicitar ao núcleo o fechamento, que implica concluir as operações de escrita eventualmente pendentes e remover da memória do núcleo as estruturas de dados criadas na abertura. Normalmente, os arquivos abertos são fechados automaticamente quando o processo é encerrado, mas pode ser necessário fechá-los antes, em processos de vida longa, como um daemon servidor de páginas Web, ou que abram muitos arquivos, como um compilador. Julgue as afirmativas. I. O fechamento conclui as operações de escrita pendentes. II. Normalmente, os arquivos abertos são fechados automaticamente quando o processo é encerrado. III. Fechar o arquivo antes do fim do processo nunca é necessário.",
          opcoes: [
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III",
            "I e II, apenas"
          ],
          correta: 3,
          explicacao: "Em processos de vida longa, ou que abrem muitos arquivos, pode ser necessário fechá-los antes do término do processo."
        },
        {
          categoria: "Tipos de travas",
          pergunta: "Qual afirmação sobre os tipos de travas em arquivos é verdadeira?",
          opcoes: [
            "As travas recomendadas são impostas pelo núcleo de forma incontornável",
            "As travas obrigatórias são impostas pelo núcleo de forma incontornável, e as recomendadas são gerenciadas pelo suporte de execução, podendo ser ignoradas por um processo",
            "As travas compartilhadas impedem qualquer outra trava sobre o arquivo, inclusive de leitura",
            "As travas exclusivas permitem que outros processos obtenham outras travas sobre o mesmo arquivo"
          ],
          correta: 1,
          explicacao: "Com travas recomendadas, um processo pode ignorar a regra e acessar o arquivo sem a trava, caso necessário."
        },
        {
          categoria: "Travas exclusivas e compartilhadas",
          pergunta: "Sobre as travas exclusivas e compartilhadas, julgue as afirmativas. I. Enquanto uma trava exclusiva estiver ativa, outros processos ainda podem obter travas compartilhadas sobre o mesmo arquivo. II. As travas compartilhadas (de leitura) impedem outros processos de criar travas exclusivas, mas permitem outras travas compartilhadas. III. As travas exclusivas e compartilhadas implementam o modelo de sincronização leitores/escritores. Assinale a sequência correta.",
          opcoes: [
            "F, V, V",
            "V, V, F",
            "V, F, F",
            "F, F, V"
          ],
          correta: 0,
          explicacao: "Enquanto uma trava exclusiva estiver ativa, nenhum outro processo pode obter outra trava sobre o mesmo arquivo."
        },
        {
          categoria: "Acesso mapeado em memória",
          pergunta: "Qual é a ordem correta dos eventos em um acesso mapeado em memória a uma posição do arquivo lida pela primeira vez? (1) O mecanismo de memória virtual lê o conteúdo do arquivo e o deposita no vetor. (2) A aplicação lê a posição do vetor pela primeira vez. (3) É gerada uma falta de página. (4) A aplicação acessa o dado.",
          opcoes: [
            "2, 1, 3, 4",
            "3, 2, 1, 4",
            "2, 3, 1, 4",
            "2, 3, 4, 1"
          ],
          correta: 2,
          explicacao: "A primeira leitura gera uma falta de página, o mecanismo de memória virtual traz o conteúdo do arquivo, e só então a aplicação o acessa."
        },
        {
          categoria: "Semântica imutável e UNIX",
          pergunta: "Texto de apoio: pela semântica imutável, se um arquivo pode ser compartilhado por vários processos, ele é marcado como imutável: seu conteúdo somente pode ser lido, o que é a forma mais simples de garantir a consistência. Pela semântica UNIX, toda modificação em um arquivo é imediatamente visível a todos os processos que mantêm aquele arquivo aberto; é a semântica mais comum em sistemas de arquivos locais. Julgue as afirmativas. I. Na semântica imutável, o conteúdo do arquivo somente pode ser lido. II. Na semântica UNIX, a modificação só fica visível quando o processo fecha o arquivo. III. A semântica UNIX é a mais comum em sistemas de arquivos locais.",
          opcoes: [
            "I e II, apenas",
            "I e III, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 1,
          explicacao: "Na semântica UNIX a modificação é imediatamente visível aos processos que mantêm o arquivo aberto; a visibilidade só após o fechamento é da semântica de sessão."
        }
      ]
    },
    {
      titulo: "Aplicação",
      perguntas: [
        {
          categoria: "Semântica de sessão e transação",
          pergunta: "Sobre as semânticas de compartilhamento, julgue as afirmativas. I. Na semântica de sessão, as modificações feitas em uma sessão só são visíveis na mesma sessão e nas sessões que iniciarem depois que o processo fechar o arquivo. II. A semântica de sessão é normalmente aplicada a sistemas de arquivos de rede. III. Na semântica de transação, as modificações parciais feitas durante uma transação ficam visíveis às demais transações enquanto ela executa.",
          opcoes: [
            "I e III, apenas",
            "II e III, apenas",
            "I, II e III",
            "I e II, apenas"
          ],
          correta: 3,
          explicacao: "Na semântica de transação, as modificações parciais não são visíveis às demais transações; só ficam visíveis após a conclusão da transação."
        },
        {
          categoria: "Interface em C",
          pergunta: "No programa de exemplo em C do capítulo, qual é a ordem correta das ações? (1) Fechar o arquivo com fclose. (2) Abrir o arquivo para leitura com fopen. (3) Verificar se o descritor do arquivo é válido. (4) Ler e imprimir os caracteres até encontrar o fim do arquivo.",
          opcoes: [
            "2, 3, 4, 1",
            "3, 2, 4, 1",
            "2, 4, 3, 1",
            "2, 3, 1, 4"
          ],
          correta: 0,
          explicacao: "O programa abre o arquivo, verifica se a abertura foi correta, lê os caracteres até o fim do arquivo (feof) e, por fim, fecha o arquivo."
        },
        {
          categoria: "Semântica de sessão",
          pergunta: "Texto de apoio: na semântica de sessão do exemplo do capítulo, os processos p1 a p4 compartilham um arquivo com um número inteiro, de valor inicial 23. O valor 39 escrito por p1 é visto por ele na mesma sessão, mas não por p2, que abriu o arquivo antes do fim da sessão de p1. O processo p3 vê o valor 39, pois abriu o arquivo depois que p1 o fechou, mas não vê o valor 71 escrito por p2. Julgue as afirmativas. I. O processo p1 vê o valor 39 na mesma sessão em que o escreveu. II. O processo p2 vê o valor 39 escrito por p1. III. O processo p3 vê o valor 39, mas não vê o valor 71 escrito por p2.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 2,
          explicacao: "O processo p2 abriu o arquivo antes do fim da sessão de p1 e, por isso, não vê o valor 39."
        },
        {
          categoria: "Controle de acesso no UNIX",
          pergunta: "Sobre o controle de acesso a arquivos, julgue as afirmativas. I. O UNIX considera três tipos de usuários (proprietário, grupo e demais) e três tipos de permissões (ler, escrever e executar). II. No UNIX, são necessários apenas 9 bits para definir as permissões de acesso de cada arquivo ou diretório. III. O NTFS usa o mesmo controle básico do UNIX, sem permitir permissões complementares a usuários individuais.",
          opcoes: [
            "I e III, apenas",
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 1,
          explicacao: "O NTFS implementa um controle de acesso mais flexível, no qual permissões complementares a usuários individuais podem ser associadas a qualquer arquivo."
        },
        {
          categoria: "Listagem de permissões UNIX",
          pergunta: "Texto de apoio: em uma listagem de diretório UNIX, o arquivo hello-unix.c tem as permissões rw- r-- r-- (proprietário maziero, grupo prof): o proprietário lê e escreve, o grupo prof apenas lê e os demais usuários apenas leem. O arquivo hello-unix tem as permissões rwx r-x ---: o proprietário lê, escreve e executa, o grupo prof lê e executa, e os demais usuários não têm acesso. Julgue as afirmativas. I. Os usuários do grupo prof podem escrever no arquivo hello-unix.c. II. O arquivo hello-unix pode ser executado pelo proprietário e pelos usuários do grupo prof. III. O arquivo hello-unix não pode ser acessado pelos demais usuários.",
          opcoes: [
            "I e II, apenas",
            "I e III, apenas",
            "I, II e III",
            "II e III, apenas"
          ],
          correta: 3,
          explicacao: "As permissões r-- do grupo prof em hello-unix.c permitem apenas a leitura, e não a escrita."
        },
        {
          categoria: "Controle de acesso na abertura",
          pergunta: "Qual é a ordem correta dos eventos em um arquivo cujas permissões são alteradas depois de aberto? (1) O núcleo verifica as permissões e cria a referência na memória. (2) O processo continua lendo o arquivo. (3) As permissões do arquivo são alteradas para impedir o acesso. (4) O processo abre o arquivo.",
          opcoes: [
            "4, 1, 2, 3",
            "4, 3, 1, 2",
            "4, 1, 3, 2",
            "1, 4, 3, 2"
          ],
          correta: 2,
          explicacao: "O controle de acesso ocorre só na abertura, então o processo mantém o acesso enquanto o arquivo estiver aberto, mesmo com as permissões alteradas."
        },
        {
          categoria: "Controle contínuo de acesso",
          pergunta: "Texto de apoio: o controle de acesso é geralmente realizado somente durante a abertura do arquivo. Uma vez aberto o arquivo, o processo terá acesso ao conteúdo enquanto o mantiver aberto, mesmo que as permissões do arquivo sejam alteradas para impedir esse acesso. O controle contínuo de acesso é raramente implementado, porque verificar as permissões a cada leitura ou escrita teria um impacto negativo significativo sobre o desempenho. Julgue as afirmativas. I. O controle de acesso é geralmente realizado na abertura do arquivo. II. Se as permissões forem alteradas, o processo com o arquivo já aberto perde imediatamente o acesso. III. O controle contínuo de acesso é raramente implementado por causa do impacto no desempenho.",
          opcoes: [
            "I e III, apenas",
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 0,
          explicacao: "O processo mantém o acesso enquanto o arquivo estiver aberto, mesmo que as permissões sejam alteradas depois da abertura."
        }
      ]
    }
  ]
});
