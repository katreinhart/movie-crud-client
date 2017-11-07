window.navBarView = {
  init() {
    const title = document.getElementsByTagName('title')[0]
    title.textContent = "Movie CRUD"

    const navBar = document.getElementById('navbar')
    navBar.innerHTML = navbar()

    const addButton = document.getElementById('createNewPost')
    addButton.addEventListener('click', createFormView.init)

    const homeButton = document.getElementById('home')
    homeButton.addEventListener('click', homeView.init)

    const indexButton = document.getElementById('index')
    indexButton.addEventListener('click', indexView.init)
  },

  homePageInit() {
    const navBar = document.getElementById('navbar')
    navBar.innerHTML = navbar()
  }
}