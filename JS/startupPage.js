// AFFICHER LA PAGE D'ACCUEIL ET GERER SES 3 OPTIONS (NOUVELLE PARTIE, CONTINUER, CREDITS)
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
                mesFlags.style.display="none";

                if (localStorage.username) {
                    gameDiv.innerHTML = `<br/><div class="textDiv whiteText">${UITXT[LANG].newGame.saveExists}</div> 
                    <ul style="list-style:none;">
                        <li>
                            <div class="textDiv whiteText">${UITXT[LANG].newGame.act} ${localStorage.act}</div>
                        </li>
                        <li>
                            <div class="textDiv whiteText">${UITXT[LANG].newGame.name} ${localStorage.username}</div>
                        </li>
                    </ul>
                    <div class="textDiv whiteText">${UITXT[LANG].newGame.deleteContinue}</div>
                    <br/>
                    <br/>
                    <input type="button" value="${UITXT[LANG].buttons.del}" class="buttonAlert" id="alertButton2"/>
                    <input type="button" value="${UITXT[LANG].buttons.back}" class="buttonAlert" id="alertButton3"/>`;

                    document.getElementById("alertButton2").addEventListener("click", () => {
                        clickButton();
                        localStorage.clear();
                        MYGAME.currentScene = 1;
                        displayMainText();
                        playMusic("denial");
                    });

                    document.getElementById("alertButton3").addEventListener("click", () => {
                        clickButton();
                        gameLaunch();
                    });

                    document.getElementById("alertButton2").addEventListener("mouseover", () => hoverButton());
                    document.getElementById("alertButton3").addEventListener("mouseover", () => hoverButton());

                    displayGameText();
                }
                else {
                    MYGAME.currentScene = 1;
                    displayMainText();
                    playMusic("denial");

                    displayGameText();
                }
                //getFS();
            }
            // pour continuer sa partie
            else if (maClass == "continueButton") {
                if (localStorage.username == undefined) {
                    e.style.opacity = "0.1";
                    return;
                }

                let joueur = MYGAME.player;
                joueur.currentAct = parseInt(localStorage.act);
                joueur.username = localStorage.username;
                joueur.shortName = localStorage.shortName;
                MYGAME.currentScene = 7;
                joueur.currentAct = 5;

                // reset le style, notamment en affichant le bas de l'écran, et c'est parti
                gameDiv.style.textAlign = "left";
                gameDiv.style.marginTop = "0%";
                document.getElementsByClassName("bottomScreen")[0].style.display = "block";

                if (localStorage.act >= 1 && localStorage.act <= 3) playMusic("denial");
                if (localStorage.act == 4) playMusic("acceptance");

                displayMainText();
                //getFS();
            }
            // afficher des infos sur le jeu et son développeur (moi lol)
            else if (maClass == "aboutButton") {
                // reset le style, et ajout d'un bouton en bas de l'écran pour revenir en arrière
                mesFlags.style.display="none";
                gameDiv.style.textAlign = "left";
                gameDiv.style.marginTop = "5%";
                gameDiv.innerHTML = `<div class="textDiv wigglyTxt whiteText">${UITXT[LANG].credits.dev}</div><br /><br />
                    <div class="textDiv whiteText">${UITXT[LANG].credits.others}</div><br /><br />
                    <div class="textDiv whiteText">${UITXT[LANG].credits.context}</div><br/><br/>
                    <div class="textDiv whiteText">${UITXT[LANG].credits.git}</div><br/><br/>
                    <input type="button" value="${UITXT[LANG].buttons.back}" class="buttonAlert" id="buttonBack"/>`;
                
                document.getElementById("buttonBack").addEventListener("mouseover", () => hoverButton());
                document.getElementById("buttonBack").addEventListener("click", function () {
                    clickButton();
                    gameLaunch();
                });
 
                displayGameText();
            }
        });
    })
}

function getFS() {
    document.body.requestFullscreen().then(function () {
        // element has entered fullscreen mode successfully
    }).catch(function (error) {
        // element could not enter fullscreen mode
        console.log(error);
    });;
}

function displayFade(interv, speed, element) {
    setTimeout(() => {
        if (element == undefined) return;
        if (parseFloat(element.style.opacity) < 1) {
            element.style.opacity = parseFloat(element.style.opacity) + speed;
            displayFade(interv, speed, element);
        }
    }, interv)
}