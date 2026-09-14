/* ==========================================================================
   ROMANTIC DIGITAL STORY - JAVASCRIPT CONTROLLER
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. PERSONAL CONFIGURATION
   -------------------------------------------------------------------------- */
const config = {
  herName: "Her Name",
  myName: "Ashuuuuu ❤️",
  dateWeMet: "One Month Ago",

  // Timeline (Screen 2) - Text-based moments
  timeline: [
    {
      day: "DAY 01",
      title: "Rendu strangers.",
      description: "Appo nee enakku oru stranger...\nnaan unakku oru stranger.\nAana namma rendu perukkum theriyama,\noru pudhu chapter anga dhaan start aachu."
    },
    {
      day: "DAY 07",
      title: "Pesina pesina... neram poiduchu.",
      description: "Konjam konjam-ah pesinom...\nsila late night conversations,\nsila random topics,\nsila sirippu...\nTheriyama, unna konjam konjam-ah purinjika aarambichen."
    },
    {
      day: "DAY 15",
      title: "Pesuradhu romba easy aayiduchu.",
      description: "Serious matter irundhaalum,\nsumma loosu maari pesinaalum...\nun kooda pesumbodhu\nedhuvum force panna vendiyadha illa."
    },
    {
      day: "DAY 23",
      title: "Okay... nee important aayita.",
      description: "Oru naal sudden-ah realise pannen...\nmorning ezhundha odane\n'ivala text pannalama?' nu yosikka aarambichuten."
    },
    {
      day: "DAY 30",
      title: "And then... you asked me THAT question. 👀",
      description: "Nethu nee enna paathu,\n'En kooda iruppiya?' nu ketta andha moment...\n\nNaan appo answer sollala.\n\nBecause...\nenakku solla vaarthai mattum podhala."
    }
  ],

  // Interactive Question Cards (Screen 3)
  reasonsToLove: [
    {
      question: "Unna enakku pidikkara reason enna?",
      answer: `Un sirippu pidikkum...
aana adha vida,
enakku sirikka reason-a nee irukkaradhu pidikkum.

Un kural pidikkum...
aana adha vida,
oru naal full-ah pesina kooda
innum konjam pesanum nu thonradhu pidikkum.

Unna vida...
unnoda presence dhaan enakku romba pidikkum.

Nee irundha podhu,
ordinary moments kooda
konjam beautiful aagidudhu. ❤️`
    },
    {
      question: "Unna special-aakkuradhu enna?",
      answer: `Ulagathula neraya per irukkanga...

Aana sila per mattum dhaan
namma mind-la illa...
namma heart-la place eduthupanga.

Nee apdi vandhuta.

Perusa edhuvum pannama...
suma pesinaalum,
suma sirichaalum,
oru strange-aana happiness
enakku vandhududhu.

Adhaan nee special. ❤️`
    },
    {
      question: "One month-la enna maariduchu?",
      answer: `Oru maasam...

30 days...
720 hours...

Aana time-a count panna mudiyadha alavukku
sila feelings vandhuduchu.

Nethu varaikkum
'oru pudhu person' nu irundha nee...

Inniku,
'ennoda person-a iruppiya?' nu
naan yosikkura alavukku vandhuta.

Maybe love-ku years thevai illa...

Sila neram,
oru person vandhu
namma days-ah different-a feel panna vechaa podhum. ❤️`
    }
  ],

  // Handwritten Letter Text (Screen 4)
  letterText: `Unakku oru chinna confession...

Nethu nee en kitta andha question ketta odane
naan answer sollala...

Aana unakku theriyuma?

Andha question-ku answer
naan yosikka aarambichadhu
nee ketta apram mattum illa...

Konjam naalaave
enakku theriyama
en manasula adhu grow aagittu irundhudhu.

Un kooda pesuradhu pidikkum.
Un message varumbodhu smile varudhu.
Unna pathi yosikka aarambichiten.

Idhellam oru maasam-la nadandhuduchu.

Adhaan...
enakku konjam bayama kooda irundhudhu.

Aana sila feelings-ah
romba analyse panna mudiyadhu.

Feel panna dhaan mudiyum.`,

  // Final Reveal Message Lines (Screen 5 Cinematic Reveal)
  finalLines: [
    "Un kooda indha story-ah start panna naan ready. ❤️",
    "Unna pathi ellame enakku theriyum nu illa...",
    "Namaku enna nadakka pogudhu nu future enakku theriyum nu illa...",
    "Aana...",
    "Un kooda innum neraya pesanum...",
    "Unna innum neraya purinjikanum...",
    "Innum neraya sirikkanum...",
    "Innum neraya moments create pannanum...",
    "Indha one month-la start aana indha feeling...",
    "Adhu enga pogudhu nu un kooda serndhu paakanum. ❤️",
    "So yes...",
    "Un kooda indha story-ah start panna naan ready. ❤️"
  ],

  // Randomized Playful Messages when NO button escapes
  noEscapeMessages: [
    "Aiyooo... 😭😂",
    "Adha vida YES button easy-ah irukku 👀❤️",
    "Nee enna panna try panra nu enakku theriyudhu 😂",
    "Enga ponalum YES dhaan option! 😜❤️",
    "Pidika paatha pudika mudiyadhu! 👀😂"
  ],

  // Secret Easter Egg Message (Tapping Cat 😺 5 times)
  easterEggText: "Psst... he was nervous making this. 👀😂",

  // Audio Path
  musicPath: "assets/our-song.mp3"
};


