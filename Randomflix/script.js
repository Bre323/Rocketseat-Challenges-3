const undefinedMovieImg = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

const api_key = '?api_key=0e395a22ba638fad37e18877002da327'
const api_base_url = 'https://api.themoviedb.org/3/movie/'
const img_base_url = 'https://image.tmdb.org/t/p/w500/'
const language = 'language=pt-BR'


function getMovie() {
    const id = Math.floor(Math.random() * 2000) + 1
    const movie = document.getElementById('movie')
    const api = `${api_base_url}${id}${api_key}&${language}`

    fetch(api)
        .then(res => res.json())
        .then(data => {
            movie.innerHTML =
                `
                <div class="movie-info">
                    <img src="${data.poster_path ? img_base_url + data.poster_path : undefinedMovieImg}">

                    <div class="description">
                        <h2>${data.title ? data.title : 'Não temos filme para recomendação'}</h2>
                        <p>${data.overview ? data.overview : ''}</p>
                    </div>
                </div>
                `
        })
}
