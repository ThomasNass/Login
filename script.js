const logInField = document.querySelector("#logInField");
const userName = document.querySelector("#userName");
const pw = document.querySelector("#pw");
const logInBtn = document.querySelector("#logInBtn");

const correctN = "test";
const correctPw = "1234";

//När användaren klickar på knappen så körs funktionen checkUser
logInBtn.addEventListener("click", () => {
    checkUser();
})

// funktion för att kolla om användarens angivna uppgifter stämmer.Om både namnet och lösenordet stämmer så lagras infon i localStorage.
// Oavsett om informationen stämmer eller ej så aktiveras funktionen buildSite().
function checkUser() {
    if (userName.value === correctN && pw.value === correctPw) {
        localStorage.setItem("name", userName.value);
        localStorage.setItem("password", pw.value);
    }
    buildSite();
}

// I funktionen buildSite() döljs inloggningssidan och istället visas en sida som baseras på vad användaren skrev in.
// Inloggningssidan och felsidan är egentligen likadan, men texten som berättar vad samt texten på knappen skiljer sig åt.
// Koden avgör om det är rätt eller fel beroende på om det finns ett namn lagrat i localStorage.
function buildSite() {
    logInField.style.display = "none";
    const newField = document.createElement("fieldset");
    const legend = document.createElement("legend");
    const logOutBtn = document.createElement("button");
    if (localStorage.getItem("name")) {
        legend.textContent = "Du är inloggad";
        logOutBtn.textContent = "logga ut";
    }
    else {
        legend.textContent = "Du skrev in fel information";
        logOutBtn.textContent = "Gå tillbaka";
    }
    logOutBtn.addEventListener("click", () => {
        localStorage.clear();
        logInField.style.display = "block";
        newField.remove(newField);
    })
    document.body.appendChild(newField);
    newField.appendChild(legend);
    newField.appendChild(logOutBtn);
}
//Här görs en kontroll om det finns ett namn i localStorage.
//Om så är fallet så körs funktionen buildSite() och sidan byggs så att användaren är inloggad.
//Finns inget namn så laddas inloggningssidan.
if (localStorage.getItem("name")) {
    buildSite();
}