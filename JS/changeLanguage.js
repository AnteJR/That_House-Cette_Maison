document.getElementById("uk_flag").addEventListener("click", (e) => changeLang("ENG", false));
document.getElementById("fr_flag").addEventListener("click", (e) => changeLang("FR", false));

function changeLang(language, onLaunch) {
    if (language == LANG && !onLaunch) return;
    if (localStorage.lang != undefined && onLaunch) language = localStorage.lang;
    
    // setting language vars (in the APP and the LOCALSTORAGE)
    LANG = language;
    localStorage.lang = language;

    changeTxtOfPage(language);
}

function changeUI(lang) {
    monStyle.innerHTML = UITXT[lang].HTMLUI.visuals;
    title.innerHTML = UITXT[lang].HTMLUI.titleGame;
    monInput.placeholder = UITXT[lang].HTMLUI.input;
    titleTxt(title.innerHTML);

    document.getElementById("commandList").innerHTML = UITXT[lang].HTMLUI.commandList;

    document.getElementById("lookC").firstChild.innerHTML = UITXT[lang].HTMLUI.commands.look;
    document.getElementById("lookC").dataset.command = UITXT[lang].HTMLUI.datasets.look;
    document.getElementById("useC").firstChild.innerHTML = UITXT[lang].HTMLUI.commands.use;
    document.getElementById("useC").dataset.command = UITXT[lang].HTMLUI.datasets.use;
    document.getElementById("goC").firstChild.innerHTML = UITXT[lang].HTMLUI.commands.go;
    document.getElementById("goC").dataset.command = UITXT[lang].HTMLUI.datasets.go;
    document.getElementById("leaveC").firstChild.innerHTML = UITXT[lang].HTMLUI.commands.leave;
    document.getElementById("leaveC").dataset.command = UITXT[lang].HTMLUI.datasets.leave;
    document.getElementById("hitC").firstChild.innerHTML = UITXT[lang].HTMLUI.commands.hit;
    document.getElementById("hitC").dataset.command = UITXT[lang].HTMLUI.datasets.hit;
    document.getElementById("inspectC").firstChild.innerHTML = UITXT[lang].HTMLUI.commands.inspect;
    document.getElementById("inspectC").dataset.command = UITXT[lang].HTMLUI.datasets.inspect;
    document.getElementById("waitC").firstChild.innerHTML = UITXT[lang].HTMLUI.commands.wait;
    document.getElementById("waitC").dataset.command = UITXT[lang].HTMLUI.datasets.wait;
    document.getElementById("acceptC").firstChild.innerHTML = UITXT[lang].HTMLUI.commands.accept;
    document.getElementById("acceptC").dataset.command = UITXT[lang].HTMLUI.datasets.accept;

    document.title = UITXT[lang].HTMLUI.titlePage;
}

function changeTxtOfPage(l) {
    if (MYGAME.state == "homepage") {
        gameDiv.innerHTML = `<br />
            <div class= "wobblyTxt textDiv whiteText">${UITXT[LANG].home.title}</div>
            <div class= "textDiv whiteText"> ${UITXT[LANG].home.paragraph1}</div><br /><br />
            <div class= "textDiv whiteText">${UITXT[LANG].home.paragraph2}</div><br /><br />
            <input type="button" value="${UITXT[LANG].buttons.play}" class="buttonGo" id="buttonStartGame" style="opacity:0;"/>`;

        let monBtn = document.getElementById("buttonStartGame");

        // on crée un eventListener pour que le bouton mène au menu du jeu
        monBtn.addEventListener("click", function () {
            clickButton();
            title.style.fontSize = "1.50em";
            gameLaunch();
        });

        setTimeout(() => displayFade(75, 0.01, monBtn), 2000);
        displayGameText();
        changeUI(l)
    }
    else if (MYGAME.state == "menu") {
        gameDiv.innerHTML = `<div class="startButton textDiv bigTextDiv whiteText menuTxt" style="animation-delay: 0s">~~~ ${UITXT[LANG].menu.new} ~~~</div><br/><br/><div class="continueButton textDiv bigTextDiv whiteText menuTxt" style="animation-delay: 1s">~~~ ${UITXT[LANG].menu.cont} ~~~</div><br/><br/><div class="aboutButton textDiv bigTextDiv whiteText menuTxt" style="animation-delay: 2s">~~~ ${UITXT[LANG].menu.info} ~~~</div>`;
                    
        displayGameText();
        startUpSetUp();
        changeUI(l)
    }
    else if (MYGAME.state == "inGame") return;
}

// CETTE FONCTION AFFICHE LE TITRE
function titleTxt(text) {
    text = text.split("");
    let textToAppend = text.map((x, idx) => {
        if (x == " ") x = "&nbsp;"
        let delay = (idx) * 500;
        return `<span style="animation-delay: ${delay}ms">${x}</span>`;
    });
    title.innerHTML = textToAppend.join("");
}