const requestURL = "../json/peliculas.json";

async function fetchMoviesJson(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}

fetchMoviesJson().then(movies => {
    for (let index = 0; index < movies.peliculas.length ; index++)
        {
            
        
            const moviesSection = document.getElementById('movieSection');
        
            let id = movies.peliculas[index].id;
            let img = movies.peliculas[index].caratula;
            let title = movies.peliculas[index].titulo;
            let description = movies.peliculas[index].descripcion;
            let genre = movies.peliculas[index].genero;
            let director = movies.peliculas[index].director;

        

            moviesSection.innerHTML += `
            <div class ="card-group">
            <div class= "card">
                <img src="https://pics.filmaffinity.com/wonder_woman-552748603-large.jpg" class="card-img-top" alt="caratula">
                <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text"><small class="text-muted">${director}</small></p>
            </div>
            </div>
            `
        
        
        };
})
