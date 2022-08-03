export function resizing() {
  let wHeight = window.innerHeight
  let wWidth =  window.innerWidth
  let aspectRatio = wWidth/wHeight
  let container = document.getElementById('app-container')
  aspectFix()
  addEventListener('resize', () => {
    wHeight = window.innerHeight
    wWidth =  window.innerWidth
    aspectRatio = wWidth/wHeight
    aspectFix(container)
  })

  function aspectFix(){
    if (aspectRatio > (1136/639)) {
      container.style.height = '100vh'
      container.style.width = null
      return
    }
    container.style.width = '100vw'
    container.style.height = null
  }
}
