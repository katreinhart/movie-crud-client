const localhostURL = 'http://localhost:3000/movies'
const herokuURL = ''
const baseURL = window.location.href.includes('localhost') ? localhostURL : herokuURL

document.getElementById('main-content').innerHTML = formTemplate('POST')

