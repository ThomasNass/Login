const logInField = document.querySelector("#logInField");
const userName = document.querySelector("#userName");
const pw = document.querySelector("#pw");
const logInBtn = document.querySelector("#logInBtn");

const correctN = "test";
const correctPw = "1234";

logInBtn.addEventListener("click", () => {
    checkUser();
})

function checkUser() {
    if (userName.value === correctN && pw.value === correctPw) {
        localStorage.setItem("name", userName.value);
        localStorage.setItem("password", pw.value);
        console.log("success")
    }
    else {
        console.log("you've entered the wrong credentials");
    }
}

