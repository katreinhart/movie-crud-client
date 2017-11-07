window.movieView = {
  init(id) {
    Movie.show(id).then(result => {
      const { movie } = result.data
      const html = movieTemplate(movie)
      mainContent.innerHTML = ''
      mainContent.appendChild(html)
    }) 
  }
}