/* --------------------------------------------------------------------------
   2. DOM ELEMENTS & STATE
   -------------------------------------------------------------------------- */
let currentScreen = 1;
let catClickCount = 0;
let isMusicPlaying = false;
let typewriterTimeout = null;
let noEscapeCount = 0;

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  initParticlesCanvas();
  renderTimeline();
  renderReasonsCards();
  setupEventListeners();
  updateProgressDots(1);

  // Set signature name
  const nameEl = document.getElementById("signature-name");
  if (nameEl) nameEl.textContent = config.myName;

  // Trigger Screen 1 Intro Sequence
  triggerScreen1Intro();
}


/* --------------------------------------------------------------------------
   3. SCREEN NAVIGATION & PROGRESS
   -------------------------------------------------------------------------- */
function goToScreen(screenNumber) {
  if (screenNumber < 1 || screenNumber > 5) return;

  const currentEl = document.getElementById(`screen-${currentScreen}`);
  const targetEl = document.getElementById(`screen-${screenNumber}`);

  if (!targetEl) return;

  if (currentEl) {
    currentEl.classList.remove("active");
  }

  currentScreen = screenNumber;
  updateProgressDots(currentScreen);

  setTimeout(() => {
    targetEl.classList.add("active");
    handleScreenEnter(screenNumber);
  }, 100);
}

