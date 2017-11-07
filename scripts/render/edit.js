window.editFormView = {
  init(id) {
    Movie.show(id).then(result => {
      const { movie } = result.data
      const form = formTemplate('EDIT', movie)
      mainContent.innerHTML = ""
      mainContent.innerHTML = form
    })
  }
}