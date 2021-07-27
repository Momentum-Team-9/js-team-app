const form = document.querySelector('.movie-form');
const url = 'http://localhost:3000/movies';
//Activates search bar

form.addEventListener('submit', function (event) {
  event.preventDefault();
  listMovies();
  //add CRUD function
  form.reset();
});

//function for creating movie boxes

//eventlistener function to mark movies as watched

//eventtlistener to remove movies (delete)

//CRUD function to pull movies

function listMovies() {
  fetch(url)
  
  .then ((response) => response.json())
  .then ((data) => {
for (let movie of data){
  console.log(movie, "movie")
}
  })
}