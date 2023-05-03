// THIS FUNCTION STARTS THE NEXT ACT
function nextActPlease(newAct, myTextToDisplay) {
    gameDiv.style.fontSize = "1em";
    bottomScreen.style.display = "none";

    let txtToDisplay = "";

    MYGAME.player.currentAct = newAct;

    // set all items to not located for scenes after the 4th
    // BEWARE HERE, MAYBE NOT THE BEST (POSTCARD, MOON, ALTAR ETC.)
    MYGAME.scenes.forEach((scn, i) => {
        if (i >= 4) scn.items.forEach((itm) => itm.isLocated = false);
    });

    // hide the alert and insert the text normally planned in the alert into the gameDiv, which is centered
    monAlert.style.display = "none";
    txtToDisplay = `<br/><div class="textDiv whiteText">` + myTextToDisplay;
    txtToDisplay += `</div><br/><br/><input type="button" value="Sauvegarder et continuer" class="buttonGoForward" id="buttonNewAct" style="opacity:0"/>`
    gameDiv.innerHTML = txtToDisplay;
    gameDiv.style.textAlign = "center";

    setTimeout(() => displayFade(50, 0.05, document.getElementById("buttonNewAct")), 1000);

    // set an event listener for the button to move to the next act and save to localStorage
    document.getElementById("buttonNewAct").addEventListener("click", function () {
        localStorage.act = newAct;
        MYGAME.previousInput = [];
        displayMainText(0);
        clickButton();
    });
    document.getElementById("buttonNewAct").addEventListener("mouseover", () => hoverButton());

    displayGameText();
}