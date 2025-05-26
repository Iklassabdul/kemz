document.addEventListener("DOMContentLoaded", function () {
  // =================== WELCOME SCREEN ===================
  const welcomeMessages = [
    "System status: Waiting for Oluwakemi’s birthday...\nProgrammed with love, patience, and a little surprise.",
    "Before anything else, just know, this page is love in digital form.\nCount it down with me.",
    "Some people write letters. I build webpages.\nAnd this one? It’s all for you.",
    "Hey beautiful,\nI planted a surprise that blooms on your birthday.",
    "Every second behind this was for one thing: making your birthday feel special, Oluwakemi.",
    "This isn’t just a countdown...\nIt’s my way of showing how much I care."
  ];

  const welcomeScreen = document.getElementById("welcome-screen");
  const welcomeMessage = document.getElementById("welcome-message");
  if (welcomeScreen && welcomeMessage) {
    const selected = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    welcomeMessage.textContent = selected;

    setTimeout(() => {
      welcomeScreen.style.opacity = 0;
      setTimeout(() => welcomeScreen.style.display = "none", 600);
    }, 8000);
  }

  // =================== COUNTDOWN TIMER ===================
  const targetDate = new Date("2025-05-31T00:00:00+01:00").getTime();
  const countdownEl = document.getElementById("countdown");
  const rotatingTitle = document.getElementById("rotating-title");
  const birthdayMsg = document.getElementById("birthday-message");
  const audioPlayer = document.querySelector(".simple-audio-player");

  const currentDate = new Date();
  const isMay31 = currentDate.getMonth() === 4 && currentDate.getDate() === 31;

  if (isMay31) {
    const now = new Date();
    const hour = now.getHours();

    // Hide countdown and rotating title
    if (countdownEl) countdownEl.style.display = "none";
    if (rotatingTitle) {
      rotatingTitle.textContent = "The moment is here, my love.";
      rotatingTitle.style.marginBottom = "10px";
    }

    // Show birthday wishes
    if (birthdayMsg) birthdayMsg.classList.remove("hidden");

    // Hide audio
    if (audioPlayer) audioPlayer.style.display = "none";
  } else {
    // Countdown logic
    setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      const d = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
      const h = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const m = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
      const s = Math.max(0, Math.floor((diff % (1000 * 60)) / 1000));
      document.getElementById("days").textContent = String(d).padStart(2, "0");
      document.getElementById("hours").textContent = String(h).padStart(2, "0");
      document.getElementById("minutes").textContent = String(m).padStart(2, "0");
      document.getElementById("seconds").textContent = String(s).padStart(2, "0");
    }, 1000);
  }

  // =================== ROTATING TITLES ===================
  const rotatingMessages = [
    "Something beautiful is brewing for the one who makes me smile.",
    "My woman, my everything, your surprise is almost ready.",
    "Hey love, something special is coming…",
    "I get one thing wey go make your heart do gbim gbim…",
    "My love, May 31st go loud… just wait.",
    "You no go expect the love wey I package for you…",
    "Get ready to scream ‘awww’, it’s coming…",
    "This one no be ordinary, na love coded in a moment."
  ];

  if (!isMay31 && rotatingTitle) {
    let msgIndex = 0;
    setInterval(() => {
      rotatingTitle.style.opacity = 0;
      setTimeout(() => {
        rotatingTitle.textContent = rotatingMessages[msgIndex];
        rotatingTitle.style.opacity = 1;
        msgIndex = (msgIndex + 1) % rotatingMessages.length;
      }, 300);
    }, 5000);
  }

  // =================== AUDIO RANDOMIZER ===================
  const audio = document.getElementById("audio");
  if (audio && !isMay31) {
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    const pick = letters[Math.floor(Math.random() * letters.length)];
    audio.src = `audio/${pick}.mp3`;

    const playBtn = document.getElementById("play-button");
    const playIcon = document.getElementById("play-icon");
    const progress = document.getElementById("progress-bar");
    const currentTimeEl = document.getElementById("current-time");
    const durationEl = document.getElementById("duration");

    let isPlaying = false;

    playBtn.addEventListener("click", () => {
      isPlaying ? audio.pause() : audio.play();
    });

    audio.addEventListener("play", () => {
      isPlaying = true;
      playIcon.innerHTML = "&#10074;&#10074;";
    });

    audio.addEventListener("pause", () => {
      isPlaying = false;
      playIcon.innerHTML = "&#9658;";
    });

    audio.addEventListener("timeupdate", () => {
      progress.value = audio.currentTime;
      progress.max = audio.duration;
      currentTimeEl.textContent = formatTime(audio.currentTime);
      durationEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("ended", () => {
      isPlaying = false;
      playIcon.innerHTML = "&#9658;";
      document.getElementById("password-popup").classList.remove("hidden");
    });

    function formatTime(seconds) {
      const min = Math.floor(seconds / 60);
      const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
      return `${min}:${sec}`;
    }
  }

  // =================== UNWRAP GIFT LOGIC ===================
  const giftHeading = document.getElementById("gift-heading");
  const giftPopup = document.getElementById("gift-popup");
  const unlockPopup = document.getElementById("unlock-popup");
  const phrasePopup = document.getElementById("password-popup");
  const unlockInput = document.getElementById("unlock-input");
  const unlockSubmit = document.getElementById("submit-unlock");
  const unlockError = document.getElementById("unlock-error");

  const PHRASE = "Oluwakemi loving you brings me peace joy strength and purpose";
  const now = new Date();

  if (giftHeading) {
    giftHeading.addEventListener("click", () => {
      const current = new Date();
      const hr = current.getHours();

      if (isMay31 && hr >= 9) {
        unlockPopup.classList.remove("hidden");
      } else if (isMay31 && hr < 9) {
        giftPopup.querySelector("#popup-text").textContent = "Come back by 9am to claim your gift my love.";
        giftPopup.classList.remove("hidden");
        setTimeout(() => giftPopup.classList.add("hidden"), 5000);
      } else {
        giftPopup.querySelector("#popup-text").textContent = "Chill babygirl… we still dey cook your surprise. Come back on the 31st.";
        giftPopup.classList.remove("hidden");
        setTimeout(() => giftPopup.classList.add("hidden"), 5000);
      }
    });
  }

  if (unlockSubmit) {
    unlockSubmit.addEventListener("click", () => {
      const val = unlockInput.value.trim();
      if (val.toLowerCase() === PHRASE.toLowerCase()) {
        window.location.href = "gift.html";
      } else {
        unlockError.textContent = "You entered the wrong phrase, my love.";
        unlockError.classList.remove("hidden");
      }
    });
  }

  // Close popups
  document.querySelectorAll(".popup .close-btn, #close-popup, #close-unlock-popup, #close-password-popup").forEach(btn => {
    btn?.addEventListener("click", () => {
      btn.closest(".popup").classList.add("hidden");
    });
  });

  // ========== Phrase Popup Unlock ==========
  const passwordInput = document.getElementById("password-input");
  const passwordSubmit = document.getElementById("submit-password");
  const errorMsg = document.getElementById("error-message");
  const phraseDisplay = document.getElementById("phrase-display");
  const phraseText = document.getElementById("phrase-text");

  const PASSWORD = "TrustMeBabe";
  const phraseDates = [12, 14, 16, 17, 19, 20, 21, 23, 24, 29];
  const phrases = ["Oluwakemi", "Loving", "You", "Brings", "Me", "Peace", "Joy", "Strength", "And", "Purpose"];
  const today = new Date().getDate();

  passwordSubmit.addEventListener("click", () => {
    const pass = passwordInput.value.trim();
    if (pass === PASSWORD) {
      if (phraseDates.includes(today)) {
        phraseText.textContent = phrases[phraseDates.indexOf(today)];
      } else {
        phraseText.textContent = "Sorry my love, no phrase today. Check back tomorrow.";
      }
      phraseDisplay.classList.remove("hidden");
      phrasePopup.classList.add("hidden");
    } else {
      errorMsg.textContent = "You entered the wrong password my love.";
      errorMsg.classList.remove("hidden");
    }
  });
});
