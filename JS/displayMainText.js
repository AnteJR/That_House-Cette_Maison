//CETTE FONCTION SERT À AFFICHER UNE NOUVELLE SCÈNE
function displayMainText(scene) {
    // on revient en haut de la page
    window.scrollTo(0, 0);
    document.getElementById("titleGame").style.fontSize = "1.25em";

    if (scene != undefined) MYGAME.currentScene = parseInt(scene);

    console.log(MYGAME.currentScene);

    let thisAct = MYGAME.player.currentAct,
        sceneCourante = MYGAME.currentScene,
        maScene = MYGAME.scenes[sceneCourante],
        txtToAdd = "",
        monTxt = "",
        mesTxt = maScene.texts;

    // on vérifie les couleurs et l'accès aux fonctionnalités bonus, qui se débloquent à un nouvel acte
    inspectColor(parseInt(thisAct));

    // CONDITION PRINCIPALE
    if (sceneCourante == 0) {
        gameDiv.style.textAlign = "center";

        bottomScreen.style.display = "none";

        mesTxt[thisAct].text.forEach((e) => {
            if (e[1] == true) monTxt += `<br/><div class = "titleDiv whiteText">`;
            else monTxt += `<div class = "sadWobble textDiv whiteText">`;
            monTxt += e[0] + `</div><br/>`;
        });

        monTxt += `<br/><input type="button" value="Continuer" class="buttonGo" id="buttonGo" style="opacity:0"/>`;
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
        monTxt = `<br/>
                <div class="titleDiv whiteText">
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
                    <input type="text" placeholder="~~enter your name here~~" class="inputCommand" id="monUsername"/>
                    <br/>
                    <br/>
                    <input type="submit" value="Confirmer" class="buttonGo submitName" id="buttonStart"/>
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
        gameDiv.style.textAlign = "left";

        mesTxt.forEach((e) => {
            let isToBeDisplayed = false,
                activeWord = "";

            if (e.active) {
                let txtSplit = e.text.split("");
                txtSplit.forEach((el, idx) => {
                    if (el == "." || el == ",") activeWord += "";
                    else if (el == "î") activeWord += "i";
                    else if (el == "ê" || el == "é" || el == "è") activeWord += "e";
                    else activeWord += el;
                });
            }
            if (e.act == "regular" || (e.act == "angry" && thisAct >= 1) || (e.act == "bargain" && thisAct >= 2) || (e.act == "sad" && thisAct >= 3) || (e.act == "accept" && thisAct >= 4)) isToBeDisplayed = true;
            if (e.act == "regular" || (e.act == "angry" && thisAct > 1) || (e.act == "bargain" && thisAct > 2) || (e.act == "sad" && thisAct > 3)) e.active ? txtToAdd = `<div class = "wobblyTxt textDiv interactiveText whiteText" data-word="${activeWord}">` : txtToAdd = `<div class = "textDiv whiteText">`;
            if (e.act == "angry" && thisAct == 1) e.active ? txtToAdd = `<div class = "angerWobble textDiv iAmAnger interactiveText" data-word="${activeWord}">` : txtToAdd = `<div class = "textDiv iAmAnger">`;
            if (e.act == "bargain" && thisAct == 2) e.active ? txtToAdd = `<div class = "bargainWobble textDiv iAmBargain interactiveText" data-word="${activeWord}">` : txtToAdd = `<div class = "textDiv iAmBargain">`;
            if (e.act == "sad" && thisAct == 3) e.active ? txtToAdd = `<div class = "sadWobble textDiv iAmDepression interactiveText" data-word="${activeWord}">` : txtToAdd = `<div class = "textDiv iAmDepression">`;
            if (e.act == "accept" && thisAct >= 4) e.active ? txtToAdd = `<div class = "acceptanceWobble textDiv iAmAcceptance interactiveText" data-word="${activeWord}">` : txtToAdd = `<div class = "textDiv iAmAcceptance">`;
            if (isToBeDisplayed) monTxt += txtToAdd + e.text + `</div> `
        });

        // on insère le texte généré dans la div prévue pour les textes du jeu
        gameDiv.innerHTML = monTxt;

        mesMots = [];
        document.querySelectorAll(".interactiveText").forEach((elems) => mesMots.push(elems.dataset.word));
    }

    displayGameText();
}