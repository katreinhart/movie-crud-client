function handleCreateMovie (e) {
  e.preventDefault()

  const title = document.getElementById('movieTitle').value
  const director = document.getElementById('movieDirector').value
  const year = document.getElementById('yearReleased').value
  const your_rating = document.getElementById('yourRating').value
  const poster_url = document.getElementById('posterUrl').value

  const newMovie = { title, director, year, your_rating, poster_url }

  Movie.create(newMovie).then(result => {
    const { id }  = result.data.movie[0]
    movieView.init(id)
  }).catch(error => {
    console.log('something went wrong')
  })
}

function handleCancelCreate (e) {
  e.preventDefault
  indexView.init()
}

window.createFormView = { 
  init() {
    navBarView.init()    
    window.location.hash = "#/new"
    const form = formTemplate('POST')
    mainContent.innerHTML = ''
    mainContent.innerHTML = form

    document.getElementById('post-form').addEventListener('submit', handleCreateMovie)
    document.getElementById('cancel').addEventListener('click', handleCancelCreate)
  }
}
