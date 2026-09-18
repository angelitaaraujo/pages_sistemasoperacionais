JOGO2.registrar({
  id: "problemas-classicos",
  titulo: "Problemas clássicos de coordenação",
  disciplina: "🔲 Gerência de Processador",
  descricao: "Atividade de estudo e revisão do capítulo 12: produtores/consumidores (buffer limitado), leitores/escritores, o jantar dos selvagens e o jantar dos filósofos.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Intermediário", xp: 120 },
    { nome: "Avançado", xp: 240 }
  ],
  teoria: `
    <h3>Problemas clássicos de coordenação</h3>
    <p>Os problemas clássicos de coordenação são situações conhecidas que servem para testar e ilustrar o uso dos mecanismos de sincronização (semáforos, mutexes e variáveis de condição) em sistemas concorrentes.</p>

    <h3>Produtores/consumidores</h3>
    <p>Também conhecido como problema do buffer limitado (bounded buffer). Um ou mais produtores geram itens e os inserem em um buffer compartilhado de capacidade finita; um ou mais consumidores retiram esses itens para processá-los. O produtor deve ser bloqueado quando o buffer está cheio, e o consumidor quando o buffer está vazio.</p>
    <ul>
      <li><strong>Solução com semáforos:</strong> um mutex garante a exclusão mútua no acesso ao buffer, e dois semáforos controlam os espaços livres e os itens disponíveis.</li>
      <li><strong>Solução com variáveis de condição:</strong> um mutex protege o buffer e variáveis de condição sinalizam quando há espaço ou itens disponíveis.</li>
    </ul>

    <h3>Leitores/escritores</h3>
    <p>Vários leitores podem acessar o recurso compartilhado simultaneamente, mas escritores exigem acesso exclusivo. As soluções clássicas são:</p>
    <ul>
      <li><strong>Solução simplista:</strong> um único mutex serializa todos os acessos, inclusive os dos leitores, reduzindo a concorrência.</li>
      <li><strong>Solução com priorização dos leitores:</strong> um contador registra quantos leitores estão ativos; enquanto houver leitores, novos leitores podem entrar e os escritores aguardam. Essa solução pode causar inanição dos escritores.</li>
    </ul>

    <h3>O jantar dos selvagens</h3>
    <p>Variação dos produtores/consumidores: um cozinheiro prepara porções e as coloca em uma panela compartilhada; os selvagens retiram as porções para comer. Quando a panela esvazia, os selvagens aguardam o cozinheiro reabastecê-la.</p>

    <h3>O jantar dos filósofos</h3>
    <p>Cinco filósofos sentam-se em uma mesa circular com cinco pratos e cinco palitos (hashi), um entre cada par de filósofos. Para comer, cada filósofo precisa dos dois palitos adjacentes. Soluções ingênuas podem levar a deadlock (todos segurando um palito) ou inanição. A solução do saleiro (um mutex global) evita o deadlock, mas serializa o acesso à mesa.</p>
  `,
  fases: [
    {
      titulo: "Produtores/consumidores",
      perguntas: [
        {
          categoria: "Produtores/consumidores",
          pergunta: "O problema dos produtores/consumidores também é conhecido como problema do:",
          opcoes: [
            "buffer ilimitado",
            "buffer de mensagens",
            "buffer limitado (bounded buffer)",
            "buffer de prioridades"
          ],
          correta: 2,
          explicacao: "O problema dos produtores/consumidores é também chamado de problema do buffer limitado (bounded buffer), pois envolve um buffer com capacidade finita compartilhado entre produtores e consumidores."
        },
        {
          categoria: "Produtores/consumidores",
          pergunta: "No problema dos produtores/consumidores, o papel do produtor é:",
          opcoes: [
            "produzir itens e inseri-los no buffer",
            "retirar itens do buffer para consumi-los",
            "controlar o acesso ao buffer compartilhado",
            "escalonar as tarefas do sistema"
          ],
          correta: 0,
          explicacao: "O produtor gera itens e os insere no buffer compartilhado, enquanto o consumidor os retira para processá-los."
        },
        {
          categoria: "Produtores/consumidores",
          pergunta: "No problema dos produtores/consumidores, o papel do consumidor é:",
          opcoes: [
            "inserir itens produzidos no buffer",
            "retirar itens do buffer para processá-los",
            "criar novos buffers de dados",
            "definir a prioridade dos produtores"
          ],
          correta: 1,
          explicacao: "O consumidor retira itens do buffer compartilhado para processá-los, liberando espaço para novos itens."
        },
        {
          categoria: "Produtores/consumidores",
          pergunta: "Uma solução clássica para o problema dos produtores/consumidores utiliza:",
          opcoes: [
            "um mutex e três semáforos",
            "três mutexes independentes",
            "apenas variáveis de condição",
            "um mutex e dois semáforos"
          ],
          correta: 3,
          explicacao: "A solução clássica com semáforos usa um mutex para a exclusão mútua no acesso ao buffer e dois semáforos para controlar os espaços livres e os itens disponíveis."
        },
        {
          categoria: "Produtores/consumidores",
          pergunta: "No problema do buffer limitado, o produtor deve ser bloqueado quando:",
          opcoes: [
            "o buffer estiver cheio",
            "o buffer estiver vazio",
            "o consumidor estiver dormindo",
            "a fila estiver ordenada"
          ],
          correta: 0,
          explicacao: "Se o buffer está cheio, não há espaço para novos itens; o produtor deve aguardar até que o consumidor libere espaço."
        },
        {
          categoria: "Produtores/consumidores",
          pergunta: "No problema do buffer limitado, o consumidor deve ser bloqueado quando:",
          opcoes: [
            "o buffer estiver cheio",
            "o produtor estiver ativo",
            "o buffer estiver vazio",
            "a fila estiver completa"
          ],
          correta: 2,
          explicacao: "Se o buffer está vazio, não há itens para consumir; o consumidor deve aguardar até que o produtor insira novos itens."
        }
      ]
    },
    {
      titulo: "Leitores/escritores",
      perguntas: [
        {
          categoria: "Leitores/escritores",
          pergunta: "No problema dos leitores/escritores, o acesso simultâneo permitido é:",
          opcoes: [
            "vários escritores ao mesmo tempo",
            "vários leitores ao mesmo tempo",
            "um leitor e um escritor juntos",
            "apenas um leitor por vez"
          ],
          correta: 1,
          explicacao: "No problema dos leitores/escritores, vários leitores podem acessar o recurso simultaneamente, mas os escritores exigem acesso exclusivo."
        },
        {
          categoria: "Leitores/escritores",
          pergunta: "No problema dos leitores/escritores, o acesso de um escritor ao recurso compartilhado deve ser:",
          opcoes: [
            "compartilhado com outros escritores",
            "compartilhado com os leitores",
            "alternado com os leitores",
            "exclusivo, sem outros acessos"
          ],
          correta: 3,
          explicacao: "O escritor exige acesso exclusivo ao recurso: enquanto escreve, nenhum leitor ou outro escritor pode acessá-lo."
        },
        {
          categoria: "Leitores/escritores",
          pergunta: "Na solução simplista para o problema dos leitores/escritores, utiliza-se:",
          opcoes: [
            "apenas um mutex para todo o acesso",
            "um semáforo para cada leitor",
            "duas filas de prioridade",
            "um buffer de capacidade infinita"
          ],
          correta: 0,
          explicacao: "A solução simplista usa um único mutex, que serializa todos os acessos, inclusive os dos leitores, reduzindo a concorrência."
        },
        {
          categoria: "Leitores/escritores",
          pergunta: "Na solução com priorização dos leitores, um contador é utilizado para:",
          opcoes: [
            "limitar o número de escritores",
            "registrar quantos leitores estão ativos",
            "definir o tamanho do buffer",
            "ordenar os acessos por prioridade"
          ],
          correta: 1,
          explicacao: "Na solução com priorização dos leitores, um contador registra quantos leitores estão ativos; enquanto houver leitores, novos leitores podem entrar e os escritores aguardam."
        },
        {
          categoria: "Leitores/escritores",
          pergunta: "Na solução com priorização dos leitores, um novo leitor pode entrar enquanto:",
          opcoes: [
            "um escritor estiver escrevendo",
            "houver leitores ativos no recurso",
            "o recurso estiver livre",
            "a fila de escritores estiver vazia"
          ],
          correta: 1,
          explicacao: "Na solução com priorização dos leitores, enquanto houver leitores ativos, novos leitores podem entrar, mesmo que escritores estejam aguardando."
        },
        {
          categoria: "Leitores/escritores",
          pergunta: "Uma desvantagem da solução com priorização dos leitores é que ela pode causar:",
          opcoes: [
            "condição de corrida nos escritores",
            "exclusão mútua entre leitores",
            "bloqueio do recurso compartilhado",
            "inanição dos escritores"
          ],
          correta: 3,
          explicacao: "Com a priorização dos leitores, se leitores continuam chegando, os escritores podem esperar indefinidamente, sofrendo inanição."
        }
      ]
    },
    {
      titulo: "Jantar dos selvagens e dos filósofos",
      perguntas: [
        {
          categoria: "Jantar dos selvagens",
          pergunta: "O problema do jantar dos selvagens é uma variação do problema:",
          opcoes: [
            "dos produtores/consumidores",
            "dos leitores/escritores",
            "dos filósofos famintos",
            "do escalonamento circular"
          ],
          correta: 0,
          explicacao: "O jantar dos selvagens é uma variação dos produtores/consumidores: o cozinheiro produz porções e as coloca na panela, e os selvagens as consomem."
        },
        {
          categoria: "Jantar dos selvagens",
          pergunta: "No problema do jantar dos selvagens, o papel do cozinheiro é:",
          opcoes: [
            "consumir as porções da panela",
            "distribuir os talheres aos selvagens",
            "preparar porções e enchê-las na panela",
            "escalonar os selvagens na mesa"
          ],
          correta: 2,
          explicacao: "O cozinheiro prepara porções e as coloca na panela compartilhada; os selvagens retiram as porções para comer."
        },
        {
          categoria: "Jantar dos selvagens",
          pergunta: "No problema do jantar dos selvagens, quando a panela está vazia, os selvagens:",
          opcoes: [
            "continuam comendo normalmente",
            "preparam novas porções",
            "chamam o cozinheiro imediatamente",
            "aguardam o cozinheiro reabastecê-la"
          ],
          correta: 3,
          explicacao: "Quando a panela esvazia, os selvagens devem aguardar o cozinheiro reabastecê-la antes de continuar comendo."
        },
        {
          categoria: "Jantar dos filósofos",
          pergunta: "No problema do jantar dos filósofos, os recursos compartilhados disputados são:",
          opcoes: [
            "os pratos de comida",
            "os palitos (hashi)",
            "as cadeiras da mesa",
            "os copos de água"
          ],
          correta: 1,
          explicacao: "No jantar dos filósofos, cinco filósofos disputam cinco palitos (hashi) compartilhados para comer."
        },
        {
          categoria: "Jantar dos filósofos",
          pergunta: "Uma solução ingênua para o jantar dos filósofos pode levar a:",
          opcoes: [
            "deadlock ou inanição",
            "condição de corrida",
            "inversão de prioridade",
            "fragmentação de memória"
          ],
          correta: 0,
          explicacao: "Soluções ingênuas, como cada filósofo pegar o palito esquerdo e depois o direito, podem levar a deadlock (todos segurando um palito) ou inanição."
        },
        {
          categoria: "Jantar dos filósofos",
          pergunta: "A solução do saleiro (salt shaker) para o jantar dos filósofos:",
          opcoes: [
            "elimina o deadlock e mantém o paralelismo total",
            "permite que todos comam simultaneamente",
            "evita o deadlock, mas serializa o acesso à mesa",
            "dispensa o uso de palitos compartilhados"
          ],
          correta: 2,
          explicacao: "A solução do saleiro (um mutex global) evita o deadlock, mas serializa o acesso, permitindo que apenas um filósofo coma por vez."
        }
      ]
    }
  ]
});