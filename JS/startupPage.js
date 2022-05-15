/*
    CETTE FONCTION SERT À AFFICHER LA PAGE D'ACCUEIL
    ET SES TROIS OPTIONS : "NEW GAME", "CONTINUE" ET "ABOUT"
*/
function startUpSetUp() {
    // on revient en haut de la page
    window.scrollTo(0, 0);
    let optionsMenu = document.querySelectorAll(".bigTextDiv");
    optionsMenu.forEach((e) => {
        let maClass = e.className.split(" ")[0];
        e.addEventListener("click", function () {
            // pour lancer une nouvelle partie
            if (maClass == "startButton") {
                // reset le style, notamment en affichant le bas de l'écran
                gameDiv.style.textAlign = "left";
                gameDiv.style.marginTop = "0%";

                if (localStorage.username) {
                    gameDiv.innerHTML = `<br/><div class="textDiv whiteText">Il existe déjà une sauvegarde :</div> 
                    <ul style="list-style:none;">
                        <li>
                            <div class="textDiv whiteText">Acte ${parseInt(localStorage.act) + 1}</div>
                        </li>
                        <li>
                            <div class="textDiv whiteText">Nom : ${localStorage.username}</div>
                        </li>
                    </ul>
                    <div class="textDiv whiteText">Voulez-vous l'écraser et créer une nouvelle partie ?</div>
                    <br/>
                    <br/>
                    <input type="button" value="Écraser et continuer" class="buttonAlert" id="alertButton2"/>
                    <input type="button" value="Annuler" class="buttonAlert" id="alertButton3"/>`;

                    document.getElementById("alertButton2").addEventListener("click", () => {
                        clickButton();
                        localStorage.clear();
                        myGameTxt.currentAct = 0;
                        myGameTxt.currentScene = 7;
                        actOne(true);
                        playMusic("denial");
                    });

                    document.getElementById("alertButton2").addEventListener("mouseover", () => {
                        hoverButton();
                    });

                    document.getElementById("alertButton3").addEventListener("click", () => {
                        clickButton();
                        gameLaunch();
                    });

                    document.getElementById("alertButton3").addEventListener("mouseover", () => {
                        hoverButton();
                    });
                }
                else {
                    myGameTxt.currentAct = 0;
                    myGameTxt.currentScene = 7;
                    actOne(true);
                    playMusic("denial");
                }
            }
            // pour continuer sa partie
            else if (maClass == "continueButton") {
                if (localStorage.username) {
                    myGameTxt.currentAct = parseInt(localStorage.act);
                    myGameTxt.username = localStorage.username;
                    myGameTxt.currentScene = 5;
                    // reset le style, notamment en affichant le bas de l'écran, et c'est parti
                    gameDiv.style.textAlign = "left";
                    gameDiv.style.marginTop = "0%";
                    document.getElementsByClassName("bottomScreen")[0].style.display = "block";
                    actOne(true);
                    if (localStorage.act >= 1 && localStorage.act <=3) playMusic("denial");
                    if (localStorage.act == 4) playMusic("acceptance");
                }
            }
            // afficher des infos sur le jeu et son développeur (moi lol)
            else if (maClass == "aboutButton") {
                // reset le style, et ajout d'un bouton en bas de l'écran pour revenir en arrière
                gameDiv.style.textAlign = "left";
                gameDiv.style.marginTop = "5%";
                gameDiv.innerHTML = `<div class="textDiv wigglyTxt whiteText">Développeur : Joël Rimaz</div><br /><br /><div class="textDiv whiteText">Directeur : Isaac Pante</div><br/><br/><div class="textDiv whiteText">Pour le cours "Publications numériques"</div><br/><br/><div class="textDiv whiteText">Université de Lausanne</div><br/><br/><div class="textDiv whiteText">Github - AnteJR</div><br/><br/><input type="button" value="Retour" class="buttonAlert" id="buttonBack"/>`;
                document.getElementById("buttonBack").addEventListener("click", function () {
                    clickButton();
                    gameLaunch();
                });

                document.getElementById("buttonBack").addEventListener("mouseover", () => {
                    hoverButton();
                });
            }
        });
    })
}