/* ============================================================
   BIRTHDAY WEBSITE — MAIN JS
   All features: mouse glow, hearts, confetti, modal, countdown,
   gallery, lightbox, flowers, vinyl, reasons, footer
   ============================================================ */

// ══════════════════════════════════════════════════════════════
//  ★  CONFIGURATION — EDIT THESE
// ══════════════════════════════════════════════════════════════
const CONFIG = {
  // Her name shown in hero / song title
  name: "Mikita",

  // Your name in the footer
  yourName: "Jude",

  // 🎂 Set her birthday: month (1-12) and day
  birthdayMonth: 5,   // May
  birthdayDay:   10,

  // 📸 Photos: src = path inside images/ folder, caption = memory text
  photos: [
    { src: "images/WhatsApp Unknown 2026-05-10 at 12.41.01 AM/WhatsApp Image 2026-05-10 at 12.40.49 AM (1).jpeg", caption: "Birthday night smile" },
    { src: "images/WhatsApp Unknown 2026-05-10 at 12.41.01 AM/WhatsApp Image 2026-05-10 at 12.40.49 AM (2).jpeg", caption: "Late night laughter" },
    { src: "images/WhatsApp Unknown 2026-05-10 at 12.41.01 AM/WhatsApp Image 2026-05-10 at 12.40.49 AM.jpeg", caption: "Our favorite moment" },
    { src: "images/WhatsApp Unknown 2026-05-10 at 12.41.01 AM/WhatsApp Image 2026-05-10 at 12.40.50 AM (1).jpeg", caption: "Happy memories" },
    { src: "images/WhatsApp Unknown 2026-05-10 at 12.41.01 AM/WhatsApp Image 2026-05-10 at 12.40.50 AM.jpeg", caption: "Sweet celebration" },
    { src: "images/WhatsApp Unknown 2026-05-10 at 12.41.01 AM/WhatsApp Image 2026-05-10 at 12.40.51 AM (1).jpeg", caption: "Joyful togetherness" },
    { src: "images/WhatsApp Unknown 2026-05-10 at 12.41.01 AM/WhatsApp Image 2026-05-10 at 12.40.51 AM.jpeg", caption: "Golden hour mood" },
    { src: "images/WhatsApp Image 2026-04-08 at 7.59.16 PM (2).jpeg", caption: "Cherished memories" },
    { src: "images/WhatsApp Image 2026-04-08 at 7.59.16 PM (3).jpeg", caption: "Heartfelt moments" },
    { src: "images/WhatsApp Image 2026-04-08 at 7.59.16 PM.jpeg", caption: "Beautiful day" },
    { src: "images/WhatsApp Image 2026-05-09 at 6.44.59 PM.jpeg", caption: "Today's joy" },
    { src: "images/WhatsApp Image 2026-05-09 at 6.45.00 PM.jpeg", caption: "Birthday eve" },
    { src: "images/WhatsApp Image 2026-05-09 at 6.48.47 PM.jpeg", caption: "Last moment before tomorrow" },
    { src: "images/WhatsApp Image 2026-04-08 at 7.59.16 PM (1).jpeg", caption: "Golden memory" },
  ],

  // 💐 Virtual flowers
  flowers: [
    { emoji: "🌹", name: "Rose",      msg: "For the late night calls that mean everything" },
    { emoji: "🌷", name: "Tulip",     msg: "For making me laugh until I cry" },
    { emoji: "🌻", name: "Sunflower", msg: "For being my sunshine on cloudy days" },
    { emoji: "💐", name: "Peony",     msg: "For forgiving me when I mess up" },
    { emoji: "🌸", name: "Blossom",   msg: "For the adventures we took together" },
    { emoji: "💜", name: "Lavender",  msg: "For the secrets only we share" },
    { emoji: "🌼", name: "Daisy",     msg: "For celebrating my wins like they're yours" },
  ],

  // ✨ Reasons you're amazing
  reasons: [
    { icon: "😂", label: "You make me laugh", text: "You always know exactly how to make me laugh — even on my worst days." },
    { icon: "💬", label: "You tell the truth", text: "You tell me the truth even when it's hard to hear. That takes real love." },
    { icon: "🧠", label: "You remember everything", text: "You remember the small things about me that I forget about myself." },
    { icon: "🕊️", label: "You forgive me", text: "You forgive me every single time I mess up, without keeping score." },
    { icon: "😢", label: "My safe place", text: "You're the safest place I have to cry, vent, or just be quiet in." },
    { icon: "🏆", label: "You celebrate me", text: "You celebrate my wins like they're your own. That's rare and beautiful." },
  ],

  // � Friendship timeline
  timeline: [
    { date: "2019", title: "First coffee together", text: "You turned a random afternoon into the beginning of something unforgettable." },
    { date: "2020", title: "That rainy day adventure", text: "We danced in the rain, laughed until we were soaked, and still smiled all the way home." },
    { date: "2021", title: "Our road trip", text: "Every song, every snack stop, and every silly moment made the trip ours." },
    { date: "2022", title: "Late-night secrets", text: "Your heart listening to mine made the quietest nights feel the most alive." },
    { date: "2023", title: "Birthday surprise", text: "This website is just one more small surprise for how big you are to me." },
  ],

  // 🎫 Scratch card messages
  scratchCards: [
    "You shine brighter than any gold star ever could.",
    "Thank you for being the kindest, funniest, most wonderful person.",
    "Today is your day — may it be as warm and joyful as your smile.",
  ],

  // 🌟 Wishing stars
  starWishes: [
    "A wish for more laughter together.",
    "A wish for dreams coming true.",
    "A wish that today feels extra magical.",
    "A wish that you always feel loved.",
    "A wish for all the joy you give to come back to you.",
  ],


  // �💬 Floating heart messages
  heartMessages: [
    "You're my sunshine ☀️",
    "Bestie forever 💛",
    "I miss you already",
    "You mean the world",
    "So grateful for you",
    "My person 🤍",
    "Forever & always",
    "Laughing with you 😂",
    "My favourite human",
    "You're irreplaceable",
  ],
};

