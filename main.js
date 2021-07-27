const form = document.querySelector('.movie-form');
const url = 'http://localhost:3000/movies';
const movieBox = document.querySelector('#movie-list');

//Activates search bar

form.addEventListener('submit', function (event) {
  event.preventDefault();
  listMovies();
  //add CRUD function
  form.reset();
});

//function for creating movie boxes
function createMovieBox (){
  const movieItem = document.createElement('div');
  movieItem.classList.add('movie-card')
  movieBox.appendChild(movieItem);
  //call 
}

//eventlistener function to mark movies as watched

//eventtlistener to remove movies (delete)

//CRUD function to pull movies

function listMovies() {
  fetch(url)
  
  .then ((response) => response.json())
  .then ((data) => {
    for (let movie of data){
      console.log(movie, "movie")
      createMovieBox(movie)
}
  })
}

// Add POST function to render movies on page