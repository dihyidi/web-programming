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
  </div>
</li>`;

export const addItemToPage = ({ _id: id, title, description, length, imdb }) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, title, description, length, imdb })
  );
};

export const renderItemsList = (items) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item);
  }
};