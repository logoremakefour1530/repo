const $ = (selector) => document.querySelector(selector);
const player = $('#player');
const frame = $('#youtube-frame');
const input = $('#youtube-url');
const error = $('#error');

function videoIdFromUrl(value) {
  let url;
  try { url = new URL(value); } catch { return null; }

  const hostname = url.hostname.toLowerCase().replace(/^www\./, '');
  if (hostname === 'youtu.be') return url.pathname.slice(1).split('/')[0] || null;
  if (hostname !== 'youtube.com' && hostname !== 'm.youtube.com') return null;
  if (url.pathname === '/watch') return url.searchParams.get('v');
  if (url.pathname.startsWith('/shorts/')) return url.pathname.split('/')[2];
  if (url.pathname.startsWith('/embed/')) return url.pathname.split('/')[2];
  return null;
}

function isValidVideoId(id) { return Boolean(id && /^[A-Za-z0-9_-]{11}$/.test(id)); }
function showError(message) { error.textContent = message; }

function load(url) {
  const id = videoIdFromUrl(url);
  if (!isValidVideoId(id)) { showError('Use a valid YouTube video, Shorts, or youtu.be link.'); return; }
  error.textContent = '';
  frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
  player.hidden = false;
  chrome.storage.local.set({ lastYouTubeUrl: url });
}

$('#player-form').addEventListener('submit', (event) => { event.preventDefault(); load(input.value.trim()); });
$('#close-player').addEventListener('click', () => { frame.src = 'about:blank'; player.hidden = true; chrome.storage.local.remove('lastYouTubeUrl'); });
$('#settings').addEventListener('click', () => chrome.runtime.openOptionsPage());

document.addEventListener('DOMContentLoaded', () => chrome.storage.local.get('lastYouTubeUrl', ({ lastYouTubeUrl }) => {
  if (lastYouTubeUrl) { input.value = lastYouTubeUrl; load(lastYouTubeUrl); }
}));
