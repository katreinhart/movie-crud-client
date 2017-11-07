const localhostURL = 'http://localhost:3000/movies'
const herokuURL = ''
const baseURL = window.location.href.includes('127.0.0.1') ? localhostURL : herokuURL
const mainContent = document.getElementById('main-content')
const windowHash = window.location.hash.split('/').splice(1)

switch (windowHash[0]) {
  case "":  
    indexView.init()
    break
  case "movies":
    const id = windowHash[1]
    if(id !== "")
      movieView.init(id)
    else  
      indexView.init()
    break
  default:
    indexView.init()
}

