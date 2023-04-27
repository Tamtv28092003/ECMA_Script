import axios from "axios"
import { getAdd } from "../../../api/product"
import layoutPage from "../../../components/layoutPage"
import { router, useEffect } from "../../../libs"


const projectAdd = () => {

    useEffect(() => {
        const form = document.getElementById("form")
        const name = document.getElementById("name")
        const img = document.getElementById("img")
        const text = document.getElementById("text")

        form.addEventListener("submit", async (e) => {
            e.preventDefault()
            const url = await uplodFiles(img.files)
            const addnew = {
                name: name.value,
                img: url,
                text: text.value
            }
            getAdd(addnew).then(() => router.navigate("/admin"))
        })
    }, [])

    const uplodFiles = async (files) => {
        const CLOUD_NAME = "dwp7umncy";
        const PRESES_NAME = "profile";
        const FOLDER_NAME = "profile"
        const urls = [];
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

        const formData = new FormData();
        formData.append("upload_preset", PRESES_NAME);
        formData.append("folder", FOLDER_NAME);

        for (const file of files) {
            formData.append("file", file)
            const response = await axios.post(api, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            urls.push(response.data.secure_url)
        }
        return urls
    }

    return `
    <div class="flex justify-self-start ">
    <div>${layoutPage()}</div>
    <div>
        <div class=" ml-[350px] mt-[100px] w-full">
            <h1 class="text-center text-3xl font-[700]">Add New Projects</h1>
            <form action="" id="form">
            <div>
                <label for="">Name</label>
                <input type="text" id="name" "
                class="mt-1 w-full py-[7px] rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
            </div>
            <div class="my-[10px]">
                <label for="">image</label>
                <input type="file" multiple id="img"
                class="mt-1 w-full py-[7px] rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
            </div>
            <div>
                <label for="">Ngôn Ngữ</label>
                <input type="text" id="text" "
                class="mt-1 w-full py-[7px] rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
            </div>
            <button class="inline-block rounded border border-indigo-600 mt-5 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
            >Add New</button>
            </form>
        </div>
    </div>
    </div>
    `
}

export default projectAdd