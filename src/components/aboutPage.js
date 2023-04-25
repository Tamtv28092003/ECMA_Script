

const aboutPage = () => {
    return `
    <div class="h-full">
    <h1
      class="text-center font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-black to-black">
      About
    </h1>
    <div class="md:ml-[220px] ml-[100px] md:flex justify-center mt-[70px]">
      <div class="w-2/3">
        <h2 class="text-2xl font-[600] ">Một Chút Về Tôi</h2>
        <p class="italic font-sans mt-[20px]">Hiện tại, mình đang là sinh viên kì 4 tại trường FPT Polytechnic. Mình bắt
          đầu học lập trình từ tháng 10 năm ngoái và phần lớn thời gian trong ngày mình đều ngồi học code. Ngoài việc
          học tập trên trường thì mình thường xuyên học thêm trên F8 Fullstack và trên các kênh Youtube như evondev,
          easy frontend, ...</p>
        <p class="italic">Mình thực sự thích code và thử thách bản thân học được nhiều cái mới vào mỗi ngày mới. Mục
          tiêu hiện tại của mình là trở thành một lập trình viên Frontend...</p>
      </div>
      <div class="w-2/3 md:mx-[50px]">
        <img class="rounded-full w-[300px] "
          src="https://res.cloudinary.com/dwp7umncy/image/upload/v1682315024/profile/avt_ptofile_jlk0j5.jpg" alt="">
      </div>
      <div class="w-full">
        <h2 class="text-2xl font-[600]">Thông Tin Cơ Bản</h2>
        <p class="mt-[20px] font-[500]">Họ & Tên :<span class="ml-[40px]"> Trương Minh Hiếu</span></p>
        <p class="my-2 font-[500]">Học Vấn: <span class="ml-[52px]">FPT Polytechnic</span> </p>
        <p class="my-2 font-[500]">Email: <span class="ml-[74px]">hieuhop2003@gmail.com</span></p>
        <p class="my-2 font-[500]">Địa chỉ: <span class="ml-[63px]">Cầu Giấy - Hà Nội</span></p>
        <p class="my-2 font-[500]">Nghề Nghiệp :<span class="ml-[13px]"> Web devoloper</span></p>
      </div>
    </div>
  </div>
  `
}

export default aboutPage