// ══════════════════════════════════════════════════════════════
//  1. MOUSE GLOW
// ══════════════════════════════════════════════════════════════
const glow = document.getElementById("mouseGlow");
let glowX = -200, glowY = -200;

document.addEventListener("mousemove", (e) => {
  glowX = e.clientX; glowY = e.clientY;
  glow.style.left = glowX + "px";
  glow.style.top  = glowY + "px";
  glow.classList.remove("hover-btn");

  const hovered = document.elementFromPoint(glowX, glowY);
  if (hovered) {
    if (hovered.closest(".btn-gold, button")) glow.classList.add("hover-btn");
    else if (hovered.closest(".gallery-item")) glow.classList.add("hover-btn");
  }
});

document.addEventListener("click", () => {
  glow.classList.add("burst");
  setTimeout(() => glow.classList.remove("burst"), 400);
});

// Touch fallback for mobile
document.addEventListener("touchmove", (e) => {
  const t = e.touches[0];
  glow.style.left = t.clientX + "px";
  glow.style.top  = t.clientY + "px";
}, { passive: true });


// ══════════════════════════════════════════════════════════════
//  2. SPARKLE BACKGROUND (Hero)
// ══════════════════════════════════════════════════════════════
(function createSparkles() {
  const bg = document.getElementById("sparkleBg");
  if (!bg) return;
  for (let i = 0; i < 50; i++) {
    const dot = document.createElement("div");
    dot.className = "sparkle-dot";
    const size = Math.random() * 4 + 2;
    dot.style.cssText = `
      width: ${size}px; height: ${size}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 3 + 2}s;
      animation-delay: ${Math.random() * 4}s;
    `;
    bg.appendChild(dot);
  }
})();


// ══════════════════════════════════════════════════════════════
//  3. FLOATING HEARTS
// ══════════════════════════════════════════════════════════════
const heartContainer = document.getElementById("heartsContainer");
const heartEmojis = ["❤️", "🧡", "💛", "🤍", "💖", "💗"];

