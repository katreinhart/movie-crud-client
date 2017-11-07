const indexTemplate = (movies) => {
  console.log(Array.isArray(movies))
  const ul = document.createElement('UL')
  ul.classList += 'list-group'
  movies.forEach(movie => {
    const li = document.createElement('LI')
    li.classList += 'list-group-item'
    li.textContent = movie.title
    console.log(li)
    ul.appendChild(li)
  })
  console.log(ul)
  return ul
}
