function setbingimage() {
  fetch("https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1")
    .then(res => res.json())
      .then(out => chrome.storage.local.set({
        "ntpurl": "https://www.bing.com" + out.images[0].url.split('&')[0],
        "ntptext": out.images[0].copyright.substr(0, out.images[0].copyright.indexOf(" (©"))
      }))
    .catch(err => console.log(err));
}

chrome.runtime.onInstalled.addListener(function() { setbingimage(); });
chrome.runtime.onStartup.addListener(function() { setbingimage(); });