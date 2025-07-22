(function() {
  let generalStyle, chatgptStyle;

  function applyGeneral() {
    if (!generalStyle) {
      generalStyle = document.createElement('style');
      generalStyle.id = 'private-rtl-general';
      generalStyle.textContent = `
        html { direction: rtl !important; }
        body { direction: rtl !important; text-align: right !important; }
      `;
      document.head.appendChild(generalStyle);
    }
  }

  function removeGeneral() {
    if (generalStyle) {
      generalStyle.remove();
      generalStyle = null;
      document.documentElement.removeAttribute('dir');
    }
  }

  function applyChatgpt() {
    if (!chatgptStyle) {
      chatgptStyle = document.createElement('style');
      chatgptStyle.id = 'private-rtl-chatgpt';
      chatgptStyle.textContent = `
        :root { direction: rtl !important; }
        textarea, .text-base, .markdown { direction: rtl !important; text-align: right !important; }
      `;
      document.head.appendChild(chatgptStyle);
    }
  }

  function removeChatgpt() {
    if (chatgptStyle) {
      chatgptStyle.remove();
      chatgptStyle = null;
    }
  }

  function updateFromStorage(data) {
    const general = data.generalRTL;
    const chatgpt = data.chatgptRTL;

    if (general) applyGeneral();
    else removeGeneral();

    if (chatgpt && location.hostname.includes('chatgpt.com')) {
      applyChatgpt();
    } else {
      removeChatgpt();
    }
  }

  chrome.storage.sync.get({generalRTL: false, chatgptRTL: false}, updateFromStorage);

  chrome.storage.onChanged.addListener(function(changes, area) {
    if (area === 'sync') {
      chrome.storage.sync.get({generalRTL: false, chatgptRTL: false}, updateFromStorage);
    }
  });
})();
