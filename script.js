document.addEventListener("DOMContentLoaded", function () {
  // ========== Welcome Screen ==========
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

  // ========== Countdown & Birthday Logic ==========
  const targetDate = new Date("2025-05-31T00:00:00+01:00").getTime();
  const countdownEl = document.getElementById("countdown");
  const rotatingTitle = document.getElementById("rotating-title");
  const birthdayMessage = document.getElementById("birthday-message");
  const audioSection = document.querySelector(".simple-audio-player");
  const cakeWrapper = document.querySelector(".cake-wrapper");

  const checkBirthdayMoment = () => {
    const now = new Date();
    if (now.getDate() === 31 && now.getMonth() === 4) {
      rotatingTitle.textContent = "The moment is here, my love.";
      countdownEl.style.display = "none";
      cakeWrapper.style.display = "none";
      audioSection.style.display = "none";
      birthdayMessage.classList.remove("hidden");
    }
  };

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
    checkBirthdayMoment();
  }, 1000);

  // ========== Rotating Title ==========
  const messages = [
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
  let msgIndex = 0;
  setInterval(() => {
    if (rotatingTitle) {
      rotatingTitle.style.opacity = 0;
      setTimeout(() => {
        rotatingTitle.textContent = messages[msgIndex];
        rotatingTitle.style.opacity = 1;
        msgIndex = (msgIndex + 1) % messages.length;
      }, 300);
    }
  }, 5000);

  // ========== Music Logic ==========
  const audio = document.getElementById("audio");
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const randomLetter = letters[Math.floor(Math.random() * letters.length)];
  audio.src = `audio/${randomLetter}.mp3`;

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

  progress.addEventListener("mousedown", e => e.preventDefault());

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  }

  // ========== Gift Unlock ==========
  const giftHeading = document.getElementById("gift-heading");
  const unlockPopup = document.getElementById("unlock-popup");
  const unlockInput = document.getElementById("unlock-input");
  const unlockSubmit = document.getElementById("unlock-submit");
  const unlockError = document.getElementById("unlock-error");
  const unlockPhrase = "Oluwakemi loving you brings me peace joy strength and purpose";

  giftHeading.addEventListener("click", () => {
    const now = new Date();
    const isMay31 = now.getDate() === 31 && now.getMonth() === 4;
    const hour = now.getHours();
    if (isMay31 && hour >= 9) {
      unlockPopup.classList.remove("hidden");
      unlockError.classList.add("hidden");
    } else if (isMay31 && hour < 9) {
      const popup = document.getElementById("gift-popup");
      const popupText = document.getElementById("popup-text");
      popupText.textContent = "Come back by 9am to claim your gift my love.";
      popup.classList.remove("hidden");
      setTimeout(() => popup.classList.add("hidden"), 5000);
    }
  });

  unlockSubmit.addEventListener("click", () => {
    if (unlockInput.value.trim() === unlockPhrase) {
      window.location.href = "gift.html";
    } else {
      unlockError.textContent = "You entered the wrong phrase my love.";
      unlockError.classList.remove("hidden");
    }
  });

  document.getElementById("close-unlock-popup").addEventListener("click", () => {
    unlockPopup.classList.add("hidden");
  });
});
