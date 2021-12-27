function setbingimage(curdate, message) {
  fetch("https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US")
    .then(res => res.json())
      .then(out => chrome.storage.local.set({
        "ntpurl": "https://www.bing.com" + out.images[0].url,
        "ntptext": out.images[0].copyright.substr(0, out.images[0].copyright.indexOf(" (©")),
        "date": curdate}, function() {
          console.log(message + "\nhttps://www.bing.com" + out.images[0].url + "\n" + out.images[0].copyright);}))
    .catch(err => console.log(err));
}

chrome.runtime.onInstalled.addListener(function() {
  setbingimage((new Date()).toLocaleDateString(), "bingNTP: installed");
});

chrome.runtime.onStartup.addListener(function() {
  chrome.storage.local.get(['date'], function(items) {
    const today = (new Date()).toLocaleDateString();
    if (items.date != today) {
      setbingimage(today, "bingNTP: new day");
    }
    else {console.log("bingNTP: same day");}
  });
});