function updateProgressDots(screenNum) {
  const dots = document.querySelectorAll(".progress-dot");
  dots.forEach((dot, idx) => {
    if (idx + 1 === screenNum) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function handleScreenEnter(screenNum) {
  if (screenNum === 1) {
    triggerScreen1Intro();
  } else if (screenNum === 4) {
    triggerScreen4Intro();
  } else if (screenNum === 5) {
    triggerScreen5Initial();
  }
}


/* --------------------------------------------------------------------------
   4. SCREEN 1 LOGIC (CINEMATIC INTRO)
   -------------------------------------------------------------------------- */
function triggerScreen1Intro() {
  const line2 = document.getElementById("intro-line-2");
  const line3 = document.getElementById("intro-line-3");
  const line4 = document.getElementById("intro-line-4");
  const actionBtn = document.getElementById("intro-action");

  [line2, line3, line4, actionBtn].forEach(el => {
    if (el) {
      el.classList.add("hidden-line");
      el.classList.remove("visible-line");
    }
  });

  setTimeout(() => {
    if (line2) { line2.classList.remove("hidden-line"); line2.classList.add("visible-line"); }
  }, 1400);

  setTimeout(() => {
    if (line3) { line3.classList.remove("hidden-line"); line3.classList.add("visible-line"); }
  }, 2800);

  setTimeout(() => {
    if (line4) { line4.classList.remove("hidden-line"); line4.classList.add("visible-line"); }
  }, 4200);

  setTimeout(() => {
    if (actionBtn) { actionBtn.classList.remove("hidden-line"); actionBtn.classList.add("visible-line"); }
  }, 5200);
}


/* --------------------------------------------------------------------------
   5. DYNAMIC RENDERERS (TIMELINE & CARDS)
   -------------------------------------------------------------------------- */
function renderTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  container.innerHTML = config.timeline.map(item => `
    <div class="timeline-item">
      <div class="timeline-day">${item.day}</div>
      <h3 class="timeline-title">${item.title}</h3>
      <p class="timeline-desc">${item.description.replace(/\n/g, '<br>')}</p>
    </div>
  `).join("");
}

function renderReasonsCards() {
  const container = document.getElementById("reasons-cards-container");
  if (!container) return;

  container.innerHTML = config.reasonsToLove.map((item, idx) => `
    <div class="interactive-card" onclick="toggleCard(this)">
      <div class="card-header-row">
        <h3 class="card-question">${item.question}</h3>
        <span class="card-toggle-icon">▼</span>
      </div>
      <div class="card-answer-body">
        <p>${item.answer.replace(/\n/g, '<br>')}</p>
      </div>
    </div>
  `).join("");
}

function toggleCard(cardElement) {
  const isExpanded = cardElement.classList.contains("expanded");
  document.querySelectorAll(".interactive-card").forEach(c => c.classList.remove("expanded"));

  if (!isExpanded) {
    cardElement.classList.add("expanded");
  }
}


/* --------------------------------------------------------------------------
   6. SCREEN 4: CHAPTER 03 & LETTER LOGIC
   -------------------------------------------------------------------------- */
function triggerScreen4Intro() {
  const line2 = document.getElementById("let-line-2");
  const line3 = document.getElementById("let-line-3");
  const line4 = document.getElementById("let-line-4");
  const envelopeWrap = document.getElementById("envelope-wrapper");

  [line2, line3, line4, envelopeWrap].forEach(el => {
    if (el) {
      el.classList.add("hidden-line");
      el.classList.remove("visible-line");
    }
  });

  setTimeout(() => {
    if (line2) { line2.classList.remove("hidden-line"); line2.classList.add("visible-line"); }
  }, 1200);

  setTimeout(() => {
    if (line3) { line3.classList.remove("hidden-line"); line3.classList.add("visible-line"); }
  }, 2400);

  setTimeout(() => {
    if (line4) { line4.classList.remove("hidden-line"); line4.classList.add("visible-line"); }
  }, 3600);

  setTimeout(() => {
    if (envelopeWrap) { envelopeWrap.classList.remove("hidden-line"); envelopeWrap.classList.add("visible-line"); }
  }, 4800);
}

function setupEnvelopeLogic() {
  const openBtn = document.getElementById("open-envelope-btn");
  const envelope = document.getElementById("envelope");
  const letterModal = document.getElementById("letter-modal");
  const closeLetterBtn = document.getElementById("close-letter-btn");

  if (openBtn && envelope) {
    openBtn.addEventListener("click", () => {
      envelope.classList.add("open");
      setTimeout(() => {
        if (letterModal) {
          letterModal.classList.remove("hidden-modal");
          startTypewriterText(config.letterText);
        }
      }, 600);
    });
  }

  if (closeLetterBtn) {
    closeLetterBtn.addEventListener("click", () => {
      if (letterModal) {
        letterModal.classList.add("hidden-modal");
      }
      goToScreen(5);
    });
  }
}

function startTypewriterText(text) {
  const container = document.getElementById("typewriter-text");
  if (!container) return;

  container.textContent = "";
  let i = 0;

  if (typewriterTimeout) clearTimeout(typewriterTimeout);

  function typeChar() {
    if (i < text.length) {
      container.textContent += text.charAt(i);
      i++;
      typewriterTimeout = setTimeout(typeChar, 25);
    }
  }

  typeChar();
}


/* --------------------------------------------------------------------------
   7. SCREEN 5: INTRO -> CHOICE BOX WITH MOVING NO BUTTON
   -------------------------------------------------------------------------- */
function triggerScreen5Initial() {
  const countdownStage = document.getElementById("reveal-stage-countdown");
  const choiceStage = document.getElementById("reveal-stage-choice");
  const cinematicStage = document.getElementById("reveal-stage-cinematic");
  const lineQuote = document.getElementById("reveal-quote");
  const lineSo = document.getElementById("reveal-so");
  const countNum = document.getElementById("countdown-num");

  countdownStage.classList.remove("hidden-stage");
  choiceStage.classList.add("hidden-stage");
  cinematicStage.classList.add("hidden-stage");
  
  [lineQuote, lineSo, countNum].forEach(el => {
    if (el) el.classList.add("hidden-line");
  });

  setTimeout(() => {
    if (lineQuote) lineQuote.classList.remove("hidden-line");
  }, 1400);

  setTimeout(() => {
    if (lineSo) lineSo.classList.remove("hidden-line");
  }, 2800);

  setTimeout(() => {
    if (countNum) countNum.classList.remove("hidden-line");
    runCountdown(3, () => {
      countdownStage.classList.add("hidden-stage");
      choiceStage.classList.remove("hidden-stage");
    });
  }, 4200);
}

function runCountdown(num, onComplete) {
  const countEl = document.getElementById("countdown-num");
  if (!countEl) return;

  countEl.textContent = num;

  if (num > 1) {
    setTimeout(() => {
      runCountdown(num - 1, onComplete);
    }, 900);
  } else {
    setTimeout(() => {
      onComplete();
    }, 900);
  }
}

/* Moving NO Button Handler */
function setupMovingNoButton() {
  const noBtn = document.getElementById("no-choice-btn");
  const toastMsg = document.getElementById("no-escape-toast");

  if (!noBtn) return;

  const moveNoButton = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const card = document.getElementById("choice-question-box");
    if (!card) return;

    const maxShiftX = window.innerWidth < 400 ? 110 : 150;
    const maxShiftY = 90;

    // Calculate safe random displacement that stays within container bounds
    let randomX = (Math.random() - 0.5) * (maxShiftX * 2);
    let randomY = (Math.random() - 0.5) * (maxShiftY * 2);

    // Keep within reasonable boundaries
    if (Math.abs(randomX) < 40) randomX = randomX >= 0 ? 70 : -70;
    if (Math.abs(randomY) < 30) randomY = randomY >= 0 ? 50 : -50;

    noBtn.style.transform = `translate3d(${randomX}px, ${randomY}px, 0)`;

    // Update escape toast message
    if (toastMsg) {
      const msgIndex = noEscapeCount % config.noEscapeMessages.length;
      toastMsg.textContent = config.noEscapeMessages[msgIndex];
      toastMsg.classList.remove("hidden-line");
      toastMsg.classList.add("visible-line");
      noEscapeCount++;
    }
  };

  // Touch and pointer listeners for mobile Chrome
  noBtn.addEventListener("pointerdown", moveNoButton, { passive: false });
  noBtn.addEventListener("touchstart", moveNoButton, { passive: false });
  noBtn.addEventListener("mouseover", moveNoButton);
  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton(e);
  });
}


