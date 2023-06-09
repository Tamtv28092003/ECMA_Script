import { getAll } from "../api/product"
import { useEffect, useState } from "../libs"

const projectPage = () => {
  const [products, setproduct] = useState([])
  useEffect(() => {
    getAll().then(({ data: user }) => setproduct(user))
  }, [])
  return `
    <div>
    <h1
      class="text-center py-[20px] font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-black to-black">
      Projects
    </h1>
    <div class="md:grid grid-cols-3 mt-[40px] ">
      ${products.map((item) => {
    return ` 
      <div class="flex justify-center items-center py-[20px] ">
        <article class=" w-11/12 rounded-lg border border-gray-100 shadow-sm hover:shadow-lg">
          <img alt="Office"
            src="${item.img}"
            class="h-56 w-full object-cover rounded-lg" />

          <div class="p-4 sm:p-6">
            <a href="#">
              <h3 class="text-lg font-medium text-gray-900">
                ${item.name}
              </h3>
            </a>

            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              ${item.text}
            </p>

            <a href="products/${item.id}"
              class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
              Find out more

              <span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                &rarr;
              </span>
            </a>
          </div>
        </article>
      </div>
      `
  }).join('')}
    </div>
  </div>
  `
}

export default projectPage