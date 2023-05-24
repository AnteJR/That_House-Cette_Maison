// FONCTIONS POUR GERER LE STYLE DU JEU
monStyle.addEventListener("click", () => changeStyles(styleOn));

function changeStyles(fromButton) {
    let whiteText = document.querySelectorAll(".whiteText"),
        shockText = document.querySelectorAll(".iAmShock"),
        regularText = document.querySelectorAll(".iAmRegular"),
        angerText = document.querySelectorAll(".iAmAngry"),
        bargainText = document.querySelectorAll(".iAmBargain"),
        sadText = document.querySelectorAll(".iAmSad"),
        acceptText = document.querySelectorAll(".iAmAccept"),
        buttonGo = document.querySelectorAll(".buttonGo"),
        buttonAlert = document.querySelectorAll(".buttonAlert"),
        buttonGoForward = document.querySelectorAll(".buttonGoForward"),
        inputCommand = document.querySelectorAll(".inputCommand"),
        myFlicker = document.querySelectorAll(".flicker"),
        divBlue = document.querySelectorAll(".blue"),
        divRed = document.querySelectorAll(".red"),
        flag = document.querySelectorAll(".flag");
    
    if (fromButton == true) {
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
        styleOn = false;
    }
    else {
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
        styleOn = true;
    }
}

function applyStyles (onOff) {
    let whiteText = document.querySelectorAll(".whiteText"),
        shockText = document.querySelectorAll(".iAmShock"),
        regularText = document.querySelectorAll(".iAmRegular"),
        angerText = document.querySelectorAll(".iAmAngry"),
        bargainText = document.querySelectorAll(".iAmBargain"),
        sadText = document.querySelectorAll(".iAmSad"),
        acceptText = document.querySelectorAll(".iAmAccept"),
        buttonGo = document.querySelectorAll(".buttonGo"),
        buttonAlert = document.querySelectorAll(".buttonAlert"),
        buttonGoForward = document.querySelectorAll(".buttonGoForward"),
        inputCommand = document.querySelectorAll(".inputCommand"),
        myFlicker = document.querySelectorAll(".flicker"),
        divBlue = document.querySelectorAll(".blue"),
        divRed = document.querySelectorAll(".red"),
        flag = document.querySelectorAll(".flag");
    
    if (onOff == false) {
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
    else {
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
}