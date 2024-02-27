let movies = [
  {
    name: "Pathaan",
    poster:
      "https://bollywoodmovieposters.com/wp-content/uploads/2023/01/pathan-poster-shahrukh-khan-movie-srk.jpg",
    rating: 9.7,
  },
  {
    name: "Tu Jhoothi Mai Makkar",
    poster:
      "https://i0.wp.com/hunditimes.com/wp-content/uploads/2023/09/tu-jhoothi-main-makkaar-best-hindi-movies-of-2023-on-ott.jpg?resize=640%2C922&ssl=1",
    rating: 9.1,
  },
  {
    name: "Pushpa",
    poster:
      "https://www.scrolldroll.com/wp-content/uploads/2022/11/pushpa-2-Bollywood-movies-in-2023.jpg",
    rating: 8.6,
  },
  {
    name: "Selfiee",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYTRjN2MzM2MtM2UzYi00YjA5LThkZDQtMThjZjFhNzIwMGM3XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg",
    rating: 8.1,
  },
  {
    name: "Jawan",
    poster:
      "https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/07/Snapinsta.app_285644098_3149813968666247_5541496698373498368_n_1080.jpg?size=*:900",
    rating: 8.9,
  },
  {
    name: "Animal",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGViM2M4NmUtMmNkNy00MTQ5LTk5MDYtNmNhODAzODkwOTJlXkEyXkFqcGdeQXVyMTY1NDY4NTIw._V1_FMjpg_UX1000_.jpg",
    rating: 8.3,
  },
  {
    name: "Adipurush",
    poster: "https://static.toiimg.com/photo/100783941.cms",
    rating: 8.1,
  },
  {
    name: "Kabir Singh",
    poster:
      "https://5.imimg.com/data5/CO/IP/MQ/SELLER-30220222/bollywood-wall-poster-500x500.jpg",
    rating: 8.2,
  },
  {
    name: "Devdas",
    poster:
      "https://st1.bollywoodlife.com/wp-content/uploads/2023/04/MicrosoftTeams-image-2023-04-01T114331.691.jpg",
    rating: 7.4,
  },
  {
    name: "Bramhatra",
    poster:
      "https://e1.pxfuel.com/desktop-wallpaper/998/938/desktop-wallpaper-brahmastra-bollywood-2022-movie-poster-thumbnail.jpg",
    rating: 8.1,
  },
  {
    name: "Tiger3",
    poster:
      "https://m.media-amazon.com/images/I/811yBO9VcML._AC_UF1000,1000_QL80_.jpg",
    rating: 5.2,
  },
  {
    name: "Suraj Pe Mangal Bhari",
    poster:
      "https://1.bp.blogspot.com/-79vmCCwoZ_E/X4_artAUp7I/AAAAAAAAaO4/qsr-ZiGmgwcmsP72F_NAyWamwA2rsLhTwCLcBGAsYHQ/s595/Suraj-Pe-Mangal-Bhari-movie-poster-release-date.jpg",
    rating: 8.3,
  },
  {
    name: "RRR",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwX3QdsZ484HPGjF484HtDEHT6QkJBF4QeGDDroFcRkVDRxh6pqnkEzlXe_aTObsjEmY&usqp=CAU",
    rating: 9.4,
  },
];

function searchMovie() 
{
  let movieName = document.getElementById("search").value;
  
  if(movieName!=="")
  {
        let result = movies.filter(function(movie){
            return movie.name.toUpperCase().includes(movieName.toUpperCase())
        })
        displayMovies(result);    
    }
    else{
        displayMovies(movies);
    }
}


function displayMovies(data) {

    document.getElementById("movies").innerHTML="";

  let divHTML = ` `;

  for (let i = 0; i < data.length; i++) {
    divHTML =
      divHTML +
      `<div class="movie">

            <div class="overlay">

                <div class="video"></div>

                <div class="details">
                    <h1 class="title">${data[i].name}</h1>
                    <h1 class="rating">Rating: ${data[i].rating}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ex numquam.  </p>
                </div>

            </div>

            <img
            class="poster"
            src="${data[i].poster}   "
            />

        </div>`;
  }
  console.log(divHTML);
    document.getElementById("movies").innerHTML = divHTML;
}
displayMovies(movies);
