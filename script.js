document.addEventListener("DOMContentLoaded", function () {
  // ==== Welcome Screen ====
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
    const selected = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    welcomeMessage.textContent = selected;
    setTimeout(() => {
      welcomeScreen.style.opacity = 0;
      setTimeout(() => {
        welcomeScreen.style.display = "none";
      }, 500);
    }, 8000);
  }

  // ==== Time Check ====
  const now = new Date();
  const isMay31 = now.getMonth() === 4 && now.getDate() === 31;
  const isAfterMidnight = now.getHours() >= 0;
  const isAfter9am = now.getHours() >= 9;

  // ==== Rotating Title ====
  const rotatingTitle = document.getElementById("rotating-title");
  const countdown = document.getElementById("countdown");
  const birthdayMessageEl = document.getElementById("birthday-message");
  const audioPlayer = document.querySelector(".simple-audio-player");
  const cakeWrapper = document.querySelector(".cake-wrapper");

  if (isMay31 && isAfterMidnight) {
    if (rotatingTitle) rotatingTitle.textContent = "The moment is here, my love.";
    if (countdown) countdown.style.display = "none";
    if (birthdayMessageEl) {
      birthdayMessageEl.classList.remove("hidden");
      birthdayMessageEl.innerHTML = `
        <p><strong>Happy Birthday, Oluwakemi.</strong></p>
        <p>From the moment Allah destined our paths to cross, I knew you were special. Today, I raise my hands in du’a that Allah (SWT) showers you with joy, barakah, and endless serenity.</p>
        <p>You are not just my peace, you are my purpose. I pray you're always surrounded by people who uplift your soul and remind you of your worth.</p>
        <p>May He ease your worries, fill your heart with sakinah (tranquility), and write beautiful stories for you this new year.</p>
        <p>I love you more than words can hold. More than code can express. More than promises can declare.</p>
        <p>With you, I've learned patience, gratitude, and what it truly means to care deeply.</p>
        <p>Never doubt how much I believe in you. You’re destined for greatness.</p>
        <p><strong>Barakallahu fii umrik, my love.</strong><br>May this year be your softest, strongest, and most beautiful yet.</p>
      `;
    }
    if (audioPlayer) audioPlayer.style.display = "none";
    if (cakeWrapper) cakeWrapper.style.display = "none";
  } else {
    const rotatingMessages = [
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
    let index = 0;
    setInterval(() => {
      rotatingTitle.style.opacity = 0;
      setTimeout(() => {
        rotatingTitle.textContent = rotatingMessages[index];
        rotatingTitle.style.opacity = 1;
        index = (index + 1) % rotatingMessages.length;
      }, 300);
    }, 5000);
  }

  // ==== Countdown ====
  const targetDate = new Date("2025-05-31T00:00:00+01:00").getTime();
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

  // ==== Audio Logic ====
  const audio = document.getElementById("audio");
  const playBtn = document.getElementById("play-button");
  const playIcon = document.getElementById("play-icon");
  const progress = document.getElementById("progress-bar");
  const currentTimeEl = document.getElementById("current-time");
  const durationEl = document.getElementById("duration");

  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const randomLetter = letters[Math.floor(Math.random() * letters.length)];
  audio.src = `audio/${randomLetter}.mp3`;

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
    document.getElementById("password-input").value = "";
    document.getElementById("error-message").classList.add("hidden");
  });

  progress.addEventListener("mousedown", e => e.preventDefault());

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  }

  // ==== Gift Logic ====
  const giftHeading = document.getElementById("gift-heading");
  const giftPopup = document.getElementById("gift-popup");
  const popupText = document.getElementById("popup-text");

  const giftLines = [
    "A queen like you deserves to wait for a royal reveal. Patience, my love.",
    "Hmm… you too dey rush. Let’s unwrap it together on the 31st.",
    "Chill babygirl… we still dey cook your surprise. Come back on the 31st."
  ];
  let giftIndex = 0;

  giftHeading.addEventListener("click", () => {
    if (!isMay31) {
      popupText.textContent = giftLines[giftIndex % giftLines.length];
      giftIndex++;
    } else if (now.getHours() < 9) {
      popupText.textContent = "Come back by 9am to claim your gift my love.";
    } else {
      document.getElementById("unlock-popup").classList.remove("hidden");
      return;
    }
    giftPopup.classList.remove("hidden");
    setTimeout(() => giftPopup.classList.add("hidden"), 5000);
  });

  document.getElementById("close-popup").addEventListener("click", () => {
    giftPopup.classList.add("hidden");
  });

  // ==== Password Phrase Unlock ====
  const PASSWORD = "TrustMeBabe";
  const phraseDates = [12, 14, 16, 17, 19, 20, 21, 23, 24, 29];
  const phrases = ["Oluwakemi", "Loving", "You", "Brings", "Me", "Peace", "Joy", "Strength", "And", "Purpose"];
  const currentDay = new Date().getDate();

  document.getElementById("submit-password").addEventListener("click", () => {
    const input = document.getElementById("password-input").value.trim();
    const errorBox = document.getElementById("error-message");
    if (input === PASSWORD) {
      const text = phraseDates.includes(currentDay)
        ? phrases[phraseDates.indexOf(currentDay)]
        : "Sorry my love, no phrase today. Check back tomorrow.";
      document.getElementById("phrase-text").textContent = text;
      document.getElementById("phrase-display").classList.remove("hidden");
      document.getElementById("password-popup").classList.add("hidden");
    } else {
      errorBox.textContent = "You entered the wrong password my love.";
      errorBox.classList.remove("hidden");
    }
  });

  document.getElementById("close-password-popup").addEventListener("click", () => {
    document.getElementById("password-popup").classList.add("hidden");
  });

  // ==== Gift Phrase Unlock ====
  document.getElementById("submit-unlock").addEventListener("click", () => {
    const phraseInput = document.getElementById("unlock-phrase-input").value.trim().toLowerCase();
    const unlockError = document.getElementById("unlock-error");
    const correctPhrase = "oluwakemi loving you brings me peace joy strength and purpose";
    if (phraseInput === correctPhrase) {
      window.location.href = "gift.html";
    } else {
      unlockError.textContent = "You entered the wrong phrase my love.";
      unlockError.classList.remove("hidden");
    }a
  });

  document.getElementById("close-unlock-popup").addEventListener("click", () => {
    document.getElementById("unlock-popup").classList.add("hidden");
  });
});
