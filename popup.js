'use strict'

chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
  const tab = tabs[0];
  document.getElementById('result').value = `[${tab.title}](${tab.url})`
});
