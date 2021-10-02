export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const DELETE_BUTTON_PREFIX = 'delete-button-';

const titleInput = document.getElementById("title_input");
const descriptionInput = document.getElementById("description_input");
const lengthInput = document.getElementById("length_input");
const imdbInput = document.getElementById("imdb_input");

const itemsContainer = document.getElementById("items_container");

const itemTemplate = ({ id, title, description, length, imdb }) => `
<li id="${id}" class="item-card">
  <img
    src="https://naurok-test.nyc3.cdn.digitaloceanspaces.com/32897/images/252092_1585632086.jpg"
    class="item-container__image" alt="card">
  <div>
    <h5>${title}</h5>
    <p>${description}</p>
    <p>Length: ${length} minutes.</p>
    <p>IMDB: ${imdb} reviews.</p>
    <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="default_button">
      Edit
    </button>
    <button id="${DELETE_BUTTON_PREFIX}${id}" type="button" class="default_button">
      Delete
    </button>
  </div>
</li>`;

export const addItemToPage = ({id, title, description, length, imdb }, onEditItem, onDeleteItem) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, title, description, length, imdb })
  );

  const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
  const deleteButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`);

  editButton.addEventListener("click", onEditItem);
  deleteButton.addEventListener("click", onDeleteItem);
};

export const renderItemsList = (items, onEditItem, onDeleteItem) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item, onEditItem, onDeleteItem);
  }
};

export const clearInputs = () => {
  titleInput.value = "";
  descriptionInput.value = "";
  lengthInput.value = "";
  imdbInput.value = "";
};

export const getInputValues = () => {
  return {
    title: titleInput.value,
    description: descriptionInput.value,
    length: lengthInput.value,
    imdb: imdbInput.value,
  };
};