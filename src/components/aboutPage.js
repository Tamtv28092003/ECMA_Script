import { aboutAll } from "../api/about"
import { useEffect, useState } from "../libs"

const aboutPage = () => {
  const [products, setproduct] = useState([])
  useEffect(() => {
    aboutAll().then(({ data: user }) => setproduct(user))
  }, [])
  return `
  
    <div class="h-full w-full md:px-[130px] px-[50px]">
    <h1
      class="text-center font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-black to-black">
      About
    </h1>
    ${products.map((item) => {
    return `
    <div class="md:grid grid-cols-3  mt-[70px] ">
      <div class="w-full text-center ">
        <h2 class="text-2xl font-[600] flex justify-center items-center ">Một Chút Về Tôi</h2>
        <p class="italic font-sans mt-[20px] flex justify-center items-center">${item.text_1}</p>
        <p class="italic">${item.text_2}</p>
      </div>
      <div class="w-full my-[20px] md:my-0 flex justify-center items-center ">
        <img class="rounded-full w-[300px] "
          src="${item.img}" alt="">
      </div>
      <div class="w-full">
        <h2 class="text-2xl font-[600] flex justify-center items-center">Thông Tin Cơ Bản</h2>
        <div class="md:pl-[90px] md:pt-[15px] text-center md:text-left">
        <p class="my-2 w-full font-[500] ">Họ & Tên :<span class="md:ml-[40px]"> ${item.name}</span></p>
        <p class="my-2 font-[500] ">Học Vấn: <span class="md:ml-[52px]">${item.hocvan}</span> </p>
        <p class="my-2 font-[500]">Email: <span class="md:ml-[74px]">${item.email}</span></p>
        <p class="my-2 font-[500]">Địa chỉ: <span class="md:ml-[63px]">${item.diachi}</span></p>
        <p class="my-2 font-[500]">Nghề Nghiệp :<span class="md:ml-[13px]">${item.jober}</span></p>
        </div>
      </div>
    </div>
    `
  }).join('')}
  </div>
 
  `
}

export default aboutPage