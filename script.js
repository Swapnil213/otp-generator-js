let btn = document.querySelector("#opt-btn");
let checkBtn = document.querySelector("#check-btn");
let generateOtpForm = document.querySelector(".otpform");
let checkOtpForm = document.querySelector(".checkform");
let userOtp = document.querySelector("#user-otp");
let otp = 0;

btn.addEventListener("click", () => {
    otp = Math.floor(Math.random() * 10000);
    console.log(otp);
    alert("OTP Generated");
    generateOtpForm.style.display = "none";
    checkOtpForm.style.display = "flex";
});

checkBtn.addEventListener("click", () => {
    if (userOtp.value == otp) {
        alert("Correct");
    }
    alert("incorrect")
});