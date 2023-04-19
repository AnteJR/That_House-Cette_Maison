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

    // on insère le texte à afficher
    gameDiv.innerHTML = `<br />
        <div class= "wobblyTxt textDiv whiteText">Cette Maison</div>
        <div class= "textDiv whiteText"> est une aventure textuelle traitant du deuil et de la mort. Même si le jeu contient des thèmes sérieux et difficiles, il est accessible à tous les âges.</div><br /><br />
        <div class= "textDiv whiteText"> Ce jeu est une oeuvre de fiction. Toute ressemblance avec des événements ou des personnes réelles est fortuite.</div><br /><br />
        <input type="button" value="Jouer" class="buttonGo" id="buttonStartGame" style="opacity:0;"/>`;

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
    gameDiv.style.textAlign = "center";
    gameDiv.style.marginTop = "10%";
    bottomScreen.style.display = "none";
    title.style.fontSize = "1.50em";

    gameDiv.innerHTML = `<div class="startButton textDiv bigTextDiv whiteText menuTxt" style="animation-delay: 0s">~~~ Nouvelle partie ~~~</div><br/><br/><div class="continueButton textDiv bigTextDiv whiteText menuTxt" style="animation-delay: 1s">~~~ Continuer ~~~</div><br/><br/><div class="aboutButton textDiv bigTextDiv whiteText menuTxt" style="animation-delay: 2s">~~~ Informations ~~~</div>`;
                    
    displayGameText();

    startUpSetUp();
    playMusic("menu");
}

homePage();