console.log('hello from the render index file')
window.Movie.index().then(response => {
  const { movies } = response.data
  
  movies.forEach(movie => {
    console.log(movie)
    document.getElementById('main-content').innerHTML = `
      
    `
  })
})
