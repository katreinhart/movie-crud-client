const movieTemplate = (movie) => {
  const { title, director, year, your_rating, poster_url } = movie
  const show = document.createElement('DIV')
  show.classList += 'container'
  const home = document.createElement('A')
  home.textContent = 'Home'
  home.href = "#"
  home.addEventListener('click', e => {
    indexView.init()
  })
  show.appendChild(home)
  const h3 = document.createElement('H3')
  h3.textContent = title
  const h4 = document.createElement('h4')
  h4.textContent = director
  const p1 = document.createElement('p')
  p1.textContent = `Release date: ${year}`
  const p2 = document.createElement('p')
  p2.textContent = `My rating: ${your_rating}`
  const img = document.createElement('img')
  img.src = poster_url
  img.width = 200

  show.appendChild(h3)
  show.appendChild(h4)
  show.appendChild(p1)
  show.appendChild(p2)
  show.appendChild(img)

  return show
}