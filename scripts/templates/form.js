const formTemplate = (method, movie={ id: '', title:'', director: '', year: '', your_rating: '', poster_url: ''}) => {
  const btnText = method === 'POST' ? 'Add New Movie' : 'Update Movie'
  return `
    <form id="post-form" action="/movies/${movie.id}">
      <div class="form-group">
        <label for="movieTitle">Title</label>
        <input type="text" class="form-control" id="movieTitle" aria-describedby="titleHelp" placeholder="Movie title" value=${movie.title}>
        <small id="titleHelp" class="form-text text-muted">Enter the title of the movie.</small>
      </div>
      <div class="form-group">
        <label for="movieDirector">Director</label>
        <input type="text" class="form-control" id="movieDirector" aria-describedby="directorHelp" placeholder="Movie director" value=${movie.director}>
        <small id="directorHelp" class="form-text text-muted">Enter the director of the movie.</small>
      </div>
      <div class="form-group">
        <label for="yearReleased">Year</label>
        <input type="text" class="form-control" id="yearReleased" aria-describedby="yearHelp" placeholder="Release year" value=${movie.year}>
        <small id="yearHelp" class="form-text text-muted">What year was the movie released?</small>
      </div>
      <div class="form-group">
        <label for="movieDirector">Your Rating</label>
        <input type="text" class="form-control" id="movieDirector" aria-describedby="ratingHelp" placeholder="Your rating" value=${movie.your_rating}>
        <small id="ratingHelp" class="form-text text-muted">On a scale of 1 to 5, how many stars do you give this movie?</small>
      </div>
      <div class="form-group">
        <label for="posterUrl">Poster URL</label>
        <input type="text" class="form-control" id="posterUrl" aria-describedby="posterHelp" placeholder="Poster URL" value=${movie.poster_url}>
        <small id="posterHelp" class="form-text text-muted">Please enter a URL for the poster image. If you need help, try searching <a href="https://images.google.com" target="_blank">Google Images</a>.</small>
      </div>
      <button type="submit" class="btn btn-info btn-block">${btnText}</button>
    </form>
    `
}