function spawnHeart() {
  const heart = document.createElement("div");
  heart.className = "float-heart";
  const emoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  const msg = CONFIG.heartMessages[Math.floor(Math.random() * CONFIG.heartMessages.length)];
  const size = Math.random() * 1.2 + 0.8;
  const duration = Math.random() * 5 + 6;
  const opacity = Math.random() * 0.6 + 0.4;
  heart.style.cssText = `
    left: ${Math.random() * 95}%;
    font-size: ${size}rem;
    opacity: ${opacity};
    animation-duration: ${duration}s;
  `;
  heart.innerHTML = `${emoji}<div class="heart-tooltip">${msg}</div>`;

  // Mobile tap
  heart.addEventListener("click", () => {
    heart.classList.toggle("tapped");
    setTimeout(() => heart.classList.remove("tapped"), 2000);
  });

  heartContainer.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(spawnHeart, 1500);
// Spawn a few right away
for (let i = 0; i < 5; i++) setTimeout(spawnHeart, i * 400);


// ══════════════════════════════════════════════════════════════
//  4. CONFETTI
// ══════════════════════════════════════════════════════════════
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
let confettiPieces = [];
let confettiAnimating = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const confettiColors = ["#f9e07a", "#d4a017", "#ffffff", "#fdf0c0", "#fff8dc", "#ffeaa0"];

function launchConfetti(intense = false) {
  const count = intense ? 200 : 130;
  for (let i = 0; i < count; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: -10,
      w: Math.random() * 10 + 5,
      h: Math.random() * 6 + 4,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      speed: Math.random() * 3 + 2,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.2,
      sway: (Math.random() - 0.5) * 2,
      swayCounter: Math.random() * Math.PI * 2,
    });
  }
  if (!confettiAnimating) animateConfetti();
}

function animateConfetti() {
  confettiAnimating = true;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiPieces = confettiPieces.filter(p => p.y < canvas.height + 20);

  for (const p of confettiPieces) {
    p.y += p.speed;
    p.swayCounter += 0.04;
    p.x += Math.sin(p.swayCounter) * p.sway;
    p.angle += p.spin;

    ctx.save();
    ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
    ctx.rotate(p.angle);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    ctx.restore();
  }

  if (confettiPieces.length > 0) {
    requestAnimationFrame(animateConfetti);
  } else {
    confettiAnimating = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

// Auto-launch on load
window.addEventListener("load", () => setTimeout(() => launchConfetti(), 600));


// ══════════════════════════════════════════════════════════════
//  5. BIRTHDAY MODAL
// ══════════════════════════════════════════════════════════════
function closeModal() {
  document.getElementById("birthdayModal").classList.add("hidden");
}
setTimeout(() => {
  const m = document.getElementById("birthdayModal");
  if (m) m.classList.remove("hidden");
}, 3000);
document.getElementById("birthdayModal").classList.add("hidden");


// ══════════════════════════════════════════════════════════════
//  6. NAVBAR SCROLL EFFECT
// ══════════════════════════════════════════════════════════════
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 40);
});


// ══════════════════════════════════════════════════════════════
//  7. HERO DATE BADGE
// ══════════════════════════════════════════════════════════════
(function setHeroDate() {
  const badge = document.getElementById("heroDate");
  if (!badge) return;
  const opts = { year: "numeric", month: "long", day: "numeric" };
  badge.textContent = new Date().toLocaleDateString(undefined, opts);
})();


