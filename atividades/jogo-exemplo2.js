JOGO2.registrar({
  id: "fundamentos-processos",
  titulo: "Fundamentos de Processos",
  disciplina: "Sistemas Operacionais",
  descricao: "Revise conceitos básicos de processos e gerenciamento de tarefas em duas fases.",
  vidas: 5,
  niveis: [
    { nome: "Iniciante", xp: 0 },
    { nome: "Explorador", xp: 20 },
    { nome: "Especialista", xp: 40 }
  ],
  teoria: `
    <p><strong>Processo</strong> é um programa em execução, com estado, contexto e recursos associados.</p>
    <p>O sistema operacional alterna processos na CPU e acompanha estados como pronta, executando e terminada.</p>
  `,
  
  fases: [
    {
      titulo: "Conceitos fundamentais",
      perguntas: [
        {
          categoria: "Programa ou processo",
          pergunta: "Um arquivo executável salvo no disco, sem estar rodando, é um:",
          opcoes: ["Programa", "Processo"],
          correta: 0,
          explicacao: "O arquivo parado é um programa. Ele se torna um processo quando é carregado e executado."
        },
        {
          categoria: "Execução",
          pergunta: "Qual situação representa um processo em execução?",
          opcoes: ["Um editor aberto recebendo comandos", "Um arquivo guardado em uma pasta"],
          correta: 0,
          explicacao: "Um editor aberto e ativo possui um fluxo de execução e recursos alocados."
        }
      ]
    },
    {
      titulo: "Estados e escalonamento",
      perguntas: [
        {
          categoria: "Estados do processo",
          pergunta: "Após terminar seu processamento, o processo vai para qual estado?",
          opcoes: ["Pronto", "Executando", "Terminado", "Suspenso", "Novo"],
          correta: 2,
          explicacao: "Ao concluir sua execução, o processo passa ao estado Terminado e libera seus recursos."
        },
        {
          categoria: "Escalonamento",
          pergunta: "Explique por que o sistema operacional usa fatias de tempo ao alternar processos na CPU.",
          opcoes: ["Para permitir que vários processos compartilhem a CPU", "Para manter somente um programa carregado", "Para eliminar a necessidade de memória", "Para impedir todas as interrupções"],
          correta: 0,
          explicacao: "As fatias de tempo permitem alternância e dão aos usuários a sensação de execução simultânea."
        }
      ]
    }
  ]
});
