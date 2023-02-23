
import axios from "axios";
import { getprojects } from "../../api/listmenu";
import { deleteProject } from "../../api/project";
import { router, useEffect, useState } from "../../libs"
const Homeadmin = () => {
    //   const[data,setData] = useState(projectList);
    const [data, setData] = useState([]);

    // Hàm được gọi lại sau khi return ( render ) ra ngoài màn hình
    useEffect(()=>{

        getprojects().then(({data})=> setData(data))
    },[])
    // chạy sau khi render
    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        console.log(btns);
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                console.log(id)
                const newData = data.filter((project) => {
                    return project.id != id;
                   
                })
                axios.delete(`http://localhost:3000/projects/${id}`)
                .then(()=>router.navigate("/admin/projects"))
                // Xóa ở local
                // setData(newData); //set lại data ở client
                // deleteProject(id)

            })
        }
    })
    return /*html*/`
    <h2><a href="/"><img class="w-[50px]" src="https://res.cloudinary.com/dwp7umncy/image/upload/v1677123183/return_sjpmn1.png" alt=""></a></h2>
    <h1 class=" text-center text-[27px] font-[600]">ADMIN Project</h1>
    <div class="flex justify-center ">
    <table class=" border-red-400 border-[2px] w-[900px] " >
      <thead class=" border-red-400 border-[1px] ">
        <tr>
          <th >#</th>
          <th>Project Name</th>
          <th>Action</th>
          <td><a class="bg-[#770bfa] rounded" href="/admin/projects/add">ADD</a></td>
        </tr>
      </thead>
      <tbody >
        ${data.map((project, index) => {
        return /*html*/`
            <tr>
              <td>${index + 1}</td>
              <td>${project.name}</td>
              <td class=" py-5 text-center">
                <button data-id="${project.id}" class="btn-remove bg-red-600 rounded">REMOVE</button>
                <a class="mx-10 bg-lime-400 rounded font-[600]" href="/admin/projects/${project.id}/update">EDIT</a>
              </td>
            </tr>
          `
    }).join("")}
      </tbody>
    </table>
    </div>
  `
}

export default Homeadmin