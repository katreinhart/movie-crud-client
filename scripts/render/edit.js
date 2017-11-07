window.editFormView = {
  init(id) {
    Movie.show(id).then(result => {
      const { movie } = result.data
      const form = formTemplate('EDIT', movie)
      mainContent.innerHTML = ""
      mainContent.innerHTML = form
      document.getElementById('post-form').addEventListener('submit', (e) => {
        e.preventDefault()
        
        const title = document.getElementById('movieTitle').value
        const director = document.getElementById('movieDirector').value
        const year = document.getElementById('yearReleased').value
        const your_rating = document.getElementById('yourRating').value
        const poster_url = document.getElementById('posterUrl').value

        const updatedMovie = { title, director, year, your_rating, poster_url }

        Movie.update(id, updatedMovie).then(result => {
          movieView.init(id)
        })
      })
    })
  }
}