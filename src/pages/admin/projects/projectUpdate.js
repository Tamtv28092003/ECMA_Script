import { getOne, getUpdate } from "../../../api/product"
import layoutPage from "../../../components/layoutPage"
import { router, useEffect, useState } from "../../../libs"

const projectUpdate = ({ data: { id } }) => {
    const [product, setproduct] = useState([])
    useEffect(() => {
        getOne(id).then(({ data }) => setproduct(data))
    }, [])
    console.log(product);

    useEffect(() => {
        const form = document.getElementById("form")
        const name = document.getElementById("name")
        const img = document.getElementById("img")
        const text = document.getElementById("text")

        form.addEventListener("submit", (e) => {
            e.preventDefault()
            const addnew = {
                id: id,
                name: name.value,
                img: img.value,
                text: text.value
            }
            getUpdate(addnew).then(() => router.navigate("/admin"))
        })
    })
    return `
    <div class="flex justify-self-start ">
    <div>${layoutPage()}</div>
    <div>
        <div class=" ml-[350px] mt-[100px] w-full">
            <h1 class="text-center text-3xl font-[700]">Update New Projects</h1>
            <form action="" id="form">
            <div>
                <label for="">Name</label>
                <input type="text" id="name" value="${product.name}"
                class="mt-1 w-full py-[7px] rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
            </div>
            <div class="my-[10px]">
                <label for="">image</label>
                <input type="text" id="img" value="${product.img}"
                class="mt-1 w-full py-[7px] rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
            </div>
            <div>
                <label for="">Ngôn Ngữ</label>
                <input type="text" id="text" value="${product.text}"
                class="mt-1 w-full py-[7px] rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
            </div>
            <button class="inline-block rounded border border-indigo-600 mt-5 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
            >Update New</button>
            </form>
        </div>
    </div>
    </div>
    `
}

export default projectUpdate