// FUNCTION TO DISPLAY THE LETTER YOU READ IN THE FINAL ACT
function openLetter(text) {
    MYGAME.isSilent = true;
    let count = 0,
        getDefault = true,
        monTxt = text.shift(),
        txtFrag = monTxt.split(""),
        i = txtFrag.length,
        interval = 12;

    if (count == 0) {
        document.getElementById("myLetter").style.animation = "divAppears 1s forwards";
        getDefault = styleOn;
    }

    // établissement du style de la page
    applyStyles(false);

    if (text.length >= 1) document.getElementById("myLetterText").innerHTML = `<div class="textDiv" id="txtOfLetter${text.length}"></div><input type="button" value="${UITXT[LANG].buttons.continue}" class="buttonLetter" id="buttonLetter"/>`
    else {
        document.getElementById("myLetterText").innerHTML = `<div class="textDiv" id="txtOfLetter${text.length}"></div><br /><br /><input type="button" value="${UITXT[LANG].buttons.letter}" class="buttonLetter" id="buttonLetter"/>`
        monTxt += MYGAME.player.username;
        txtFrag = monTxt.split("");
        i = txtFrag.length;
    }

    // on ajoute un EventListener au bouton pour revenir en arrière, en réétablissant notamment le style précédent
    document.getElementById("buttonLetter").addEventListener("mouseover", () => hoverButton());
    document.getElementById("buttonLetter").addEventListener("click", function () {
        clearInt = true;
        clickButton();
        if (text.length > 0) openLetter(text);
        else {
            MYGAME.isSilent = false;
            applyStyles(getDefault);
            document.getElementById("myLetter").style.animation = "divDisappears 1s forwards"
        }
    });

    displayLetterByLetter(txtFrag, i, interval, `txtOfLetter${text.length}`);
}