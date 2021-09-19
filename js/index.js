import { renderItemsList } from "./dom-util.js"
import { getAllFilms } from "./api.js";

const searchButton = document.getElementById("search_button");
const clearSearchButton = document.getElementById("clear_search_button");
const searchInput = document.getElementById("search_input");
const sortCheckbox = document.getElementById("sort_checkbox");
const countButton = document.getElementById("count_button");

let films = [];

export const refetchAllFilms = () => {
  const allFilms = getAllFilms();

  films = allFilms.sort((a,b) =>b.title.localeCompare(a.title));

  renderItemsList(films);
};

searchButton.addEventListener("click", () => {
  const foundFilms = films.filter(
    (film) => film.title.search(searchInput.value) !== -1);
    
  renderItemsList(foundFilms);
});

clearSearchButton.addEventListener("click", () => {
  renderItemsList(films);

  searchInput.value = "";
});

sortCheckbox.addEventListener("change", function (e) {
    if (this.checked) {
        const sortedFilms = films.sort(
            (a, b) => parseFloat(a.imdb) - parseFloat(b.imdb));

        renderItemsList(sortedFilms);
    }
    else {
        refetchAllFilms();
    }
});

countButton.addEventListener("click", () => {
    let sum = films.map(o => o.length).reduce((a, c) => { return a + c });
    document.getElementById("total-time").innerText = sum;
    console.log(sum);
})

// main code
refetchAllFilms();