// ══════════════════════════════════════════════════════════════
//  8. COUNTDOWN TIMER
// ══════════════════════════════════════════════════════════════
function updateCountdown() {
  const now = new Date();
  const thisYear = now.getFullYear();
  let bday = new Date(thisYear, CONFIG.birthdayMonth - 1, CONFIG.birthdayDay);
  if (bday < now) bday = new Date(thisYear + 1, CONFIG.birthdayMonth - 1, CONFIG.birthdayDay);

  const isToday = (now.getMonth() === CONFIG.birthdayMonth - 1 && now.getDate() === CONFIG.birthdayDay);
  const boxes = document.getElementById("countdownBoxes");
  const label = document.getElementById("countdownLabel");

  if (isToday) {
    label.innerHTML = "";
    boxes.innerHTML = `<div class="birthday-today-msg">🎂 IT'S TODAY! HAPPY BIRTHDAY! 🎉</div>`;
    return;
  }

  const diff = bday - now;
  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs  = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("cDays").textContent  = String(days).padStart(2, "0");
  document.getElementById("cHours").textContent = String(hours).padStart(2, "0");
  document.getElementById("cMins").textContent  = String(mins).padStart(2, "0");
  document.getElementById("cSecs").textContent  = String(secs).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);


// ══════════════════════════════════════════════════════════════
//  9. PHOTO GALLERY + LIGHTBOX
// ══════════════════════════════════════════════════════════════
let currentPhoto = 0;
const photos = CONFIG.photos;

(function buildGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  photos.forEach((p, i) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.onclick = () => openLightbox(i);

    const isVideo = p.src.endsWith(".webm") || p.src.endsWith(".mp4") || p.src.endsWith(".mov");
    let media;
    if (isVideo) {
      media = document.createElement("video");
      media.src = p.src;
      media.preload = "metadata";
    } else {
      media = document.createElement("img");
      media.src = p.src;
      media.alt = p.caption;
    }

    media.onerror = function() {
      this.style.display = "none";
      const ph = document.createElement("div");
      ph.className = "gallery-placeholder";
      ph.innerHTML = `<span>📷</span><p>Add photo ${i + 1}</p>`;
      item.appendChild(ph);
    };

    const cap = document.createElement("div");
    cap.className = "gallery-caption-badge";
    cap.textContent = p.caption;

    const num = document.createElement("div");
    num.className = "photo-num";
    num.textContent = `${i + 1}/${photos.length}`;

    item.appendChild(media);
    item.appendChild(cap);
    item.appendChild(num);
    grid.appendChild(item);
  });
})();

function openLightbox(index) {
  currentPhoto = index;
  const lb = document.getElementById("lightbox");
  const p = photos[index];
  const lbImg = document.getElementById("lbImg");
  const lbVideo = document.getElementById("lbVideo");
  
  const isVideo = p.src.endsWith(".webm") || p.src.endsWith(".mp4") || p.src.endsWith(".mov");
  if (isVideo) {
    lbImg.style.display = "none";
    lbVideo.src = p.src;
    lbVideo.style.display = "block";
  } else {
    lbVideo.style.display = "none";
    lbImg.src = p.src;
    lbImg.style.display = "block";
  }
  
  document.getElementById("lbCaption").textContent = p.caption;
  lb.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.add("hidden");
  document.body.style.overflow = "";
}

function lightboxNav(dir) {
  currentPhoto = (currentPhoto + dir + photos.length) % photos.length;
  openLightbox(currentPhoto);
}

document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target === document.getElementById("lightbox")) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (!document.getElementById("lightbox").classList.contains("hidden")) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lightboxNav(-1);
    if (e.key === "ArrowRight") lightboxNav(1);
  }
});


// ══════════════════════════════════════════════════════════════
//  10. VIRTUAL FLOWERS
// ══════════════════════════════════════════════════════════════
let pickedFlowers = 0;
const totalFlowers = CONFIG.flowers.length;

(function buildFlowers() {
  const garden = document.getElementById("flowersGarden");
  if (!garden) return;

  CONFIG.flowers.forEach((f, i) => {
    const item = document.createElement("div");
    item.className = "flower-item";
    item.id = `flower-${i}`;

    const icon = document.createElement("div");
    icon.className = "flower-icon";
    icon.textContent = f.emoji;

    const label = document.createElement("div");
    label.className = "flower-label";
    label.textContent = f.name;

    const popup = document.createElement("div");
    popup.className = "flower-msg-popup";
    popup.id = `flower-popup-${i}`;
    popup.textContent = f.msg;

    item.appendChild(popup);
    item.appendChild(icon);
    item.appendChild(label);

    item.addEventListener("click", () => pickFlower(i, item, popup));
    garden.appendChild(item);
  });
})();

