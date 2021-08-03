const DARK_MODE = 'dark-mode';
const LIGHT_MODE = 'light-mode';
const THEME = 'mode';

const toggleSwitch = document.getElementById('toggle-switch');

const applyTheme = () => {
  const html = document.documentElement;
  const currentMode = localStorage.getItem(THEME);
  const isDarkSelected = currentMode === DARK_MODE;
  const faIcon = isDarkSelected
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';

  html.classList.toggle(DARK_MODE, isDarkSelected);
  toggleSwitch.innerHTML = faIcon;
}

const toggleSwitchClick = () => {
  const currentMode = localStorage.getItem(THEME);
  localStorage.setItem(THEME,
    currentMode === DARK_MODE ? LIGHT_MODE : DARK_MODE
  );
  applyTheme();
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  toggleSwitch.onclick = toggleSwitchClick;
});