const navbar = () => {

  const nav = `
  <nav class="navbar navbar-toggleable-md navbar-dark">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Kat's Movie CRUD</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/" id="home">Home<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/movies/#/" id="index">Index</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/movies/#/new" id="createNewPost">Add</a>
        </li> 
      </ul>
    </div>
  </nav>
  `
  return nav
}