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
            nextActPlease(6, "La vie est un cycle qui ne s'arrête jamais. J'ai fermé les yeux, mais le monde m'est plus visible que jamais. Je vole avec le reste des éléments. L'univers est à ma portée. Je suis tout. Je ne suis rien. Je suis mort. Je suis vivant.");
        }
    });

    txtDisplayEnd (monTxtFrag, i, interval, `endTxt${index}`);
}

function txtDisplayEnd(txt, nbr, int, idTxt) {
    setTimeout(() => {
        if (nbr > 0) {
            document.getElementById(`${idTxt}`).innerHTML += txt[txt.length - nbr];
            nbr--;
            txtDisplayEnd(txt, nbr, int, idTxt);
        }
    }, int);
}