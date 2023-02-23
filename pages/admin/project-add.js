// import { projectList } from "../../data";
import { addProject } from "../../api/project";
import { router, useEffect } from "../../libs";

const Addproject= () => {
    // kiểm tra localStorage có dữ liệu không?
    // nếu có thì lấy dữ liệu
    // ngược lại thì gán mảng rỗng
    
    const projectList = JSON.parse(localStorage.getItem("projects"))||[];
    console.log(projectList);

    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        const projectimg = document.getElementById("project-img");
        const projecttext = document.getElementById("project-text");
        
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            // tạo ra 1 object mới lấy dữ liệu từ form
            const newProject = {
                // id: projectList.length + 1,
                name: projectName.value,
                img: projectimg.value,
                text: projecttext.value
            };
            
            addProject(newProject).then(()=> router.navigate("/admin/projects"))

        });
    });
    return `<div class="container w-full">
        <h1 class="text-center font-[700] text-[30px]">Thêm dự án</h1>
        <form class=" " action="" id="form-add">
            <div class=" text-center mt-5 border-[#5cf2a2] mx-[600px] py-5  border-[3px]">
                <div class="form-group mb-3">
                <div><label for="" class="form-label font-[500]">Name:</label>
                <input type="text" class="form-control" id="project-name" />
                </div> <br> 
                <div>
                <label for="" class="form-label font-[500]">img :</label>
                <input type="text" class="form-control" id="project-img"/>
                </div><br>
                <div>
                <label for="" class="form-label font-[500]">Text :</label>
                <input type="text" class="form-control" id="project-text"/> 
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary bg-[#aed5d8] rounded">ADD PROJECT</button>
            </div>
            </div>
        </form>
    </div>`;
};

export default Addproject;