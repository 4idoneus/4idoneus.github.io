console.log("%cHello, Traveler! ⚔️", "color: #a3d9a5; font-family: monospace; font-size: 24px; font-weight: bold;");
console.log("%cLooking for the source code? You are in the right place.", "color: #d0ccd0; font-size: 14px;");

window.onload = function () {
  // --- POPUP LOGIC ---
  const popup = document.getElementById("amateurPopup");
  const popupMessage = document.getElementById("popupMessage");
  const yesBtn = document.getElementById("popupYes");
  const noBtn = document.getElementById("popupNo");
  const closeBtn = document.getElementById("popupClose");
  const popupButtons = document.getElementById("popupButtons");

  const jokes = [
    "Error 404: 'No' not found.",
    "Access Denied. Please contact your system administrator.",
    "Nice try, but 'No' is not a valid input.",
    "Segmentation fault (core dumped).",
    "The operation completed successfully… but did nothing.",
    "Are you sure you’re sure?",
    "Permission denied. Elevate to root to say No."
  ];

  if (popup && yesBtn && noBtn && closeBtn) {
    popup.classList.remove("hidden");
    yesBtn.addEventListener("click", () => popup.classList.add("hidden"));
    noBtn.addEventListener("click", () => {
      const joke = jokes[Math.floor(Math.random() * jokes.length)];
      popupMessage.textContent = joke;
      popupButtons.classList.add("hidden");
      closeBtn.classList.remove("hidden");
    });
    closeBtn.addEventListener("click", () => popup.classList.add("hidden"));
  }

  // --- LAUNDRY LIST (TECHNICAL) ---
  const laundryLists = [
    {
      title: "Current Objectives",
      items: [
        "Build Go Game AI (Phase 1: Model)",
        "Complete 100 Days of Python",
        "Refactor Portfolio to Django"
      ]
    },
    {
      title: "Skill Tree (Learning)",
      items: [
        "Graph Neural Networks (GNN)",
        "Explainable AI (XAI)",
        "Japanese (N3/N2 Target)"
      ]
    },
    {
      title: "Useful Loot",
      items: [
        '<a href="https://cs50.harvard.edu/" target="_blank">HarvardCS50x (Done)</a>',
        '<a href="https://github.com/4idoneus" target="_blank">My GitHub Repo</a>'
      ]
    }
  ];

  let laundryIndex = 0;
  const laundryListBox = document.getElementById('laundryList');
  const leftBtn = document.getElementById('laundryLeftBtn');
  const rightBtn = document.getElementById('laundryRightBtn');
  const laundryTitle = document.getElementById('laundryTitle');

  function renderLaundryList(idx) {
    if (!laundryListBox || !laundryTitle) return;
    laundryListBox.innerHTML = laundryLists[idx].items.map(item => `<li>${item}</li>`).join('');
    laundryTitle.textContent = laundryLists[idx].title;
  }

  if (laundryListBox) {
    renderLaundryList(laundryIndex);
    leftBtn.addEventListener('click', () => {
      laundryIndex = (laundryIndex - 1 + laundryLists.length) % laundryLists.length;
      renderLaundryList(laundryIndex);
    });
    rightBtn.addEventListener('click', () => {
      laundryIndex = (laundryIndex + 1) % laundryLists.length;
      renderLaundryList(laundryIndex);
    });
  }

  // --- EASTER EGG: KONAMI CODE ---
  // Up, Up, Down, Down, Left, Right, Left, Right, b, a
  const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  let konamiIndex = 0;

  document.addEventListener("keydown", (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        activateLegendaryMode();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  function activateLegendaryMode() {
    document.body.classList.toggle("legendary-mode");
    const msg = document.getElementById("legendary-message");
    if (msg) {
        msg.style.display = "block";
        setTimeout(() => { msg.style.display = "none"; }, 4000);
    }
    console.log("%c LEVEL UP! Legendary Mode Activated.", "color: gold; font-size: 20px; background: #333; padding: 10px;");
  }
};