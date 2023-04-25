import aboutPage from "../components/aboutPage"
import contactPage from "../components/contactPage"
import introduce from "../components/introduce"
import projectPage from "../components/projectPage"


const HomePage = () => {

  return `
    <div>
    <div class="header">
        <nav class="w-full md:fixed   border-gray-200 dark:bg-gray-900 text-[20px]">
          <div class="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" class="flex items-center">
              <img src="https://res.cloudinary.com/dwp7umncy/image/upload/v1682400916/profile/logoa_k4nxov.png"
                class="w-[80px] h-[40px] " alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap ">THieu</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="">
                <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul
                class="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="#home"
                    class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#about"
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">About</a>
                </li>
                <li>
                  <a href="#projects"
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                </li>
                <li>
                  <a href="#contact"
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div class="pt-[70px]" id="home">
      ${introduce()}
      </div>
      <div class="md:mt-[80px]" id="about">
      ${aboutPage()}
      </div>
      <div class="mt-[70px]" id="projects">
      ${projectPage()}
      </div>
      <div class="mt-[70px]" id="contact">
      ${contactPage()}
      </div>
      <footer class=" rounded-lg shadow dark:bg-gray-900 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-black sm:text-center dark:text-gray-400">© 2023 <a href=""
          class="hover:underline">Hieu™</a>. All Rights Reserved.</span>
        </div>
    </footer>
    </div>
    `
}

export default HomePage