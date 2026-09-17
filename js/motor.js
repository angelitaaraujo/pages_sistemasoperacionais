/* ============================================================
   MOTOR DE JOGOS DIDÁTICOS
   Lógica compartilhada: registro de jogos, quiz, pontuação,
   vidas, streak, níveis, tema, som e painel de teoria.
   Não edite este arquivo para criar novos jogos.
   ============================================================ */

const JOGO = (function () {
  "use strict";

  const registros = [];
  let jogoAtual = null;
  let est = null;
  let somAtivo = true;
  let telaInicial = true;

  // Progressão padrão (adaptável por jogo via "niveis")
  const NIVEIS_PADRAO = [
    { nome: "Estagiário", xp: 0 },
    { nome: "Dev Júnior", xp: 50 },
    { nome: "Dev Pleno", xp: 120 },
    { nome: "Dev Sênior", xp: 220 },
  ];

  // ---------- Registro de jogos ----------
  function registrar(jogo) {
    if (!jogo.fases && jogo.perguntas) {
      jogo.fases = [{ titulo: jogo.titulo, perguntas: jogo.perguntas }];
    }
    jogo.niveis = jogo.niveis || NIVEIS_PADRAO;
    jogo.vidas = jogo.vidas || 5;
    registros.push(jogo);
  }

  // ---------- Utilidades ----------
  function embaralhar(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const $ = (s) => document.querySelector(s);

  // ---------- Som (Web Audio, sem arquivos externos) ----------
  let ctx = null;
  function tocar(freq, dur, tipo) {
    if (!somAtivo) return;
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = tipo || "sine";
      o.frequency.value = freq;
      g.gain.setValueAtTime(0.08, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
      o.connect(g); g.connect(ctx.destination);
      o.start(); o.stop(ctx.currentTime + dur);
    } catch (e) { /* sem áudio disponível */ }
  }
  const somAcerto = () => tocar(660, 0.18, "sine");
  const somErro = () => tocar(180, 0.25, "sawtooth");
  const somFim = () => {
    tocar(523, 0.15);
    setTimeout(() => tocar(659, 0.15), 150);
    setTimeout(() => tocar(784, 0.25), 300);
  };

  // ---------- Estado da sessão (score NÃO é persistido) ----------
  function novoEstado() {
    return {
      indiceFase: 0,
      indicePergunta: 0,
      score: 0,
      xp: 0,
      streak: 0,
      maxStreak: 0,
      vidas: jogoAtual.vidas,
      vidasMax: jogoAtual.vidas,
      acertosFase: 0,
      totalFase: 0,
      respondidas: 0,
      corretas: 0,
      nivel: 0,
      finalizado: false,
    };
  }

  const faseAtual = () => jogoAtual.fases[est.indiceFase];
  const perguntaAtual = () => faseAtual().perguntas[est.indicePergunta];

  function nivelPorXp() {
    let n = 0;
    jogoAtual.niveis.forEach((lv, i) => { if (est.xp >= lv.xp) n = i; });
    return n;
  }

  // ---------- Render principal ----------
  function render() {
    const app = $("#app");
    if (!jogoAtual) return telaInicial ? renderBoasVindas(app) : renderMenu(app);
    if (est.finalizado) return renderResultado(app);
    renderJogo(app);
  }

  // ---------- Tela 0: apresentação ----------
  function renderBoasVindas(app) {
    app.innerHTML = `
      <section class="tela-boas-vindas" aria-labelledby="boas-vindas-titulo">
        <div class="cartao-boas-vindas">
          <span class="selo-boas-vindas">Sistemas Operacionais</span>
          <h2 id="boas-vindas-titulo">Jogos Didáticos</h2>
          <p class="subtitulo-boas-vindas">
            Aprenda os principais conceitos da disciplina respondendo perguntas,
            avançando por fases e acompanhando seu desempenho.
          </p>
          <div class="pilares-jogos" aria-label="Recursos dos jogos">
            <div class="pilar-jogo"><strong>Quiz</strong><span>Perguntas conceituais</span></div>
            <div class="pilar-jogo"><strong>Fases</strong><span>Conteúdo passo a passo</span></div>
            <div class="pilar-jogo"><strong>Desempenho</strong><span>Pontos, vidas e sequência</span></div>
          </div>
          <button class="btn-primario btn-entrar-jogos" type="button">Escolher atividade ▶</button>
        </div>
      </section>`;

    app.querySelector(".btn-entrar-jogos").addEventListener("click", () => {
      telaInicial = false;
      render();
    });
  }

  // ---------- Menu de jogos ----------
  function renderMenu(app) {
    app.innerHTML = `
      <section class="menu">
        <h2>Escolha um jogo</h2>
        <div class="grade-jogos">
          ${registros.map((j, i) => `
            <button class="cartao-jogo" data-i="${i}">
              <span class="cartao-titulo">${j.titulo}</span>
              <span class="cartao-meta">${j.disciplina || ""} · ${j.nivel || ""}</span>
              <span class="cartao-meta">${j.fases.reduce((s, f) => s + f.perguntas.length, 0)} perguntas · ${j.vidas} vidas</span>
            </button>`).join("")}
        </div>
      </section>`;
    app.querySelectorAll(".cartao-jogo").forEach((b) => {
      b.addEventListener("click", () => iniciarJogo(+b.dataset.i));
    });
  }

  function iniciarJogo(i) {
    jogoAtual = registros[i];
    est = novoEstado();
    est.totalFase = faseAtual().perguntas.length;
    render();
  }

  // ---------- Tela do jogo ----------
  function renderJogo(app) {
    const p = perguntaAtual();
    const f = faseAtual();
    const nivel = jogoAtual.niveis[est.nivel];

    app.innerHTML = `
      <section class="jogo">
        <header class="hud">
          <div class="hud-esq">
            <button class="btn-sair" title="Voltar ao menu">←</button>
            <div>
              <strong>${jogoAtual.titulo}</strong>
              <span class="hud-fase">${f.titulo} · ${est.indicePergunta + 1}/${f.perguntas.length}</span>
            </div>
          </div>
          <div class="hud-dir">
          <button class="teoria-toggle" type="button">📚 Teoria</button>
            <span class="badge-nivel" title="Nível">${nivel.nome}</span>
            <span class="hud-item" title="Pontos">⭐ ${est.score}</span>
            <span class="hud-item vidas" title="Vidas">${"❤️".repeat(est.vidas)}${"🖤".repeat(est.vidasMax - est.vidas)}</span>
          </div>
        </header>

        <div class="barra-streak">
          <div class="streak-carga" style="width:${Math.min(est.streak * 10, 100)}%"></div>
          <span class="streak-texto">Sequência: ${est.streak}</span>
        </div>

        <div class="teoria-colapsavel">
          <div class="teoria-conteudo">${jogoAtual.teoria || ""}</div>
        </div>

        <div class="cartao-pergunta">
          <h3>${p.pergunta}</h3>
          <div class="opcoes" id="opcoes"></div>
        </div>

        <div class="feedback" id="feedback"></div>
      </section>`;

    // Opções: embaralha por padrão (integridade do quiz),
    // preserva a ordem natural quando "manterOrdem: true".
    const container = $("#opcoes");
    const opcoes = p.opcoes.map((texto, idx) => ({ texto, idx }));
    const ordem = p.manterOrdem ? opcoes : embaralhar(opcoes);

    ordem.forEach((op) => {
      const b = document.createElement("button");
      b.className = "opcao";
      b.dataset.idx = op.idx;
      b.textContent = op.texto;
      b.addEventListener("click", () => responder(b));
      container.appendChild(b);
    });

    app.querySelector(".btn-sair").addEventListener("click", () => {
      jogoAtual = null;
      est = null;
      telaInicial = false;
      render();
    });
    app.querySelector(".teoria-toggle").addEventListener("click", () => {
      app.querySelector(".teoria-colapsavel").classList.toggle("aberto");
    });
  }

  function responder(botao) {
    const p = perguntaAtual();
    const acertou = +botao.dataset.idx === p.correta;
    const botoes = [...$("#opcoes").children];

    // Revela a correta e marca a escolha errada (estilo idêntico antes da resposta)
    botoes.forEach((b) => {
      b.disabled = true;
      if (+b.dataset.idx === p.correta) b.classList.add("certa");
    });
    if (!acertou) botao.classList.add("errada");

    est.respondidas++;
    if (acertou) {
      est.corretas++;
      est.acertosFase++;
      est.streak++;
      est.maxStreak = Math.max(est.maxStreak, est.streak);
      const ganho = 10 + Math.min(est.streak, 5) * 2; // bônus progressivo de streak
      est.score += ganho;
      est.xp += ganho;
      somAcerto();
    } else {
      est.streak = 0;
      est.vidas--;
      somErro();
    }
    est.nivel = nivelPorXp();

    // Feedback imediato com explicação
    const fb = $("#feedback");
    fb.innerHTML = `
      <div class="fb ${acertou ? "fb-certo" : "fb-erro"}">
        <strong>${acertou ? "✓ Correto!" : "✗ Incorreto"}</strong>
        <p>${p.explicacao || ""}</p>
        <button class="btn-proximo">${est.vidas <= 0 ? "Reiniciar" : "Próxima →"}</button>
      </div>`;
    fb.querySelector(".btn-proximo").addEventListener("click", proxima);

    atualizarHud();
  }

  function atualizarHud() {
    const nivel = jogoAtual.niveis[est.nivel];
    const elNivel = $(".badge-nivel"); if (elNivel) elNivel.textContent = nivel.nome;
    const elScore = $(".hud-item[title='Pontos']"); if (elScore) elScore.textContent = "⭐ " + est.score;
    const elVidas = $(".vidas"); if (elVidas) elVidas.textContent = "❤️".repeat(est.vidas) + "🖤".repeat(est.vidasMax - est.vidas);
    const carga = $(".streak-carga"); if (carga) carga.style.width = Math.min(est.streak * 10, 100) + "%";
    // const st = $(".streak-texto"); if (st) st.textContent = "Sequência: " + est.streak;
  }

  function proxima() {
    // Perdeu todas as vidas → reinicia o jogo
    if (est.vidas <= 0) {
      est = novoEstado();
      est.totalFase = faseAtual().perguntas.length;
      render();
      return;
    }

    const f = faseAtual();
    const ultimaPerguntaDaFase = est.indicePergunta >= f.perguntas.length - 1;

    if (!ultimaPerguntaDaFase) {
      est.indicePergunta++;
      render();
      return;
    }

    // Fase concluída com 100% de acerto recupera 1 vida.
    if (est.acertosFase === f.perguntas.length && est.vidas < est.vidasMax) {
      est.vidas++;
    }

    const ultimaFase = est.indiceFase >= jogoAtual.fases.length - 1;
    if (ultimaFase) {
      est.finalizado = true;
      somFim();
    } else {
      est.indiceFase++;
      est.indicePergunta = 0;
      est.acertosFase = 0;
      est.totalFase = jogoAtual.fases[est.indiceFase].perguntas.length;
    }
    render();
  }

  // ---------- Resultado ----------
  function renderResultado(app) {
    const total = jogoAtual.fases.reduce((s, f) => s + f.perguntas.length, 0);
    const pct = Math.round((est.corretas / total) * 100);
    const nivel = jogoAtual.niveis[est.nivel];

    app.innerHTML = `
      <section class="resultado">
        <h2>🏆 Fim de jogo!</h2>
        <div class="resultado-metricas">
          <div><strong>${est.score}</strong><span>pontos</span></div>
          <div><strong>${est.corretas}/${total}</strong><span>acertos</span></div>
          <div><strong>${pct}%</strong><span>precisão</span></div>
          <div><strong>${est.maxStreak}</strong><span>melhor sequência</span></div>
          <div><strong>${nivel.nome}</strong><span>nível</span></div>
        </div>
        <p class="resultado-msg">${pct >= 90 ? "Excelente! 🚀" : pct >= 70 ? "Muito bem! 👏" : pct >= 50 ? "Bom começo! 💪" : "Continue treinando! 📚"}</p>
        <div class="resultado-acoes">
          <button class="btn-primario" id="btnJogarNovamente">Jogar novamente</button>
          <button class="btn-secundario" id="btnMenu">Voltar ao menu</button>
        </div>
      </section>`;

    $("#btnJogarNovamente").addEventListener("click", () => {
      est = novoEstado();
      est.totalFase = faseAtual().perguntas.length;
      render();
    });
    $("#btnMenu").addEventListener("click", () => {
      jogoAtual = null; est = null; render();
    });
  }

  // ---------- Inicialização: tema + som ----------
  function init() {
    const btnTema = $("#btnTema");
    const btnFonteMenos = $("#btnFonteMenos");
    const btnFontePadrao = $("#btnFontePadrao");
    const btnFonteMais = $("#btnFonteMais");
    const temaSalvo = localStorage.getItem("jogos_tema") || "claro";
    document.body.classList.toggle("tema-claro", temaSalvo === "claro");
    btnTema.addEventListener("click", () => {
      const claro = document.body.classList.toggle("tema-claro");
      localStorage.setItem("jogos_tema", claro ? "claro" : "escuro");
    });

    $("#btnSom").addEventListener("click", () => {
      somAtivo = !somAtivo;
      $("#btnSom").textContent = somAtivo ? "🔊" : "🔇";
    });

    const aplicarEscalaFonte = (escala) => {
      const escalaLimitada = Math.min(1.4, Math.max(0.85, escala));
      document.documentElement.style.setProperty("--escala-fonte", escalaLimitada);
      localStorage.setItem("jogos_escala_fonte", escalaLimitada);
    };
    const escalaSalva = Number(localStorage.getItem("jogos_escala_fonte"));
    aplicarEscalaFonte(Number.isFinite(escalaSalva) && escalaSalva > 0 ? escalaSalva : 1);
    btnFonteMenos.addEventListener("click", () => aplicarEscalaFonte(parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--escala-fonte")) - 0.1));
    btnFontePadrao.addEventListener("click", () => aplicarEscalaFonte(1));
    btnFonteMais.addEventListener("click", () => aplicarEscalaFonte(parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--escala-fonte")) + 0.1));

    render();
  }

  window.addEventListener("DOMContentLoaded", init);

  return { registrar };
})();