const $ = (selector) => document.querySelector(selector);
const player = $('#player');
const frame = $('#spotify-frame');
const input = $('#spotify-url');
const error = $('#error');

function embedUrl(value) {
  let url;
  try { url = new URL(value); } catch { return null; }
  if (url.hostname !== 'open.spotify.com' && url.hostname !== 'spotify.link') return null;
  const match = url.pathname.match(/^\/(track|album|playlist|episode|show)\/([A-Za-z0-9]+|[A-Za-z0-9_-]+)/);
  return match ? `https://open.spotify.com/embed/${match[1]}/${match[2]}?utm_source=generator&theme=0` : null;
}

function showError(message) { error.textContent = message; }
function load(url) {
  const embed = embedUrl(url);
  if (!embed) { showError('Use a Spotify track, album, playlist, episode, or show link.'); return; }
  error.textContent = '';
  frame.src = embed;
  player.hidden = false;
  chrome.storage.local.set({ lastSpotifyUrl: url });
}

$('#player-form').addEventListener('submit', (event) => { event.preventDefault(); load(input.value.trim()); });
$('#close-player').addEventListener('click', () => { frame.src = 'about:blank'; player.hidden = true; chrome.storage.local.remove('lastSpotifyUrl'); });
$('#settings').addEventListener('click', () => chrome.runtime.openOptionsPage());

document.addEventListener('DOMContentLoaded', () => chrome.storage.local.get('lastSpotifyUrl', ({ lastSpotifyUrl }) => {
  if (lastSpotifyUrl) { input.value = lastSpotifyUrl; load(lastSpotifyUrl); }
}));
