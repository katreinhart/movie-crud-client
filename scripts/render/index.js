window.indexView = {
  init() {
    // window.location.hash = '#'
    Movie.index()
      .then((result) => {
        const { movies } = result.data
        const template = indexTemplate(movies)
        mainContent.appendChild(template)
      })
  }
}