const toggle = document.getElementById('themeToggle');
const root = document.documentElement;

// Apply the saved choice when the page loads
if (localStorage.getItem('theme') === 'dark') {
  root.setAttribute('data-theme', 'dark');
  toggle.checked = true;
}

// React whenever the switch is flipped
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    root.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    root.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  }
});