import { router, render } from "./libs/index";
import HomePage from "./pages/HomePage";




const app = document.querySelector('#app');

router.on('/', () => {
    render(HomePage, app)
})
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
// router.on('/admin/projects', () => {
//     render(Homeadmin, app)
// })
// router.on("/admin/projects/add", () => {
//     render(Addproject, app)
// })
// router.on("/admin/projects/:id/update", (params) => {
//     console.log(params);
//     render(function () {
//         return AdminProjectUpdatePage(params)
//     }, app)
// })

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