/* --------------------------------------------------------------------------
   8. SCREEN 5: CINEMATIC YES EXPERIENCE & SONG TRIGGER
   -------------------------------------------------------------------------- */
function setupYesButtonHandler() {
  const yesBtn = document.getElementById("yes-choice-btn");
  if (!yesBtn) return;

  yesBtn.addEventListener("click", () => {
    // 1. Play Song (Handled safely if file missing)
    playTamilSongSafely();

    // 2. Transition to Cinematic Stage
    const choiceStage = document.getElementById("reveal-stage-choice");
    const cinematicStage = document.getElementById("reveal-stage-cinematic");

    if (choiceStage) choiceStage.classList.add("hidden-stage");
    if (cinematicStage) cinematicStage.classList.remove("hidden-stage");

    // Particle explosion
    triggerCelebrationBurst();

    // Run Cinematic Sequence
    runCinematicYesSequence();
  });
}

function playTamilSongSafely() {
  const audio = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");

  if (!audio) return;

  audio.play().then(() => {
    isMusicPlaying = true;
    if (musicBtn) musicBtn.classList.add("playing");
  }).catch(err => {
    console.log("Audio playback notice (File may be missing or blocked):", err);
  });
}

function runCinematicYesSequence() {
  const okayEl = document.getElementById("cinematic-okay");
  const gotEl = document.getElementById("cinematic-got");
  const yesTitleEl = document.getElementById("cinematic-yes-title");
  const msgBox = document.getElementById("final-message-box");
  const endingBox = document.getElementById("final-ending-box");

  // Step 1: "Okay..."
  setTimeout(() => {
    if (okayEl) okayEl.classList.remove("hidden-line");
  }, 600);

  // Step 2: "You got your answer. ❤️"
  setTimeout(() => {
    if (gotEl) gotEl.classList.remove("hidden-line");
  }, 1800);

  // Step 3: Giant YES title
  setTimeout(() => {
    if (yesTitleEl) yesTitleEl.classList.remove("hidden-line");
    triggerCelebrationBurst();
  }, 3200);

  // Step 4: Line-by-line final message reveal
  setTimeout(() => {
    if (msgBox) {
      msgBox.classList.remove("hidden-line");
      renderFinalLinesSequentially(config.finalLines, () => {
        // Step 5: Final signature & ending box
        setTimeout(() => {
          if (endingBox) endingBox.classList.remove("hidden-line");
        }, 800);
      });
    }
  }, 4400);
}

