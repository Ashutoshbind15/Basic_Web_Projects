const searchInput = document.querySelector("input");
const main = document.querySelector("main");

const requiredData = DUMMY_DATA.products.map((el) => {
  return {
    title: el.title,
    description: el.description,
  };
});

const display = (data) => {
  for (let el of data) {
    const item = document.createElement("div");
    const title = document.createElement("h2");
    const desc = document.createElement("p");
    title.classList.add("title");
    desc.classList.add("desc");
    desc.innerText = el.description;
    title.innerText = el.title;
    item.classList.add("item");
    main.appendChild(item);
    item.appendChild(title);
    item.appendChild(desc);
  }
};

let filteredData = requiredData;

display(filteredData);

function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

searchInput.addEventListener("input", (e) => {
  removeChildren(main);
  const v = e.target.value.toLowerCase();
  filteredData = requiredData.filter(
    (el) =>
      el.description.toLowerCase().includes(v) ||
      el.title.toLowerCase().includes(v)
  );
  display(filteredData);
});
