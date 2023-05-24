/*
    CETTE FONCTION CHARGE LA PAGE D'ACCUEIL. CECI EST POUR
    PERMETTRE DE LANCER LES MUSIQUES ET LES SONS SANS PASSER
    PAR UN HEADER HTTP.
*/
function homePage() {
    // un peu de style
    gameDiv.style.textAlign = "center";
    bottomScreen.style.display = "none";
    title.style.fontSize = "2em";
    monAlert.innerHTML += `<input type="button" value="${UITXT[LANG].buttons.back}" class="buttonAlert" id="alertButton" />`;
    MYGAME.state = "homepage";

    // appliquer les anims partout
    applyStyles(styleOn);

    //gestion de la langue
    changeLang(LANG, true);
    if (localStorage.lang) changeLang(localStorage.lang, true);

    // on insère le texte à afficher
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

    setTimeout(() => displayFade (75, 0.01, monBtn), 2000);
    displayGameText();
}

// CETTE FONCTION LANCE LE MENU
function gameLaunch() {
    mesFlags.style.display = "flex";
    gameDiv.style.textAlign = "center";
    gameDiv.style.marginTop = "10%";
    bottomScreen.style.display = "none";
    title.style.fontSize = "1.50em";
    MYGAME.state = "menu";
    gameDiv.style.fontSize = "1em";

    gameDiv.innerHTML = `<div class="startButton textDiv bigTextDiv whiteText menuTxt" style="animation-delay: 0s">~~~ ${UITXT[LANG].menu.new} ~~~</div><br/><br/><div class="continueButton textDiv bigTextDiv whiteText menuTxt" style="animation-delay: 1s">~~~ ${UITXT[LANG].menu.cont} ~~~</div><br/><br/><div class="aboutButton textDiv bigTextDiv whiteText menuTxt" style="animation-delay: 2s">~~~ ${UITXT[LANG].menu.info} ~~~</div>`;
                    
    displayGameText();

    startUpSetUp();
    playMusic("menu");
}

homePage();