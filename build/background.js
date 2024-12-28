chrome.runtime.onInstalled.addListener(() => {
    console.log("Service Worker Installed!");
  });
  
  chrome.action.onClicked.addListener(() => {
    console.log("Extension Icon Clicked!");
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.update(tabs[0].id, { url: 'http://localhost:5173/' });
    });
  });
  