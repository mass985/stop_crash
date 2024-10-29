// تأكيد تسجيل الدخول
function login() {
    const idInput = document.getElementById("idInput").value;
    const passwordInput = document.getElementById("passwordInput").value;

    if (idInput.length === 10 && passwordInput === "ONE23DZ") {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("startScreen").style.display = "flex";
    } else {
        document.getElementById("loginMessage").innerText = "Incorrect password! Please try again.";
    }
}

// بدء اللعبة
function startGame() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("waitingScreen").style.display = "flex";
    let randomTime = Math.floor(Math.random() * 6000) + 1000; // 1 to 7 seconds

    setTimeout(() => {
        document.getElementById("waitingScreen").style.display = "none";
        document.getElementById("stopScreen").style.display = "flex";
    }, randomTime);
}

// إعادة اللعبة
function resetGame() {
    document.getElementById("stopScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "flex";
}
