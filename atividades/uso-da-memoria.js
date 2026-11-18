JOGO2.registrar({
  id: "uso-da-memoria",
  titulo: "Uso da Memória",
  disciplina: "🧠 Gerência de Memória",
  descricao: "Atividade de estudo e revisão do capítulo 15: espaço de endereçamento virtual, seções de memória de um processo, alocação de variáveis e atribuição de endereços.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Espaço de endereçamento virtual de um processo</h3>
    <p>Na maioria dos sistemas atuais, a parte inicial dos endereços virtuais é reservada para o processo e a parte final para o núcleo do sistema operacional (no Linux 32 bits, 3 GB para o processo e 1 GB para o núcleo). As páginas do processo têm o flag user; as do núcleo não, e por isso o código de usuário não as acessa. O bug Meltdown, descoberto em 2018, levou à solução de retirar o núcleo do espaço de endereçamento dos processos, como o KPTI no Linux.</p>

    <h3>A memória de um processo</h3>
    <p>Cada processo é uma cápsula de memória isolada, dividida em seções: TEXT (código binário, tamanho fixo), DATA (variáveis estáticas inicializadas), BSS (variáveis estáticas não-inicializadas), HEAP (variáveis alocadas dinamicamente, com final marcado pelo program break) e STACK (pilha de execução, que geralmente cresce para baixo). Cada seção tem permissões próprias; o comando pmap do Linux mostra o mapa de memória de um processo. A técnica ASLR varia aleatoriamente a posição dessas áreas a cada início de processo.</p>

    <h3>Alocação de variáveis</h3>
    <p>Existem três formas usuais: a alocação estática (espaço definido na compilação e mantido até o fim do processo, em DATA ou BSS), a alocação automática (variáveis locais e parâmetros na pilha, alocados quando a função é invocada e liberados quando ela termina) e a alocação dinâmica (blocos pedidos explicitamente, na seção HEAP, com funções como malloc e free).</p>

    <h3>Liberação de memória dinâmica</h3>
    <p>A memória dinâmica é liberada automaticamente quando o processo encerra, mas programas de longa execução precisam liberar blocos sem uso. Em C e C++, a liberação é feita pelo programador, com free() ou delete(); em Java, Python e C#, a coleta de lixo (garbage collection) libera os blocos que não estão mais em uso.</p>

    <h3>Atribuição de endereços</h3>
    <p>Os nomes simbólicos de um programa precisam virar endereços em algum momento: na edição, na compilação, na ligação, na carga ou na execução. A maioria dos sistemas atuais combina a ligação (código principal e bibliotecas), a carga (bibliotecas dinâmicas) e a execução (todo o código, com auxílio do hardware).</p>
  `,
  fases: [
    {
      titulo: "Fundamentos",
      perguntas: [
        {
          categoria: "Espaço de endereçamento virtual",
          pergunta: "Qual afirmação é verdadeira sobre o espaço de endereçamento virtual de um processo na maioria dos sistemas atuais?",
          opcoes: [
            "A parte final dos endereços virtuais é reservada para o processo e a parte inicial para o núcleo",
            "No Linux 32 bits, os 3 GB iniciais são usados pelo processo e o 1 GB final pelo núcleo",
            "As páginas do núcleo têm o flag user ativo, o que permite que o código de usuário as acesse",
            "As páginas do núcleo são mapeadas em endereços virtuais diferentes em cada processo"
          ],
          correta: 1,
          explicacao: "No Linux 32 bits, a faixa inicial de 3 GB é usada pelo processo e a faixa final de 1 GB pelo núcleo."
        },
        {
          categoria: "Seções de memória",
          pergunta: "Sobre as seções de memória de um processo, assinale a alternativa INCORRETA.",
          opcoes: [
            "A seção DATA contém as variáveis estáticas inicializadas",
            "A seção BSS contém as variáveis estáticas não-inicializadas, o que mantém menor o arquivo executável",
            "A seção HEAP armazena as variáveis alocadas dinamicamente",
            "A seção TEXT contém o código-fonte do programa, a ser compilado durante a execução"
          ],
          correta: 3,
          explicacao: "A seção TEXT contém o código binário a ser executado, gerado na compilação e na ligação, e não o código-fonte."
        },
        {
          categoria: "Seções de memória",
          pergunta: "Sobre as seções de memória de um processo, julgue as afirmativas. I. A seção TEXT tem tamanho fixo, calculado durante a compilação. II. A seção BSS armazena variáveis estáticas inicializadas, cujos valores iniciais ficam no arquivo executável. III. A seção HEAP tem tamanho fixo, definido durante a compilação. Assinale a sequência correta.",
          opcoes: [
            "V, F, F",
            "V, V, F",
            "F, V, V",
            "F, F, V"
          ],
          correta: 0,
          explicacao: "A seção BSS guarda as variáveis não-inicializadas e o heap pode crescer, com o final marcado pelo program break; só a afirmativa I é verdadeira."
        },
        {
          categoria: "Alocação automática",
          pergunta: "Em linguagens como C, onde são alocadas, por padrão, as variáveis locais e os parâmetros de uma função?",
          opcoes: [
            "Na seção HEAP, por meio de malloc, quando a função é chamada",
            "Na seção DATA, e são mantidas durante toda a execução do processo",
            "Na seção STACK, alocadas quando a função é invocada e liberadas quando ela termina",
            "Na seção TEXT, junto com o código binário da função"
          ],
          correta: 2,
          explicacao: "Na alocação automática, as variáveis locais e parâmetros ficam na pilha (STACK), de forma transparente para o programador."
        },
        {
          categoria: "Alocação dinâmica",
          pergunta: "Sobre a alocação dinâmica de memória, assinale a alternativa INCORRETA.",
          opcoes: [
            "Os blocos são alocados na seção HEAP e a requisição retorna um ponteiro para o bloco alocado",
            "A memória alocada dinamicamente nunca é liberada automaticamente, nem mesmo quando o processo encerra",
            "Em C e C++, a liberação dos blocos deve ser feita pelo programador, com free() ou delete()",
            "Java, Python e C# possuem coleta de lixo (garbage collection), que libera os blocos que não estão mais em uso"
          ],
          correta: 1,
          explicacao: "A memória alocada dinamicamente por um processo é liberada automaticamente quando a sua execução encerra."
        }
      ]
    },
    {
      titulo: "Mecanismos",
      perguntas: [
        {
          categoria: "ASLR",
          pergunta: "O que é a técnica ASLR (Address Space Layout Randomization)?",
          opcoes: [
            "Técnica que varia aleatoriamente a posição das áreas de memória a cada vez que um processo é iniciado, o que melhora a segurança",
            "Técnica que mantém as seções sempre nos mesmos endereços, para aproveitar melhor o TLB",
            "Técnica que retira o núcleo do espaço de endereçamento dos processos, para evitar o Meltdown",
            "Técnica que libera automaticamente os blocos de memória dinâmicos sem uso"
          ],
          correta: 0,
          explicacao: "Com o ASLR, as posições de variáveis e funções variam a cada execução, o que dificulta ataques de estouro de buffer ou de pilha."
        },
        {
          categoria: "Pilha e heap",
          pergunta: "Sobre as seções STACK e HEAP, julgue as afirmativas. I. A pilha geralmente cresce para endereços maiores, iniciando nos menores. II. Em programas com múltiplas threads, a seção STACK contém as pilhas de todas as threads. III. Stack e heap, as duas seções de tamanho variável, ficam em posições opostas e vizinhas à memória livre. Assinale a sequência correta.",
          opcoes: [
            "V, F, F",
            "F, V, V",
            "F, F, V",
            "V, V, F"
          ],
          correta: 2,
          explicacao: "A pilha geralmente cresce para baixo e a seção STACK contém só a pilha do programa principal; stack e heap ficam opostos para aproveitar melhor a memória livre."
        },
        {
          categoria: "Atribuição de endereços",
          pergunta: "Em qual ordem cronológica a atribuição de endereços aos nomes simbólicos pode ocorrer, desde a escrita do código até a execução do processo? (1) carga. (2) edição. (3) execução. (4) ligação. (5) compilação.",
          opcoes: [
            "2, 4, 5, 1, 3",
            "5, 2, 4, 1, 3",
            "2, 5, 4, 3, 1",
            "2, 5, 4, 1, 3"
          ],
          correta: 3,
          explicacao: "Os endereços podem ser atribuídos na edição, na compilação, na ligação, na carga e, por fim, na execução."
        },
        {
          categoria: "Permissões das seções",
          pergunta: "Texto de apoio: a seção TEXT contém o código binário, que pode ser lido e executado, mas não deve ser modificado. As demais seções normalmente devem permitir acessos somente em leitura e escrita (sem execução), mas programas com código interpretado ou compilação dinâmica, como Java, podem necessitar de execução na pilha ou no heap. Julgue as afirmativas. I. A seção TEXT deve permitir leitura e execução, mas não modificação. II. As demais seções normalmente permitem leitura e escrita, sem execução. III. Nenhuma situação justifica permitir a execução na pilha ou no heap.",
          opcoes: [
            "II e III, apenas",
            "I e II, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 1,
          explicacao: "Programas com compilação dinâmica, como Java, podem gerar código e necessitar de execução na pilha ou no heap, portanto a afirmativa III é falsa."
        },
        {
          categoria: "Comando pmap",
          pergunta: "No resultado do comando pmap, o que significa o valor anon na coluna Mapping?",
          opcoes: [
            "A seção contém a pilha de execução do processo",
            "O conteúdo da seção provém diretamente do arquivo executável",
            "A seção é anônima, ou seja, não está relacionada a nenhum arquivo em disco",
            "A seção não tem nenhuma permissão de acesso"
          ],
          correta: 2,
          explicacao: "No pmap, anon indica uma seção anônima, que não está relacionada a nenhum arquivo em disco."
        },
        {
          categoria: "Formas de alocação",
          pergunta: "Sobre a alocação de variáveis, julgue as afirmativas. I. Em C, variáveis globais e variáveis locais estáticas usam alocação estática. II. Variáveis de alocação estática ficam na seção DATA se forem inicializadas e na seção BSS caso contrário. III. Em chamadas recursivas, as variáveis locais de todos os níveis de recursão ocupam a mesma área da pilha, sendo sobrescritas. Assinale a sequência correta.",
          opcoes: [
            "V, V, F",
            "F, V, V",
            "V, F, F",
            "F, F, V"
          ],
          correta: 0,
          explicacao: "Em chamadas recursivas, as variáveis locais e os parâmetros são alocados na pilha em áreas distintas para cada nível de recursão."
        },
        {
          categoria: "Alocação dinâmica",
          pergunta: "Qual é a ordem correta dos passos para usar memória dinâmica em C? (1) Usar o ponteiro para acessar o bloco alocado. (2) Verificar se o ponteiro é nulo, o que indica erro na alocação. (3) Liberar o bloco com free(). (4) Solicitar o bloco com malloc().",
          opcoes: [
            "4, 1, 2, 3",
            "4, 2, 1, 3",
            "2, 4, 1, 3",
            "4, 2, 3, 1"
          ],
          correta: 1,
          explicacao: "O bloco é solicitado com malloc, o ponteiro é verificado, o bloco é usado e, quando não for mais necessário, é liberado com free."
        },
        {
          categoria: "Ligação, carga e execução",
          pergunta: "Texto de apoio: a maioria dos sistemas operacionais atuais combina a tradução de endereços durante a ligação (código principal e bibliotecas), durante a carga (bibliotecas dinâmicas) e durante a execução (todo o código). Julgue as afirmativas. I. O compilador gera um arquivo objeto com os endereços definitivos de todas as variáveis. II. Na carga, um carregador (loader) define os endereços, normalmente na carga de bibliotecas dinâmicas (DLL). III. A tradução durante a execução só é viável com o auxílio do hardware.",
          opcoes: [
            "I e II, apenas",
            "I e III, apenas",
            "I, II e III",
            "II e III, apenas"
          ],
          correta: 3,
          explicacao: "O compilador gera um arquivo objeto com uma tabela de símbolos, sem definir os endereços; quem os define é o ligador."
        }
      ]
    },
    {
      titulo: "Aplicação",
      perguntas: [
        {
          categoria: "Núcleo no espaço do processo",
          pergunta: "Sobre as páginas do núcleo no espaço de endereçamento dos processos, julgue as afirmativas. I. As páginas do núcleo são mapeadas nos mesmos endereços virtuais em todos os processos, o que otimiza o uso do TLB. II. Uma chamada de sistema exige trocar os mapas de memória ativos e esvaziar o TLB. III. O código do núcleo pode acessar as páginas do processo, mas o código de usuário não pode acessar as páginas do núcleo.",
          opcoes: [
            "I e III, apenas",
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 0,
          explicacao: "Com o núcleo mapeado nos mesmos endereços, uma chamada de sistema não exige mudar os mapas de memória ativos nem esvaziar o TLB."
        },
        {
          categoria: "Organização do espaço do processo",
          pergunta: "Do início para o final do espaço de endereçamento de um processo (dos endereços menores para os maiores), qual é a ordem das seções? (1) TEXT. (2) HEAP. (3) BSS. (4) STACK. (5) DATA.",
          opcoes: [
            "1, 3, 5, 2, 4",
            "5, 1, 3, 2, 4",
            "1, 5, 3, 2, 4",
            "1, 5, 3, 4, 2"
          ],
          correta: 2,
          explicacao: "Na organização da memória de um processo, a ordem crescente de endereços é TEXT, DATA, BSS, HEAP e, no final, a pilha (STACK)."
        },
        {
          categoria: "Interpretação do pmap",
          pergunta: "Texto de apoio: no pmap do processo hello, a seção TEXT tem 808 KB, modo r-x-- e conteúdo do arquivo /usr/bin/hello; a seção DATA tem 12 KB e modo rw---; a seção BSS tem 8 KB, modo rw--- e mapeamento anon. Julgue as afirmativas. I. A seção TEXT pode ser lida e executada, mas não escrita. II. A seção DATA pode ser lida e escrita, mas não executada. III. A seção BSS é anônima, ou seja, não está relacionada a nenhum arquivo em disco.",
          opcoes: [
            "I e II, apenas",
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 3,
          explicacao: "O modo r-x-- permite leitura e execução, o modo rw--- permite leitura e escrita, e o mapeamento anon indica uma seção sem arquivo em disco."
        },
        {
          categoria: "Liberação de memória",
          pergunta: "Sobre a liberação de memória dinâmica, julgue as afirmativas. I. Em C e C++, a liberação dos blocos é feita pelo programador, com free() ou delete(). II. Java, Python e C# têm coleta de lixo, que libera automaticamente os blocos que não estão mais em uso. III. Programas que só alocam memória e nunca a liberam não causam problemas, pois o sistema libera tudo a cada nova alocação.",
          opcoes: [
            "I e III, apenas",
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III"
          ],
          correta: 1,
          explicacao: "Programas que só alocam e não liberam memória podem acabar consumindo toda a memória disponível no sistema."
        },
        {
          categoria: "Meltdown e KPTI",
          pergunta: "Texto de apoio: o bug Meltdown, descoberto em 2018 em processadores Intel e ARM, permite a um código de usuário ignorar os flags da tabela de páginas e ler partes da memória do núcleo. A solução adotada consiste em retirar o núcleo do espaço de endereçamento dos processos; no Linux, o KPTI mantém apenas um pequeno conjunto de páginas do núcleo para receber syscalls e interrupções. Julgue as afirmativas. I. O Meltdown afeta apenas processadores AMD. II. No KPTI, o restante da memória do núcleo usa uma tabela de páginas separada. III. Soluções similares foram adotadas pelo Microsoft Windows e pelo iOS.",
          opcoes: [
            "II e III, apenas",
            "I e II, apenas",
            "I e III, apenas",
            "I, II e III"
          ],
          correta: 0,
          explicacao: "O Meltdown afeta processadores Intel e ARM, e não apenas AMD, e soluções similares ao KPTI foram adotadas no Windows e no iOS."
        },
        {
          categoria: "Alocação automática e recursão",
          pergunta: "No exemplo do capítulo, a função fatorial é chamada recursivamente com fatorial(4), e imprime uma linha ao iniciar e outra ao terminar cada chamada. Qual é a ordem em que estas linhas aparecem, de inicio: n = 3 até final: n = 3? (1) final: n = 2, parcial = 2. (2) inicio: n = 1. (3) inicio: n = 3. (4) final: n = 3, parcial = 6. (5) inicio: n = 2. (6) final: n = 1, parcial = 1.",
          opcoes: [
            "3, 5, 2, 1, 6, 4",
            "3, 2, 5, 6, 1, 4",
            "3, 5, 2, 6, 1, 4",
            "3, 5, 6, 2, 1, 4"
          ],
          correta: 2,
          explicacao: "Cada chamada imprime inicio antes de chamar o nível seguinte e final depois que ele retorna, de modo que a ordem dos finais é inversa à dos inícios."
        },
        {
          categoria: "Edição e compilação",
          pergunta: "Texto de apoio: na edição, o programador escolhe o endereço de cada variável e do código, o que normalmente só é usado em sistemas embarcados simples. Na compilação, o compilador escolhe as posições das variáveis, o que exige conhecer todos os códigos-fonte no momento da compilação; isso impede o uso de bibliotecas precompiladas e era usado nos executáveis com extensão .COM do MS-DOS e Windows. Julgue as afirmativas. I. Na compilação, é preciso conhecer todos os códigos-fonte, o que impede o uso de bibliotecas precompiladas. II. Os executáveis .COM do MS-DOS e Windows usavam a atribuição de endereços na compilação. III. A atribuição de endereços na edição é a mais usada nos sistemas operacionais atuais.",
          opcoes: [
            "II e III, apenas",
            "I e III, apenas",
            "I, II e III",
            "I e II, apenas"
          ],
          correta: 3,
          explicacao: "A atribuição direta de endereços na edição ou na compilação só é usada em sistemas mais simples, como microcontroladores e sistemas embarcados."
        }
      ]
    }
  ]
});
