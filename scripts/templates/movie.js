const movieTemplate = (movie) => {
  const { title, director, year, your_rating, poster_url } = movie
  return `
    <div class="container">
      <h3>${title}</h3>
      <h4>directed by ${director}</h4>
      <p>Released in ${year}</p>
      <p>My rating: ${your_rating}</p>
      <img src=${poster_url} width=200>
    </div>
  `
}