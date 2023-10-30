// Simulated data for movie list
const movies = [
    { title: 'Five Nights At Freddy', image: 'https://wallpapers.com/images/featured/five-nights-at-freddys-characters-pictures-bjr1iwl5yi4tgm3s.jpg' },
    { title: 'Gnadhi Godse', image: 'path_to_image2.jpg' },
    { title: 'Snniperwolf ban lol', image: 'path_to_image3.jpg' },
    // Add more movie data as needed
];

// Function to display movies
const displayMovies = () => {
    const movieListElement = document.querySelector('.movie-list');

    movies.forEach((movie) => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.title;

        const movieImage = document.createElement('img');
        movieImage.src = movie.image;
        movieImage.alt = movie.title;

        movieElement.appendChild(movieImage);
        movieElement.appendChild(movieTitle);

        movieListElement.appendChild(movieElement);
    });
};

// Call the function to display movies when the DOM is loaded
document.addEventListener('DOMContentLoaded', displayMovies);

const showWatchButton = (element) => {
    const watchButton = element.querySelector('.watch-button');
    watchButton.style.display = 'block';
};

const hideWatchButton = (element) => {
    const watchButton = element.querySelector('.watch-button');
    watchButton.style.display = 'none';
};