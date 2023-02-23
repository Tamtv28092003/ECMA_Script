const login =()=>{
    function check(){
        const email=document.getElementById('email');
        const pass = document.getElementById('pass');

        if(email.value=="" ||
            pass.value=="" ){
                alert('nhập đủ thông tin:');
                return false;
            }
         else{
          window.location="/";
         }   
    }
    


    return`
    <div class="container">
        <div class="">
          <h1>LOGIN</h1>
        </div>
        <form onsubmit="return check()">
          
          <div class="">
            <label for="">Email:</label>
            <input type="email" id="email" placeholder="Nhap email">
          </div>
          <div class="">
            <label for="">Password:</label>
            <input type="password" id="pass" placeholder="">
          </div>
          <div class="">
          <button type="submit">Login now</button>
          </div>
        </form>
      </div>
    `
}
export default login