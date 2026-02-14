// Gift box reveal animation and confetti
const giftBox = document.getElementById('gift-box');
const surpriseMsg = document.getElementById('surprise-message');
let opened = false;

giftBox.addEventListener('click', function() {
  if (!opened) {
    giftBox.classList.add('opened');
    setTimeout(() => {
      surpriseMsg.classList.remove('hidden');
      confettiBurst();
    }, 1200);
    opened = true;
  }
});

function confettiBurst() {
  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-20px';
    confetti.style.background = `hsl(${Math.random()*360},80%,80%)`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}

// Add CSS for gift box and confetti
const style = document.createElement('style');
style.textContent = `
.gift-box {
  width: 120px;
  height: 120px;
  margin: 2rem auto;
  position: relative;
  cursor: pointer;
}
.box-body {
  width: 120px;
  height: 80px;
  background: #b36b8c;
  border-radius: 0 0 18px 18px;
  position: absolute;
  bottom: 0;
  left: 0;
  box-shadow: 0 4px 16px rgba(179,107,140,0.15);
}
.box-lid {
  width: 120px;
  height: 40px;
  background: #e3c6f7;
  border-radius: 18px 18px 0 0;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s cubic-bezier(.68,-.55,.27,1.55);
}
.gift-box.opened .box-lid {
  transform: translateY(-60px) rotate(-20deg);
}
.surprise-message {
  margin-top: 2rem;
  text-align: center;
  font-size: 1.3rem;
  color: #b36b8c;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(179,107,140,0.15);
  padding: 2rem;
}
.surprise-message.hidden {
  display: none;
}
.confetti {
  position: fixed;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  opacity: 0.8;
  animation: confetti-fall 3s linear;
  z-index: 100;
}
@keyframes confetti-fall {
  0% { top: -20px; }
  100% { top: 100vh; }
}
`;
document.head.appendChild(style);
