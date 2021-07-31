const DARK_MODE = 'dark-mode';
const LIGHT_MODE = 'light-mode';
const THEME = 'mode';

const toggleSwitch = document.getElementById('toggle-switch');

document.addEventListener(
  'DOMContentLoaded', () => {
    applyTheme();
    toggleSwitch.onclick = () => {
      const currentMode = localStorage.getItem(THEME);
      localStorage.setItem(
        THEME,
        currentMode === DARK_MODE ? LIGHT_MODE : DARK_MODE
      );
      applyTheme();
    }
  }
);

const applyTheme = () => {
  const html = document.documentElement;
  const currentMode = localStorage.getItem(THEME);
  const isDark = currentMode === DARK_MODE;
  const innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';

  html.classList.toggle(DARK_MODE, isDark);
  toggleSwitch.innerHTML = innerHTML;
}