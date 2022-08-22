// document.readyState has 3 possible values:
// 'loading': document is still loading
// 'interactive': document has been loaded and parsed but still loading some resources like images, css, etc
// 'complete': all has been loaded

// every time that document.readyState changes, readystateshange event fires

function ready() {
  return new Promise(function (resolve) {
    function checkState() {
      if (document.readyState !== 'loading') resolve()
    }
    document.addEventListener('readystatechange', checkState)
    checkState()
  })
}

ready().then(callbackToBeExecuted)

function onReady() {
  console.log('Document ready!!!')
}
