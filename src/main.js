import layoutPage from "./components/layoutPage";
import { router, render } from "./libs/index";
import HomePage from "./pages/HomePage";
import projectAdd from "./pages/admin/projects/projectAdd";
import projectHome from "./pages/admin/projects/projectHome";
import projectUpdate from "./pages/admin/projects/projectUpdate";




const app = document.querySelector('#app');

router.on('/', () => {
    render(HomePage, app)
})
// router.on('/admin', () => {
//     render(layoutPage, app)
// })
// router.on('/projectpage', () => {
//     render(projectpage, app)
// })
// router.on("/projectpage/:id", (params) => {
//     // console.log(params);
//     render(function () {
//         return ProjectDetailPage(params)
//     }, app)
// })
// router.on('/contactpage', () => {
//     render(contactpage, app)
// })
router.on('/admin', () => {
    render(projectHome, app)
})
router.on("/admin/projects/add", () => {
    render(projectAdd, app)
})
router.on("/admin/projects/update/:id", (params) => {
    render(function () {
        return projectUpdate(params)
    }, app)
})

// router.on("/projectpage/:id",(params)=>{
//      console.log(params);
//     render(function(){
//         return ProjectDetailPage(params)
//     },app)
// })
// router.on("/login", () => {
//     render(login, app)
// })
router.resolve()