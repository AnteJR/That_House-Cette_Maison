// FONCTION POUR AFFICHER DU TEXTE PHRASE APRÈS PHRASE
function displayGameText() {
    txtDisplay();
    let textsToAppear = document.querySelectorAll('.textDiv'),
        texts = [],
        mesObjets = document.querySelectorAll(".interactiveText");

    for (const objet of mesObjets) {
        if (objet.textContent.toLowerCase() == "visuels") continue;
        objet.addEventListener("click", () => {
            if (monInput.value == "") return;

            displayAlert(monInput.value + objet.dataset.word);
            monInput.value = "";
        });
    };

    // un forEach pour chaque div qui contient du texte
    textsToAppear.forEach((el, idx) => {
        // on récupère le textContent de chaque div et on l'ajoute dans un array, 
        let textOriginal = el.textContent,
            text = textOriginal.split(""),
            nbrChar = text.length,
            charPos = 0;

        texts.push(textOriginal);
        el.innerHTML = "";

        // on appelle la fonction qui affiche caractère par caractère
        txtDisplay(nbrChar, charPos, el, text, idx);
    });

    // AFFICHER LES STRINGS LES UN APRES LES AUTRES, PUIS LES CHAR LES UNS APRES LES AUTRES
    function txtDisplay(i, j, element, txtFrag, index) {
        let interval1 = 0,
            interval2 = 30,
            diviser = 1;

        // dans le cas spécifique de l'affichage de la lettre, on a besoin que ça s'affiche plus rapidement
        if (MYGAME.player.currentAct >= 4 && MYGAME.currentScene >= 5 && MYGAME.scenes[5].items[0].lookingAtLetter == true) interval2 = (interval2 - 13) / 3;
        if (index > 0) {
            let previousTexts = 0;
            for (let k = 0; k < texts.length - 1; k++) previousTexts += texts[k].length;
            interval1 = (35 * previousTexts) / diviser;
        }

        // AFFICHAGE LETTRE APRES LETTRE, STRING APRES STRING
        setTimeout(() => {
            setTimeout(() => {
                if (i > 0) {
                    let maClass = element.getAttribute("class").split(" ")[0];

                    // afficher les espaces comme des espaces inséquables (sans quoi ils ne s'affichent pas en fin de string)
                    if (txtFrag[j] == " " && (maClass == "wobblyTxt" || maClass == "angerWobble" || maClass == "bargainWobble" || maClass == "sadWobble" || maClass == "acceptanceWobble")) txtFrag[j] = "&nbsp;";

                    // set de condition pour appliquer des délais aux spans qui contiennent les animations
                    if (maClass == "wobblyTxt") element.innerHTML += `<span style="animation-delay: ${j * 50}ms">${txtFrag[j]}</span>`;
                    else if (maClass == "angerWobble") element.innerHTML += `<span style="animation-delay: ${j * 20}ms">${txtFrag[j]}</span>`;
                    else if (maClass == "bargainWobble") element.innerHTML += `<span style="animation-delay: ${j * 500}ms">${txtFrag[j]}</span>`;
                    else if (maClass == "sadWobble") element.innerHTML += `<span style="animation-delay: ${j * 500}ms">${txtFrag[j]}</span>`;
                    else if (maClass == "acceptanceWobble") element.innerHTML += `<span style="animation-delay: ${0}ms">${txtFrag[j]}</span>`;
                    else element.innerHTML += txtFrag[j];

                    if (isDefault == true) putBackStyles(false);
                    else if (isDefault == false) deleteStyles(false);

                    j++;
                    i--;
                    txtDisplay(i, j, element, txtFrag);
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

// CETTE FONCTION AFFICHE LE TITRE
function titleTxt(text) {
    text = text.split("");
    let textToAppend = text.map((x, idx) => {
        if (x == " ") x = "&nbsp;"
        let delay = (idx) * 500;
        return `<span style="animation-delay: ${delay}ms">${x}</span>`;
    });
    title.innerHTML = textToAppend.join("");
}

titleTxt(titleText);