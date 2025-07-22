function restoreOptions() {
  chrome.storage.sync.get({generalRTL: false, chatgptRTL: false}, function(data) {
    document.getElementById('generalToggle').checked = data.generalRTL;
    document.getElementById('chatgptToggle').checked = data.chatgptRTL;
  });
}

function saveOptions() {
  const general = document.getElementById('generalToggle').checked;
  const chatgpt = document.getElementById('chatgptToggle').checked;
  chrome.storage.sync.set({generalRTL: general, chatgptRTL: chatgpt});
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('generalToggle').addEventListener('change', saveOptions);
document.getElementById('chatgptToggle').addEventListener('change', saveOptions);