function pickFlower(index, item, popup) {
  if (item.classList.contains("picked")) return;

  item.classList.add("picked");
  const icon = item.querySelector(".flower-icon");
  icon.classList.add("flower-pluck");

  popup.classList.add("show");
  setTimeout(() => popup.classList.remove("show"), 3000);

  pickedFlowers++;
  updateFlowerCounter();

  if (pickedFlowers === totalFlowers) {
    setTimeout(() => {
      document.getElementById("bouquetSurprise").classList.remove("hidden");
      document.getElementById("regrowBtn").style.display = "inline-block";
      launchConfetti(true);
    }, 800);
  }
}

function updateFlowerCounter() {
  const el = document.getElementById("flowerCount");
  el.innerHTML = `You've picked <strong>${pickedFlowers}</strong> out of <strong>${totalFlowers}</strong> flowers`;
}

function regrowFlowers() {
  pickedFlowers = 0;
  updateFlowerCounter();
  document.getElementById("bouquetSurprise").classList.add("hidden");
  document.getElementById("regrowBtn").style.display = "none";

  CONFIG.flowers.forEach((_, i) => {
    const item = document.getElementById(`flower-${i}`);
    if (item) {
      item.classList.remove("picked");
      const icon = item.querySelector(".flower-icon");
      icon.classList.remove("flower-pluck");
    }
  });
}


// ══════════════════════════════════════════════════════════════
//  11. VINYL / MUSIC PLAYER
// ══════════════════════════════════════════════════════════════
let playing = false;
const audio = document.getElementById("audioPlayer");
const vinyl = document.getElementById("vinyl");
const arm = document.getElementById("vinylArm");
const playBtn = document.getElementById("playBtn");

if (audio) {
  audio.volume = 0.7;
  audio.muted = false;
  audio.addEventListener("error", () => {
    const err = audio.error;
    console.error("Audio load error", err);
    alert("Audio failed to load. Please check the MP3 file path and file name.");
  });
  audio.addEventListener("canplay", () => {
    console.log("Audio ready to play");
  });
}

function setVolume(val) {
  if (audio) audio.volume = parseFloat(val);
}

function togglePlay() {
  if (!audio || !vinyl || !arm || !playBtn) {
    console.error("Music player elements missing", { audio, vinyl, arm, playBtn });
    return;
  }

  playing = !playing;
  if (playing) {
    vinyl.classList.add("spinning");
    arm.classList.add("playing");
    playBtn.textContent = "⏸ Pause";
    audio.play().catch((error) => {
      console.error("Play error:", error);
      alert("Could not play audio: " + (error && error.message ? error.message : "unknown error"));
    });
  } else {
    vinyl.classList.remove("spinning");
    arm.classList.remove("playing");
    playBtn.textContent = "▶ Play";
    audio.pause();
  }
}

// ══════════════════════════════════════════════════════════════
//  12. REASONS YOU'RE AMAZING — SCROLL REVEAL
// ══════════════════════════════════════════════════════════════
(function buildReasons() {
  const grid = document.getElementById("reasonsGrid");
  if (!grid) return;

  CONFIG.reasons.forEach((r, i) => {
    const card = document.createElement("div");
    card.className = "reason-card";
    card.style.transitionDelay = `${i * 100}ms`;
    card.innerHTML = `
      <span class="reason-icon">${r.icon}</span>
      <h4>"${r.label}"</h4>
      <p>${r.text}</p>
    `;
    grid.appendChild(card);
  });

  // Scroll observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  }, { threshold: 0.15 });

  grid.querySelectorAll(".reason-card").forEach((c) => observer.observe(c));
})();

