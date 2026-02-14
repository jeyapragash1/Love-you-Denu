// Typewriter effect for letter sections
function typewriterEffect(element) {
  const text = element.textContent;
  element.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, 30);
    }
  }
  type();
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.typewriter').forEach(typewriterEffect);

  // PDF download
  document.getElementById('download-letter').addEventListener('click', function() {
    window.print(); // Simple print-to-PDF for now
  });
});