const JOGO2 = (() => {
  "use strict";

  const registros = [];
  const niveisPadrao = [
    { nome: "Estagiário", xp: 0 },
    { nome: "Dev Júnior", xp: 50 },
    { nome: "Dev Pleno", xp: 120 },
    { nome: "Dev Sênior", xp: 220 }
  ];
  let jogoAtual = null;
  let estado = null;
  let somAtivo = true;
  let audioContext = null;
  let telaAtual = "inicial";
  const CHAVE_SESSAO = "motor2-partida";

  const $ = (seletor) => document.querySelector(seletor);

  function lerPreferencia(chave, padrao) {
    try {
      return localStorage.getItem(chave) ?? padrao;
    } catch (erro) {
      return padrao;
    }
  }

  function salvarPreferencia(chave, valor) {
    try {
      localStorage.setItem(chave, valor);
    } catch (erro) {
      // O jogo continua funcionando quando o navegador bloqueia o storage.
    }
  }

  function salvarSessao() {
    try {
      sessionStorage.setItem(CHAVE_SESSAO, JSON.stringify({
        tela: telaAtual,
        jogoId: jogoAtual ? jogoAtual.id : null,
        estado: estado
      }));
    } catch (erro) {
      // A partida segue normalmente quando o navegador bloqueia o storage.
    }
  }

  function apagarSessao() {
    try {
      sessionStorage.removeItem(CHAVE_SESSAO);
    } catch (erro) {
      // Nenhuma ação adicional é necessária sem acesso ao storage.
    }
  }

  function restaurarSessao() {
    try {
      const sessao = JSON.parse(sessionStorage.getItem(CHAVE_SESSAO));
      if (!sessao || !sessao.tela) return false;
      const jogo = sessao.jogoId && registros.find((registro) => registro.id === sessao.jogoId);
      if (sessao.jogoId && !jogo) return false;
      jogoAtual = jogo || null;
      estado = sessao.estado || null;
      telaAtual = sessao.tela;
      return true;
    } catch (erro) {
      apagarSessao();
      return false;
    }
  }

  function registrar(jogo) {
    if (!jogo.fases && jogo.perguntas) jogo.fases = [{ titulo: jogo.titulo, perguntas: jogo.perguntas }];
    jogo.niveis = jogo.niveis || niveisPadrao;
    jogo.vidas = jogo.vidas || 5;
    registros.push(jogo);
  }

  function novoEstado() {
    return {
      fase: 0,
      pergunta: 0,
      score: 0,
      xp: 0,
      vidas: jogoAtual.vidas,
      vidasMax: jogoAtual.vidas,
      streak: 0,
      melhorStreak: 0,
      corretas: 0,
      respondidas: 0,
      acertosFase: 0,
      finalizado: false
    };
  }

  function faseAtual() { return jogoAtual.fases[estado.fase]; }
  function perguntaAtual() { return faseAtual().perguntas[estado.pergunta]; }
  function totalPerguntas() { return jogoAtual.fases.reduce((total, fase) => total + fase.perguntas.length, 0); }
  function perguntasAntesDaFase() { return jogoAtual.fases.slice(0, estado.fase).reduce((total, fase) => total + fase.perguntas.length, 0); }
  function nivelAtual() {
    return jogoAtual.niveis.reduce((nivel, candidato) => estado.xp >= candidato.xp ? candidato : nivel, jogoAtual.niveis[0]);
  }

  function tocar(frequencia, duracao, tipo = "sine") {
    if (!somAtivo) return;
    try {
      audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
      const oscilador = audioContext.createOscillator();
      const ganho = audioContext.createGain();
      oscilador.type = tipo;
      oscilador.frequency.value = frequencia;
      ganho.gain.setValueAtTime(.08, audioContext.currentTime);
      ganho.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + duracao);
      oscilador.connect(ganho);
      ganho.connect(audioContext.destination);
      oscilador.start();
      oscilador.stop(audioContext.currentTime + duracao);
    } catch (erro) {
      // Audio opcional: a partida continua sem suporte a Web Audio.
    }
  }

  function escapeHtml(texto) {
    return String(texto).replace(/[&<>"']/g, (caractere) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[caractere]));
  }

  function render() {
    const app = $("#app");
    if (telaAtual === "inicial") return renderInicial(app);
    if (telaAtual === "menu") return renderMenu(app);
    if (telaAtual === "apresentacao") return renderWelcome(app);
    if (telaAtual === "resultado") return renderResultado(app);
    renderJogo(app);
  }

  function renderInicial(app) {
    jogoAtual = null;
    estado = null;
    atualizarCabecalho();
    app.innerHTML = `
      <section class="screen welcome-card" aria-labelledby="welcome-title">
        <span class="eyebrow">Sistemas Operacionais</span>
        <h1 id="welcome-title">Atividades Didáticas</h1>
        <p>Aprenda os principais conceitos da disciplina respondendo perguntas, avançando por fases e acompanhando seu desempenho.</p>
        <div class="phase-preview" aria-label="Recursos disponíveis">
          <div class="phase-preview-item"><strong>Quiz</strong><span>Perguntas conceituais</span></div>
          <div class="phase-preview-item"><strong>Fases</strong><span>Conteúdo passo a passo</span></div>
          <div class="phase-preview-item"><strong>Desempenho</strong><span>Pontos, vidas e sequência</span></div>
        </div>
        <button id="choose-activity-btn" class="btn-primary" type="button">Escolher atividade ▶</button>
      </section>`;
    $("#choose-activity-btn").addEventListener("click", () => {
      telaAtual = "menu";
      salvarSessao();
      render();
    });
  }

  function renderMenu(app) {
    app.innerHTML = `
      <section class="screen welcome-card" aria-labelledby="menu-title">
        <span class="eyebrow">Atividades Didáticas</span>
        <h1 id="menu-title">Escolha uma atividade</h1>
        <p>Selecione um jogo para abrir sua apresentação e começar pela primeira fase.</p>
        <div class="phase-preview">
          ${registros.map((jogo, indice) => `
            <button class="phase-preview-item game-choice" type="button" data-index="${indice}">
              <strong>${escapeHtml(jogo.disciplina || "Sistemas Operacionais")}</strong>
              <span>${escapeHtml(jogo.titulo)}</span>
              <small>${jogo.fases.length} fases · ${totalDe(jogo)} perguntas</small>
            </button>`).join("")}
        </div>
      </section>`;
    app.querySelectorAll(".game-choice").forEach((botao) => {
      botao.addEventListener("click", () => {
        jogoAtual = registros[Number(botao.dataset.index)];
        estado = null;
        telaAtual = "apresentacao";
        salvarSessao();
        atualizarCabecalho();
        render();
      });
    });
  }

  function totalDe(jogo) {
    return jogo.fases.reduce((total, fase) => total + fase.perguntas.length, 0);
  }

  function renderWelcome(app) {
    atualizarCabecalho();
    app.innerHTML = `
      <section class="screen welcome-card" aria-labelledby="welcome-title">
        <span class="eyebrow">${escapeHtml(jogoAtual.disciplina || "Sistemas Operacionais")}</span>
        <h1 id="welcome-title">${escapeHtml(jogoAtual.titulo)}</h1>
        <p>${jogoAtual.descricao || "Responda às perguntas, avance pelas fases e acompanhe seu desempenho."}</p>
        <div class="phase-preview">
          ${jogoAtual.fases.map((fase, indice) => `
            <div class="phase-preview-item">
              <strong>Fase ${indice + 1}</strong>
              <span>${escapeHtml(fase.titulo)}</span>
              <small>${fase.perguntas.length} perguntas</small>
            </div>`).join("")}
        </div>
        <button id="start-game-btn" class="btn-primary" type="button">Começar pela Fase 1 ▶</button>
      </section>`;
    $("#start-game-btn").addEventListener("click", () => {
      estado = novoEstado();
      telaAtual = "jogo";
      salvarSessao();
      render();
    });
  }

  function renderJogo(app) {
    const fase = faseAtual();
    const pergunta = perguntaAtual();
    const opcoesLongas = pergunta.opcoes.some((opcao) => opcao.length > 28) || pergunta.opcoes.length > 4;
    const progresso = Math.round(((perguntasAntesDaFase() + estado.pergunta) / totalPerguntas()) * 100);
    atualizarCabecalho();
    app.innerHTML = `
      <section class="screen game-screen" aria-labelledby="question-title">
        <div class="game-bar">
          <div class="phase-label">Fase ${estado.fase + 1} de ${jogoAtual.fases.length}<br><span>${escapeHtml(fase.titulo)} · ${estado.pergunta + 1}/${fase.perguntas.length}</span></div>
          <span class="level-badge">${escapeHtml(nivelAtual().nome)}</span>
          <div class="game-stats"><span title="Pontos">⭐ ${estado.score}</span><span title="Vidas">${"❤️".repeat(Math.max(estado.vidas, 0))}${"🖤".repeat(Math.max(estado.vidasMax - estado.vidas, 0))}</span></div>
        </div>
        <div class="progress-track" aria-label="Progresso da atividade"><div class="progress-fill" style="width:${progresso}%"></div></div>
        <article class="question-card">
          <div class="question-meta">${escapeHtml(pergunta.categoria || "Pergunta")}</div>
          <h2 id="question-title">${escapeHtml(pergunta.pergunta)}</h2>
          <div id="options" class="options ${opcoesLongas ? "long-options" : "short-options"}" role="group" aria-label="Opções de resposta"></div>
        </article>
        <div id="feedback" class="feedback" role="status" aria-live="polite"></div>
      </section>`;

    const container = $("#options");
    pergunta.opcoes.forEach((texto, indice) => {
      const botao = document.createElement("button");
      botao.type = "button";
      botao.className = "option";
      botao.textContent = texto;
      botao.addEventListener("click", () => responder(indice, botao));
      container.appendChild(botao);
    });
  }

  function responder(indice, botaoEscolhido) {
    const pergunta = perguntaAtual();
    const acertou = indice === pergunta.correta;
    document.querySelectorAll("#options .option").forEach((botao, indiceOpcao) => {
      botao.disabled = true;
      if (indiceOpcao === pergunta.correta) botao.classList.add("correct");
    });
    if (!acertou) botaoEscolhido.classList.add("wrong");

    estado.respondidas++;
    if (acertou) {
      estado.corretas++;
      estado.acertosFase++;
      estado.streak++;
      estado.melhorStreak = Math.max(estado.melhorStreak, estado.streak);
      estado.score += 10 + Math.min(estado.streak, 5) * 2;
      estado.xp += 10;
      tocar(660, .18);
    } else {
      estado.vidas--;
      estado.streak = 0;
      tocar(180, .25, "sawtooth");
    }
    salvarSessao();

    const feedback = $("#feedback");
    feedback.className = `feedback visible ${acertou ? "correct" : "incorrect"}`;
    feedback.innerHTML = `
      <strong>${acertou ? "✓ Correto!" : "✗ Incorreto"}</strong>
      <p>${escapeHtml(pergunta.explicacao || "")}</p>
      <button class="btn-next" type="button">${estado.vidas <= 0 ? "Reiniciar fase" : "Próxima →"}</button>`;
    feedback.querySelector(".btn-next").addEventListener("click", proxima);
  }

  function proxima() {
    if (estado.vidas <= 0) {
      estado = novoEstado();
      telaAtual = "jogo";
      salvarSessao();
      render();
      return;
    }
    const fase = faseAtual();
    if (estado.pergunta < fase.perguntas.length - 1) {
      estado.pergunta++;
    } else if (estado.fase < jogoAtual.fases.length - 1) {
      estado.fase++;
      estado.pergunta = 0;
      estado.acertosFase = 0;
    } else {
      estado.finalizado = true;
      tocar(784, .3);
    }
    telaAtual = estado.finalizado ? "resultado" : "jogo";
    salvarSessao();
    render();
  }

  function renderResultado(app) {
    const total = totalPerguntas();
    const precisao = Math.round((estado.corretas / total) * 100);
    app.innerHTML = `
      <section class="screen result-card" aria-labelledby="result-title">
        <span class="eyebrow">Resultado da partida</span>
        <h1 id="result-title">Treinamento concluído</h1>
        <div class="result-grid">
          <div class="result-metric"><strong>${estado.score}</strong><span>pontos</span></div>
          <div class="result-metric"><strong>${estado.corretas}/${total}</strong><span>acertos</span></div>
          <div class="result-metric"><strong>${precisao}%</strong><span>precisão</span></div>
          <div class="result-metric"><strong>${estado.melhorStreak}</strong><span>melhor sequência</span></div>
          <div class="result-metric"><strong>${escapeHtml(nivelAtual().nome)}</strong><span>nível</span></div>
        </div>
        <p class="result-message">${precisao >= 90 ? "Excelente desempenho!" : precisao >= 70 ? "Muito bem!" : "Continue praticando para avançar!"}</p>
        <div class="result-actions">
          <button id="restart-btn" class="btn-primary" type="button">⟲ Jogar novamente</button>
          <button id="print-btn" class="btn-secondary" type="button">🖨 Imprimir / Salvar PDF</button>
          <button id="home-btn" class="btn-secondary" type="button">↩ Voltar para tela inicial</button>
        </div>
      </section>`;
    $("#restart-btn").addEventListener("click", () => {
      apagarSessao();
      estado = null;
      telaAtual = "apresentacao";
      render();
    });
    $("#print-btn").addEventListener("click", () => window.print());
    $("#home-btn").addEventListener("click", () => {
      apagarSessao();
      window.location.href = "index.html";
    });
  }

  function atualizarCabecalho() {
    const titulo = $("#header-game-title");
    titulo.textContent = jogoAtual ? jogoAtual.titulo : "Atividades Didáticas";
    const teoria = $("#theory-content");
    teoria.innerHTML = jogoAtual ? (jogoAtual.teoria || "<p>Este jogo não possui resumo teórico cadastrado.</p>") : "<p>Escolha uma atividade para visualizar sua teoria.</p>";
  }

  function iniciar() {
    try {
      const temaSalvo = lerPreferencia("motor2-tema", "light");
      document.body.dataset.theme = temaSalvo;
      const escalaSalva = Number(lerPreferencia("motor2-fonte", 1));
      document.documentElement.style.setProperty("--scale", Number.isFinite(escalaSalva) ? escalaSalva : 1);

      $("#theme-btn").addEventListener("click", () => {
      document.body.dataset.theme = document.body.dataset.theme === "dark" ? "light" : "dark";
      salvarPreferencia("motor2-tema", document.body.dataset.theme);
    });
      $("#sound-btn").addEventListener("click", () => {
      somAtivo = !somAtivo;
      $("#sound-btn").textContent = somAtivo ? "🔊 Som" : "🔇 Som";
    });
      const alterarFonte = (valor) => {
      const escala = Math.min(1.4, Math.max(.85, valor));
      document.documentElement.style.setProperty("--scale", escala);
      salvarPreferencia("motor2-fonte", escala);
    };
      $("#font-down-btn").addEventListener("click", () => alterarFonte(Number(getComputedStyle(document.documentElement).fontSize.replace("px", "")) / 16 - .1));
      $("#font-reset-btn").addEventListener("click", () => alterarFonte(1));
      $("#font-up-btn").addEventListener("click", () => alterarFonte(Number(getComputedStyle(document.documentElement).fontSize.replace("px", "")) / 16 + .1));

      const modal = $("#theory-modal");
      const abrirTeoria = () => modal.showModal();
      $("#back-btn").addEventListener("click", () => {
        apagarSessao();
        window.location.href = "index.html";
      });
      $("#theory-btn").addEventListener("click", abrirTeoria);
      $("#close-theory-btn").addEventListener("click", () => modal.close());
      $("#close-theory-bottom").addEventListener("click", () => modal.close());
      modal.addEventListener("click", (evento) => { if (evento.target === modal) modal.close(); });

      restaurarSessao();
      atualizarCabecalho();
      render();
    } catch (erro) {
      const app = $("#app");
      app.innerHTML = `
        <section class="screen welcome-card" aria-labelledby="error-title">
          <span class="eyebrow">Atividades Didáticas</span>
          <h1 id="error-title">Não foi possível carregar a atividade</h1>
          <p>Verifique se o arquivo <code>motor2.js</code> está na pasta <code>js</code> e se a atividade está na pasta <code>atividades</code>.</p>
        </section>`;
      console.error("Falha ao inicializar o motor 2", erro);
    }
  }

  window.addEventListener("DOMContentLoaded", iniciar);
  return { registrar };
})();
