"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const searchInput = document.getElementById('search');
const resultsContainer = document.getElementById('results');
const loadingSpinner = document.getElementById('loading');
searchInput.addEventListener('input', function () {
    const query = searchInput.value.trim();
    if (query.length > 0) {
        fetchMovies(query);
    }
    else {
        resultsContainer.innerHTML = '';
    }
});
function fetchMovies(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiKey = '94438afb';
        const url = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`;
        loadingSpinner.style.display = 'inline-block';
        try {
            const response = yield fetch(url);
            const data = yield response.json();
            if (data.Response === 'True') {
                displayResults(data.Search);
            }
            else {
                resultsContainer.innerHTML = '<p>No results found</p>';
            }
        }
        catch (error) {
            console.error('Error fetching data:', error);
            resultsContainer.innerHTML = '<p>Error fetching data. Please try again later.</p>';
        }
        finally {
            loadingSpinner.style.display = 'none';
        }
    });
}
function displayResults(movies) {
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
