document.addEventListener("DOMContentLoaded", function () {
  // === Welcome Screen ===
  const welcomeScreen = document.getElementById("welcome-screen");
  const welcomeMessage = document.getElementById("welcome-message");
  const welcomeMessages = [
    "System status: Waiting for Oluwakemi’s birthday...\nProgrammed with love, patience, and a little surprise.",
    "Before anything else, just know, this page is love in digital form.\nCount it down with me.",
    "Every sunrise brings us closer.\nThis countdown? It’s my silent way of saying “I’m thinking of you.”",
    "Some people write letters. I build webpages.\nAnd this one? It’s all for you.",
    "Hey beautiful,\nI didn’t just build a page... I planted a surprise that blooms on your birthday.",
    "You may not see the effort...\nBut every second behind this was for one thing. Making your birthday feel a little more special, Oluwakemi.",
    "Oluwakemi,\nThey say love is shown in little things.\nSo here’s a page, counting down to a day that means everything to me.",
    "Oluwakemi,\nI coded a surprise into the future.\nKeep checking... it’s going to be sweet.",
    "Some gifts come wrapped in ribbons,\nOthers in intention.\nThis one is wrapped in code, crafted for you, Oluwakemi.",
    "This isn’t just a countdown...\nIt’s my way of showing how much I care.\nBuilt with love just for you."
  ];
  const selectedMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
  welcomeMessage.textContent = selectedMessage;
  setTimeout(() => {
    welcomeScreen.style.opacity = 0;
    setTimeout(() => {
      welcomeScreen.style.display = "none";
    }, 500);
  }, 8000);

  // === Countdown & Birthday Message ===
  const rotatingTitle = document.getElementById("rotating-title");
  const countdownEl = document.getElementById("countdown");
  const birthdayMessageEl = document.getElementById("birthday-message");
  const momentAnim = document.getElementById("moment-animation");
  const giftHeading = document.getElementById("gift-heading");
  const audioPlayer = document.querySelector(".simple-audio-player");

  const targetDate = new Date("2025-05-31T00:00:00+01:00");
  const unlockTime = new Date("2025-05-31T09:00:00+01:00");

  const now = new Date();

  // BEFORE May 31
  if (now < targetDate) {
    birthdayMessageEl.style.display = "none";
    momentAnim.style.display = "none";

    const countdownTimer = setInterval(() => {
      const current = new Date();
      const diff = targetDate - current;
      const d = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
      const h = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const m = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
      const s = Math.max(0, Math.floor((diff % (1000 * 60)) / 1000));
      document.getElementById("days").textContent = String(d).padStart(2, "0");
      document.getElementById("hours").textContent = String(h).padStart(2, "0");
      document.getElementById("minutes").textContent = String(m).padStart(2, "0");
      document.getElementById("seconds").textContent = String(s).padStart(2, "0");
    }, 1000);

    const titles = [
      "Something beautiful is brewing for the one who makes me smile.",
      "My woman, my everything, your surprise is almost ready.",
      "You’ve been my peace… now let me return the joy.",
      "I get one small thing wey go make your heart do gbim gbim…",
      "Hey love, something special is coming…",
      "You no go expect the love wey I package for you…",
      "Something dey load wey go make you blush tire…",
      "Get ready to scream ‘awww’, it’s coming…",
      "My love, something crafted just for you is almost here…",
      "My love, May 31st go loud… just wait.",
      "This surprise na just a piece of how I feel for you.",
      "I dey express the love wey words no fit capture.",
      "What’s coming is a small version of the big love I carry for you.",
      "This one no be ordinary, na love coded in a moment."
    ];
    let titleIndex = 0;
    setInterval(() => {
      rotatingTitle.style.opacity = 0;
      setTimeout(() => {
        rotatingTitle.textContent = titles[titleIndex];
        rotatingTitle.style.opacity = 1;
        titleIndex = (titleIndex + 1) % titles.length;
      }, 300);
    }, 5000);
  }

  // AT or AFTER 12:00 AM on May 31
  if (now >= targetDate) {
    rotatingTitle.textContent = "The moment is here, my love.";
    countdownEl.style.display = "none";
    birthdayMessageEl.style.display = "block";
    momentAnim.style.display = "block";
    audioPlayer.style.display = "none";

    // Unlock logic
    giftHeading.addEventListener("click", () => {
      const current = new Date();
      if (current < unlockTime) {
        showGiftPopup("Come back by 9am to claim your gift my love.");
      } else {
        document.getElementById("unlock-popup").classList.remove("hidden");
        document.getElementById("unlock-input").value = "";
        document.getElementById("unlock-error").classList.add("hidden");
      }
    });
  }

  // === Phrase Unlock ===
  const unlockBtn = document.getElementById("unlock-button");
  const unlockInput = document.getElementById("unlock-input");
  const unlockError = document.getElementById("unlock-error");

  unlockBtn.addEventListener("click", () => {
    const correctPhrase = "Oluwakemi loving you brings me peace joy strength and purpose";
    const typed = unlockInput.value.trim().toLowerCase();
    if (typed === correctPhrase.toLowerCase()) {
      window.location.href = "gift.html";
    } else {
      unlockError.textContent = "You entered the wrong phrase my love.";
      unlockError.classList.remove("hidden");
    }
  });

  document.getElementById("close-unlock-popup").onclick = () => {
    document.getElementById("unlock-popup").classList.add("hidden");
  };

  function showGiftPopup(text) {
    const popup = document.getElementById("gift-popup");
    const popupText = document.getElementById("popup-text");
    popupText.textContent = text;
    popup.classList.remove("hidden");
    setTimeout(() => popup.classList.add("hidden"), 5000);
  }

  document.getElementById("close-popup").onclick = () => {
    document.getElementById("gift-popup").classList.add("hidden");
  };

  // === Audio ===
  const audio = document.getElementById("audio");
  const playBtn = document.getElementById("play-button");
  const playIcon = document.getElementById("play-icon");
  const progress = document.getElementById("progress-bar");
  const currentTimeEl = document.getElementById("current-time");
  const durationEl = document.getElementById("duration");

  if (audio && playBtn) {
    const random = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    audio.src = `audio/${random}.mp3`;

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

    progress.addEventListener("mousedown", e => e.preventDefault());

    audio.addEventListener("ended", () => {
      isPlaying = false;
      playIcon.innerHTML = "&#9658;";
      document.getElementById("password-popup")?.classList.remove("hidden");
      document.getElementById("password-input").value = "";
      document.getElementById("error-message").classList.add("hidden");
    });
  }

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  }

  // === Password for Phrase of the Day ===
  const passwordPopup = document.getElementById("password-popup");
  const passwordInput = document.getElementById("password-input");
  const submitBtn = document.getElementById("submit-password");
  const errorMsg = document.getElementById("error-message");
  const closePasswordPopup = document.getElementById("close-password-popup");

  const phraseDisplay = document.getElementById("phrase-display");
  const phraseText = document.getElementById("phrase-text");

  const PASSWORD = "TrustMeBabe";
  const phraseDates = [12, 14, 16, 17, 19, 20, 21, 23, 24, 29];
  const phrases = ["Oluwakemi", "Loving", "You", "Brings", "Me", "Peace", "Joy", "Strength", "And", "Purpose"];
  const currentDay = new Date().getDate();

  submitBtn?.addEventListener("click", () => {
    const input = passwordInput.value.trim();
    if (input === PASSWORD) {
      if (phraseDates.includes(currentDay)) {
        phraseText.textContent = phrases[phraseDates.indexOf(currentDay)];
      } else {
        phraseText.textContent = "Sorry my love, no phrase today. Check back tomorrow.";
      }
      passwordPopup.classList.add("hidden");
      phraseDisplay.classList.remove("hidden");
    } else {
      errorMsg.textContent = "You entered the wrong password my love.";
      errorMsg.classList.remove("hidden");
    }
  });

  closePasswordPopup?.addEventListener("click", () => {
    passwordPopup.classList.add("hidden");
  });
});
