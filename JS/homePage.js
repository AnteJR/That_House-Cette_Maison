/*
    CETTE FONCTION CHARGE LA PAGE D'ACCUEIL. CECI EST POUR
    PERMETTRE DE LANCER LES MUSIQUES ET LES SONS SANS PASSER
    PAR UN HEADER HTTP.
*/
function homePage() {
    myGameTxt.isMenu = true;
    // un peu de style
    gameDiv.style.textAlign = "center";
    document.getElementById("screenBottom").style.display = "none";
    document.getElementById("titleGame").style.fontSize = "2em";

    // on insère le texte à afficher
    gameDiv.innerHTML = `<br />
        <div class= "wobblyTxt textDiv whiteText">Ma Maison</div>
        <div class= "textDiv whiteText"> est une aventure textuelle traitant du deuil et de l'acceptation de sa propre mort.</div><br />
        <div class= "textDiv whiteText"> Ce jeu a été développé dans le cadre du cours "Publications Numériques", donné par Isaac Pante à l'Université de Lausanne durant le semestre d'automne 2021.</div><br /><br />
        <input type="button" value="Jouer" class="buttonGo" id="buttonStartGame"/>`;

    // on crée un eventListener pour que le bouton mène au menu du jeu
    document.getElementById("buttonStartGame").addEventListener("click", function () {
        clickButton();
        document.getElementById("titleGame").style.fontSize = "1.25em";
        myGameTxt.isMenu = false;
        gameLaunch();
        document.body.requestFullscreen().then(function() {
            // element has entered fullscreen mode successfully
        })
        .catch(function(error) {
            // element could not enter fullscreen mode
        });;
    });
}

homePage();