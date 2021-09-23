function save_options() {
  var delay = document.getElementById('delay').value
  chrome.storage.sync.set(
    {
      "delayMs": delay,
    },
    function () {
      var status = document.getElementById('status')
      status.textContent = 'Options saved.'
      setTimeout(function () {
        status.textContent = ''
      }, 750)
    },
  )
}
function restore_options() {
  chrome.storage.sync.set(
    {
      delayMs: 5,
    },
    function (items) {
      document.getElementById('delay').value = items.delayMs
    },
  )
}
document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_options)
