// Shared dreams, travel goals, couple bucket list
const defaultDreams = [
  "Travel to Paris together",
  "Build our dream home",
  "Start a family tradition",
  "Visit a new country every year",
  "Learn something new together",
  "Celebrate every anniversary in a special way",
  "Take a road trip",
  "Watch the sunrise on a beach",
  "Cook a romantic dinner",
  "Dance under the stars"
];

function loadDreams() {
  let dreams = JSON.parse(localStorage.getItem('dreams')) || defaultDreams;
  const list = document.getElementById('dreams-list');
  list.innerHTML = '';
  dreams.forEach((dream, idx) => {
    const li = document.createElement('li');
    li.className = 'dream-item';
    li.innerHTML = `<input type="checkbox" id="dream-${idx}" ${dream.checked ? 'checked' : ''}> <label for="dream-${idx}">${dream.text || dream}</label>`;
    li.querySelector('input').addEventListener('change', function() {
      dreams[idx].checked = this.checked;
      localStorage.setItem('dreams', JSON.stringify(dreams));
    });
    list.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Convert defaultDreams to objects for localStorage
  let dreams = JSON.parse(localStorage.getItem('dreams')) || defaultDreams.map(d => ({ text: d, checked: false }));
  localStorage.setItem('dreams', JSON.stringify(dreams));
  loadDreams();

  document.getElementById('add-dream-btn').addEventListener('click', function() {
    const input = document.getElementById('new-dream');
    const value = input.value.trim();
    if (value) {
      dreams = JSON.parse(localStorage.getItem('dreams')) || [];
      dreams.push({ text: value, checked: false });
      localStorage.setItem('dreams', JSON.stringify(dreams));
      loadDreams();
      input.value = '';
    }
  });
});

// Add CSS for dreams list
const style = document.createElement('style');
style.textContent = `
.dreams-list {
  list-style: none;
  padding: 0;
  margin-top: 2rem;
}
.dream-item {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(179,107,140,0.15);
  margin-bottom: 12px;
  padding: 1rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}
.add-dream {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.5rem;
}
.add-dream input {
  flex: 1;
  padding: 0.6rem;
  border-radius: 10px;
  border: 1px solid #b36b8c;
  font-size: 1rem;
}
.add-dream button {
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
