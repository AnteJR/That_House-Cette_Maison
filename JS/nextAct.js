// CETTE FONCTION LANCE L'ACTE SUIVANT
function nextActPlease(newAct, myTextToDisplay) {
    let txtToDispay = "";

    MYGAME.player.currentAct = newAct;

    //if (newAct == 4) MYGAME.player.canWin = true;

    // on désaffiche l'alert et on insère le texte normalement prévu à l'alert dans la div gameDiv, qui est centrée
    document.getElementById("boxAlert").style.display = "none";
    txtToDispay = `<br/><div class="textDiv whiteText">` + myTextToDisplay;
    txtToDispay += `</div><br/><br/><input type="button" value="Sauvegarder et continuer" class="buttonGoForward" id="buttonNewAct" style="opacity:0"/>`
    gameDiv.innerHTML = txtToDispay;
    gameDiv.style.textAlign = "center";

    setTimeout(() => displayFade(50, 0.05, document.getElementById("buttonNewAct")), 1000);

    // on paramètre un eventListener pour le bouton, pour passer à l'acte suivant et sauvegarder dans le localStorage
    document.getElementById("buttonNewAct").addEventListener("click", function () {
        localStorage.act = newAct;
        MYGAME.previousInput = [];
        displayMainText(0);
        clickButton();
    });
    document.getElementById("buttonNewAct").addEventListener("mouseover", () => hoverButton());
    
    displayGameText();
}