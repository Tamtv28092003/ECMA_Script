import { getProject, updateProject } from "../../api/project";
import { router, useEffect, useState } from "../../libs";

const AdminProjectUpdatePage = ({data: {id}}) => {
    
   const [data,setData] = useState([])
    useEffect(()=>{
        

        getProject(id).then(({data}) => setData(data))
    },[])
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        const projectImg = document.getElementById("project-img");
        const projectText = document.getElementById("project-text");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            // tạo ra 1 object mới lấy dữ liệu từ form
            const newProject = {
                id: id,
                name: projectName.value,
                img: projectImg.value,
                text: projectText.value
            };
            

            updateProject(newProject).then(()=> router.navigate("/admin/projects"))


            
        });
    });
    return `<div class="container">
        <h1 class="text-center font-[800] text-2xl">UPDATE PROJECT</h1>
        <form class=" w-[800px] ml-[370px] mt-10 border-[#9de36c] border-[4px] rounded" action="" id="form-add">
            <div class="form-group mb-3 py-5">
                <label for="" class="form-label">Name:</label>
                <input type="text" class="form-control w-[740px] py-2 rounded" id="project-name" value="${data.name}"/>
            </div>
            <div class="form-group mb-3 py-5">
                <label for="" class="form-label">img:</label>
                <input type="text" class="form-control w-[755px] py-2 rounded" id="project-img" value="${data.img}"/>
            </div>
            <div class="form-group mb-3 py-5">
                <label for="" class="form-label">Text:</label>
                <input type="text" class="form-control w-[755px] py-2 rounded" id="project-text" value="${data.text}"/>
            </div>
            <div class="form-group text-center ">
                <button class="btn btn-primary bg-lime-200 rounded ">UPDATE</button>
            </div>
        </form>
    </div>`;
};

export default AdminProjectUpdatePage;