function renderFinalLinesSequentially(linesArray, onFinished) {
  const container = document.getElementById("final-message-box");
  if (!container) return;

  container.innerHTML = "";
  let idx = 0;

  function revealNextLine() {
    if (idx < linesArray.length) {
      const lineText = linesArray[idx];
      const p = document.createElement("p");
      p.className = idx === linesArray.length - 1 ? "final-text-p final-highlight line-fade-in" : "final-text-p line-fade-in";
      p.textContent = lineText;
      container.appendChild(p);
      idx++;
      setTimeout(revealNextLine, 1100);
    } else {
      if (onFinished) onFinished();
    }
  }

  revealNextLine();
}

function triggerCelebrationBurst() {
  if (window.burstParticles) {
    window.burstParticles();
  }
}


/* --------------------------------------------------------------------------
   9. MUSIC PLAYER CONTROLLER
   -------------------------------------------------------------------------- */
function setupMusicPlayer() {
  const audio = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");

  if (!audio || !musicBtn) return;

  musicBtn.addEventListener("click", () => {
    if (isMusicPlaying) {
      audio.pause();
      isMusicPlaying = false;
      musicBtn.classList.remove("playing");
    } else {
      audio.play().then(() => {
        isMusicPlaying = true;
        musicBtn.classList.add("playing");
      }).catch(err => {
        console.log("Audio playback notice:", err);
      });
    }
  });
}


/* --------------------------------------------------------------------------
   10. SECRET EASTER EGG (CAT ICON 😺)
   -------------------------------------------------------------------------- */
function setupEasterEgg() {
  const catBtn = document.getElementById("cat-easter-egg-btn");
  const modal = document.getElementById("easter-egg-modal");
  const closeBtn = document.getElementById("close-toast-btn");
  const toastText = document.getElementById("easter-egg-text");

  if (toastText) {
    toastText.textContent = config.easterEggText;
  }

  if (catBtn) {
    catBtn.addEventListener("click", () => {
      catClickCount++;
      if (catClickCount >= 5) {
        if (modal) modal.classList.remove("hidden-modal");
        catClickCount = 0;
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      if (modal) modal.classList.add("hidden-modal");
    });
  }
}


/* --------------------------------------------------------------------------
   11. EVENT LISTENERS SETUP
   -------------------------------------------------------------------------- */
function setupEventListeners() {
  const startBtn = document.getElementById("start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", () => goToScreen(2));
  }

  document.querySelectorAll(".next-screen-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const target = e.currentTarget.getAttribute("data-target");
      if (target) goToScreen(parseInt(target));
    });
  });

  document.querySelectorAll(".prev-screen-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const target = e.currentTarget.getAttribute("data-target");
      if (target) goToScreen(parseInt(target));
    });
  });

  const replayBtn = document.getElementById("replay-btn");
  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      const envelope = document.getElementById("envelope");
      if (envelope) envelope.classList.remove("open");
      goToScreen(1);
    });
  }

  setupEnvelopeLogic();
  setupMovingNoButton();
  setupYesButtonHandler();
  setupMusicPlayer();
  setupEasterEgg();
}


/* --------------------------------------------------------------------------
   12. BACKGROUND CANVAS PARTICLES
   -------------------------------------------------------------------------- */
function initParticlesCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = window.innerWidth < 600 ? 30 : 50;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.5,
      color: Math.random() > 0.3 ? "rgba(255, 117, 140, " : "rgba(161, 140, 209, ",
      alpha: Math.random() * 0.7 + 0.2,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.1
    });
  }

  window.burstParticles = function() {
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: width / 2,
        y: height / 2,
        radius: Math.random() * 2.8 + 1,
        color: "rgba(255, 126, 179, ",
        alpha: 1,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4
      });
    }
  };

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.y < -10) p.y = height + 10;
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ")";
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  animate();
}
