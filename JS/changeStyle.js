// FONCTIONS POUR GERER LE STYLE DU JEU
document.getElementById("monStyle").addEventListener("click", () => {
    if (isDefault == true) deleteStyles(true);
    else if (isDefault == false) putBackStyles(true);
});

function deleteStyles(fromButton) {
    if (fromButton == true) isDefault = false;
    let whiteText = document.querySelectorAll(".whiteText");
    let angerText = document.querySelectorAll(".iAmAnger");
    let bargainText = document.querySelectorAll(".iAmBargain");
    let sadText = document.querySelectorAll(".iAmDepression");
    let acceptText = document.querySelectorAll(".iAmAcceptance");
    let buttonGo = document.querySelectorAll(".buttonGo");
    let buttonAlert = document.querySelectorAll(".buttonAlert");
    let buttonGoForward = document.querySelectorAll(".buttonGoForward");
    let inputCommand = document.querySelectorAll(".inputCommand");
    let myFlicker = document.querySelectorAll(".flicker");
    myFlicker[0].style.display = "none";
    whiteText.forEach((e) => { e.style.animation = "none" });
    angerText.forEach((e) => { e.style.animation = "none" });
    bargainText.forEach((e) => { e.style.animation = "none" });
    sadText.forEach((e) => { e.style.animation = "none" });
    acceptText.forEach((e) => { e.style.animation = "none" });
    buttonGo.forEach((e) => { e.style.animation = "none" });
    buttonAlert.forEach((e) => { e.style.animation = "none" });
    buttonGoForward.forEach((e) => { e.style.animation = "none" });
    inputCommand.forEach((e) => { e.style.animation = "none" });
}

function putBackStyles(fromButton) {
    if (fromButton == true) isDefault = true;
    let whiteText = document.querySelectorAll(".whiteText");
    let angerText = document.querySelectorAll(".iAmAnger");
    let bargainText = document.querySelectorAll(".iAmBargain");
    let sadText = document.querySelectorAll(".iAmDepression");
    let acceptText = document.querySelectorAll(".iAmAcceptance");
    let buttonGo = document.querySelectorAll(".buttonGo");
    let buttonAlert = document.querySelectorAll(".buttonAlert");
    let buttonGoForward = document.querySelectorAll(".buttonGoForward");
    let inputCommand = document.querySelectorAll(".inputCommand");
    let myFlicker = document.querySelectorAll(".flicker");
    myFlicker[0].style.display = "block";
    whiteText.forEach((e) => { e.style.animation = "textShadowWhite 1.033s infinite" });
    angerText.forEach((e) => { e.style.animation = "textShadowAngry 1.033s infinite" });
    bargainText.forEach((e) => { e.style.animation = "textShadowBargain 1.033s infinite" });
    sadText.forEach((e) => { e.style.animation = "textShadowDepression 1.033s infinite" });
    acceptText.forEach((e) => { e.style.animation = "textShadowAcceptance 1.033s infinite" });
    buttonGo.forEach((e) => { e.style.animation = "textShadowWhite 1.033s infinite" });
    buttonAlert.forEach((e) => { e.style.animation = "textShadowWhite 1.033s infinite" });
    buttonGoForward.forEach((e) => { e.style.animation = "textShadowWhite 1.033s infinite" });
    inputCommand.forEach((e) => { e.style.animation = "textShadowWhite 1.033s infinite" });
}