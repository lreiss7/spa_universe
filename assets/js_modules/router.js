// Este arquivo define uma classe Router que lida com o roteamento e o carregamento de conteúdo dinâmico da página
export class Router {
  routes = {}

  // Método para adicionar uma rota à instância do roteador
  add(routeName, page) {
    this.routes[routeName] = page
  }
  // Método para lidar com o evento de rota (navegação do usuário)
  route(event) {
    event = event || window.event
    event.preventDefault()

    // Atualiza o histórico de navegação do navegador para refletir a nova rota
    window.history.pushState({}, '', event.target.href)
    this.handle()

    // Define o plano de fundo da página com base na nova rota
    const getPathname = () => {
      const path = window.location.pathname
      return path.charAt(0) === '/' ? path.slice(1) : path
    }

    function setBodyBackground() {
      const body = document.body
      const path = getPathname()
  
      // Verifica o pathname e define o background do body de acordo
      switch (path) {
        case 'home':
          body.style.backgroundImage =
          'url(./assets/images/page-1.png)'
          break
        case 'universe':
          body.style.backgroundImage =
          'url(./assets/images/page-2.png)'
          break
        case 'exploration':
          body.style.backgroundImage =
          'url(./assets/images/page-3.png)'
          break
        default:
          // Define um background padrão para outras páginas
          body.style.backgroundImage = 'url("https://i.imgur.com/UmNcSPO.png")'
          break
      }
    }
  
    setBodyBackground()
  }
  
// Método para lidar com a navegação do usuário e carregar o conteúdo da página correspondente à rota atual
  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
    
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }
}
