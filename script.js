document.addEventListener("DOMContentLoaded", function () {
  // ========== Welcome Screen ==========
  const welcomeMessages = [
    "System status: Waiting for Oluwakemi’s birthday...\nProgrammed with love, patience, and a little surprise.",
    "Before anything else, just know, this page is love in digital form.\nCount it down with me.",
    "Every sunrise brings us closer.\nThis countdown? It’s my silent way of saying 'I’m thinking of you.'",
    "Some people write letters. I build webpages.\nAnd this one? It’s all for you.",
    "Hey beautiful,\nI didn’t just build a page... I planted a surprise that blooms on your birthday.",
    "You may not see the effort...\nBut every second behind this was for one thing. Making your birthday feel a little more special, Oluwakemi.",
    "Oluwakemi,\nThey say love is shown in little things.\nSo here’s a page, counting down to a day that means everything to me.",
    "Oluwakemi,\nI coded a surprise into the future.\nKeep checking... it’s going to be sweet.",
    "Some gifts come wrapped in ribbons,\nOthers in intention.\nThis one is wrapped in code, crafted for you, Oluwakemi.",
    "This isn’t just a countdown...\nIt’s my way of showing how much I care.\nBuilt with love just for you."
  ];
  const welcomeScreen = document.getElementById("welcome-screen");
  const welcomeMessage = document.getElementById("welcome-message");
  const now = new Date();
  const isAfterBirthday = now >= new Date("2025-05-31T00:00:00+01:00");

  if (!isAfterBirthday) {
    const selectedMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    welcomeMessage.textContent = selectedMessage;
  }

  setTimeout(() => {
    welcomeScreen.style.opacity = 0;
    setTimeout(() => {
      welcomeScreen.style.display = "none";
    }, 500);
  }, 8000);

  // ========== DOM Elements ==========
  const rotatingTitle = document.getElementById("rotating-title");
  const countdown = document.getElementById("countdown");
  const cakeWrapper = document.querySelector(".cake-wrapper");
  const audioPlayer = document.querySelector(".simple-audio-player");
  const giftHeading = document.getElementById("gift-heading");
  const birthdayMessageDiv = document.getElementById("birthday-message");

  // ========== Countdown and Transition ==========
  const birthdayStart = new Date("2025-05-31T00:00:00+01:00");
  const phraseUnlockTime = new Date("2025-05-31T09:00:00+01:00");

  function updateCountdown() {
    const now = new Date();
    if (now < birthdayStart) {
      const distance = birthdayStart - now;
      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("days").textContent = String(d).padStart(2, "0");
      document.getElementById("hours").textContent = String(h).padStart(2, "0");
      document.getElementById("minutes").textContent = String(m).padStart(2, "0");
      document.getElementById("seconds").textContent = String(s).padStart(2, "0");
    } else {
      // It's birthday time!
      countdown.classList.add("hidden");
      rotatingTitle.textContent = "The moment is here, my love.";
      audioPlayer.classList.add("hidden");
      cakeWrapper.classList.add("hidden");
      birthdayMessageDiv.classList.remove("hidden");
    }
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  // ========== Title Rotation ==========
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
  if (now < birthdayStart) {
    setInterval(() => {
      rotatingTitle.style.opacity = 0;
      setTimeout(() => {
        rotatingTitle.textContent = titles[titleIndex];
        rotatingTitle.style.opacity = 1;
        titleIndex = (titleIndex + 1) % titles.length;
      }, 300);
    }, 5000);
  }

  // ========== Gift Phrase Unlock ==========
  const unlockPopup = document.getElementById("unlock-popup");
  const unlockInput = document.getElementById("unlock-input");
  const unlockButton = document.getElementById("submit-unlock");
  const unlockError = document.getElementById("unlock-error");
  const closeUnlockPopup = document.getElementById("close-unlock-popup");

  const correctPhrase = "oluwakemi loving you brings me peace joy strength and purpose";

  giftHeading.addEventListener("click", () => {
    const now = new Date();
    if (now < birthdayStart) return;
    if (now < phraseUnlockTime) {
      // Show “Come back at 9am…” message
      const giftPopup = document.getElementById("gift-popup");
      const popupText = document.getElementById("popup-text");
      popupText.textContent = "Come back by 9am to claim your gift my love.";
      giftPopup.classList.remove("hidden");
      setTimeout(() => giftPopup.classList.add("hidden"), 5000);
    } else {
      unlockPopup.classList.remove("hidden");
      unlockInput.value = "";
      unlockError.classList.add("hidden");
    }
  });

  closeUnlockPopup.addEventListener("click", () => {
    unlockPopup.classList.add("hidden");
  });

  unlockButton.addEventListener("click", () => {
    const input = unlockInput.value.trim().toLowerCase();
    if (input === correctPhrase) {
      window.location.href = "gift.html";
    } else {
      unlockError.textContent = "You entered the wrong phrase, my love.";
      unlockError.classList.remove("hidden");
    }
  });

  // ========== Phrase of the Day ==========
  const PASSWORD = "TrustMeBabe";
  const phraseDates = [12, 14, 16, 17, 19, 20, 21, 23, 24, 29];
  const phrases = ["Oluwakemi", "Loving", "You", "Brings", "Me", "Peace", "Joy", "Strength", "And", "Purpose"];
  const phrasePopup = document.getElementById("password-popup");
  const passwordInput = document.getElementById("password-input");
  const submitPassword = document.getElementById("submit-password");
  const errorMessage = document.getElementById("error-message");
  const phraseDisplay = document.getElementById("phrase-display");
  const phraseText = document.getElementById("phrase-text");

  submitPassword.addEventListener("click", () => {
    const pass = passwordInput.value.trim();
    const today = new Date().getDate();
    if (pass === PASSWORD) {
      const index = phraseDates.indexOf(today);
      phraseText.textContent = index !== -1
        ? phrases[index]
        : "Sorry my love, no phrase today. Check back tomorrow.";
      phraseDisplay.classList.remove("hidden");
      phrasePopup.classList.add("hidden");
    } else {
      errorMessage.textContent = "You entered the wrong password my love.";
      errorMessage.classList.remove("hidden");
    }
  });

  document.getElementById("close-password-popup").addEventListener("click", () => {
    phrasePopup.classList.add("hidden");
  });

  // ========== Audio Player ==========
  const audio = document.getElementById("audio");
  const playBtn = document.getElementById("play-button");
  const playIcon = document.getElementById("play-icon");
  const progress = document.getElementById("progress-bar");
  const currentTimeEl = document.getElementById("current-time");
  const durationEl = document.getElementById("duration");

  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const randomTrack = letters[Math.floor(Math.random() * letters.length)];
  if (audio) {
    audio.src = `audio/${randomTrack}.mp3`;
  }

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
    phrasePopup.classList.remove("hidden");
    passwordInput.value = "";
    errorMessage.classList.add("hidden");
  });

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  }
});
