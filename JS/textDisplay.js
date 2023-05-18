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

    // POUR CHAQUE TEXTE QUI DOIT APPARAÎTRE
    textsToAppear.forEach((el, idx) => {
        let textOriginal = el.textContent,
            text = textOriginal.split(""),
            nbrChar = text.length,
            charPos = 0;

        texts.push(textOriginal);
        el.innerHTML = "";

        txtDisplay(nbrChar, charPos, el, text, idx);
    });

    // AFFICHER LES STRINGS LES UN APRES LES AUTRES, PUIS LES CHAR LES UNS APRES LES AUTRES
    function txtDisplay(i, j, element, txtFrag, index) {
        let interval1 = 0,
            interval2 = 30;

        if (index > 0) {
            let previousTexts = 0;
            for (let k = 0; k < texts.length - 1; k++) previousTexts += texts[k].length;
            interval1 = (36 * previousTexts);
        }

        // AFFICHAGE STRING APRES STRING, LETTRE APRES LETTRE
        setTimeout(() => {
            setTimeout(() => {
                if (i > 0) {
                    let maClass = element.getAttribute("class").split(" ")[0];

                    // afficher les espaces comme des espaces inséquables
                    if (txtFrag[j] == " " && (maClass == "wobblyTxt" || maClass == "shockWobble" || maClass == "regularWobble" || maClass == "angerWobble" || maClass == "bargainWobble" || maClass == "sadWobble" || maClass == "acceptanceWobble")) txtFrag[j] = "&nbsp;";

                    // set de condition pour appliquer des délais aux spans qui contiennent les animations
                    if (maClass == "wobblyTxt" || maClass == "shockWobble" || maClass == "regularWobble") element.innerHTML += `<span style="animation-delay: ${j * 50}ms">${txtFrag[j]}</span>`;
                    else if (maClass == "angryWobble") element.innerHTML += `<span style="animation-delay: ${j * 20}ms">${txtFrag[j]}</span>`;
                    else if (maClass == "bargainWobble") element.innerHTML += `<span style="animation-delay: ${j * 500}ms">${txtFrag[j]}</span>`;
                    else if (maClass == "sadWobble") element.innerHTML += `<span style="animation-delay: ${j * 500}ms">${txtFrag[j]}</span>`;
                    else if (maClass == "acceptWobble") element.innerHTML += `<span style="animation-delay: ${j * 1000}ms">${txtFrag[j]}</span>`;
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
    if (monAct > 5) {
        document.querySelectorAll(".command").forEach((e) => {
            e.className.split(" ")[1] == "acceptC" ? e.style.opacity = 1 : e.style.opacity = 0.2;
        });
    }
    else {
        document.querySelectorAll(".bonusC").forEach((e) => {
            if (monAct == 0) e.style.opacity = 0.2;
            else if (monAct == 1) e.className.split(" ")[1] == "hitC" ? e.style.opacity = 1 : e.style.opacity = 0.2;
            else if (monAct == 2) (e.className.split(" ")[1] == "hitC" || e.className.split(" ")[1] == "inspectC") ? e.style.opacity = 1 : e.style.opacity = 0.2;
            else if (monAct == 3) e.className.split(" ")[1] == "acceptC" ? e.style.opacity = 0.2 : e.style.opacity = 1;
            else if (monAct > 3 && monAct < 6) e.style.opacity = 1;
        });
    }
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