chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'open-player') chrome.action.openPopup();
});
