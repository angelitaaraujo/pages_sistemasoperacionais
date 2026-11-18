JOGO2.registrar({
  id: "discos-ssd",
  titulo: "Discos Rígidos e SSD",
  disciplina: "💾 Armazenamento",
  descricao: "Atividade de estudo e revisão do capítulo 21: estrutura e escalonamento de discos rígidos, sistemas RAID, memória flash, estrutura de um SSD, FTL, coleta de lixo, nivelamento de desgaste, TRIM e interfaces de acesso.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Discos rígidos</h3>
    <p>Um disco rígido tem discos metálicos que giram juntos, com uma cabeça de leitura móvel por face. Cada face é dividida em trilhas e setores, e a interseção de uma trilha e um setor define o bloco físico, a unidade básica de armazenamento. O endereçamento CHS (cabeça, cilindro e setor) foi substituído pelo LBA, que endereça os blocos linearmente; o firmware do disco converte entre os dois. O tempo de acesso é dominado pelo tempo de busca (posicionar a cabeça na trilha) e pela latência rotacional (esperar o setor passar sob a cabeça).</p>

    <h3>Escalonamento de disco</h3>
    <p>Como o disco só atende uma requisição por vez, mantém-se uma fila de pedidos, e a ordem de atendimento é o escalonamento de disco. O FCFS atende na ordem da fila; o SSTF atende sempre o pedido mais próximo da cabeça, mas pode causar inanição; o SCAN varre o disco em um sentido e depois no outro; o C-SCAN varre em um só sentido e volta ao início; o LOOK e o C-LOOK são variantes que não avançam até o fim do disco. SCAN, C-SCAN, LOOK e C-LOOK formam o algoritmo do elevador. O escalonador Noop do Linux é voltado a SSDs e a sistemas com escalonamento próprio, como o RAID.</p>

    <h3>Sistemas RAID</h3>
    <p>Um RAID combina vários discos em um único disco lógico, para ganhar desempenho (acesso em paralelo) e confiabilidade (redundância); opera abaixo do sistema de arquivos. O RAID 0 distribui fatias (stripes) entre os discos, sem redundância; o RAID 1 espelha os dados em dois ou mais discos; os RAID 3 e 4 usam um disco dedicado de paridade (um gargalo de escrita); o RAID 5 distribui a paridade entre todos os discos, com 4 operações de disco por escrita; o RAID 6 usa códigos de Reed-Solomon além da paridade e tolera a falha de até dois discos. A paridade é calculada por XOR.</p>

    <h3>Memória flash e estrutura de um SSD</h3>
    <p>Um SSD é um dispositivo não-volátil de memória flash, sem partes mecânicas. Células SLC guardam 1 bit e células MLC guardam 2 ou mais; para SSDs usam-se geralmente células NAND. Uma página só pode ser escrita depois de apagada, o apagamento é feito por bloco inteiro e é lento, e cada célula suporta um número limitado de apagamentos. Um SSD tem chips de flash, um controlador (interface, tradução de endereços, gerência de escrita e apagamento, nivelamento de desgaste, cache, correção de erros e gestão de defeitos) e uma interface com o computador.</p>

    <h3>FTL, coleta de lixo, TRIM e provisionamento</h3>
    <p>A Camada de Tradução Flash (FTL) converte os endereços de setores lógicos em páginas físicas, mantém o estado de cada página e o número de apagamentos de cada bloco, e implementa a coleta de lixo e o nivelamento de desgaste (estático e dinâmico). O comando TRIM informa à FTL que blocos lógicos foram liberados, para que as páginas físicas sejam invalidadas. A amplificação de escritas (WAF) é a razão entre os bytes escritos na flash e os bytes escritos pelo SO. O provisionamento em excesso reserva uma área de flash acessível só ao controlador, para a coleta de lixo, as tabelas da FTL e a substituição de blocos defeituosos.</p>
  `,
  fases: [
    {
      titulo: "Fundamentos",
      perguntas: [
        {
          categoria: "Estrutura do disco rígido",
          pergunta: "Qual afirmação sobre a estrutura física de um disco rígido é verdadeira?",
          opcoes: [
            "Existe uma única cabeça de leitura fixa, compartilhada por todas as faces dos discos",
            "Até 2010 os blocos físicos tinham 4.096 bytes, e hoje o padrão da indústria são blocos de 512 bytes",
            "Cada face é dividida em trilhas e setores, e a interseção de uma trilha e um setor define um bloco físico, a unidade básica de armazenamento e transferência",
            "O endereçamento CHS é o padrão atual, e o LBA é o padrão histórico"
          ],
          correta: 2,
          explicacao: "O bloco físico é a interseção de uma trilha e um setor, e o padrão migrou de blocos de 512 bytes para blocos de 4.096 bytes."
        },
        {
          categoria: "Endereçamento e tempo de acesso",
          pergunta: "Sobre o acesso a blocos em um disco rígido, assinale a alternativa INCORRETA.",
          opcoes: [
            "No padrão LBA, é necessário informar a cabeça, o cilindro e o setor onde se encontra o bloco",
            "No padrão LBA, os blocos são endereçados linearmente (0, 1, 2, 3, ...)",
            "A conversão entre endereços LBA e CHS é feita pelo firmware do disco, de forma transparente para o restante do sistema",
            "O tempo de busca é o tempo para a cabeça se posicionar sobre a trilha, e a latência rotacional é o tempo para o disco girar até o setor desejado"
          ],
          correta: 0,
          explicacao: "Informar cabeça, cilindro e setor é característico do padrão CHS, que foi substituído pelo LBA, no qual os blocos são endereçados linearmente."
        },
        {
          categoria: "Interfaces de acesso",
          pergunta: "Sobre as interfaces de conexão de dispositivos de armazenamento, julgue as afirmativas. I. O SATA é o padrão de interface de discos em desktops e notebooks atuais, com transmissão serial. II. O NVMe foi desenvolvido especificamente para SSDs e é conectado diretamente ao barramento PCI Express. III. O padrão IDE (PATA) é o mais recente, desenvolvido especificamente para SSDs. Assinale a sequência correta.",
          opcoes: [
            "F, V, V",
            "V, F, F",
            "F, F, V",
            "V, V, F"
          ],
          correta: 3,
          explicacao: "O IDE (PATA) surgiu nos anos 1980, e o NVMe é o padrão mais recente, desenvolvido para SSDs com memória flash."
        },
        {
          categoria: "Dispositivos de estado sólido",
          pergunta: "Qual afirmação sobre os dispositivos de estado sólido (SSD) é verdadeira?",
          opcoes: [
            "Um SSD tem maior capacidade e menor preço por gigabyte que um disco rígido equivalente",
            "É um dispositivo de armazenamento não-volátil, construído com circuitos de memória flash e sem partes mecânicas móveis",
            "Um SSD é mais lento, mais pesado e mais barulhento que um disco rígido equivalente",
            "Os primeiros SSDs surgiram nos anos 2000, com a popularização dos computadores pessoais"
          ],
          correta: 1,
          explicacao: "Um SSD é mais compacto, leve, rápido, silencioso e resistente a choques, mas tem menor capacidade e maior preço por gigabyte; os primeiros surgiram nos anos 1970."
        },
        {
          categoria: "Sistemas RAID",
          pergunta: "Sobre os sistemas RAID, assinale a alternativa INCORRETA.",
          opcoes: [
            "Um sistema RAID é visto pelo sistema operacional e pelas aplicações como um único disco lógico",
            "O objetivo central é proporcionar mais desempenho, pelo paralelismo, e mais confiabilidade, pela redundância",
            "Os sistemas RAID operam acima dos sistemas de arquivos, gerenciando arquivos e diretórios",
            "O RAID por hardware usa uma placa controladora dedicada, e o RAID por software usa drivers do sistema operacional"
          ],
          correta: 2,
          explicacao: "Os sistemas RAID operam abaixo dos sistemas de arquivos, preocupando-se apenas com o armazenamento e a recuperação de blocos de dados."
        }
      ]
    },
    {
      titulo: "Mecanismos",
      perguntas: [
        {
          categoria: "Escalonamento de disco",
          pergunta: "Qual afirmação sobre os algoritmos de escalonamento de disco é verdadeira?",
          opcoes: [
            "O SSTF atende sempre o pedido mais próximo da posição atual da cabeça, o que reduz a movimentação, mas pode causar inanição de pedidos distantes",
            "O FCFS atende sempre o pedido mais próximo da cabeça e é o algoritmo de melhor desempenho",
            "O SCAN, ao atingir o final do disco, retorna diretamente ao início sem atender pedidos",
            "O SSTF elimina o risco de inanição de requisições de acesso"
          ],
          correta: 0,
          explicacao: "No SSTF, muitas requisições em uma região podem deixar indefinidamente em espera os pedidos a blocos distantes dela."
        },
        {
          categoria: "Algoritmo do elevador",
          pergunta: "Sobre os algoritmos de escalonamento de disco, julgue as afirmativas. I. SCAN, C-SCAN, LOOK e C-LOOK são chamados coletivamente de algoritmo do elevador. II. No LOOK, a cabeça sempre avança até o final do disco antes de inverter o sentido. III. O C-SCAN varre o disco nos dois sentidos, atendendo pedidos na ida e na volta. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "F, V, V",
            "F, F, V",
            "V, F, F"
          ],
          correta: 3,
          explicacao: "No LOOK a cabeça inverte o movimento assim que trata o último pedido, e o C-SCAN varre o disco em um só sentido, voltando ao início."
        },
        {
          categoria: "Algoritmo SCAN",
          pergunta: "Em um disco de 1.000 blocos (0 a 999), com a cabeça no bloco 500 e subindo, o algoritmo SCAN atende uma fila de pedidos. Qual é a ordem em que ele atende os pedidos abaixo? (1) bloco 914. (2) bloco 447. (3) bloco 659. (4) bloco 278. (5) bloco 335.",
          opcoes: [
            "3, 1, 2, 4, 5",
            "3, 1, 2, 5, 4",
            "1, 3, 2, 5, 4",
            "3, 2, 1, 5, 4"
          ],
          correta: 1,
          explicacao: "A cabeça sobe atendendo 659 e 914, vai até o final do disco, inverte o sentido e atende 447, 335 e 278."
        },
        {
          categoria: "RAID 0 e RAID 1",
          pergunta: "Texto de apoio: no RAID 0 (stripping), os discos físicos são divididos em fatias (stripes) concatenadas em round-robin, o que distribui melhor a carga de acessos; essa abordagem não oferece redundância. No RAID 1, o conteúdo é replicado em dois ou mais discos (espelhamento); cada operação de escrita deve ser replicada em todos os discos. Julgue as afirmativas. I. O RAID 0 stripping não oferece redundância de dados. II. O RAID 1 não traz ganho de desempenho em escrita. III. O RAID 1 oferece desempenho de escrita N vezes maior, pois escreve em paralelo nos N discos.",
          opcoes: [
            "II e III, apenas",
            "I e III, apenas",
            "I e II, apenas",
            "I, II e III"
          ],
          correta: 2,
          explicacao: "No RAID 1 cada escrita deve ser replicada em todos os discos, então não há ganho de desempenho em escrita."
        },
        {
          categoria: "RAID 5",
          pergunta: "Qual afirmação sobre o RAID 5 é verdadeira?",
          opcoes: [
            "As informações de paridade são distribuídas uniformemente entre os discos, eliminando o gargalo de acesso à paridade dos níveis RAID 3 e 4",
            "Toda a informação de paridade fica concentrada em um único disco dedicado",
            "Ele permite tolerar a falha simultânea de até dois discos",
            "A escrita de um bloco de dados exige apenas uma operação de disco"
          ],
          correta: 0,
          explicacao: "No RAID 5 a paridade é distribuída entre os discos; a escrita de um bloco exige 4 operações de disco, e a falha de até 2 discos é tolerada pelo RAID 6."
        },
        {
          categoria: "Níveis RAID",
          pergunta: "Sobre os níveis RAID, julgue as afirmativas. I. O RAID 3 fatia os dados em blocos, e o RAID 4 fatia os dados em bytes. II. A informação de paridade é calculada com a operação XOR, o que permite reconstruir o conteúdo de um disco com falha. III. O RAID 6 usa códigos de Reed-Solomon além da paridade e tolera falhas simultâneas de até dois discos. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "V, F, F",
            "F, F, V",
            "F, V, V"
          ],
          correta: 3,
          explicacao: "O RAID 3 fatia os dados em bytes e o RAID 4 em blocos, ao contrário do que afirma a primeira afirmativa."
        },
        {
          categoria: "Escrita no RAID 5",
          pergunta: "Qual é a ordem correta das operações para escrever um bloco de dados em um RAID 5? (1) Escrever o novo bloco de dados. (2) Ler o bloco de dados atual. (3) Recalcular a paridade. (4) Ler o bloco de paridade atual. (5) Escrever o novo bloco de paridade.",
          opcoes: [
            "2, 3, 4, 1, 5",
            "2, 4, 3, 1, 5",
            "4, 2, 3, 1, 5",
            "2, 4, 3, 5, 1"
          ],
          correta: 1,
          explicacao: "São lidos o bloco e a paridade, a paridade é recalculada, e então são escritos o novo bloco de dados e o novo bloco de paridade (4 operações de disco)."
        },
        {
          categoria: "Memória flash",
          pergunta: "Texto de apoio: as células flash são agrupadas em strings, páginas (4 a 8 KBytes), blocos e planos. Dados só podem ser escritos em uma página se ela tiver sido previamente apagada, e as páginas não podem ser apagadas individualmente: o bloco inteiro deve ser apagado. O apagamento é lento: a leitura leva de 25 a 75 µs, a escrita de 200 a 1.350 µs e o apagamento de um bloco de 1,5 a 4,5 ms. Julgue as afirmativas. I. Uma página só pode ser escrita se tiver sido previamente apagada. II. As páginas podem ser apagadas individualmente. III. O apagamento de um bloco é bem mais lento que a leitura e a escrita.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III",
            "I e III, apenas"
          ],
          correta: 3,
          explicacao: "As páginas não podem ser apagadas individualmente, pois o bloco que as contém deve ser apagado inteiro na mesma operação."
        }
      ]
    },
    {
      titulo: "Aplicação",
      perguntas: [
        {
          categoria: "Células flash",
          pergunta: "Sobre as células de memória flash, julgue as afirmativas. I. Células SLC armazenam 1 bit, e células MLC armazenam 2 ou mais bits por célula. II. Células SLC geralmente suportam cerca de 100.000 apagamentos, enquanto células MLC suportam 10.000 ou menos. III. Para o armazenamento maciço em SSDs, pendrives e cartões de memória, geralmente são usadas células NOR.",
          opcoes: [
            "I e III, apenas",
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 1,
          explicacao: "Para o armazenamento maciço de dados são geralmente usadas células NAND, e não NOR."
        },
        {
          categoria: "Escrita, coleta de lixo e apagamento",
          pergunta: "Qual é a ordem correta dos eventos no exemplo de escrita em um dispositivo flash? (1) O controlador migra as páginas válidas do bloco 0 para o bloco 1. (2) O SO reescreve as páginas lógicas 0 a 9, e o controlador as grava em novas páginas e marca as anteriores como inválidas. (3) O bloco 0, só com páginas inválidas, é apagado. (4) O SO escreve as páginas lógicas 0 a 9, que são alocadas nas primeiras páginas livres do bloco 0.",
          opcoes: [
            "4, 2, 1, 3",
            "4, 1, 2, 3",
            "2, 4, 1, 3",
            "4, 2, 3, 1"
          ],
          correta: 0,
          explicacao: "Como uma página não pode ser reescrita sem apagar o bloco, a versão antiga é invalidada, e a coleta de lixo migra as páginas válidas antes de apagar o bloco."
        },
        {
          categoria: "Camada de Tradução Flash",
          pergunta: "Texto de apoio: o sistema operacional vê o SSD como um vetor de blocos lógicos, mas os dados são armazenados em páginas, dentro de blocos, nos chips de flash. O controlador converte os endereços dos setores lógicos em páginas físicas pela Camada de Tradução Flash (FTL), que também mantém o estado de cada página (livre, em uso, inválida, defeituosa) e o número de vezes que cada bloco foi apagado, além de implementar a coleta de lixo e o nivelamento de desgaste. Julgue as afirmativas. I. A FTL converte endereços de setores lógicos em páginas físicas. II. O sistema operacional enxerga diretamente as páginas físicas da memória flash. III. A FTL mantém o número de apagamentos de cada bloco.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 2,
          explicacao: "Os endereços vistos pelo sistema operacional não correspondem às posições físicas na flash, e é a FTL que faz essa conversão."
        },
        {
          categoria: "TRIM e nivelamento de desgaste",
          pergunta: "Sobre o comando TRIM e o nivelamento de desgaste, julgue as afirmativas. I. O comando TRIM informa à FTL a liberação de blocos lógicos, para que as páginas físicas correspondentes sejam marcadas como inválidas e disponibilizadas para a coleta de lixo. II. Sem o TRIM, ao apagar um arquivo o SO só atualiza a tabela de diretório, e a FTL continua tratando as páginas como válidas até que sejam reescritas. III. No nivelamento estático, páginas de blocos pouco desgastados são movidas para blocos mais desgastados, aproveitando seus ciclos de apagamento.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 3,
          explicacao: "As três afirmativas descrevem corretamente o papel do TRIM e do nivelamento estático de desgaste."
        },
        {
          categoria: "Amplificação de escritas",
          pergunta: "Texto de apoio: o aumento do número de escritas físicas em relação às escritas solicitadas pelo SO é denominado amplificação de escritas. O Fator de Amplificação de Escrita (WAF) é a razão entre os bytes escritos na memória flash e os bytes escritos pelo SO. Idealmente seria 1,0, e os fabricantes costumam anunciar valores entre 1,2 e 1,5; controladores que comprimem dados podem obter um fator inferior a 1. Julgue as afirmativas. I. O WAF é a razão entre os bytes escritos na memória flash e os bytes escritos pelo SO. II. O valor ideal do WAF seria 1,0. III. Um fator de amplificação inferior a 1 é impossível.",
          opcoes: [
            "I e III, apenas",
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 1,
          explicacao: "Controladores que implementam compressão de dados podem obter WAF inferior a 1, escrevendo menos dados na flash que o enviado pelo SO."
        },
        {
          categoria: "Estrutura da memória flash",
          pergunta: "Qual é a ordem correta das estruturas de uma memória flash, da menor para a maior? (1) Bloco. (2) Célula. (3) Chip. (4) Página. (5) String.",
          opcoes: [
            "2, 5, 4, 1, 3",
            "5, 2, 4, 1, 3",
            "2, 4, 5, 1, 3",
            "2, 5, 4, 3, 1"
          ],
          correta: 0,
          explicacao: "As células são agrupadas em strings, as strings em páginas, as páginas em blocos, e os blocos (em planos) formam um chip de memória."
        },
        {
          categoria: "Provisionamento em excesso",
          pergunta: "Texto de apoio: os fabricantes de SSDs provisionam uma área adicional de memória flash, acessível somente ao controlador, para melhorar a coleta de lixo e o nivelamento de desgaste, guardar as tabelas da FTL e substituir páginas e blocos defeituosos. O provisionamento em excesso costuma variar entre 0% e 28%, sendo maior em SSDs voltados à escrita intensiva; um exemplo é um SSD de 128 GB reais anunciado como 100 GB. Julgue as afirmativas. I. A área adicional é acessível somente ao controlador do SSD. II. O provisionamento em excesso é sempre de 0%, em qualquer SSD. III. Em SSDs voltados à escrita intensiva, o provisionamento costuma ser maior.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 2,
          explicacao: "O provisionamento em excesso costuma variar entre 0% e 28%, e é maior nos SSDs voltados à operação intensiva em escrita."
        }
      ]
    }
  ]
});
