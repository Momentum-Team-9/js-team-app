const form = document.querySelector('.movie-form');
const url = 'http://localhost:3000/movies';
const movieBox = document.querySelector('#movie-list');
const movieInput = document.querySelector('#movie-input');

listMovies();

//Activates search bar

form.addEventListener('submit', function (event) {
  event.preventDefault();
  //NEED TO FINISH THIS
  const movieText = movieInput.value;
  console.log(movieText, 'movieText');
  addMovie(movieText);
  form.reset();
});

//event listener to trigger delete and put functions
movieBox.addEventListener('click', function (event) {
  if (event.target.classList.contains('remove')) {
    deleteMovie(event.target)
  }
})

function renderMovieText(movieItem, movieObj) {
  movieItem.innerHTML = `<div class="card"><span class="movie-title">${movieObj.title}</span><button class="watched">Mark as watched</button><button class="remove dangerous">Remove from list</button></div>`;
}

//function for creating movie boxes
function createMovieBox(movieObj) {
  const movieItem = document.createElement('div');
  movieItem.id = movieObj.id;
  movieItem.classList.add('movie-card');
  renderMovieText(movieItem, movieObj);
  movieBox.appendChild(movieItem);
  console.log(movieItem);
  //call
}

//eventlistener function to mark movies as watched

//eventtlistener to remove movies (delete)

// Render function to add text to movie boxes

//CRUD function to pull movies
function listMovies() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (let movie of data) {
        console.log(movie, 'movie');
        createMovieBox(movie);
      }
    });
}

// Add POST function to add
function addMovie(movieText) {
  console.log(movieText);
  fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      title: movieText,
      watched: false,
      created_at: moment().format(),
    }),
  })
    .then((response) => response.json())
    .then((movie) => createMovieBox(movie));
}

// DELETE function

function deleteMovie(element) {
  const movieId = element.parentElement.parentElement.id;
  console.log(movieId)
  fetch(url + '/' + `${movieId}`, {
    method: 'DELETE',
  }).then(() => element.parentElement.parentElement.remove());
}
