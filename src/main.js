import { router, render } from "./libs/index";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import aboutHome from "./pages/admin/about/aboutHome";
import aboutUpdatePage from "./pages/admin/about/aboutUpdate";
import introlerHome from "./pages/admin/introler/introlerHome";
import introlerUpdate from "./pages/admin/introler/introlerUpdate";
import projectAdd from "./pages/admin/projects/projectAdd";
import projectHome from "./pages/admin/projects/projectHome";
import projectUpdate from "./pages/admin/projects/projectUpdate";

const app = document.querySelector('#app');
router.on('/', () => {
    render(HomePage, app)
})

router.on("/products/:id", (params) => {
    render(function () {
        return ProductPage(params)
    }, app)
})

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

router.on('/admin/introler', () => {
    render(introlerHome, app)
})

router.on("/admin/introler/update/:id", (params) => {
    render(function () {
        return introlerUpdate(params)
    }, app)
})

//About admin 
router.on('/admin/about', () => {
    render(aboutHome, app)
})

router.on("/admin/about/update/:id", (params) => {
    render(function () {
        return aboutUpdatePage(params)
    }, app)
})


// dăng ki dang nhap
router.on('/signin', () => {
    render(SigninPage, app)
})
router.on('/signup', () => {
    render(SignupPage, app)
})

router.notFound(() => {
    render(NotFound, app)
})
router.resolve()