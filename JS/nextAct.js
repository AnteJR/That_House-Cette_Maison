// THIS FUNCTION STARTS THE NEXT ACT
function nextActPlease(newAct, myTextToDisplay) {
    gameDiv.style.fontSize = "1em";
    bottomScreen.style.display = "none";

    let txtToDisplay = "";

    MYGAME.player.currentAct = newAct;

    // set all items to not located for scenes after the 4th
    // BEWARE HERE, MAYBE NOT THE BEST (POSTCARD, MOON, ETC.)
    MYGAME[LANG].scenes.forEach((scn, i) => {
        if (i > 3) scn.items.forEach((itm) => {
            if(itm.name!="leave" || itm.name!="carte" || itm.name!="lune" || itm.name!="jardin") itm.isLocated = false
            if(itm.name!="leave" || itm.name!="postcard" || itm.name!="moon" || itm.name!="garden") itm.isLocated = false
        });
    });

    // hide the alert and insert the text normally planned in the alert into the gameDiv, which is centered
    monAlert.style.display = "none";
    txtToDisplay = `<br/><div class="textDiv whiteText">` + myTextToDisplay;
    txtToDisplay += `</div><br/><br/><input type="button" value="${UITXT[LANG].buttons.save}" class="buttonGoForward" id="buttonNewAct" style="opacity:0"/>`
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