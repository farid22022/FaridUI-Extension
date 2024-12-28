chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({
      url: 'http://localhost:5173/',  // URL to open
    });
  });
  