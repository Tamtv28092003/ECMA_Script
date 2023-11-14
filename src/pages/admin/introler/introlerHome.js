import { introlAll, introlDelete } from "../../../api/introler"
import layoutPage from "../../../components/layoutPage"
import { useEffect, useState } from "../../../libs"

const introlerHome = () => {
    const [product, setproduct] = useState([])
    useEffect(() => {
        introlAll().then(({ data }) => setproduct(data))
    }, [])
    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove")
        console.log(btns);
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                const confirmed = confirm("Bạn có chắc chắn muốn xoá ?");
                if (confirmed) {
                    const addnew = product.filter((proitem) => {
                        return proitem.id != id
                    })
                    setproduct(addnew);
                    introlDelete(id);
                    alert('xoá thành công')
                }
            })
        }
    })

    return `
    <div class="flex justify-self-start ">
    <div class="">${layoutPage()}</div>
    <div class="overflow-x-auto w-full pt-[110px]">
    <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
      <thead class="ltr:text-left rtl:text-right">
        <tr>
          <th class="whitespace-nowrap w-[500px] px-4 py-2 font-medium text-gray-900">
            Image
          </th>
          <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Texl Home
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
          <th class="whitespace-nowrap  flex justify-center  py-2 font-medium text-gray-700">
          <img width="40%"  src=" ${item.img}" alt="">
          </th>
          <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
          ${item.text}
          </th>
          <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
          <a class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" href="/admin/introler/update/${item.id}"> <button>Edit</button> </a>
          
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

export default introlerHome