document.title = chrome.i18n.getMessage("lnTitle");
chrome.storage.local.get(['ntpurl'], function(items) {
  if (items.ntpurl.startsWith("https://www.bing.com/")) {
    document.body.style.backgroundImage = "url('" + items.ntpurl + "')";
  }
  else { console.log("bingNTP: No url for background image"); }
});