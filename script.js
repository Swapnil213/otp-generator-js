let btn = document.querySelector("#opt-btn");
let checkBtn = document.querySelector("#check-btn");
let generateOtpForm = document.querySelector(".otpform");
let checkOtpForm = document.querySelector(".checkform");
let userOtp = document.querySelector("#user-otp");
let registerBtn = document.querySelector("#register");
let userNumber = document.querySelector("#number");
let otp = 0;

btn.addEventListener("click", () => {
    console.log(userNumber.value.length);
    if (userNumber.value.length == 10) {
        otp = Math.floor(Math.random() * 10000);
        console.log(otp);
        alert("OTP Generated");
        // generateOtpForm.style.display = "none";
        checkOtpForm.style.display = "flex";
    }
    else {
        alert("Number should be of length 10");
    }
});

checkBtn.addEventListener("click", () => {
    if (userOtp.value == otp) {
        alert("Correct");
        registerBtn.removeAttribute("disabled");
    }
    alert("incorrect")
});