// List images and captions
const images = [
  { src: 'images/IMG-20250426-WA0024.jpg', caption: 'Beautiful moment together 💑' },
  { src: 'images/IMG-20250426-WA0025.jpg', caption: 'Laughing in the rain ☔' },
  { src: 'images/IMG-20250426-WA0026.jpg', caption: 'Pattu & Pattumma selfie 📸' },
  { src: 'images/IMG-20250426-WA0027.jpg', caption: 'Sweet moments at home 🏡' },
  { src: 'images/IMG-20250426-WA0028.jpg', caption: 'Celebrating love 🎉' },
  { src: 'images/IMG-20250426-WA0029.jpg', caption: 'Fun times together 😄' },
  { src: 'images/IMG-20250426-WA0030.jpg', caption: 'Adventures with you 🌍' },
  { src: 'images/IMG-20250426-WA0031.jpg', caption: 'Cherished memories 💖' },
  { src: 'images/IMG-20250426-WA0032.jpg', caption: 'Our journey continues 🚗' },
  { src: 'images/IMG-20250426-WA0033.jpg', caption: 'Smiles and laughter 😊' },
  { src: 'images/IMG-20250426-WA0034.jpg', caption: 'Together always ❤️' },
  { src: 'images/IMG-20250426-WA0035.jpg', caption: 'Special days with you 🎈' },
  { src: 'images/IMG-20250426-WA0036.jpg', caption: 'Love in every moment 💞' },
  { src: 'images/IMG-20250426-WA0037.jpg', caption: 'Our story unfolds 📖' },
  { src: 'images/IMG-20250426-WA0038.jpg', caption: 'Forever yours 💍' },
  { src: 'images/IMG-20250426-WA0039.jpg', caption: 'Sweet memories 🥰' },
  { src: 'images/IMG-20250426-WA0040.jpg', caption: 'Dreams together 🌠' },
  { src: 'images/IMG-20250426-WA0041.jpg', caption: 'Our love grows 🌹' },
  { src: 'images/IMG-20250426-WA0042.jpg', caption: 'Moments to treasure 💎' },
  { src: 'images/IMG-20250426-WA0043.jpg', caption: 'Pattu & Pattumma forever 💑' },
  { src: 'images/IMG-20250426-WA0044.jpg', caption: 'Joyful days together 🎉' },
  { src: 'images/IMG-20250426-WA0045.jpg', caption: 'Our love story ❤️' },
  { src: 'images/WhatsApp Image 2025-04-26 at 15.22.55_42de8214.jpg', caption: 'Unforgettable moments 🥰' }
];

const grid = document.getElementById('gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightbox = document.getElementById('close-lightbox');

// Lazy load images
images.forEach(function(img, idx) {
  const thumb = document.createElement('img');
  thumb.src = img.src;
  thumb.alt = 'Memory';
  thumb.className = 'gallery-thumb fade-in';
  thumb.style.animationDelay = (0.08 * idx) + 's';
  thumb.loading = 'lazy';
  thumb.addEventListener('click', function() {
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.caption;
    lightbox.classList.remove('hidden');
  });
  const caption = document.createElement('div');
  caption.className = 'gallery-caption';
  caption.textContent = img.caption;
  const wrapper = document.createElement('div');
  wrapper.className = 'gallery-item fade-in';
  wrapper.style.animationDelay = (0.08 * idx) + 's';
  wrapper.appendChild(thumb);
  wrapper.appendChild(caption);
  grid.appendChild(wrapper);
});

closeLightbox.addEventListener('click', function() {
  lightbox.classList.add('hidden');
});

// Random Memory button
const randomBtn = document.getElementById('random-memory');
randomBtn.addEventListener('click', function() {
  const idx = Math.floor(Math.random() * images.length);
  lightboxImg.src = images[idx].src;
  lightboxCaption.textContent = images[idx].caption;
  lightbox.classList.remove('hidden');
});

// Add CSS for gallery grid and lightbox
const style = document.createElement('style');
style.textContent = `
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 18px;
  margin-top: 2rem;
}
.gallery-item {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(179,107,140,0.15);
  overflow: hidden;
  text-align: center;
}
.gallery-thumb {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 18px 18px 0 0;
  cursor: pointer;
}
.gallery-caption {
  padding: 0.5rem;
  font-size: 0.95rem;
  color: #b36b8c;
}
.lightbox {
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(44, 19, 38, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
}
.lightbox.hidden {
  display: none;
}
.lightbox-content {
  background: #fff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(44,19,38,0.15);
  text-align: center;
}
#lightbox-img {
  max-width: 320px;
  max-height: 320px;
  border-radius: 18px;
}
#close-lightbox {
  margin-top: 1rem;
  background: #b36b8c;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
}
`;
document.head.appendChild(style);
