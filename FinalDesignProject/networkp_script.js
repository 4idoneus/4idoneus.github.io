window.onload = function () {
  const popup = document.getElementById("amateurPopup");
  const yesBtn = document.getElementById("popupYes");
  const noBtn = document.getElementById("popupNo");

  if (popup && yesBtn && noBtn) {
    popup.classList.remove("hidden");
    yesBtn.addEventListener("click", () => popup.classList.add("hidden"));
    noBtn.addEventListener("click", () => {
      window.location.href = "https://cinsdikici.com/";
    });
  }

  // Laundry list arrow logic
  const laundryLists = [
    {
      title: "Laundry List",
      items: [
        "Cisco Packet Tracer Simulation to the issues.",
        "Solution videos for Cisco Packet Tracer Simulations"
      ]
    },
    {
      title: "Useful Links",
      items: [
      '<a href="https://www.netacad.com/" target="_blank">Cisco Academy<a>',
      '<a href="https://www.netacad.com/courses/packet-tracer" target="_blank">Cisco Packet Tracer Download</a>',
      ]
    },
    {
      title: "Notes",
      items: [
        "Improve visual of the website.",
        "Get a good grade."
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

  if (leftBtn && rightBtn && laundryListBox && laundryTitle) {
    leftBtn.disabled = false;
    rightBtn.disabled = false;
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

  // Rick Roll functionality
  const wantMoreBtn = document.getElementById('wantMoreBtn');
  const rickRoll = document.getElementById('rickRoll');
  const rickAudio = document.getElementById('rickAudio');
  const popup2 = document.getElementById('popup');
  const closePopup = document.getElementById('closePopup');
  const noteContainer = document.getElementById('noteContainer');

  function launchMusicNotes() {
    if (!noteContainer) return;
    const notes = ['🎵', '🎶', '🎼', '🎷', '🎺', '🎸'];
    for (let i = 0; i < 15; i++) {
      const note = document.createElement("div");
      note.className = "music-note";
      note.textContent = notes[Math.floor(Math.random() * notes.length)];
      const x = `${Math.random() * 200 - 100}px`;
      const y = `${Math.random() * -250 - 100}px`;
      note.style.setProperty('--x', x);
      note.style.setProperty('--y', y);
      note.style.position = 'absolute';
      note.style.left = `${250 + Math.random() * 100 - 50}px`;
      note.style.top = `250px`;
      note.style.fontSize = '2rem';
      note.style.color = '#2D6843';
      note.style.transition = 'transform 2s ease-out, opacity 2s ease-out';
      noteContainer.appendChild(note);
      setTimeout(() => {
        note.style.transform = `translate(${x}, ${y})`;
        note.style.opacity = '0';
      }, 50);
      setTimeout(() => {
        note.remove();
      }, 3000);
    }
  }

  if (wantMoreBtn && rickRoll && rickAudio) {
    wantMoreBtn.addEventListener('click', () => {
      rickRoll.style.display = 'flex';
      document.body.style.backgroundColor = '#000';
      rickAudio.play();
      launchMusicNotes();
      rickAudio.onended = () => {
        if (popup2) popup2.classList.remove('hidden');
        rickRoll.style.display = 'none';
        document.body.style.backgroundColor = '';
      };
    });
  }
  if (closePopup && wantMoreBtn) {
    closePopup.addEventListener('click', () => {
      if (popup2) popup2.classList.add('hidden');
      wantMoreBtn.style.display = 'inline-block';
    });
  }
};
