JOGO2.registrar({
  id: "conceito-arquivo",
  titulo: "O Conceito de Arquivo",
  disciplina: "🗂️ Sistemas de Arquivos",
  descricao: "Atividade de estudo e revisão do capítulo 22: elementos básicos, atributos e operações, formatos de arquivos, identificação de conteúdo e arquivos especiais.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Elementos básicos</h3>
    <p>Um arquivo é essencialmente uma sequência de bytes armazenada em um dispositivo físico não volátil, com um nome (ou outra referência) que permite localizá-lo e acessá-lo. Os arquivos são organizados em estruturas hierárquicas chamadas diretórios. A organização do conteúdo de arquivos e diretórios em um dispositivo é o sistema de arquivos (como NTFS, Ext4, HFS, FFS e FAT). Um dispositivo físico é estruturado em um ou mais volumes (ou partições), e cada volume pode ter seu próprio sistema de arquivos.</p>

    <h3>Atributos e operações</h3>
    <p>Além do conteúdo, um arquivo tem atributos (metadados): nome, tipo, tamanho, datas (criação, último acesso e última modificação), proprietário, permissões de acesso e localização. As operações básicas são criar, abrir, ler, escrever, fechar, remover e alterar atributos. Antes de ler ou escrever, a aplicação deve abrir o arquivo; o sistema verifica se ele existe, confere as permissões, localiza o conteúdo e cria uma referência na memória da aplicação. Operações como copiar são construídas a partir das básicas.</p>

    <h3>Formatos de arquivos</h3>
    <p>O formato é a forma como os dados são estocados dentro do arquivo. Em geral o núcleo reconhece poucos formatos (executáveis e bibliotecas) e vê os demais como sequências de bytes opacas, interpretadas pelas aplicações. Há formatos padronizados (JPEG, GIF, PNG, TIFF) e proprietários (PSD e XCF), que limitam o uso das informações. Há ainda arquivos de registros e indexados (OpenVMS), arquivos de texto (linhas separadas por \\n no UNIX e por \\r\\n no DOS/Windows) e arquivos de código (ELF nos UNIX modernos e PE no Windows).</p>

    <h3>Identificação de conteúdo</h3>
    <p>O tipo do conteúdo pode ser identificado pela extensão do nome (introduzida nos anos 1980 pelo DOS, no padrão 8.3), pelos números mágicos, bytes iniciais do conteúdo convencionados para cada tipo (o utilitário file do UNIX os usa), por atributos do sistema de arquivos (como o tipo e a aplicação criadora do MacOS 9) e pelos tipos MIME, na notação tipo/subtipo, usados em anexos de e-mail e páginas Web.</p>

    <h3>Arquivos especiais</h3>
    <p>A abstração de arquivo é usada também para dispositivos de E/S (no UNIX, o diretório /dev, como /dev/sda1), para interfaces do núcleo (os diretórios /proc e /sys) e para canais de comunicação (conexões TCP e pipes). Em sistemas experimentais como o Plan 9 e o Inferno, todos os recursos do sistema são mapeados como arquivos, e basta remover o arquivo correspondente para finalizar um processo ou encerrar uma conexão.</p>
  `,
  fases: [
    {
      titulo: "Fundamentos",
      perguntas: [
        {
          categoria: "Elementos básicos",
          pergunta: "Qual afirmação sobre os elementos básicos do armazenamento em arquivos é verdadeira?",
          opcoes: [
            "Um arquivo é essencialmente uma sequência de bytes armazenada em um dispositivo não volátil, com um nome ou outra referência que permite sua localização e acesso",
            "Os diretórios são estruturas planas, sem hierarquia, usadas apenas pelo sistema NTFS",
            "Um dispositivo físico só pode conter um volume, com um único sistema de arquivos",
            "O sistema de arquivos é um atributo de cada arquivo individual"
          ],
          correta: 0,
          explicacao: "Os arquivos são organizados em diretórios hierárquicos, e um mesmo disco pode ter volumes com sistemas de arquivos diferentes."
        },
        {
          categoria: "Atributos de arquivos",
          pergunta: "Sobre os atributos (metadados) de um arquivo, assinale a alternativa INCORRETA.",
          opcoes: [
            "Os atributos são informações adicionais relativas ao conteúdo do arquivo",
            "Os atributos usuais incluem nome, tipo, tamanho, datas, proprietário, permissões de acesso e localização",
            "Os atributos são os mesmos em todos os sistemas de arquivos, que não podem definir atributos próprios",
            "Quando os atributos não bastam, os usuários usam o nome do arquivo para registrar informação, como o formato ou a versão"
          ],
          correta: 2,
          explicacao: "Os atributos variam conforme o sistema de arquivos, e cada um normalmente define seus próprios atributos específicos, além dos usuais."
        },
        {
          categoria: "Atributos de arquivos",
          pergunta: "Sobre os atributos de arquivos, julgue as afirmativas. I. O atributo localização indica o dispositivo físico onde o arquivo se encontra e a posição do arquivo nele. II. As datas mantidas pelo sistema se limitam à data de criação do arquivo. III. Em sistemas multiusuários, o proprietário de um arquivo é opcional e dispensa identificação. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "V, F, F",
            "F, V, V",
            "F, F, V"
          ],
          correta: 1,
          explicacao: "São mantidas as datas de criação, de último acesso e de última modificação, e em sistemas multiusuários cada arquivo tem um proprietário corretamente identificado."
        },
        {
          categoria: "Abertura de arquivos",
          pergunta: "O que o sistema operacional faz ao receber o pedido de abertura de um arquivo?",
          opcoes: [
            "Aloca espaço para o arquivo no dispositivo e define os valores de seus atributos",
            "Libera as estruturas de gerência do arquivo mantidas na memória do núcleo",
            "Descarta os dados do arquivo e libera o espaço que ele ocupava no dispositivo",
            "Verifica se o arquivo existe e se as permissões permitem o acesso, localiza seu conteúdo e cria uma referência para ele na memória da aplicação"
          ],
          correta: 3,
          explicacao: "As demais ações descritas correspondem às operações de criar, fechar e remover um arquivo."
        },
        {
          categoria: "Operações sobre arquivos",
          pergunta: "Sobre as operações básicas sobre arquivos, assinale a alternativa INCORRETA.",
          opcoes: [
            "Uma aplicação pode ler ou escrever em um arquivo sem antes solicitar a abertura ao sistema operacional",
            "Fechar o arquivo libera as estruturas de gerência mantidas na memória do núcleo",
            "Criar um arquivo implica alocar espaço no dispositivo e definir os valores de seus atributos",
            "Ao escrever, os novos dados podem ser adicionados ao final do arquivo ou sobrescrever dados já existentes"
          ],
          correta: 0,
          explicacao: "Antes de ler ou escrever dados, a aplicação deve solicitar ao sistema operacional a abertura do arquivo."
        }
      ]
    },
    {
      titulo: "Mecanismos",
      perguntas: [
        {
          categoria: "Formatos de arquivos",
          pergunta: "Qual afirmação sobre os formatos de arquivos é verdadeira?",
          opcoes: [
            "O núcleo reconhece todos os formatos de imagem, como JPEG, GIF e PNG",
            "Formatos proprietários, como PSD e XCF, podem ser lidos corretamente por qualquer aplicação",
            "O núcleo geralmente reconhece poucos formatos, como binários executáveis e bibliotecas, e vê os demais como sequências de bytes opacas, interpretadas pelas aplicações",
            "Os formatos padronizados limitam o uso das informações armazenadas"
          ],
          correta: 2,
          explicacao: "A adoção de um formato proprietário limita o uso das informações, pois somente aplicações que o reconheçam conseguem lê-lo corretamente."
        },
        {
          categoria: "Arquivos de registros",
          pergunta: "Sobre os arquivos estruturados, julgue as afirmativas. I. O OpenVMS oferece arquivos baseados em registros, de tamanho fixo ou variável, e arquivos indexados, com pares chave/valor. II. As bibliotecas Berkeley DB e SQLite oferecem indexação de registros sobre arquivos UNIX convencionais. III. Em todos os sistemas operacionais o núcleo oferece arquivos estruturados em registros. Assinale a sequência correta.",
          opcoes: [
            "F, V, V",
            "V, V, F",
            "V, F, F",
            "F, F, V"
          ],
          correta: 1,
          explicacao: "Nos sistemas cujo núcleo não suporta arquivos estruturados em registros, essa funcionalidade pode ser obtida por bibliotecas ou pelo suporte de execução de linguagens."
        },
        {
          categoria: "Cópia de arquivos",
          pergunta: "Qual é a ordem correta dos passos para copiar um arquivo A em um novo arquivo B usando as operações básicas? (1) Ler o conteúdo de A e escrevê-lo em B. (2) Criar e abrir B. (3) Abrir A. (4) Fechar A e B.",
          opcoes: [
            "2, 3, 1, 4",
            "3, 1, 2, 4",
            "3, 2, 4, 1",
            "3, 2, 1, 4"
          ],
          correta: 3,
          explicacao: "Operações como copiar são construídas com as básicas: abre-se A, cria-se e abre-se B, transfere-se o conteúdo e fecham-se os dois arquivos."
        },
        {
          categoria: "Arquivos de texto",
          pergunta: "Texto de apoio: um arquivo de texto é formado por linhas de caracteres de tamanho variável, separadas por caracteres de controle. Nos sistemas UNIX, as linhas são separadas por um caractere New Line (ASCII 10, ou \\n). Nos sistemas DOS/Windows, as linhas são separadas por dois caracteres: Carriage Return (ASCII 13, ou \\r) seguido de New Line. Julgue as afirmativas. I. Nos sistemas UNIX, as linhas são separadas pelo caractere New Line. II. Nos sistemas DOS/Windows, as linhas são separadas apenas pelo caractere New Line. III. A diferença pode causar problemas em arquivos transferidos entre Windows e UNIX sem a devida conversão.",
          opcoes: [
            "I e III, apenas",
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 0,
          explicacao: "No DOS/Windows as linhas são separadas por dois caracteres, Carriage Return seguido de New Line, e não apenas por New Line."
        },
        {
          categoria: "Arquivos de código",
          pergunta: "Qual afirmação sobre os formatos de arquivos de código é verdadeira?",
          opcoes: [
            "O PE é o formato de executáveis da maior parte dos sistemas UNIX modernos, e o ELF é o formato usado no Windows",
            "ELF e PE são dois formatos típicos de arquivos de configuração",
            "O ELF é usado para executáveis e bibliotecas na maior parte das plataformas UNIX modernas, e o PE é o formato usado na plataforma Windows",
            "Um arquivo ELF contém apenas o código executável, sem tabelas de símbolos"
          ],
          correta: 2,
          explicacao: "O ELF tem cabeçalho e várias seções, com código, tabelas de símbolos e informações de relocação, e o PE é uma extensão do formato COFF."
        },
        {
          categoria: "Identificação de conteúdo",
          pergunta: "Sobre a identificação do conteúdo de arquivos, julgue as afirmativas. I. A estratégia de extensão do nome foi introduzida nos anos 1990 pelo sistema Linux. II. No padrão 8.3 do DOS, o nome tinha até 8 caracteres, seguido de um ponto e de uma extensão com até 3 caracteres. III. O utilitário file dos sistemas UNIX identifica o tipo de um arquivo analisando seus bytes iniciais e sua estrutura interna, sem levar em conta o nome. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "F, V, V",
            "V, F, F",
            "F, F, V"
          ],
          correta: 1,
          explicacao: "A extensão do nome foi introduzida nos anos 1980 pelo sistema operacional DOS."
        },
        {
          categoria: "Organização do armazenamento",
          pergunta: "Qual é a ordem correta da organização do armazenamento, do dispositivo até o arquivo? (1) Arquivo. (2) Dispositivo físico. (3) Diretório. (4) Volume (partição).",
          opcoes: [
            "2, 3, 4, 1",
            "4, 2, 3, 1",
            "2, 4, 1, 3",
            "2, 4, 3, 1"
          ],
          correta: 3,
          explicacao: "Um dispositivo físico é estruturado em volumes, cada volume tem um sistema de arquivos com diretórios hierárquicos, e os diretórios contêm os arquivos."
        },
        {
          categoria: "Números mágicos e MIME",
          pergunta: "Texto de apoio: nos sistemas UNIX, é comum usar alguns bytes no início do conteúdo do arquivo para definir seu tipo; esses bytes são os números mágicos. Um documento PDF começa com %PDF, uma imagem GIF com GIF89a e um arquivo ZIP com 0x50 4B 03 04. O padrão MIME define tipos de arquivos em uma notação uniformizada na forma tipo/subtipo, como image/jpeg e text/html. Julgue as afirmativas. I. Um documento PDF começa com os bytes %PDF. II. O padrão MIME usa a notação tipo/subtipo. III. Os arquivos de classes Java são identificados pelos bytes iniciais 0x50 4B 03 04.",
          opcoes: [
            "I e II, apenas",
            "I e III, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 0,
          explicacao: "Os bytes 0x50 4B 03 04 identificam um arquivo ZIP, e os arquivos de classes Java começam com 0xCA FE BA BE."
        }
      ]
    },
    {
      titulo: "Aplicação",
      perguntas: [
        {
          categoria: "Arquivos especiais",
          pergunta: "Sobre os arquivos especiais nos sistemas UNIX, julgue as afirmativas. I. As interfaces de acesso a dispositivos físicos são mapeadas como arquivos no diretório /dev, como /dev/sda1, a primeira partição do primeiro disco SATA. II. Os diretórios /proc e /sys permitem consultar ou modificar informações internas do núcleo, dos processos e dos drivers. III. Uma conexão TCP não pode ser apresentada aos processos como um arquivo.",
          opcoes: [
            "I e III, apenas",
            "II e III, apenas",
            "I e II, apenas",
            "I, II e III"
          ],
          correta: 2,
          explicacao: "Na família TCP/IP, uma conexão TCP é apresentada aos dois processos comunicantes como um arquivo, no qual eles escrevem e leem dados."
        },
        {
          categoria: "Uso de um arquivo",
          pergunta: "Qual é a ordem lógica das operações no ciclo de uso de um arquivo? (1) Ler os dados. (2) Fechar o arquivo. (3) Abrir o arquivo. (4) Criar o arquivo. (5) Remover o arquivo.",
          opcoes: [
            "4, 1, 3, 2, 5",
            "4, 3, 1, 2, 5",
            "3, 4, 1, 2, 5",
            "4, 3, 1, 5, 2"
          ],
          correta: 1,
          explicacao: "O arquivo é criado, aberto para o uso, lido, fechado ao fim do uso e, quando não for mais necessário, removido do dispositivo."
        },
        {
          categoria: "Plan 9 e Inferno",
          pergunta: "Texto de apoio: em sistemas experimentais, como o Plan 9 e o Inferno, todos os recursos e entidades do sistema operacional são mapeados sob a forma de arquivos: processos, threads, conexões de rede, usuários, sessões, janelas gráficas, áreas de memória alocadas, etc. Para finalizar um processo, encerrar uma conexão de rede ou desconectar um usuário, basta remover o arquivo correspondente. Julgue as afirmativas. I. No Plan 9, processos e conexões de rede são mapeados como arquivos. II. No Plan 9, finalizar um processo exige uma chamada de sistema específica, pois processos não são arquivos. III. Para encerrar uma conexão de rede, basta remover o arquivo correspondente.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III",
            "I e III, apenas"
          ],
          correta: 3,
          explicacao: "No Plan 9 os processos também são arquivos, e para finalizar um processo basta remover o arquivo correspondente."
        },
        {
          categoria: "Identificação por atributos e MIME",
          pergunta: "Sobre a identificação do conteúdo de arquivos por atributos do sistema de arquivos, julgue as afirmativas. I. O MacOS 9 define um atributo de 4 bytes para o tipo do arquivo (file type) e outro de 4 bytes para a aplicação que o criou (creator application). II. Ao abrir um arquivo, o MacOS 9 escolhe a aplicação que o criou, se ela estiver presente. III. Os sistemas BeOS e MacOS X definem atributos adicionais usando o padrão MIME para identificar o conteúdo dos arquivos.",
          opcoes: [
            "I, II e III",
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas"
          ],
          correta: 0,
          explicacao: "As três afirmativas descrevem corretamente os atributos de tipo e de aplicação criadora do MacOS 9 e o uso do padrão MIME no BeOS e no MacOS X."
        },
        {
          categoria: "Formato ELF",
          pergunta: "Texto de apoio: um arquivo no formato ELF é composto por um ELF header, que descreve o conteúdo do restante do arquivo; por sections, como o código binário, as constantes, a tabela de símbolos e a tabela de relocações; por uma program header table, com informações sobre como o código deve ser carregado na memória; e por segments, o conteúdo a carregar em cada segmento de memória, que pode conter várias seções. Julgue as afirmativas. I. O ELF header descreve o conteúdo do restante do arquivo. II. Um segmento sempre contém exatamente uma seção. III. A program header table traz informações sobre como carregar o código na memória.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 2,
          explicacao: "Um segmento pode conter várias seções do programa ou biblioteca, para agilizar a carga do programa na memória."
        },
        {
          categoria: "Abertura de arquivos",
          pergunta: "Qual é a ordem correta das ações do sistema operacional ao abrir um arquivo? (1) Localizar o conteúdo no dispositivo de armazenamento. (2) Criar uma referência para o arquivo na memória da aplicação. (3) Verificar se o arquivo desejado existe. (4) Verificar se as permissões associadas permitem aquele acesso.",
          opcoes: [
            "3, 1, 4, 2",
            "3, 4, 1, 2",
            "4, 3, 1, 2",
            "3, 4, 2, 1"
          ],
          correta: 1,
          explicacao: "O sistema verifica a existência e as permissões antes de localizar o conteúdo e de criar a referência para o arquivo na memória da aplicação."
        },
        {
          categoria: "Formatos proprietários",
          pergunta: "Texto de apoio: há um grande número de formatos padronizados para o armazenamento de imagens, como JPEG, GIF, PNG e TIFF, mas também existem formatos proprietários, definidos por aplicações específicas, como o PSD (Adobe Photoshop) e o XCF (GIMP). A adoção de um formato proprietário limita o uso das informações armazenadas, pois somente aplicações que o reconheçam conseguem ler corretamente o arquivo. Julgue as afirmativas. I. PSD e XCF são exemplos de formatos proprietários. II. JPEG, GIF, PNG e TIFF são exemplos de formatos padronizados de imagens. III. Um formato proprietário amplia o uso das informações para qualquer aplicação.",
          opcoes: [
            "I e III, apenas",
            "II e III, apenas",
            "I, II e III",
            "I e II, apenas"
          ],
          correta: 3,
          explicacao: "Um formato proprietário limita o uso das informações, pois só as aplicações que o reconhecem conseguem ler o arquivo."
        }
      ]
    }
  ]
});
