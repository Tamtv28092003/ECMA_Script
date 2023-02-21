import contactpage from "./components/contact";
import projectpage from "./components/projects";
import { router,render } from "./libs";
import aboutpage from "./pages/about";


const app = document.querySelector('#app');

router.on('/',()=>{
    render(aboutpage,app)
})
router.on('/projectpage',()=>{
    render(projectpage,app)
})
router.on('/contactpage',()=>{
    render(contactpage,app)


})
router.resolve()