(function buildExtraFeatures() {
  const loveBtn = document.getElementById("openLetterBtn");
  const loveMessage = document.getElementById("loveLetterMessage");
  if (loveBtn && loveMessage) {
    loveBtn.addEventListener("click", () => {
      loveMessage.classList.toggle("hidden");
      loveBtn.textContent = loveMessage.classList.contains("hidden")
        ? "Open the Love Letter 💌"
        : "Close the Letter 💌";
    });
  }

  const cakeContainer = document.getElementById("cakeContainer");
  const cakeMessage = document.getElementById("cakeMessage");
  const candleCount = 6;
  let blownCount = 0;
  if (cakeContainer) {
    const candleRow = document.createElement("div");
    candleRow.className = "candle-row";
    for (let i = 0; i < candleCount; i += 1) {
      const candle = document.createElement("div");
      candle.className = "candle";
      candle.addEventListener("click", () => {
        if (candle.classList.contains("burnt")) return;
        candle.classList.add("burnt");
        const smoke = document.createElement("div");
        smoke.className = "candle-smoke";
        candle.appendChild(smoke);
        blownCount += 1;
        cakeMessage.textContent = blownCount === candleCount
          ? "Wish made! You're amazing 💫"
          : `Only ${candleCount - blownCount} candle${candleCount - blownCount === 1 ? "" : "s"} left!`;
        if (blownCount === candleCount) launchConfetti(true);
        setTimeout(() => smoke.remove(), 1400);
      });
      candleRow.appendChild(candle);
    }
    cakeContainer.appendChild(candleRow);
    const layerTop = document.createElement("div");
    layerTop.className = "cake-layer";
    const icing = document.createElement("div");
    icing.className = "cake-icing";
    layerTop.appendChild(icing);
    const layerBottom = document.createElement("div");
    layerBottom.className = "cake-layer";
    cakeContainer.appendChild(layerTop);
    cakeContainer.appendChild(layerBottom);
  }

  const timelineList = document.getElementById("timelineList");
  if (timelineList) {
    CONFIG.timeline.forEach((event) => {
      const item = document.createElement("div");
      item.className = "timeline-item";
      item.innerHTML = `
        <time>${event.date}</time>
        <h4>${event.title}</h4>
        <p>${event.text}</p>
      `;
      timelineList.appendChild(item);
    });
  }

  const scratchGrid = document.getElementById("scratchCardsGrid");
  if (scratchGrid) {
    CONFIG.scratchCards.forEach((message) => {
      const card = document.createElement("div");
      card.className = "scratch-card";
      card.innerHTML = `
        <div class="scratch-message">${message}</div>
        <canvas class="scratch-overlay"></canvas>
        <div class="scratch-hint">Scratch to reveal</div>
      `;
      scratchGrid.appendChild(card);

      const canvas = card.querySelector("canvas");
      const ctx = canvas.getContext("2d");
      let isDrawing = false;

      function resizeCanvas() {
        canvas.width = card.offsetWidth;
        canvas.height = card.offsetHeight;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#d4a017";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "destination-out";
      }

      function drawPoint(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 18, 0, Math.PI * 2);
        ctx.fill();
      }

      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      canvas.addEventListener("pointerdown", (event) => {
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        drawPoint(event.clientX - rect.left, event.clientY - rect.top);
        card.querySelector(".scratch-hint").style.opacity = "0";
      });
      canvas.addEventListener("pointermove", (event) => {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        drawPoint(event.clientX - rect.left, event.clientY - rect.top);
      });
      canvas.addEventListener("pointerup", () => { isDrawing = false; });
      canvas.addEventListener("pointerleave", () => { isDrawing = false; });
    });
  }

  const starField = document.getElementById("starField");
  const starCount = document.getElementById("starWishCount");
  let wishesMade = 0;
  if (starField && starCount) {
    CONFIG.starWishes.forEach((wish) => {
      const star = document.createElement("button");
      star.type = "button";
      star.className = "star-item";
      star.innerHTML = `
        <div class="star-icon">⭐</div>
        <span>${wish}</span>
      `;
      star.addEventListener("click", () => {
        if (star.classList.contains("active")) return;
        star.classList.add("active");
        wishesMade += 1;
        starCount.textContent = `Wishes made: ${wishesMade}`;
      });
      starField.appendChild(star);
    });
  }
})();


