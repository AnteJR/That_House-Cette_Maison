/*
    LA FONCTION ENDSCREEN AFFICHE D'ABORD UNE SUITE DE TEXTES,
    PUIS LE GÉNÉRIQUE DE FIN.
 */
function endScreen(i) {

    // on set les styles nécessaires, en désaffichang notamment la plupart de l'interface
    monAlert.style.display = "none";
    bottomScreen.style.display = "none";
    title.style.display = "none";
    gameDiv.style.marginTop = "10%";
    gameDiv.style.textAlign = "center";

    // on affiche le texte correspondant et un bouton à la value correspondante, qu'on inscrit dans la div #gameDiv
    let monTxt = MYGAME.scenes[MYGAME.currentScene].items[1].acceptTxtLetterOpen;
    let txtToDisplay = `<div class="textDiv bigTextDiv">` + monTxt[0][i];
    txtToDisplay += `</div><br/><br/><input type="button" value="${monTxt[1][i]}" class="buttonGoForward" id="buttonMoveForward"/>`
    gameDiv.innerHTML = txtToDisplay;

    // on implémente un eventListener au bouton
    document.getElementById("buttonMoveForward").addEventListener("click", function () {
        i++

        // si i est inférieur à 5, on relance la fonction endScreen()
        if (i <= 6) endScreen(i);

        // sinon, on lance le générique de fin
        else {
            gameDiv.style.marginTop = "25px";
            txtToDisplay = `<div class="textDiv bigTextDiv">`;

            // dans tous les cas, on affiche le générique, avec un bouton pour revenir au menu home et vider le localStorage
            txtToDisplay += `Développement: Joël Rimaz</div>
                <br/>
                <br/>
                    <div class="textDiv bigTextDiv">
                        Sous la direction d'Isaac Pante
                    </div>
                <br/>
                <br/>
                    <div class="textDiv bigTextDiv">
                        Pour le cours "Publications numériques"
                    </div>
                <br/>
                <br/>
                    <div class="textDiv bigTextDiv">
                        Université de Lausanne
                    </div>
                <br/>
                <input type="button" value="retour au menu" class="buttonGoForward" id="buttonBackHome"/>`;
            gameDiv.innerHTML = txtToDisplay;
            document.getElementById("buttonBackHome").addEventListener("click", function () {
                clickButton();
                localStorage.clear();
                gameLaunch();
                title.style.display = "block";
                MYGAME.isFinished = false;
                MYGAME = baseGameTxt;
            });

            document.getElementById("buttonBackHome").addEventListener("mouseover", () => {
                hoverButton();
            });
        }
    })
}