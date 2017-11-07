const localhostURL = 'http://localhost:3000/movies'
const herokuURL = 'https://kat-scifi-db.herokuapp.com/movies'
const baseURL = window.location.href.includes('127.0.0.1') ? localhostURL : herokuURL
const mainContent = document.getElementById('main-content')
const windowHash = window.location.hash.split('/').splice(1)

switch (windowHash[0]) {
  case "":  
    indexView.init()
    break
  case "movies":
    let id = windowHash[1]
    if(id !== "")
      movieView.init(id)
    else  
      indexView.init()
    break
  case "new": 
    createFormView.init()
    break
  case "edit":
    editFormView.init(windowHash[1])
    break
  default:
    indexView.init()
}
