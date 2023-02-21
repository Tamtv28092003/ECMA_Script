import { useEffect } from "../libs";


const Category = ({ categories, onClick }) => {
 useEffect(() => {
    const btns = document.querySelectorAll('.btn');
    for (const btn of btns) {
      btn.addEventListener('click', function () {
        const id = btn.dataset.id;
        onClick(id);
      })
    }
  })
  return `
    <div>${categories.map(category => {
    return `<button data-id="${category.id}" class="btn">${category.name}</button>`
  })}</div>
  `
}

export default Category