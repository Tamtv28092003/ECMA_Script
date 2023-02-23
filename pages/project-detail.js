// import { getprojects } from "../api/listmenu";

import axios from "axios"
import { useEffect, useState } from "../libs"

// import { router } from "../libs";
const ProjectDetailPage = ({data: {id}}) => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3000/projects/${id}`)
        .then(({data}) => setData(data))
    },[])
    
    return `
    <h2><a href="/"><img class="w-[50px]" src="https://res.cloudinary.com/dwp7umncy/image/upload/v1677123183/return_sjpmn1.png" alt=""></a></h2>
    <h1 class="text-center font-[600] text-[30px]">PROJECT DETAIL</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 mt-10">
    <div class="ml-[100px]">
      <img  src="${data.img}" alt="">
    </div>
    <div class="mr-[100px] py-[80px]">
      <h3 class="text-2xl font-[800]">${data.name}</h3>
      <p>${data.text}</p>
    </div>
    </div>
    
        
    `
}

export default ProjectDetailPage