// CETTE FONCTION LANCE L'ACTE SUIVANT

function nextActPlease(newAct, myTextToDisplay) {
    let txtToDispay = "";

    MYGAME.player.currentAct = newAct;
    MYGAME.currentScene = 0;

    //if (newAct == 4) MYGAME.player.canWin = true;

    // on désaffiche l'alert et on insère le texte normalement prévu à l'alert dans la div gameDiv, qui est centrée
    document.getElementById("boxAlert").style.display = "none";
    txtToDispay = `<br/><div class="textDiv whiteText">` + myTextToDisplay;
    txtToDispay += `</div><br/><br/><input type="button" value="Sauvegarder et continuer" class="buttonGoForward" id="buttonNewAct"/>`
    gameDiv.innerHTML = txtToDispay;
    gameDiv.style.textAlign = "center";

    // on paramètre un eventListener pour le bouton, pour passer à l'acte suivant et sauvegarder dans le localStorage
    document.getElementById("buttonNewAct").addEventListener("click", function () {
        localStorage.act = newAct;
        MYGAME.previousInput = [];
        displayMainText(true);
        clickButton();
    });

    document.getElementById("buttonNewAct").addEventListener("mouseover", () => {
        hoverButton();
    });
}