// ══════════════════════════════════════════════════════════════
//  13. FOOTER
// ══════════════════════════════════════════════════════════════
(function setFooter() {
  const dateEl = document.getElementById("footerDate");
  if (dateEl) {
    const opts = { year: "numeric", month: "long", day: "numeric" };
    dateEl.textContent = new Date().toLocaleDateString(undefined, opts);
  }

  // Inject name placeholders
  document.querySelectorAll("*").forEach((el) => {
    if (el.children.length === 0 && el.textContent.includes("[Her Name]")) {
      el.textContent = el.textContent.replace(/\[Her Name\]/g, CONFIG.name);
    }
    if (el.children.length === 0 && el.textContent.includes("[Your Name]")) {
      el.textContent = el.textContent.replace(/\[Your Name\]/g, CONFIG.yourName);
    }
  });

  // Also fix attributes and innerHTML for hero title
  document.querySelectorAll(".hero-name, .song-title").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\[Her Name\]/g, CONFIG.name);
  });
})();


// ══════════════════════════════════════════════════════════════
//  14. SMOOTH SCROLLING HELPER
// ══════════════════════════════════════════════════════════════
function smoothScrollTo(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Attach to all nav links
document.querySelectorAll(".nav-links a").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScrollTo(a.getAttribute("href"));
  });
});


// ══════════════════════════════════════════════════════════════
//  15. BONUS: TYPEWRITER EFFECT on hero sub-heading
// ══════════════════════════════════════════════════════════════
(function typewriterEffect() {
  const el = document.querySelector(".hero-sub");
  if (!el) return;
  const text = el.textContent;
  el.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(type, 60);
    }
  }
  setTimeout(type, 1200);
})();


// ══════════════════════════════════════════════════════════════
//  16. BONUS: PARALLAX on hero title
// ══════════════════════════════════════════════════════════════
window.addEventListener("scroll", () => {
  const hero = document.getElementById("hero");
  const content = hero.querySelector(".hero-content");
  if (content) {
    const offset = window.scrollY * 0.3;
    content.style.transform = `translateY(${offset}px)`;
    content.style.opacity = 1 - window.scrollY / 600;
  }
});


// ══════════════════════════════════════════════════════════════
//  17. BONUS: SCROLL PROGRESS BAR
// ══════════════════════════════════════════════════════════════
(function createProgressBar() {
  const bar = document.createElement("div");
  bar.style.cssText = `
    position: fixed; top: 0; left: 0; height: 3px; width: 0%;
    background: linear-gradient(to right, #f9e07a, #d4a017);
    z-index: 9999; pointer-events: none; transition: width 0.1s;
  `;
  document.body.appendChild(bar);

  window.addEventListener("scroll", () => {
    const total = document.body.scrollHeight - window.innerHeight;
    bar.style.width = ((window.scrollY / total) * 100) + "%";
  });
})();


// ══════════════════════════════════════════════════════════════
//  18. BONUS: GOLDEN STAR CURSOR TRAIL (extra magic)
// ══════════════════════════════════════════════════════════════
(function starTrail() {
  const stars = ["✨", "⭐", "💫", "🌟"];
  document.addEventListener("mousemove", (e) => {
    if (Math.random() > 0.85) {
      const s = document.createElement("div");
      s.textContent = stars[Math.floor(Math.random() * stars.length)];
      s.style.cssText = `
        position: fixed;
        left: ${e.clientX - 8}px;
        top: ${e.clientY - 8}px;
        font-size: ${Math.random() * 0.8 + 0.5}rem;
        pointer-events: none;
        z-index: 9990;
        animation: starFade 0.8s ease forwards;
      `;
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 800);
    }
  });

  // Inject animation
  const style = document.createElement("style");
  style.textContent = `
    @keyframes starFade {
      from { opacity: 1; transform: translateY(0) scale(1); }
      to   { opacity: 0; transform: translateY(-30px) scale(0.5); }
    }
  `;
  document.head.appendChild(style);
})();


