// OBSERVER SI L'INNERHTML DE LA DIV #GAMESCREEN CHANGE, SI OUI, LANCER DISPLAYGAMETEXT()
let isDefault = true;
let gameDiv = document.getElementById("gameScreen");
const observer = new MutationObserver(function () {
    // lancer la fonction pour afficher les textes
    displayGameText();
    if (isDefault == true) putBackStyles(false);
    else if (isDefault == false) deleteStyles(false);
});
observer.observe(gameDiv, { characterData: false, childList: true, attributes: false });

// FONCTION POUR AFFICHER DU TEXTE PHRASE APRÈS PHRASE
let monInterval;
function displayGameText() {
    txtDisplay(false);
    let textsToAppear = document.querySelectorAll('.textDiv');
    let texts = [];

    // récupérer les éléments marqués ".interactiveText" pour les rendre interactifs
    let mesObjets = document.querySelectorAll(".interactiveText");
    mesObjets.forEach((element) => {
        // on récupère leur textContent
        if (element.textContent.toLowerCase() != "visuels") {
            element.addEventListener("click", function () {
                let monObjet = this.textContent;
                let obj = monObjet.split("");
                // on édite le texte s'il comprend un . ou une ,
                obj.forEach((e, i) => {
                    if (e == "." || e == ",") obj[i] = "";
                    else obj[i] = e;
                });
                // on affiche le mot dans l'input quand il est cliqué (s'il suit un autre mot)
                let monMot = obj.join("");
                if (document.getElementById("commandInput").value != "") {
                    document.getElementById("commandInput").value += monMot;
                    displayAlert(document.getElementById("commandInput").value);
                    document.getElementById("commandInput").value = "";
                }
            });
        }
    });

    // un forEach pour chaque div qui contient du texte
    textsToAppear.forEach((el, idx) => {
        // on récupère le textContent de chaque div et on l'ajoute dans un array, 
        let textOriginal = el.textContent;
        texts.push(textOriginal);
        el.innerHTML = "";

        // on split le texte original de chaque div pour en savoir sa longueur en caractère
        let text = textOriginal.split("");
        let nbrChar = text.length;
        let charPos = 0;

        // on appelle la fonction qui affiche caractère par caractère
        txtDisplay(true, nbrChar, charPos, el, text, idx);
    });

    // AFFICHER LES STRINGS LES UN APRES LES AUTRES, PUIS LES CHAR LES UNS APRES LES AUTRES
    function txtDisplay(canRun, i, j, element, txtFrag, index) {
        // gestion des intervals pour les timeout
        let interval1 = 0;
        let interval2 = 30;
        let diviser = 1;
        // dans le cas spécifique de l'affichage de la lettre, on a besoin que ça s'affiche plus rapidement
        if (MYGAME.player.currentAct >= 4 && MYGAME.currentScene >= 5 && MYGAME.scenes[5].items[0].lookingAtLetter == true) {
            diviser = 3;
            interval2 = (interval2 - 13) / diviser;
        }
        if (index > 0) {
            let previousTexts = 0;
            for (let k = 0; k < texts.length - 1; k++) {
                previousTexts += texts[k].length;
            }
            interval1 = (35 * previousTexts) / diviser;
        }

        // 2 setimeout imbriqués :
        // 1. Le premier prend comme intervale la somme des caractères des strings le précédent * 50ms
        // 2. Le deuxième prend comme intervale "interval2", donc 43ms
        let monTimeout = setTimeout(() => {
            let monTimeout2 = setTimeout(() => {
                if (canRun == true) {
                    if (i > 0) {

                        let maClass = element.getAttribute("class").split(" ")[0];

                        // afficher les espaces comme des espaces inséquables (sans quoi ils ne s'affichent pas en fin de string)
                        if (txtFrag[j] == " " && (maClass == "wobblyTxt" || maClass == "angerWobble" || maClass == "bargainWobble" || maClass == "sadWobble" || maClass == "acceptanceWobble")) {
                            txtFrag[j] = "&nbsp;"
                        }

                        // set de condition pour appliquer des délais aux spans qui contiennent les animations
                        if (element.getAttribute("class").split(" ")[0] == "wobblyTxt") element.innerHTML += `<span style="animation-delay: ${j * 50}ms">${txtFrag[j]}</span>`;
                        else if (element.getAttribute("class").split(" ")[0] == "angerWobble") element.innerHTML += `<span style="animation-delay: ${j * 20}ms">${txtFrag[j]}</span>`;
                        else if (element.getAttribute("class").split(" ")[0] == "bargainWobble") element.innerHTML += `<span style="animation-delay: ${j * 500}ms">${txtFrag[j]}</span>`;
                        else if (element.getAttribute("class").split(" ")[0] == "sadWobble") element.innerHTML += `<span style="animation-delay: ${j * 500}ms">${txtFrag[j]}</span>`;
                        else if (element.getAttribute("class").split(" ")[0] == "acceptanceWobble") element.innerHTML += `<span style="animation-delay: ${0}ms">${txtFrag[j]}</span>`;
                        else element.innerHTML += txtFrag[j];

                        j++;
                        i--;
                        txtDisplay(true, i, j, element, txtFrag);
                    }
                }
                else {
                    clearTimeout(monTimeout);
                    clearTimeout(monTimeout2);
                }
            }, interval2);
        }, interval1);
    }
}

// CETTE FONCTION AFFICHE LA COULEUR CORRECTE DES COMMANDES BONUS
function inspectColor(monAct) {
    document.querySelectorAll(".bonusC").forEach((e) => {
        if (monAct == 0) e.style.opacity = 0.2;
        else if (monAct == 1) e.className.split(" ")[1] == "hitC" ? e.style.opacity = 1 : e.style.opacity = 0.2;
        else if (monAct == 2) (e.className.split(" ")[1] == "hitC" || e.className.split(" ")[1] == "inspectC") ? e.style.opacity = 1 : e.style.opacity = 0.2;
        else if (monAct == 3) e.className.split(" ")[1] == "acceptC" ? e.style.opacity = 0.2 : e.style.opacity = 1;
        else if (monAct >= 4) e.style.opacity = 1;
    });
}

// CETTE FONCTION S'OCCUPE SPÉCIFIQUEMENT DE L'AFFICHAGE DU TITRE DU JEU
let title = document.getElementById('titleGame');
let titleText = title.textContent;
titleTxt(titleText);

function titleTxt(text) {
    text = text.split("");
    let textToAppend = text.map((x, idx) => {
        if (x == " ") x = "&nbsp;"
        let delay = (idx) * 500;
        return `<span style="animation-delay: ${delay}ms">${x}</span>`;
    });
    title.innerHTML = textToAppend.join("");
}