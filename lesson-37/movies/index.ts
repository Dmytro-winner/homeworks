interface Movie {
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
}

const searchInput = document.getElementById('search') as HTMLInputElement;
const resultsContainer = document.getElementById('results') as HTMLDivElement;
const loadingSpinner = document.getElementById('loading') as HTMLDivElement;

searchInput.addEventListener('input', function () {
    const query = searchInput.value.trim();

    if (query.length > 0) {
        fetchMovies(query);
    } else {
        resultsContainer.innerHTML = '';
    }
});

async function fetchMovies(query: string): Promise<void> {
    const apiKey = '94438afb';
    const url = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`;

    loadingSpinner.style.display = 'inline-block';

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === 'True') {
            displayResults(data.Search);
        } else {
            resultsContainer.innerHTML = '<p>No results found</p>';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        resultsContainer.innerHTML = '<p>Error fetching data. Please try again later.</p>';
    } finally {
        loadingSpinner.style.display = 'none';
    }
}

function displayResults(movies: Movie[]): void {
    resultsContainer.innerHTML = movies.map(movie => {
        return `
            <div class="movie">
                <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'default-poster.jpg'}" alt="${movie.Title}">
                <h3>${movie.Title} (${movie.Year})</h3>
                <p>${movie.Type}</p>
            </div>
        `;
    }).join('');
}