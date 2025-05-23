document.addEventListener("DOMContentLoaded", function () {
  // ========== Welcome Screen ==========
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
  const welcomeScreen = document.getElementById("welcome-screen");
  const welcomeMessage = document.getElementById("welcome-message");
  if (welcomeScreen && welcomeMessage) {
    const selectedMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    welcomeMessage.textContent = selectedMessage;
    setTimeout(() => {
      welcomeScreen.style.opacity = 0;
      setTimeout(() => welcomeScreen.style.display = "none", 500);
    }, 8000);
  }

  // ========== Element References ==========
  const countdown = document.getElementById("countdown");
  const titleEl = document.getElementById("rotating-title");
  const audioPlayer = document.querySelector(".simple-audio-player");
  const giftHeading = document.getElementById("gift-heading");
  const birthdayDiv = document.getElementById("birthday-message");
  const phraseDisplay = document.getElementById("phrase-display");
  const phraseText = document.getElementById("phrase-text");

  const passwordPopup = document.getElementById("password-popup");
  const passwordInput = document.getElementById("password-input");
  const submitBtn = document.getElementById("submit-password");
  const errorMsg = document.getElementById("error-message");
  const closePasswordPopup = document.getElementById("close-password-popup");

  const unlockPopup = document.getElementById("unlock-popup");
  const unlockInput = document.getElementById("unlock-input");
  const unlockSubmit = document.getElementById("submit-unlock");
  const unlockError = document.getElementById("unlock-error");
  const closeUnlockPopup = document.getElementById("close-unlock-popup");

  const giftPopup = document.getElementById("gift-popup");
  const popupText = document.getElementById("popup-text");
  const closeGiftPopup = document.getElementById("close-popup");

  // ========== Time Helpers ==========
  const now = new Date();
  const currentDate = now.toISOString().split("T")[0];
  const today = new Date();
  const isMay31 = today.getMonth() === 4 && today.getDate() === 31;
  const isAfterMidnight = today.getHours() >= 0;
  const isAfter9AM = today.getHours() >= 9;

  // ========== Birthday Wishes Message ==========
  const birthdayMessage = `Happy Birthday, Oluwakemi.
  
From the moment Allah destined our paths to cross, I knew you were special. Today, I raise my hands in du’a that Allah (SWT) showers you with joy, barakah, and endless serenity.

You are not just my peace, you are my purpose. I pray you're always surrounded by people who uplift your soul and remind you of your worth.

May He ease your worries, fill your heart with sakinah (tranquility), and write beautiful stories for you this new year.

I love you more than words can hold. More than code can express. More than promises can declare.

With you, I've learned patience, gratitude, and what it truly means to care deeply.

Never doubt how much I believe in you. You’re destined for greatness.

Barakallahu fii umrik, my love.
May this year be your softest, strongest, and most beautiful yet.`.trim();

  // ========== Countdown / Birthday Trigger ==========
  const targetDate = new Date("2025-05-31T00:00:00+01:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff <= 0 && isMay31 && isAfterMidnight) {
      if (titleEl) titleEl.textContent = "The moment is here, my love.";
      if (countdown) countdown.style.display = "none";
      if (audioPlayer) audioPlayer.style.display = "none";
      if (birthdayDiv) {
        birthdayDiv.classList.remove("hidden");
        birthdayDiv.textContent = birthdayMessage;
      }
    } else {
      const d = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
      const h = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const m = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
      const s = Math.max(0, Math.floor((diff % (1000 * 60)) / 1000));
      document.getElementById("days").textContent = String(d).padStart(2, "0");
      document.getElementById("hours").textContent = String(h).padStart(2, "0");
      document.getElementById("minutes").textContent = String(m).padStart(2, "0");
      document.getElementById("seconds").textContent = String(s).padStart(2, "0");
    }
  }, 1000);

  // ========== Rotating Titles ==========
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
  if (!isMay31) {
    setInterval(() => {
      titleEl.style.opacity = 0;
      setTimeout(() => {
        titleEl.textContent = messages[msgIndex];
        titleEl.style.opacity = 1;
        msgIndex = (msgIndex + 1) % messages.length;
      }, 300);
    }, 5000);
  }

  // ========== Music Playback ==========
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

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  }

  progress.addEventListener("mousedown", e => e.preventDefault());

  audio.addEventListener("ended", () => {
    isPlaying = false;
    playIcon.innerHTML = "&#9658;";
    passwordPopup.classList.remove("hidden");
    passwordInput.value = "";
    errorMsg.classList.add("hidden");
  });

  // ========== Password Popup for Phrases ==========
  const PASSWORD = "TrustMeBabe";
  const phraseDates = [12, 14, 16, 17, 19, 20, 21, 23, 24, 29];
  const phrases = ["Oluwakemi", "Loving", "You", "Brings", "Me", "Peace", "Joy", "Strength", "And", "Purpose"];
  const currentDay = new Date().getDate();

  submitBtn.addEventListener("click", () => {
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

  closePasswordPopup.addEventListener("click", () => {
    passwordPopup.classList.add("hidden");
  });

  // ========== Gift Click Logic ==========
  const giftLines = [
    "A queen like you deserves to wait for a royal reveal. Patience, my love.",
    "Hmm… you too dey rush. Let’s unwrap it together on the 31st.",
    "Chill babygirl… we still dey cook your surprise. Come back on the 31st."
  ];
  let popupIndex = 0;

  giftHeading.addEventListener("click", () => {
    if (isMay31 && today.getHours() >= 9) {
      unlockPopup.classList.remove("hidden");
      unlockInput.value = "";
      unlockError.classList.add("hidden");
    } else if (isMay31 && today.getHours() < 9) {
      popupText.textContent = "Come back by 9am to claim your gift my love.";
      giftPopup.classList.remove("hidden");
      setTimeout(() => giftPopup.classList.add("hidden"), 5000);
    } else {
      popupText.textContent = giftLines[popupIndex % giftLines.length];
      popupIndex++;
      giftPopup.classList.remove("hidden");
      setTimeout(() => giftPopup.classList.add("hidden"), 5000);
    }
  });

  closeGiftPopup.addEventListener("click", () => giftPopup.classList.add("hidden"));
  closeUnlockPopup.addEventListener("click", () => unlockPopup.classList.add("hidden"));

  unlockSubmit.addEventListener("click", () => {
    const value = unlockInput.value.trim();
    const fullPhrase = phrases.join(" ");
    if (value === fullPhrase) {
      window.location.href = "gift.html";
    } else {
      unlockError.textContent = "Incorrect phrase, my love.";
      unlockError.classList.remove("hidden");
    }
  });
});
