export default function bgPages() {
  const getPathname = () => {
    const path = window.location.pathname
    return path.charAt(0) === '/' ? path.slice(1) : path
  }

  function setBodyBackground() {
    const body = document.body
    const path = getPathname()
  
    switch (path) {
      case 'universe':
        body.style.backgroundImage = 'url(./assets/images/page-2.png)'
        break
      case 'exploration':
        body.style.backgroundImage = 'url(./assets/images/page-3.png)'
        break
      default:
        body.style.backgroundImage = 'url(./assets/images/page-1.png)'
        break
    }
  }

  setBodyBackground()
}