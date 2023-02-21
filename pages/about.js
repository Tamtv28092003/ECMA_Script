import { getprofile } from "../api/listmenu"
import contactpage from "../components/contact"
import header from "../components/header"
import projectpage from "../components/projects"
import { useEffect, useState } from "../libs"

const aboutpage = () => {
  
  const [data, setdata] = useState([])
    useEffect(() => {
        getprofile()
            .then(({ data }) => setdata(data))
    }, [])
  
  return `
  
    
<div class="mx-auto px-4 ">
${header()}
<div class="lg:flex justify-between items-center ">
  <div class=" lg:ml-36 lg:w-[500px]">
    <h1 class=" text-6xl font-bold">Xin chào,Tôi là Trương Hiếu</h1>
    <p class="text-4xl font-normal mt-6">Tôi làm: <marquee class="w-[200px]">Thiet Ke Website</marquee>
    </p>
    <br><a class="rounded-[6px] border-blue-700 border-[4px] text-2xl" href="">My resume></a>
  </div>

  <div class="img_intro mt-8">
  ${data.map((pro)=>{
    return`
    <img class="sm:w-[200px] lg:w-[300px] mr-32" src="${pro.img}" alt="">
    `
    }).join("")} 
  </div>
</div>
<div class="main_content">
<div class="  mt-10 py-[104px]">
  <h1 class="text-center text-5xl font-[700] my-[64px]">ABOUT</h1>
  <div class="flex justify-between items-center border-[4px] border-zinc-600 lg:mx-32 lg:py-5">
    <div class="about_main_img border-red-500 border-[4px] h-[265px] lg:ml-40 ">
    
      <img class=" w-64 h-64 " src="https://res.cloudinary.com/dwp7umncy/image/upload/v1676945557/face_qhgpih.jpg" alt="">
    
      
    </div>
    <div class="about_main_text ml-20 w-[600px] mt-5 mr-32">
      <h4 class=" text-2xl font-[600] ">Một chút về tôi</h4>
      <p class="text-[18px]">Hiện tại, mình đang là sinh viên kì 4 tại trường FPT Polytechnic. Mình bắt đầu học lập
        trình từ tháng 10 năm ngoái và phần lớn thời gian trong ngày mình đều ngồi học code. Ngoài việc học tập trên
        trường thì mình thường xuyên học thêm trên F8 Fullstack và trên các kênh Youtube như evondev, easy frontend,
        ...</p>
      <p class="text-[18px]">Mình thực sự thích code và thử thách bản thân học được nhiều cái mới vào mỗi ngày mới.
        Mục tiêu hiện tại của mình là trở thành một lập trình viên Frontend...</p>
    </div>
  </div>
</div>

<div class="project ">
  <h1 class="text-center text-5xl font-[700] mt-10 my-[64px]">PROJECT</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    <div class="git_hub w-[350px] ml-10  hover:bg-gray-50 ">
      <img src="https://res.cloudinary.com/dwp7umncy/image/upload/v1676946232/ass_ecma/git1_zvsg1y.jpg" alt="">
      <h5 class="text-center text-xl text-[#161212] font-[600]">Crypto Search Website</h5>
      <p class="text-[#161212] w-[300px] ml-7">Crypto Search Website helps us search information of current crypto
        including rank, price, market cap, volume 24h. </p>
      <br>
      <div class=" bg-zinc-400 w-[350px] text-center"><a class="font-[600] text-xl" href="">View In Github</a></div>
    </div>

    <div class="git_hub w-[350px] ml-10  hover:bg-gray-50 ">
      <img src="https://res.cloudinary.com/dwp7umncy/image/upload/v1676946372/ass_ecma/shop_gawifu.jpg" alt="">
      <h5 class="text-center text-xl text-[#161212] font-[600]">Crypto Search Website</h5>
      <p class="text-[#161212] w-[300px] ml-7">Crypto Search Website helps us search information of current crypto
        including rank, price, market cap, volume 24h. </p>
      <br>
      <div class=" bg-zinc-400 w-[350px] text-center"><a class="font-[600] text-xl" href="">View In Github</a></div>
    </div>

    <div class="git_hub w-[350px] ml-10  hover:bg-gray-50 ">
      <img src="https://res.cloudinary.com/dwp7umncy/image/upload/v1676946372/ass_ecma/shop_gawifu.jpg" alt="">
      <h5 class="text-center text-xl text-[#161212] font-[600]">Heard Shop</h5>
      <p class="text-[#161212] w-[300px] ml-7">Hades shop is inspired by the website of the hades brand. Hades shop is
        e-commerce website. </p>
      <br>
      <div class=" bg-zinc-400 w-[350px] text-center"><a class="font-[600] text-xl" href="">View In Github</a></div>
    </div>
  </div>
  <div class="project_all text-center mt-5 ">
    <a class="bg-stone-700 border-b-zinc-400 text-[#d4e8f1]" href="https://github.com/truonghieu1501">SEE MORE ON
      GITCODE>></a>
  </div>
</div>

<div class="contact ">
  <h1 class="text-center text-5xl font-[700] mt-10">CONTACT</h1>
  <h3 class=" text-center py-5 font-[800]">Currently active looking for Frontend Developer Internship</h3>
  <div class="flex justify-center items-center py-3">
    <a href="https://github.com/truonghieu1501"><img class="w-[70px] " src="https://res.cloudinary.com/dwp7umncy/image/upload/v1676946947/ass_ecma/github_cwj49v.png" alt=""></a>
    <a href="hieutmph22418@fpt.edu.vn"><img class="w-[70px] mx-4" src="https://res.cloudinary.com/dwp7umncy/image/upload/v1676946932/ass_ecma/email_tsmayg.png" alt=""></a>
    <a href=""><img class="w-[70px]" src="https://res.cloudinary.com/dwp7umncy/image/upload/v1676946919/ass_ecma/facebook_pliowr.png" alt=""></a>
  </div>
</div>

</div>

<div class="fotter">
<div class=" text-center mt-[64px] h-10">
  <p class="text-xl">Designed and made with ❤ by THieu
    © 2022</p>
</div>
</div>
</div>
  `
}

export default aboutpage