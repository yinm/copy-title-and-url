'use strict'

chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
  document.getElementById('result').value = tabs[0].title
});
