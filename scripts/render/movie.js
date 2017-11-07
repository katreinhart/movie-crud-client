window.movieView = {
  init(id) {
    Movie.show(id).then(result => {
      console.log(result)
      const { movie } = result.data
      const html = movieTemplate(movie)
      mainContent.innerHTML = html
    }) 
  }
}