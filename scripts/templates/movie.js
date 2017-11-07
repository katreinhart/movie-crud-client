const movieTemplate = (movie) => {
  const { id, title, director, year, your_rating, poster_url } = movie
  const show = document.createElement('DIV')
  show.classList += 'container'

  const homeLink = document.createElement('A')
  homeLink.textContent = 'Home'
  homeLink.href = "#"
  homeLink.className = "home-link"
  homeLink.addEventListener('click', e => {
    e.preventDefault()
    indexView.init()
  })
  show.appendChild(homeLink)

  const editLink = document.createElement('A')
  editLink.href = `#/edit/${id}`
  editLink.textContent = "Edit"
  editLink.className = "edit-link"
  editLink.addEventListener('click', e => {
    e.preventDefault()
    editFormView.init(id)
  })
  show.appendChild(editLink)

  const deleteLink = document.createElement('A')
  deleteLink.href = `#/delete/${id}`
  deleteLink.textContent = "Delete"
  deleteLink.className = "delete-link"
  deleteLink.addEventListener('click', e => {
    e.preventDefault()
    Movie.destroy(id).then(result => {
      indexView.init()
    })
  })
  
  show.appendChild(deleteLink)

  let stars = ''
  for(let i=0; i<your_rating; i++) {
    stars += '⭐'
  }
  const h3 = document.createElement('H3')
  h3.textContent = `${title}`
  const h4 = document.createElement('h4')
  h4.textContent = `${director}`
  const p1 = document.createElement('p')
  p1.textContent = `Release date: ${year}`
  const p2 = document.createElement('p')
  p2.textContent = `My rating: ${stars}`
  const img = document.createElement('img')
  img.src = poster_url
  img.class ="movie-poster"
  img.width = 250

  show.appendChild(h3)
  show.appendChild(h4)
  show.appendChild(p1)
  show.appendChild(p2)
  show.appendChild(img)

  return show
}