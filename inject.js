// this is the code which will be injected into a given page...
;(function () {
  chrome.storage.sync.get(["delayMs"], function (delay) {
    console.info('Bettering Guru')
    setTimeout(function () {
      console.info(delay);
      inspQuote = document.getElementsByClassName('guru__quote_2l78Zu_zvR')[0]
      if (inspQuote != undefined) {
        inspQuote.remove()
      }
    }, parseInt(delay.delayMs))
  })
})()
