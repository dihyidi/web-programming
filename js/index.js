import {
  getInputValues,
  renderItemsList,
  EDIT_BUTTON_PREFIX,
  DELETE_BUTTON_PREFIX,
  clearInputs
} from "./dom-util.js"
import { deleteFilm, getAllFilms, postFilm, updateFilm } from "./api.js";

const formFields = document.getElementsByClassName("form-control");
const submitButton = document.getElementById("submit_button");

const searchButton = document.getElementById("search_button");
const clearSearchButton = document.getElementById("clear_search_button");
const searchInput = document.getElementById("search_input");
const sortCheckbox = document.getElementById("sort_checkbox");
const countButton = document.getElementById("count_button");

let films = [];

const onEditItem = async (e) => {
  if (!validateInput()) {
    return;
  };

  const itemId = e.target.id.replace(EDIT_BUTTON_PREFIX, "");
  

  await updateFilm(itemId, getInputValues());
  clearInputs();

  refetchAllFilms();
};

const onDeleteItem = async (e) => {
  const itemId = e.target.id.replace(DELETE_BUTTON_PREFIX, "");

  await deleteFilm(itemId);

  refetchAllFilms();
}

export const refetchAllFilms = async () => {
  const allFilms = await getAllFilms();

  films = allFilms.sort((a,b) =>b.title.localeCompare(a.title));

  renderItemsList(films, onEditItem, onDeleteItem);
};

const validateInput = () => {
  if (Array.from(formFields).filter(x => x.value.trim() == "").length != 0) {
    alert("Please fill out required fields"); 
    return false;
  }
  return true;
}

submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  if (!validateInput()) {
    return;
  };

  const { title, description, length, imdb } = getInputValues();

  clearInputs();

  await postFilm({ title, description, length, imdb });
  refetchAllFilms();
});

searchButton.addEventListener("click", () => {
  const foundFilms = films.filter(
    (film) => film.title.search(searchInput.value) !== -1);
    
  renderItemsList(foundFilms, onEditItem, onDeleteItem);
});

clearSearchButton.addEventListener("click", () => {
  renderItemsList(films, onEditItem, onDeleteItem);

  searchInput.value = "";
});

sortCheckbox.addEventListener("change", function (e) {
    if (this.checked) {
        const sortedFilms = films.sort(
            (a, b) => parseFloat(a.imdb) - parseFloat(b.imdb));

        renderItemsList(sortedFilms, onEditItem, onDeleteItem);
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