/*
    CETTE FONCTION SERT À L'AFFICHAGE DE LA LETTRE, DISPONIBLE DANS LA DERNIÈRE
    SCÈNE DE L'ACTE 5 ET OBLIGATOIRE À LIRE. ELLE MODIFIE LE STYLE ET LE RÉTABLIT
    UNE FOIS LA LETTRE LU.
*/
let getDefault;
function openLetter(k) {

    if (k==0) getDefault = isDefault;

    // établissement du style de la page
    isDefault = false;
    document.body.style.animation = "none"
    document.body.style.color = "rgb(3, 15, 26)";
    document.getElementsByClassName("gameContainer")[0].style.backgroundColor = "white";
    document.body.style.opacity = 1;
    document.getElementById("commandInput").value = "";
    document.getElementsByClassName("gameContainer")[0].style.borderWidth = "0px";
    document.getElementById("boxAlert").style.display = "none";
    document.getElementById("screenBottom").style.display = "none";
    document.getElementById("titleGame").style.display = "none";
    document.getElementById("monStyle").style.display = "none";
    document.getElementById("gameScreen").style.marginTop = "10%";

    // sélectionne le texte à insérer dans la div #gameDiv et le fait (+ un bouton)
    let monTxt = MYGAME.scenes[MYGAME.currentScene].items[0].useTxtOpen;
    let monTxtLength = monTxt.length;
    monTxt = monTxt[k];
    if (k < monTxtLength - 1) monTxt += `<br /><br /><input type="button" value="Continuer" class="buttonGoBack" id="buttonGoBack"/>`
    else monTxt += `${MYGAME.username}</div><br /><br /><input type="button" value="Fermer la lettre" class="buttonGoBack" id="buttonGoBack"/>`
    gameDiv.innerHTML = monTxt;

    // réduit la taille des caractères paragraphes pour cette occasion
    let mesParagraphes = document.querySelectorAll('.textDiv');
    mesParagraphes.forEach(e => {
        e.style.fontSize = "0.75em";
    });

    // on ajoute un EventListener au bouton pour revenir en arrière, en réétablissant notamment le style précédent
    document.getElementById("buttonGoBack").addEventListener("click", function () {
        k++;
        clickButton();
        if (k < monTxtLength) openLetter(k);
        else {
            document.body.style.color = "white";
            document.getElementsByClassName("gameContainer")[0].style.backgroundColor = "rgb(3, 15, 26)";
            document.getElementById("flickerDiv").style.display = "block";
            document.getElementsByClassName("gameContainer")[0].style.borderWidth = "5px";
            document.getElementById("screenBottom").style.display = "block";
            document.getElementById("titleGame").style.display = "block";
            document.getElementById("gameScreen").style.marginTop = "0%";
            document.getElementById("monStyle").style.display = "block";
            
            MYGAME.scenes[MYGAME.currentScene].items[0].lookingAtLetter = false;
            displayMainText(false);
            isDefault = getDefault;
        }
    });

    document.getElementById("buttonGoBack").addEventListener("mouseover", () => {
        hoverButton();
    });
}