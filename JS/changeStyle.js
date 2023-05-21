// FONCTIONS POUR GERER LE STYLE DU JEU
monStyle.addEventListener("click", () => {
    if (isDefault == true) deleteStyles(true);
    else if (isDefault == false) putBackStyles(true);
});

function deleteStyles(fromButton) {
    if (fromButton == true) isDefault = false;
    let whiteText = document.querySelectorAll(".whiteText");
    let shockText = document.querySelectorAll(".iAmShock");
    let regularText = document.querySelectorAll(".iAmRegular");
    let angerText = document.querySelectorAll(".iAmAngry");
    let bargainText = document.querySelectorAll(".iAmBargain");
    let sadText = document.querySelectorAll(".iAmSad");
    let acceptText = document.querySelectorAll(".iAmAccept");
    let buttonGo = document.querySelectorAll(".buttonGo");
    let buttonAlert = document.querySelectorAll(".buttonAlert");
    let buttonGoForward = document.querySelectorAll(".buttonGoForward");
    let inputCommand = document.querySelectorAll(".inputCommand");
    let myFlicker = document.querySelectorAll(".flicker");
    let divBlue = document.querySelectorAll(".blue");
    let divRed = document.querySelectorAll(".red");
    let flag = document.querySelectorAll(".flag");
    myFlicker[0].style.display = "none";
    whiteText.forEach((e) => e.style.animation = "none");
    shockText.forEach((e) => e.style.animation = "none");
    regularText.forEach((e) => e.style.animation = "none");
    angerText.forEach((e) => e.style.animation = "none");
    bargainText.forEach((e) => e.style.animation = "none");
    sadText.forEach((e) => e.style.animation = "none");
    acceptText.forEach((e) => e.style.animation = "none");
    buttonGo.forEach((e) => e.style.animation = "none");
    buttonAlert.forEach((e) => e.style.animation = "none");
    buttonGoForward.forEach((e) => e.style.animation = "none");
    inputCommand.forEach((e) => e.style.animation = "none");
    divBlue.forEach((e) => e.style.animation = "none");
    divRed.forEach((e) => e.style.animation = "none");
    flag.forEach((e) => {
        const mesChildren = e.children;
        for (const c of mesChildren) {
            if (c.classList.contains("white")) {
                c.addEventListener("mouseover", (ev) => {
                    ev.style.animation = "none";
                });
                c.addEventListener("mouseleave", (ev) => {
                    ev.style.animation = "none";
                });
            }
        };
    });
}

function putBackStyles(fromButton) {
    if (fromButton == true) isDefault = true;
    let whiteText = document.querySelectorAll(".whiteText");
    let shockText = document.querySelectorAll(".iAmShock");
    let regularText = document.querySelectorAll(".iAmRegular");
    let angerText = document.querySelectorAll(".iAmAngry");
    let bargainText = document.querySelectorAll(".iAmBargain");
    let sadText = document.querySelectorAll(".iAmSad");
    let acceptText = document.querySelectorAll(".iAmAccept");
    let buttonGo = document.querySelectorAll(".buttonGo");
    let buttonAlert = document.querySelectorAll(".buttonAlert");
    let buttonGoForward = document.querySelectorAll(".buttonGoForward");
    let inputCommand = document.querySelectorAll(".inputCommand");
    let myFlicker = document.querySelectorAll(".flicker");
    let divBlue = document.querySelectorAll(".blue");
    let divRed = document.querySelectorAll(".red");
    let flag = document.querySelectorAll(".flag");
    myFlicker[0].style.display = "block";
    whiteText.forEach((e) => { e.style.animation = "textShadowWhite 1.033s infinite" });
    shockText.forEach((e) => { e.style.animation = "textShadowWhite 1.033s infinite" });
    regularText.forEach((e) => { e.style.animation = "textShadowWhite 1.033s infinite" });
    angerText.forEach((e) => { e.style.animation = "textShadowAngry 1.033s infinite" });
    bargainText.forEach((e) => { e.style.animation = "textShadowBargain 1.033s infinite" });
    sadText.forEach((e) => { e.style.animation = "textShadowDepression 1.033s infinite" });
    acceptText.forEach((e) => { e.style.animation = "textShadowAcceptance 1.033s infinite" });
    buttonGo.forEach((e) => { e.style.animation = "textShadowWhite 1.033s infinite" });
    buttonAlert.forEach((e) => { e.style.animation = "textShadowWhite 1.033s infinite" });
    buttonGoForward.forEach((e) => { e.style.animation = "textShadowWhite 1.033s infinite" });
    inputCommand.forEach((e) => { e.style.animation = "textShadowWhite 1.033s infinite" });
    divBlue.forEach((e) => e.style.animation = "boxShadowDepression 1.033s infinite");
    divRed.forEach((e) => e.style.animation = "boxShadowAngry 1.033s infinite");
    flag.forEach((e) => {
        const mesChildren = e.children;
        for (const c of mesChildren) {
            if (c.classList.contains("white")) {
                c.addEventListener("mouseover", (ev) => {
                    ev.style.animation = "boxShadowWhite 1.033s infinite";
                });
                c.addEventListener("mouseleave", (ev) => {
                    ev.style.animation = "none";
                });
            }
        };
    });
}