//CETTE FONCTION SERT À AFFICHER UNE NOUVELLE SCÈNE
function displayMainText(scene) {
    // on revient en haut de la page
    window.scrollTo(0, 0);
    title.style.fontSize = "1.25em";
    mesFlags.style.display = "none";
    gameDiv.style.marginTop = "1%";
    MYGAME.state = "inGame";

    if (scene != undefined) MYGAME.currentScene = parseInt(scene);

    let thisAct = MYGAME.player.currentAct,
        sceneCourante = MYGAME.currentScene,
        maScene = MYGAME[LANG].scenes[sceneCourante],
        txtToAdd = "",
        monTxt = "",
        mesTxt = maScene.texts;

    // on vérifie les couleurs et l'accès aux fonctionnalités bonus, qui se débloquent à un nouvel acte
    inspectColor(parseInt(thisAct));

    // CONDITION PRINCIPALE
    if (sceneCourante == 0) {
        gameDiv.style.textAlign = "center";
        bottomScreen.style.display = "none";

        mesTxt[thisAct].text.forEach((e) => e[1] == true ? monTxt += `<br/><div class = "titleDiv whiteText">` + e[0] + `</div><br/>` : monTxt += `<div class = "sadWobble textDiv whiteText">` + e[0] + `</div><br/>` );

        monTxt += `<br/><input type="button" value="${UITXT[LANG].buttons.continue}" class="buttonGo" id="buttonGo" style="opacity:0"/>`;
        gameDiv.innerHTML = monTxt;

        setTimeout(() => displayFade(50, 0.05, document.getElementById("buttonGo")), 1000);

        // on attribue un eventListener au bouton #buttonGo pour accéder à la scène 0 de l'acte actuel
        document.getElementById("buttonGo").addEventListener("click", function () {
            bottomScreen.style.display = "block";
            displayMainText(2);
            clickButton();
        });

        document.getElementById("buttonGo").addEventListener("mouseover", () => hoverButton());
    }

    // CONDITION PRINCIPALE
    else if (sceneCourante == 1) {
        gameDiv.style.textAlign = "center";
        gameDiv.style.marginTop = "5%";
        monTxt = `<br/>
                <div class="textDiv bigTextDiv whiteText">
                    ${maScene.title}
                </div>
            <br/>
                <div class = "textDiv whiteText">
                    ${maScene.text1}
                </div>
            <br/>
                <div class = "textDiv whiteText">
                    ${maScene.text2}
                </div>
            <br/>
            <br/>
                <form id="maForm" autocomplete="off">
                    <input type="text" placeholder="~~${maScene.text3}~~" class="inputCommand" id="monUsername"/>
                    <br/>
                    <br/>
                    <input type="submit" value="${UITXT[LANG].buttons.confirm}" class="buttonGo submitName" id="buttonStart"/>
                </form>`;

        gameDiv.innerHTML = monTxt;

        document.getElementById("maForm").addEventListener("submit", function (e) {
            e.preventDefault();
            clickButton();
            let chosenName = document.getElementById("monUsername").value,
                nameSplit = chosenName.toLowerCase().split(""),
                nameShort = nameSplit[2] != undefined ? nameSplit[1] + nameSplit[2] : nameSplit[0] + nameSplit[1];

            if (chosenName != "") {
                localStorage.username = chosenName;
                localStorage.shortName = nameShort;
                localStorage.act = 0;
                localStorage.lang = LANG;

                MYGAME.player.username = chosenName;
                MYGAME.player.shortName = nameShort;
                MYGAME.player.currentAct = 0;
                MYGAME.currentScene = 0;
                displayMainText();
            }
        });

        document.getElementById("maForm").addEventListener("mouseover", () => hoverButton());
    }

    // CONDITION PRINCIPALE : si c'est les scènes 2-6
    else {
        let totalLength = 0;
        gameDiv.style.textAlign = "left";

        for (const e of mesTxt) {
            const activeWord = removeSpecialChars(e.text.split("")),
                actNameUpperCase = firstLetterToUpperCase(e.act.split("")),
                txtLength = e.text.length;

            if ((e.act == "regular" && thisAct < 1) || (e.act == "angry" && thisAct < 2) || (e.act == "bargain" && thisAct < 3) || (e.act == "sad" && thisAct < 4) || (e.act == "accept" && thisAct < 5) || (e.act == "end" && thisAct < 6)) continue;
            if ((e.act == "shock" && thisAct > 0) || (e.act == "regular" && thisAct > 5) || (e.act == "angry" && thisAct > 5) || (e.act == "bargain" && thisAct > 5) || (e.act == "sad" && thisAct > 5) || (e.act == "accept" && thisAct > 5)) continue;

            txtToAdd = returnTxtToAdd (thisAct, e.act, actNameUpperCase, activeWord, e.active);

            monTxt += txtToAdd + e.text + `</div> `;
            totalLength += txtLength;
        };

        // on insère le texte généré dans la div prévue pour les textes du jeu
        gameDiv.innerHTML = monTxt;

        totalLength > 500 ? gameDiv.style.fontSize = "0.8em" : (totalLength > 400 ? gameDiv.style.fontSize = "0.9em" : gameDiv.style.fontSize = "1em");

        mesMots = [];
        document.querySelectorAll(".interactiveText").forEach((elems) => mesMots.push(elems.dataset.word));
    }

    displayGameText();
}

function removeSpecialChars(txt) {
    let word = "";

    txt.forEach((el) => {
        if (el == "." || el == ",") word += "";
        else if (el == "î") word += "i";
        else if (el == "ê" || el == "é" || el == "è") word += "e";
        else word += el;
    });

    return word;
}

function firstLetterToUpperCase(txt) {
    let word = "";

    txt.forEach((e, i) => {
        if (i == 0) word += e.toUpperCase();
        else word += e.toLowerCase();
    });

    return word;
}

function returnTxtToAdd (actNumber, actName, actNameUpperCase, activeWord, active) {
    let newActName = actName,
        newActNameUpperCase = actNameUpperCase;

    if ((actName == "angry" && actNumber > 2) || (actName == "bargain" && actNumber > 3) || (actName == "sad" && actNumber > 4) || actName == "end") {
        newActName = "regular";
        newActNameUpperCase = "Regular";
    }

    if (active) return `<div class = "${newActName}Wobble textDiv iAm${newActNameUpperCase} interactiveText" data-word="${activeWord}">`;
    else return `<div class = "textDiv iAm${newActNameUpperCase}">`;
}