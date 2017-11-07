window.indexView = {
  init() {
    navBarView.init()    
    window.location.hash = '#'
    Movie.index()
      .then((result) => {
        const { movies } = result.data
        const template = indexTemplate(movies)
        mainContent.innerHTML ='<h3>My Favorite Sci-Fi Movies</h3>'
        mainContent.appendChild(template)
      })
  }
}