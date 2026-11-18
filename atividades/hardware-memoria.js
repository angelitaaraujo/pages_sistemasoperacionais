JOGO2.registrar({
  id: "hardware-memoria",
  titulo: "Hardware de Memória",
  disciplina: "🧠 Gerência de Memória",
  descricao: "Atividade de estudo e revisão do capítulo 14: tipos de memória, endereços lógicos e físicos, MMU, partições, segmentos, páginas, TLB e localidade de referências.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Tipos de memória e hierarquia</h3>
    <p>Registradores, caches (L1 e L2), memória principal (RAM), discos e outras unidades de armazenamento formam uma hierarquia de memória, em forma de pirâmide. Memórias mais rápidas (registradores e caches) são menores, mais caras, consomem mais energia e são voláteis. Memórias como Flash e discos rígidos são não-voláteis. A rapidez é medida pelo tempo de acesso (latência) e pela taxa de transferência.</p>

    <h3>Espaço de endereçamento e memória virtual</h3>
    <p>Um barramento de endereços com n vias gera 2ⁿ endereços distintos, no intervalo [0 … 2ⁿ − 1]; esse conjunto é o espaço de endereçamento do processador, independente da quantidade de RAM instalada. Na memória virtual existem endereços físicos (bytes da RAM) e endereços lógicos (usados pelos processos e pelo processador). A MMU (Memory Management Unit) traduz endereços lógicos em físicos, gera uma interrupção em caso de acesso indevido e é configurada pelo núcleo do sistema operacional, o que também permite a proteção de memória entre processos.</p>

    <h3>Partições e segmentos</h3>
    <p>Na tradução por partições, a MMU usa um registrador base (B) e um registrador limite (L): se o endereço lógico e_l é menor que L, o endereço físico é e_f = e_l + B; caso contrário, a MMU gera uma interrupção. Essa estratégia é simples, mas pouco flexível e sujeita à fragmentação externa. Na tradução por segmentos, os endereços lógicos são pares [segmento : offset], e cada processo tem uma tabela de segmentos com base, limite e flags de cada segmento. Registradores de segmentos (como CS, SS e DS) evitam consultar a tabela o tempo todo.</p>

    <h3>Memória virtual por páginas</h3>
    <p>O espaço de endereçamento lógico é linear e dividido em páginas de mesmo tamanho; a memória física é dividida em quadros (frames) do mesmo tamanho. A tabela de páginas de cada processo indica o quadro de cada página. A MMU decompõe o endereço lógico em número de página e offset, obtém o quadro e compõe o endereço físico, preservando o offset. Páginas não mapeadas geram uma falta de página (page fault). Cada entrada da tabela tem flags como Valid, Writable, User, Present, Accessed e Dirty.</p>

    <h3>Tabelas multiníveis e TLB</h3>
    <p>Uma tabela de páginas linear de 32 bits com páginas de 4 KBytes ocupa 4 MBytes; as tabelas multiníveis, estruturadas como árvores, reduzem esse espaço (no exemplo do capítulo, de 4 MBytes para 12 KBytes), mas aumentam o tempo de acesso à memória. Para atenuar isso, a MMU mantém o TLB (Translation Lookaside Buffer), um cache de pares [página, quadro]. Um acesso com sucesso é um TLB hit; sem sucesso, um TLB miss exige a busca completa na tabela de páginas. A taxa de acerto depende do tamanho do TLB, do padrão de acessos, das trocas de contexto (o TLB é esvaziado) e da política de substituição.</p>

    <h3>Segmentos e páginas; localidade de referências</h3>
    <p>Alguns processadores, como os Intel x86, permitem combinar segmentos e páginas: a MMU converte [segmento : offset] em um endereço linear e depois o converte em físico usando as tabelas de páginas. Localidade de referências é a propriedade de concentrar os acessos em poucas áreas da memória a cada instante, e pode ser temporal, espacial ou sequencial. Quanto melhor a localidade, mais eficiente o uso de caches, do TLB e da paginação em disco.</p>
  `,
  fases: [
    {
      titulo: "Fundamentos",
      perguntas: [
        {
          categoria: "Hierarquia de memória",
          pergunta: "Sobre a hierarquia de memória de um computador, qual afirmação é verdadeira?",
          opcoes: [
            "Os discos são mais rápidos que os registradores da CPU",
            "Os caches são maiores e mais baratos que a memória RAM",
            "Memórias mais rápidas, como registradores e caches, são menores, mais caras e voláteis",
            "Memórias Flash e discos rígidos perdem seu conteúdo quando o computador é desligado"
          ],
          correta: 2,
          explicacao: "Na hierarquia de memória, as memórias mais rápidas (registradores e caches) são menores, mais caras, consomem mais energia e são voláteis."
        },
        {
          categoria: "Tempo de acesso e taxa de transferência",
          pergunta: "Sobre tempo de acesso e taxa de transferência de um meio de armazenamento, assinale a alternativa INCORRETA.",
          opcoes: [
            "A taxa de transferência indica o tempo necessário para iniciar uma transferência de dados",
            "O tempo de acesso (ou latência) é o tempo necessário para iniciar uma transferência de/para o meio de armazenamento",
            "A taxa de transferência indica quantos bytes por segundo podem ser lidos ou escritos depois de iniciada a transferência",
            "São duas grandezas complementares que traduzem a rapidez de uma memória"
          ],
          correta: 0,
          explicacao: "Quem indica o tempo para iniciar a transferência é o tempo de acesso; a taxa de transferência indica os bytes por segundo após o início."
        },
        {
          categoria: "Espaço de endereçamento",
          pergunta: "Sobre o espaço de endereçamento do processador, julgue as afirmativas. I. Um barramento de endereços com n vias gera apenas n endereços distintos. II. O espaço de endereçamento depende da quantidade de RAM instalada e nunca pode ser maior que ela. III. Um endereço gerado pelo processador pode ser inválido, quando não há memória instalada naquele endereço. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "F, V, V",
            "V, F, F",
            "F, F, V"
          ],
          correta: 3,
          explicacao: "Um barramento com n vias gera 2ⁿ endereços e o espaço de endereçamento independe da RAM instalada, podendo ter áreas inválidas; só a afirmativa III é verdadeira."
        },
        {
          categoria: "Endereços lógicos e físicos",
          pergunta: "O que são endereços lógicos (ou virtuais) em um sistema com memória virtual?",
          opcoes: [
            "Os endereços dos bytes da memória RAM instalada na máquina",
            "Os endereços usados pelos processos e pelo sistema operacional, e portanto pelo processador durante a execução",
            "Os endereços que existem apenas no barramento de controle",
            "Os endereços gerados pela MMU depois de concluída a tradução"
          ],
          correta: 1,
          explicacao: "Endereços lógicos são os usados pelos processos, pelo sistema operacional e pelo processador na execução, definidos pelo espaço de endereçamento do processador."
        },
        {
          categoria: "MMU",
          pergunta: "Sobre a MMU (Unidade de Gerência de Memória), assinale a alternativa INCORRETA.",
          opcoes: [
            "Por questões de desempenho, a tradução de endereços lógicos em físicos é feita por um componente específico de hardware",
            "Ela gera uma interrupção de hardware quando o acesso a um endereço lógico não é possível",
            "Suas regras de tradução são definidas apenas pelo hardware, sem participação do núcleo do sistema operacional",
            "Na maioria dos processadores atuais, ela está integrada ao chip da própria CPU"
          ],
          correta: 2,
          explicacao: "O comportamento da MMU e as regras de tradução de endereços são configurados pelo núcleo do sistema operacional."
        }
      ]
    },
    {
      titulo: "Mecanismos",
      perguntas: [
        {
          categoria: "Memória por partições",
          pergunta: "Na tradução por partições, como a MMU trata um endereço lógico e_l gerado pelo processador?",
          opcoes: [
            "Se e_l é menor que o limite L, soma e_l à base B para obter o endereço físico; se e_l é maior ou igual a L, gera uma interrupção",
            "Subtrai e_l do registrador limite e usa o resultado como endereço físico",
            "Compara e_l com a base B e, se for maior, gera uma interrupção",
            "Soma e_l ao limite L, sem verificar se o endereço é válido"
          ],
          correta: 0,
          explicacao: "A MMU compara e_l com o registrador limite (e_l < L) e, se válido, soma o registrador base (e_f = e_l + B); caso contrário, gera uma interrupção."
        },
        {
          categoria: "Memória por segmentos",
          pergunta: "Sobre a memória virtual por segmentos, julgue as afirmativas. I. Os endereços lógicos são pares na forma [segmento : offset]. II. Cada processo tem uma tabela de segmentos com base, limite e flags de cada segmento. III. Todos os segmentos de um processo compartilham os mesmos valores de base e limite. Assinale a sequência correta.",
          opcoes: [
            "F, V, V",
            "V, V, F",
            "V, F, F",
            "F, F, V"
          ],
          correta: 1,
          explicacao: "Os endereços são pares [segmento : offset] e cada segmento tem seus próprios valores de base e limite na tabela de segmentos do processo."
        },
        {
          categoria: "Memória por páginas",
          pergunta: "Qual é a ordem correta dos eventos na tradução de um endereço pela MMU em um sistema paginado? (1) A MMU obtém o número do quadro na tabela de páginas. (2) O processador gera o endereço lógico. (3) A MMU compõe o endereço físico com o número do quadro e o offset. (4) A MMU decompõe o endereço lógico em número de página e offset.",
          opcoes: [
            "2, 1, 4, 3",
            "4, 2, 1, 3",
            "2, 4, 3, 1",
            "2, 4, 1, 3"
          ],
          correta: 3,
          explicacao: "O processador gera o endereço lógico; a MMU o decompõe, obtém o quadro da página e compõe o endereço físico, preservando o offset."
        },
        {
          categoria: "Tabelas multiníveis",
          pergunta: "Texto de apoio: em uma arquitetura de 32 bits com páginas de 4 KBytes, uma tabela de páginas linear ocupa 4 MBytes. No exemplo do capítulo, um processo com 100 páginas mapeadas no início e 20 no final do espaço de endereçamento tem uma tabela linear quase 10 vezes maior que o próprio processo, e uma tabela de dois níveis de 12 KBytes. Julgue as afirmativas. I. A tabela linear do exemplo é quase 10 vezes maior que o processo. II. Uma tabela secundária sem entradas válidas não precisa ser alocada. III. A tabela de dois níveis ocupa menos memória que a linear mesmo quando o processo ocupa todo o espaço de endereçamento.",
          opcoes: [
            "II e III, apenas",
            "I e III, apenas",
            "I e II, apenas",
            "I, II e III"
          ],
          correta: 2,
          explicacao: "Se o processo ocupar todo o espaço de endereçamento, a tabela de dois níveis ocupa 0,098% a mais que a linear, e não menos."
        },
        {
          categoria: "Flags da tabela de páginas",
          pergunta: "Sobre os flags de uma entrada da tabela de páginas, qual afirmação é verdadeira?",
          opcoes: [
            "O flag Dirty é ativado pela MMU após uma escrita na página, indicando que ela foi modificada",
            "O flag Present indica se a página pode ser escrita ou apenas lida",
            "O flag User, quando em 0, permite que código em modo usuário acesse a página",
            "O flag Accessed só pode ser ativado pelo núcleo, nunca pela MMU"
          ],
          correta: 0,
          explicacao: "O bit Dirty é ativado pela MMU após uma escrita na página e é usado pelos algoritmos de paginação em disco."
        },
        {
          categoria: "TLB",
          pergunta: "Sobre o TLB (Translation Lookaside Buffer), julgue as afirmativas. I. Ele armazena pares [página, quadro] obtidos em consultas recentes às tabelas de páginas do processo ativo. II. Em um TLB miss, o endereço físico é composto diretamente, sem consultar a tabela de páginas. III. Após uma troca de contexto entre processos, o conteúdo do TLB continua válido e não precisa ser esvaziado. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "F, V, V",
            "F, F, V",
            "V, F, F"
          ],
          correta: 3,
          explicacao: "Em um TLB miss é preciso uma busca completa na tabela de páginas, e a troca de contexto exige esvaziar o TLB, pois seu conteúdo era do processo anterior."
        },
        {
          categoria: "TLB miss",
          pergunta: "Qual é a ordem correta dos eventos em um acesso que resulta em TLB miss? (1) A MMU busca o quadro na tabela de páginas. (2) O par [página, quadro] é adicionado ao TLB. (3) A MMU decompõe o endereço lógico em número de página e offset. (4) A MMU consulta o TLB e não encontra a página.",
          opcoes: [
            "3, 1, 4, 2",
            "3, 4, 1, 2",
            "4, 3, 1, 2",
            "3, 4, 2, 1"
          ],
          correta: 1,
          explicacao: "A MMU decompõe o endereço, consulta o TLB, e em caso de erro busca na tabela de páginas e adiciona o resultado ao TLB para agilizar as próximas consultas."
        },
        {
          categoria: "Localidade de referências",
          pergunta: "Texto de apoio: a propriedade de um processo concentrar seus acessos em poucas áreas da memória a cada instante é chamada de localidade de referências. Existem ao menos três formas de localidade: temporal, espacial e sequencial. Julgue as afirmativas. I. Na localidade temporal, um recurso usado há pouco tempo dificilmente será usado de novo em um futuro próximo. II. Na localidade espacial, um recurso é mais provavelmente acessado se outro recurso próximo a ele já foi acessado. III. A localidade sequencial é um caso particular da espacial, com predominância de acesso sequencial: após acessar a posição p, é maior a probabilidade de acessar a posição p + 1.",
          opcoes: [
            "I e II, apenas",
            "I e III, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 2,
          explicacao: "Na localidade temporal, um recurso usado há pouco tempo será provavelmente usado de novo em breve; por isso só II e III estão corretas."
        }
      ]
    },
    {
      titulo: "Aplicação",
      perguntas: [
        {
          categoria: "Segmentos e páginas",
          pergunta: "Sobre as formas de organização da memória, julgue as afirmativas. I. A organização por partições é a mais flexível e elimina a fragmentação externa. II. A organização por segmentos oferece múltiplos espaços de endereçamento para cada processo. III. Os processadores Intel x86 permitem combinar a organização por segmentos com a organização por páginas.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 1,
          explicacao: "As partições primam pela simplicidade e rapidez, mas são pouco flexíveis e sujeitas à fragmentação externa; segmentos e páginas podem ser combinados nos x86."
        },
        {
          categoria: "Paginação multinível",
          pergunta: "Qual é a ordem correta dos eventos na tradução do endereço lógico 01803E9Ah com tabela de páginas de dois níveis? (1) O índice p2 é usado na tabela externa para encontrar uma tabela interna. (2) O endereço é decomposto em p2, p1 e offset. (3) O número de quadro 2Fh é combinado ao offset E9Ah, formando 0002FE9Ah. (4) O índice p1 é usado na tabela interna para encontrar o número do quadro.",
          opcoes: [
            "2, 1, 4, 3",
            "2, 4, 1, 3",
            "1, 2, 4, 3",
            "2, 1, 3, 4"
          ],
          correta: 0,
          explicacao: "Primeiro o endereço é decomposto, depois p2 localiza a tabela interna, p1 fornece o quadro e, por fim, o quadro é combinado ao offset."
        },
        {
          categoria: "Tempo médio de acesso",
          pergunta: "Texto de apoio: em um sistema a 2 GHz com tempo de acesso à RAM de 50 ns, TLB com custo de acerto de 0,5 ns, custo de erro de 30 ns e taxa de acerto de 95%, o tempo médio de acesso à memória estimado é de 51,975 ns. Julgue as afirmativas. I. Esse resultado aumenta em 1,975 ns (4,0%) o tempo de acesso à memória. II. Se a taxa de acerto caísse a 80%, o custo adicional seria de 12,8%. III. Se a taxa de acerto subisse a 99%, o custo adicional subiria para mais de 4,0%.",
          opcoes: [
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III",
            "I e II, apenas"
          ],
          correta: 3,
          explicacao: "Com taxa de acerto de 99% o custo adicional cairia para 1,6%, e não subiria; quanto maior a taxa de acertos do TLB, melhor o desempenho."
        },
        {
          categoria: "Taxa de acerto do TLB",
          pergunta: "Sobre os fatores que influenciam a taxa de acerto do TLB, julgue as afirmativas. I. Quanto mais entradas o TLB tiver, melhor sua taxa de acerto, mas é um hardware caro e volumoso, e por isso os TLBs geralmente têm entre 16 e 256 entradas. II. Processos que concentram seus acessos em poucas páginas de cada vez fazem uso eficiente do TLB. III. A cada troca de contexto o TLB deve ser esvaziado, pois seu conteúdo reflete a tabela de páginas do processo ativo.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III",
            "I e III, apenas"
          ],
          correta: 2,
          explicacao: "O tamanho do TLB, o padrão de acessos à memória e as trocas de contexto influenciam a taxa de acerto, e as três afirmativas descrevem esses fatores corretamente."
        },
        {
          categoria: "Falta de página",
          pergunta: "Qual é a ordem correta dos eventos quando um processo acessa uma página não mapeada? (1) O núcleo trata a falta de página, abortando o processo ou tomando outra medida. (2) A MMU encontra uma entrada vazia na tabela de páginas. (3) O processo tenta acessar a página não utilizada. (4) A MMU gera uma interrupção de falta de página.",
          opcoes: [
            "3, 2, 4, 1",
            "3, 4, 2, 1",
            "2, 3, 4, 1",
            "3, 2, 1, 4"
          ],
          correta: 0,
          explicacao: "Páginas não utilizadas são entradas vazias na tabela; o acesso a elas gera uma interrupção de falta de página, que desvia a execução para o núcleo."
        },
        {
          categoria: "Localidade de referências",
          pergunta: "Texto de apoio: uma matriz de 4.096 × 4.096 bytes, com cada linha em uma página distinta de 4.096 bytes, pode ser preenchida percorrendo-a linha por linha ou coluna por coluna; os dois programas geram o mesmo resultado. Julgue as afirmativas. I. O percurso linha por linha só gera um erro de cache TLB a cada nova linha acessada. II. O percurso por colunas tem melhor localidade de referências que o percurso por linhas. III. Nos processadores Intel e AMD citados, o código que percorre as linhas executa cerca de 5 vezes mais rápido que o que percorre as colunas.",
          opcoes: [
            "I e II, apenas",
            "I e III, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 1,
          explicacao: "O percurso por colunas gera um erro de TLB a cada célula acessada, por isso tem localidade de referências pior e desempenho menor."
        },
        {
          categoria: "Tabelas multiníveis",
          pergunta: "Sobre as tabelas de páginas multiníveis, julgue as afirmativas. I. O processador Intel 80386 usa tabelas com dois níveis, cada tabela com 1.024 entradas de 4 bytes. II. Processadores de 64 bits como o Intel Core i7 usam tabelas com dois níveis de 1.024 entradas de 4 bytes. III. Nas arquiteturas citadas, cada subtabela ocupa exatamente uma página de 4 KBytes.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III",
            "I e III, apenas"
          ],
          correta: 3,
          explicacao: "O Intel Core i7 usa tabelas com 4 níveis de 512 entradas de 8 bytes, e não dois níveis; em ambos os casos cada subtabela ocupa uma página de 4 KBytes."
        }
      ]
    }
  ]
});
