const reasons = [
  "Your smile brightens my day",
  "You always call me Pattu",
  "Your hugs are the best",
  "You make me laugh",
  "You support me always",
  "You are my best friend",
  "You believe in us",
  "You love our family",
  "You are so creative",
  "You are patient",
  "You are caring",
  "You inspire me",
  "You make every moment special",
  "You are beautiful inside and out",
  "You forgive easily",
  "You are adventurous",
  "You listen to me",
  "You are my soulmate",
  "You make me feel loved",
  "You are my forever Pattumma"
];

const grid = document.getElementById('reasons-grid');
const openedCount = document.getElementById('opened-count');
const totalCount = document.getElementById('total-count');
totalCount.textContent = reasons.length;
let opened = 0;

reasons.forEach((reason, idx) => {
  const card = document.createElement('div');
  card.className = 'reason-card scale-in';
  card.style.animationDelay = (0.1 * idx) + 's';
  card.innerHTML = `<div class="card-front">💖</div><div class="card-back">${reason}</div>`;
  card.addEventListener('click', function() {
    if (!card.classList.contains('flipped')) {
      card.classList.add('flipped');
      opened++;
      openedCount.textContent = opened;
    }
  });
  grid.appendChild(card);
});

// Add CSS for flip animation
const style = document.createElement('style');
style.textContent = `
.reason-card {
  width: 120px;
  height: 160px;
  margin: 10px;
  perspective: 800px;
  display: inline-block;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(179,107,140,0.15);
  cursor: pointer;
  position: relative;
  background: #fff;
  transition: transform 0.2s;
}
.reason-card .card-front, .reason-card .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  border-radius: 18px;
  backface-visibility: hidden;
  transition: background 0.3s;
}
.reason-card .card-front {
  background: #f8e1e7;
  color: #b36b8c;
}
.reason-card .card-back {
  background: #e3c6f7;
  color: #2d1a2b;
  transform: rotateY(180deg);
}
.reason-card.flipped {
  transform: rotateY(180deg);
}
`;
document.head.appendChild(style);
