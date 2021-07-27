const form = document.querySelector(".movie-form");
const url = "http://localhost:3000/movies";
const movieBox = document.querySelector("#movie-list");
const movieInput = document.querySelector("#movie-input");

//Activates search bar

form.addEventListener("submit", function (event) {
  event.preventDefault();
  listMovies();
  form.reset();
});

function renderMovieText (movieItem, movieObj) {
    movieItem.innerHTML = `<span class="movie-title">${movieObj.title}</span>`
}

//function for creating movie boxes
function createMovieBox() {
  const movieItem = document.createElement("div");
  movieItem.classList.add("movie-card");
  movieBox.appendChild(movieItem);
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
        console.log(movie, "movie");
        createMovieBox(movie);
      }
    });
}

// Add POST function to add
function addMovie(movieText) {
  console.log(movieText);
  fetch(url, {
    method: "POST",
    header: { "Content-type": "application/json" },
    body: JSON.stringify({
      title: movieText,
      watched: false,
      created_at: moment().format(),
    }),
  });
}

// DELETE function
