function generateotp(){
    let otp=Math.floor(Math.random()*9000+1000)
    document.getElementById('input').value=otp
    
}