import { getabout, getprofile, getprojects } from "../api/listmenu"
import contactpage from "../components/contact"
import header from "../components/header"
import projectpage from "./projects"
import { useEffect, useState } from "../libs"

const aboutpage = () => {
 
  
  const [data, setdata] = useState([])
    useEffect(() => {
        getprojects()
            .then(({ data }) => setdata(data))
        
    },
    [])
    const [dataabout, setdataabout] = useState({})
      useEffect(() => {
        getabout()
            .then(({ data }) => setdataabout(data)) 
        
    }, [])
    const [datauser, setdatauser] = useState({})
      useEffect(() => {
        getprofile()
            .then(({ data }) => setdatauser(data)) 
        
    }, [])
  
  return `
  
    
<div class="mx-auto px-4 ">
${header()}
<div class="lg:flex justify-between items-center ">
  <div class=" lg:ml-36 lg:w-[500px]">
 
    <h1 class=" text-6xl font-bold">${datauser.welcom}</h1>
    <p class="text-4xl font-normal mt-6">Tôi làm: <marquee class="w-[200px]">${datauser.jobs}</marquee>
    </p>
    <br><a class="rounded-[6px] border-blue-700 border-[4px] text-2xl" href="${datauser.file}">My resume></a>
  </div>

  <div class="img_intro mt-8">
  
    <img class="sm:w-[200px] lg:w-[300px] mr-32" src="${datauser.img}" alt="">
    
  </div>
</div>
<div class="main_content">
<div class="  mt-10 py-[104px]">
  <h1 class="text-center text-5xl font-[700] my-[64px]">ABOUT</h1>
  <div class="flex justify-between items-center border-[4px] border-zinc-600 lg:mx-32 lg:py-5">
    <div class="about_main_img border-red-500 border-[4px] h-[265px] lg:ml-40 ">
    
      <img class=" w-64 h-64 " src=" ${dataabout.img}" alt="">
    
      
    </div>
    <div class="about_main_text ml-20 w-[600px] mt-5 mr-32">
      <h4 class=" text-2xl font-[600] ">Một chút về tôi</h4>
      <p class="text-[18px]">${dataabout.text}</p>
      <p class="text-[18px]">${dataabout.text2}</p>
    </div>
  </div>
      


</div>

<div class="project ">
  <h1 class="text-center text-5xl font-[700] mt-10 my-[64px]">PROJECT</h1>
 
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  ${data.map((project)=>{
    return`    
    <div class="git_hub w-[350px] ml-10 bg-white hover:opacity-80 ">
      <img src="${project.img}" alt="">
      <h5 class="text-center text-xl text-[#161212] font-[600]">${project.name}</h5>
      <p class="text-[#161212] w-[300px] ml-7">${project.text} </p>
      <br>
      <div class=" bg-zinc-400 w-[350px] text-center"><a class="font-[600] text-xl" href="/projectpage/${project.id}">View In Github</a></div>
  
      </div> 
      `
    }).join("")}
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
    © 2023</p>
</div>
</div>
</div>
  `
}

export default aboutpage