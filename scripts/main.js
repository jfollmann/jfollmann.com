const [DARK_MODE, LIGHT_MODE] = ['dark-mode', 'light-mode'];
const THEME_KEY = 'mode';

const toggleSwitch = document.getElementById('toggle-switch');

const applyTheme = () => {
  const html = document.documentElement;
  const currentMode = localStorage.getItem(THEME_KEY);
  const isDarkSelected = currentMode === DARK_MODE;
  const faIcon = isDarkSelected
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';

  html.classList.toggle(DARK_MODE, isDarkSelected);
  toggleSwitch.innerHTML = faIcon;
}

const toggleSwitchClick = () => {
  const currentMode = localStorage.getItem(THEME_KEY);
  localStorage.setItem(THEME_KEY,
    currentMode === DARK_MODE ? LIGHT_MODE : DARK_MODE
  );
  applyTheme();
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  toggleSwitch.onclick = toggleSwitchClick;
});

const loadEggs = () => {
  console.log('🚀 Try typing konami code sequence: ↑ ↑ ↓ ↓ ← → ← → 🅱 🅰');
  let key = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let ck = 0;
  let max = key.length;

  const showEggs = () => {
    var img = new Image();
    img.src = 'https://weichiachang.github.io/easter-eggs-mobile/images/mario.gif';
    img.style.pointerEvents = "none";
    img.style.width = '250px';
    img.style.height = '200px';
    img.style.transition = '6s all linear';
    img.style.position = 'fixed';
    img.style.left = '-400px';
    img.style.bottom = '0';
    img.style.zIndex = 999999;

    document.body.appendChild(img);
    window.setTimeout(() => {
      img.style.left = 'calc(100% + 500px)';
    }, 50);

    window.setTimeout(() => {
      img.parentNode.removeChild(img);
    }, 6000);
  }

  const record = (e) => {
    e.which === key[ck] ? ck++ : ck = 0;

    if (ck >= max) {
      showEggs();
      ck = 0;
    }
  }

  document.addEventListener('keyup', record);
}

loadEggs();
