import contactpage from "./components/contact";
import { router,render } from "./libs";
import aboutpage from "./pages/about";
import Homeadmin from "./pages/admin/homeadmin";
import Addproject from "./pages/admin/project-add";
import AdminProjectUpdatePage from "./pages/admin/update";
import login from "./pages/login/login";
import ProjectDetailPage from "./pages/project-detail";
import projectpage from "./pages/projects";


const app = document.querySelector('#app');

router.on('/',()=>{
    render(aboutpage,app)
})
router.on('/projectpage',()=>{
    render(projectpage,app)
})
router.on("/projectpage/:id",(params)=>{
    // console.log(params);
render(function(){
return ProjectDetailPage(params)},app)
})
router.on('/contactpage',()=>{
    render(contactpage,app)
})
router.on('/admin/projects',()=>{
    render(Homeadmin,app)
})
router.on("/admin/projects/add",()=>{
    render(Addproject,app)
})
router.on("/admin/projects/:id/update",(params)=>{
    console.log(params);
    render(function(){
        return AdminProjectUpdatePage(params)
    },app)
})

// router.on("/projectpage/:id",(params)=>{
//      console.log(params);
//     render(function(){
//         return ProjectDetailPage(params)
//     },app)
// })
router.on("/login",()=>{
    render(login,app)
})
router.resolve()