console.log(`
🌟 ————————————————————————————————————————
   Birthday Website loaded for ${CONFIG.name}!
   
   To customise:
   → Edit CONFIG at the top of this file
   → Add photos to images/ folder
   → Add your MP3 to audio/ folder and update index.html
   → Change birthdayMonth & birthdayDay for correct countdown
🎂 ————————————————————————————————————————
`);

// ===== ANIMATED BIRTHDAY CAKE =====
let blownCandlesCount = 0;
const totalCandles = 5;

function blowCandle(candleElement) {
  if (candleElement.getAttribute('data-blown') === 'true') return;
  
  candleElement.setAttribute('data-blown', 'true');
  blownCandlesCount++;
  
  // Play blow sound effect (optional - uses Web Audio)
  playBlowSound();
  
  // Check if all candles are blown
  if (blownCandlesCount === totalCandles) {
    allCandlesBlown();
  }
}

function playBlowSound() {
  // Create a gentle "whoosh" sound using Web Audio
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.frequency.value = 200;
    gainNode.gain.value = 0.15;
    
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.5);
    oscillator.stop(audioCtx.currentTime + 0.5);
  } catch(e) {
    console.log("Audio not supported");
  }
}

function allCandlesBlown() {
  const wishMessage = document.getElementById('wishMessage');
  wishMessage.innerHTML = '✨🎂 HAPPY BIRTHDAY MIKITA! YOUR WISH HAS BEEN SENT TO THE STARS! 🎂✨';
  
  // Launch special confetti for the wish
  for(let i = 0; i < 3; i++) {
    setTimeout(() => {
      launchConfetti();
    }, i * 200);
  }
  
  // Show relight button
  document.getElementById('relightCandlesBtn').style.display = 'inline-block';
  document.getElementById('blowCandlesBtn').style.display = 'none';
  
  // Add floating "Wish" text
  for(let i = 0; i < 10; i++) {
    setTimeout(() => {
      createWishStar();
    }, i * 100);
  }
}

function createWishStar() {
  const star = document.createElement('div');
  star.innerHTML = '⭐';
  star.style.position = 'fixed';
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.bottom = '-30px';
  star.style.fontSize = (Math.random() * 20 + 15) + 'px';
  star.style.pointerEvents = 'none';
  star.style.zIndex = '9999';
  star.style.animation = 'floatUp 2s ease-out forwards';
  document.body.appendChild(star);
  
  setTimeout(() => {
    star.remove();
  }, 2000);
}

function relightCandles() {
  const candles = document.querySelectorAll('.candle');
  candles.forEach(candle => {
    candle.setAttribute('data-blown', 'false');
  });
  blownCandlesCount = 0;
  
  const wishMessage = document.getElementById('wishMessage');
  wishMessage.innerHTML = '✨ Make another wish! Blow out the candles again ✨';
  
  document.getElementById('relightCandlesBtn').style.display = 'none';
  document.getElementById('blowCandlesBtn').style.display = 'inline-block';
  
  // Small confetti for relighting
  launchConfetti();
}

function blowOutAllCandles() {
  const candles = document.querySelectorAll('.candle[data-blown="false"]');
  candles.forEach(candle => {
    blowCandle(candle);
  });
}

// Add event listeners when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Add click listeners to individual candles
  const candles = document.querySelectorAll('.candle');
  candles.forEach(candle => {
    candle.addEventListener('click', () => blowCandle(candle));
  });
  
  // Add blow out all button
  const blowBtn = document.getElementById('blowCandlesBtn');
  if (blowBtn) {
    blowBtn.addEventListener('click', blowOutAllCandles);
  }
  
  // Add relight button
  const relightBtn = document.getElementById('relightCandlesBtn');
  if (relightBtn) {
    relightBtn.addEventListener('click', relightCandles);
  }
});