
const introduce = () => {
  return `
    <div class="md:flex justify-center  ">
    <div class="w-full text-center md:w-2/3 md:ml-[180px] md:mt-[60px]">
      <h1 class="my-4 text-5xl md:text-left text-center text-purple-800 font-bold leading-tight  slide-in-bottom-h1">
        Xin Chào, Tôi là Trương Hiếu</h1>
      <div class="">
        <p class="text-[30px] font-bold text-center md:text-left">Tôi Làm <span
            class="text-[35px] inline-block animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Web
            Devoloper</span></p>
      </div>
      <div class="text-center md:text-left">
      <button type="button"
        class=" text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-[20px] px-5 py-2.5   my-[10px] mb-2">My
        resume<span>></span></button>
        </div>
    </div>
    <!-- img -->
    <div class="w-full   overflow-y-hidden">
      <img class="md:w-[350px]  w-[200px] mx-auto hover:scale-105 duration-700 ease-in-out hover:rotate-6 rounded-lg slide-in-bottom "
        src="https://res.cloudinary.com/dwp7umncy/image/upload/v1682257371/profile/IMG_0880_raktky.jpg">
    </div>
  </div>
  `
}

export default introduce