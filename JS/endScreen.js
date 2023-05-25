// AFFICHER UNE SÉRIE DE TEXTE PUIS EPILOGUE/FIN
function endScreen(text, textLength) {
    MYGAME.isSilent = true;
    // STYLES
    gameContainer.style.animation = "gameDivDisappears 1.5s forwards";
    document.getElementById("endSection").style.animation = "divAppears 1.5s forwards";

    const index = text[0].length - textLength,
        monTxt = text[0][index],
        monTxtFrag = monTxt.split(""),
        i = monTxtFrag.length,
        interval = 50,
        monBtn = text[1][index],
        txtToDisplay = `<div id="endTxt${index}"></div><input type="button" value="${monBtn}" class="buttonEnd" id="buttonEnd"/>`

    document.getElementById("endSectionText").innerHTML = txtToDisplay;

    document.getElementById("buttonEnd").addEventListener("mouseover", () => hoverButton());
    document.getElementById("buttonEnd").addEventListener("click", () => {
        textLength--;

        if (textLength > 0) endScreen(text, textLength);
        else {
            MYGAME.isSilent = false;
            gameContainer.style.animation = "gameDivAppears 1.5s forwards";
            document.getElementById("endSection").style.animation = "divDisappears 1.5s forwards";
            nextActPlease(6, UITXT[LANG].game.finalTxt);
        }
    });

    displayLetterByLetter (monTxtFrag, i, interval, `endTxt${index}`);
}