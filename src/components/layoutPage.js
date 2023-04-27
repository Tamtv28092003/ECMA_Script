
const layoutPage = () => {
  return `
    <div class="flex h-screen flex-col justify-between border-e bg-white">
    <div class="px-4 py-6">
    <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
    <a href="#" class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
      <img alt="Man" src="https://res.cloudinary.com/dwp7umncy/image/upload/v1682257371/profile/IMG_0880_raktky.jpg"
        class="h-10 w-10 rounded-full object-cover" />

      <div>
        <p class="text-xs">
          <strong class="block font-medium">Trương Minh Hiếu</strong>

          <span> admin@gmail.com </span>
        </p>
      </div>
    </a>
  </div>

      <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-1">
        <a href="/admin"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>

          <span class="text-sm font-medium"> Projects </span>
        </a>

        <a href="/admin/image"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>

          <span class="text-sm font-medium"> Image </span>
        </a>

        <form action="/">
          <button type="submit"
            class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>

            <span class="text-sm font-medium"> Logout </span>
          </button>
        </form>
      </nav>
    </div>

    
  </div>
  `
}

export default layoutPage