const localhostURL = 'http://localhost:3000/movies'
const herokuURL = ''
const baseURL = window.location.href.includes('127.0.0.1') ? localhostURL : herokuURL

const mainContent = document.getElementById('main-content')

window.indexView.init()
