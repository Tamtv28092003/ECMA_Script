
import { getprojects } from "../api/listmenu"
import header from "../components/header"
import { useEffect, useState } from "../libs"


const projectpage = () => {
  const [data, setdata] = useState([])
    useEffect(() => {
        getprojects()
            .then(({ data }) => setdata(data))
        
    },
    [])
  return `
  ${header()}
  <h1 class="text-center text-3xl font-[700] py-10">PROJECT PAGE</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
 ${data.map((project)=>{
  return`
  <div class="git_hub w-[350px] ml-10 bg-white  hover:opacity-80 ">
      <img src="${project.img}" alt="">
      <h5 class="text-center text-xl text-[#161212] font-[600]">${project.name}</h5>
      <p class="text-[#161212] w-[300px] ml-7">${project.text} </p>
      <br>
      <div class=" bg-zinc-400 w-[350px] text-center"><a class="font-[600] text-xl" href="/projectpage/${project.id}">View In Github</a></div>
  
      </div> 
  `
 }).join("")}
 </div> 
   
  }
`
}

export default projectpage