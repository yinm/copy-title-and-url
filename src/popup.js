'use strict'

chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
  const tab = tabs[0]
  const result = document.getElementById('result')

  result.value = `[${tab.title}](${tab.url})`
  result.select()
  document.execCommand('copy')
})
