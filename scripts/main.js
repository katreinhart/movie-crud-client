const localhostURL = 'http://localhost:3000/movies'
const herokuURL = ''
const baseURL = window.location.href.includes('127.0.0.1') ? localhostURL : herokuURL

// document.getElementById('main-content').innerHTML = formTemplate('POST')
// document.getElementById('main-content').innerHTML = 
console.log('baseURL', baseURL)