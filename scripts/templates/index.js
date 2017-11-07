const indexTemplate = (movies) => {
  const ul = document.createElement('UL')
  ul.classList += 'list-group'
  movies.forEach(movie => {
    const a = document.createElement('a')
    a.classList += 'list-group-item'
    a.textContent = movie.title
    a.href = `#/${movie.id}`
    ul.appendChild(a)
  })
  return ul
}
