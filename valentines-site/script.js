// Animated background (hearts/particles)
// Password modal logic
// Music toggle logic

document.addEventListener('DOMContentLoaded', function() {
  // Animated hearts
  const bg = document.querySelector('.hero-bg');
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.animationDelay = (Math.random() * 5) + 's';
    bg.appendChild(heart);
  }

  // Password modal
  const passwordModal = document.getElementById('password-modal');
  const passcodeSubmit = document.getElementById('passcode-submit');
  passcodeSubmit.addEventListener('click', function() {
    const input = document.getElementById('passcode-input').value;
    if (input === 'love2026') { // Set your passcode here
      passwordModal.classList.add('hidden');
    } else {
      alert('Incorrect passcode.');
    }
  });

  // Optionally show modal on load
  // passwordModal.classList.remove('hidden');

  // Music/Voice toggle
  let musicPlaying = false;
  const musicBtn = document.getElementById('music-toggle');
  let audio = null;
  musicBtn.addEventListener('click', function() {
    if (!audio) {
      audio = document.createElement('audio');
      audio.loop = false;
      // Use both formats for compatibility
      audio.innerHTML = `
        <source src="voice/Recording.m4a" type="audio/mp4">
        <source src="voice/voice.ogg" type="audio/ogg">
      `;
      document.body.appendChild(audio);
    }
    if (musicPlaying) {
      audio.pause();
      musicPlaying = false;
      musicBtn.textContent = '🎵 Music';
    } else {
      audio.play();
      musicPlaying = true;
      musicBtn.textContent = '⏸️ Music';
    }
  });
  // Reset button when audio ends
  if (audio) {
    audio.addEventListener('ended', function() {
      musicPlaying = false;
      musicBtn.textContent = '🎵 Music';
    });
  }

  // Open Surprise button
  document.getElementById('open-surprise').addEventListener('click', function() {
    window.location.href = 'surprise.html';
  });
});

// Heart animation CSS
const style = document.createElement('style');
style.textContent = `
.heart {
  position: absolute;
  width: 32px;
  height: 32px;
  background: url('heart.svg') no-repeat center/contain;
  opacity: 0.7;
  animation: floatHeart 8s infinite linear;
}
@keyframes floatHeart {
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-40px) scale(1.1); }
  100% { transform: translateY(0) scale(1); }
}
`;
document.head.appendChild(style);
