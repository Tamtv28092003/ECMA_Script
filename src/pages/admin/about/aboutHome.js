import { aboutAll } from "../../../api/about"
import layoutPage from "../../../components/layoutPage"
import { useEffect, useState } from "../../../libs"

const aboutHome = () => {
  const [product, setproduct] = useState([])
  useEffect(() => {
    aboutAll().then(({ data }) => setproduct(data))
  }, [])
  
  return `
    <div class="flex justify-self-start ">
    <div class="">${layoutPage()}</div>
    <div class="overflow-x-auto w-full pt-[110px]">
    <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
      <thead class="ltr:text-left rtl:text-right">
        <tr>
           <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
               Text 1
           </th>
           <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
               Text 2
           </th>
          <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Name
          </th>
          <th class="whitespace-nowrap w-[150px] px-4 py-2 font-medium text-gray-900">
            Image
          </th>
          <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Học Vấn
          </th>
          <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Email
          </th>
          <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Địa Chỉ
          </th>
          <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Nghề Nghiệp
          </th>
          <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          <a
          class="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          href=""
        >
          <span class="text-sm font-medium transition-all group-hover:me-4">
            Extension
          </span>
        </a>
          </th>


          <th class="px-4 py-2"></th>
        </tr>
      </thead>

      <tbody class="ltr:text-left rtl:text-right">
      ${product.map((item) => {
    return `
        <tr>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                <p>${item.text_1.substring(0, 10)}..</p>
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            <p>${item.text_2.substring(0, 10)}..</p>
           </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                ${item.name}
            </th>
            <th class="whitespace-nowrap flex justify-center px-4 py-2 font-medium text-gray-900">
            <img width="80%" src=" ${item.img}" alt="">
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            ${item.hocvan}
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            ${item.email}
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            ${item.diachi}
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            ${item.jober}
            </th>
          <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
            <a class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" href="/admin/about/update/${item.id}"> <button>Edit</button> </a>
          </th>
        </tr>
        `
  }).join("")}
      </tbody>
    </table>
  </div>
    </div>
  `
}

export default aboutHome