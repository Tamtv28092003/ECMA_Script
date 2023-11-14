import { getOne } from "../api/product"
import { useEffect, useState } from "../libs"



const ProductPage = ({ data: { id } }) => {
    const [product, setproduct] = useState({})
    useEffect(() => {
        getOne(id).then(({ data }) => setproduct(data))
    }, [])
    return `

    <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="${product.img}">
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">PROJECT NAME</h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">${product.name}</h1>
                
                <p class="leading-relaxed">${product.text}</p>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                
                
                </div>
                <div class="">
                <button class=" ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">View on Git</button>
                <a
                class="group relative inline-flex items-center overflow-hidden rounded border  px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                href="/"
                >
                <span class="absolute -end-full transition-all group-hover:end-4">
                    <svg
                    class="h-5 w-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                    </svg>
                </span>
                
                <span class="text-sm font-medium transition-all group-hover:me-4">
                Back Home
                </span>
                </a>
                </div>
            </div>
            </div>
        </div>
    </section>
    `
}

export default ProductPage