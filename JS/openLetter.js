// FUNCTION TO DISPLAY THE LETTER YOU READ IN THE FINAL ACT
function openLetter(text) {
    let count = 0,
        getDefault = true,
        monTxt = text.shift(),
        txtFrag = monTxt.split(""),
        i = txtFrag.length,
        interval = 12;

    if (count == 0) {
        getDefault = isDefault;
        document.getElementById("myLetter").style.animation = "letterAppears 1s forwards";
    }

    // établissement du style de la page
    isDefault = false;

    if (text.length >= 1) document.getElementById("myLetterText").innerHTML = `<div class="textDiv" id="txtOfLetter${text.length}"></div><input type="button" value="Continuer" class="buttonLetter" id="buttonLetter"/>`
    else document.getElementById("myLetterText").innerHTML = `<div class="textDiv" id="txtOfLetter${text.length}"></div><br /><br /><input type="button" value="Fermer la lettre" class="buttonLetter" id="buttonLetter"/>`

    displayTxt(txtFrag, i, interval, text.length);

    // on ajoute un EventListener au bouton pour revenir en arrière, en réétablissant notamment le style précédent
    document.getElementById("buttonLetter").addEventListener("click", function () {
        clearInt = true;
        clickButton();
        if (text.length >= 1) openLetter(text);
        else {
            isDefault = getDefault;

            document.getElementById("myLetter").style.animation = "letterDisappears 1s forwards"
        }
    });

    document.getElementById("buttonLetter").addEventListener("mouseover", () => {
        hoverButton();
    });
}

function displayTxt(txt, nbr, int, idTxt) {
    setTimeout(() => {
        if (nbr > 0) {
            document.getElementById(`txtOfLetter${idTxt}`).innerHTML += txt[txt.length - nbr];
            nbr--;
            displayTxt(txt, nbr, int, idTxt);
        }
    }, int);
}