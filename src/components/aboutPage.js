

const aboutPage = () => {
  return `
    <div class="h-full w-full md:px-[130px] px-[50px]">
    <h1
      class="text-center font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-black to-black">
      About
    </h1>
    <div class="md:grid grid-cols-3  mt-[70px] ">
      <div class="w-full text-center ">
        <h2 class="text-2xl font-[600] flex justify-center items-center ">Một Chút Về Tôi</h2>
        <p class="italic font-sans mt-[20px] flex justify-center items-center">Hiện tại, mình đang là sinh viên kì 6 tại trường FPT Polytechnic. Mình bắt
          đầu học lập trình từ năm 2021 ngoái và phần lớn thời gian trong ngày mình đều ngồi học code. Ngoài việc
          học tập trên trường thì mình thường xuyên học thêm trên F8 Fullstack và trên các kênh Youtube như evondev,
          easy frontend, ...</p>
        <p class="italic">Mình thực sự thích code và thử thách bản thân học được nhiều cái mới vào mỗi ngày mới. Mục
          tiêu hiện tại của mình là trở thành một lập trình viên Frontend...</p>
      </div>
      <div class="w-full my-[20px] md:my-0 flex justify-center items-center ">
        <img class="rounded-full w-[300px] "
          src="https://res.cloudinary.com/dwp7umncy/image/upload/v1682315024/profile/avt_ptofile_jlk0j5.jpg" alt="">
      </div>
      <div class="w-full">
        <h2 class="text-2xl font-[600] flex justify-center items-center">Thông Tin Cơ Bản</h2>
        <div class="md:pl-[90px] md:pt-[15px] text-center md:text-left">
        <p class="my-2 w-full font-[500] ">Họ & Tên :<span class="md:ml-[40px]"> Nguyễn văn A</span></p>
        <p class="my-2 font-[500] ">Học Vấn: <span class="md:ml-[52px]">FPT Polytechnic</span> </p>
        <p class="my-2 font-[500]">Email: <span class="md:ml-[74px]">email@gmail.com</span></p>
        <p class="my-2 font-[500]">Địa chỉ: <span class="md:ml-[63px]">Cầu Giấy - Hà Nội</span></p>
        <p class="my-2 font-[500]">Nghề Nghiệp :<span class="md:ml-[13px]"> Web devoloper</span></p>
        </div>
      </div>
    </div>
  </div>
  `
}

export default aboutPage