const BUTTON_ID = 'github-spotify-music-button';

function addMusicButton() {
  if (document.getElementById(BUTTON_ID)) return;
  const button = document.createElement('button');
  button.id = BUTTON_ID;
  button.className = 'github-spotify-music-button';
  button.type = 'button';
  button.innerHTML = '<span aria-hidden="true">●</span> Music';
  button.title = 'Open Spotify Music';
  button.addEventListener('click', () => chrome.runtime.sendMessage({ type: 'open-player' }));
  const target = document.querySelector('header.AppHeader, header, .AppHeader-globalBar') || document.body;
  target.appendChild(button);
}

addMusicButton();
new MutationObserver(addMusicButton).observe(document.documentElement, { childList: true, subtree: true });
