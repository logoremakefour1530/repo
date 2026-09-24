const BUTTON_ID = 'github-youtube-video-button';

function addVideoButton() {
  if (document.getElementById(BUTTON_ID)) return;

  const button = document.createElement('button');
  button.id = BUTTON_ID;
  button.className = 'github-youtube-video-button';
  button.type = 'button';
  button.innerHTML = '<span class="github-youtube-play" aria-hidden="true">▶</span><span>Video</span>';
  button.title = 'Open YouTube Player';
  button.addEventListener('click', () => chrome.runtime.sendMessage({ type: 'open-player' }));

  const target = document.querySelector('header.AppHeader, header, .AppHeader-globalBar') || document.body;
  target.appendChild(button);
}

addVideoButton();
new MutationObserver(addVideoButton).observe(document.documentElement, { childList: true, subtree: true });
