/* CE DOCUMENT CONTIENT 4 FONCTIONS, DONT 2 IMBRIQUÉE DANS UNE AUTRE */

/*
    LA PREMIÈRE FONCTION EST APPELÉE QUAND ON VALIDE UN INPUT
    AVEC UNE COMMANDE. SON BUT EST DE RÉCUPÉRER LE CONTENU DE
    L'INPUT, L'INTERPRÉTER ET L'AFFICHER DANS UNE ALERT CUSTOM.
 */
let hintFunc1;
let hintFunc2;
let hintFunc3;
let hintFunc4;
let hintFunc5;
let monInterval2;
function displayAlert(text) {
    let monAlert = document.getElementById("boxAlert");
    let maDiv = document.getElementById("alertTxt");
    let command = text.split(" ");
    let textToDisplay = "";

    if (text.toLowerCase() != "use letter" && text.toLowerCase() != "accept screen") alertAppear(monAlert);

    // on affiche la div qui compose l'alert
    monAlert.style.display = "block";

    // on vide le contenu de l'alert si elle en avait
    maDiv.innerHTML = "";

    // on ajoute un addEventListener au bouton qui apparaît dans la div
    document.getElementById("alertButton").addEventListener("click", () => {
        document.getElementById("boxAlert").style.display = "none";
        maDiv.innerHTML = "";

        clickButton();
        clearInterval(monInterval2);
    });

    document.getElementById("alertButton").addEventListener("mouseover", () => {
        hoverButton();
    });

    // CONDITION SPÉCIALE : si on entre la commande "use letter" à la scène 6 de l'acte 5 (en partant de 0)
    if (myGameTxt.currentAct >= 4 && myGameTxt.currentScene >= 5 && text == "use letter") {
        // on lance la fonction openLetter(), qui a un affichage spécial
        myGameTxt.scenes[myGameTxt.currentScene].items[0].lookingAtLetter = true;
        myGameTxt.scenes[myGameTxt.currentScene].items[0].letterRead = true;
        openLetter(0);
    }
    // CONDITION SPÉCIALE : sinon on définit textToDisplay en appelant la fonction findText() avec comme argument la variable command
    else {
        textToDisplay = `<div id = "monTxtAlert">` + findText(command, text) + "</div>";
    }

    maDiv.innerHTML = textToDisplay;
    let maDivTxt = document.getElementById("monTxtAlert");
    let monTxt = maDivTxt.textContent;
    maDivTxt.innerHTML = "";

    // set de variables utiles pour la fonction txtDisplay()
    let txtFrag = monTxt.split("");
    let i = txtFrag.length;
    let j = 0;
    let l = i;
    let interval = Math.round(Math.random() * 25) + 15;

    txtDisplay();
    playKeySound();

    /*
        LA FONCTION TXTTODISPLAY AFFICHE CARACTÈRE PAR CARACTÈRE
        LE TEXTE FRAGMENTÉ DE TXTFRAG, QUI A ÉTÉ GÉNÉRÉ PAR FINDTEXT().
    */
    function txtDisplay() {
        // on configure un timeout pour qu'il y a du temps entre l'affichage de chaque caractère
        setTimeout(function () {
            if (i > 0) {
                // on insère dans la maDiv le caractère, allant du premier au dernier
                maDivTxt.innerHTML += txtFrag[j];

                j++;
                i--;
                txtDisplay();
            }
        }, interval);
    }

    function playKeySound() {
        clearInterval(monInterval2);
        monInterval2 = setInterval(() => {
            if (l > 0) {
                if (l % 2 == 0) {
                    let canPlaySound = false;
                    if (myGameTxt.currentScene != 5) {
                        canPlaySound = true;
                    }
                    else {
                        if (!myGameTxt.scenes[myGameTxt.currentScene].items[0].lookingAtLetter && !myGameTxt.isFinished) canPlaySound = true;
                    }

                    if (canPlaySound) playKeyType();
                }
                l--
            }
            else {
                clearInterval(monInterval2);
            }
        }, interval)
    }
}

/* 
    LA DEUXIÈME FONCTIONS SERT À GÉNÉRER LE TEXTE QUI DEVRA
    ÊTRE AFFICHÉ DANS L'ALERT. LA FONCTION PREND COMME ARGUMENT
    COMMANDITEM, QUI EST L'ARRAY COMPOSÉ PAR LE SPLIT À L'ESPACEMENT
    DU CONTENU DE L'INPUT.
*/
function findText(commandItem, textInput) {
    let selectedItem = [];
    let isWin = false;
    let canOpen = false;
    let itemOpened = false;
    let validInput = false;
    let textAlert = "";
    let maScene = myGameTxt.currentScene;
    let monItem = myGameTxt.scenes[maScene].items;
    let maCommande = commandItem[0].toLowerCase();
    let monCurrentAct = myGameTxt.currentAct;

    // CONDITION PRINCIPALE : si maCommade est "leave"
    if (maCommande == "quitter") {
        // on récupère le dernier objet de l'array d'objet monItem
        let leaveItem = monItem[(monItem.length - 1)];

        // le texte à afficher dans l'alert est récupéré dans l'objet JSON myGameTxt
        textAlert = leaveItem.leftTxt;

        // CONDITION SECONDAIRE : si la scène vaut 0 et que l'on ne peut pas leave, on indique qu'on ne peut pas
        if (maScene == 0) textAlert = leaveItem.leftTxt;

        // CONDITION SECONDAIRE : si la scène vaut entre 1 et 3 (entre 2 et 4 en partant de 0)
        else if (maScene == 1 || maScene == 2 || maScene == 3) {
            // on indique que la scène actuelle diminue d'1 ; on revient en arrière dans les scènes
            myGameTxt.currentScene = maScene - 1;
            actOne(false);
            validInput = true;
        }

        // CONDITION SECONDAIRE : si la scène vaut 0 et que l'on ne peut pas leave
        else if (maScene == 4) {
            // on indique que la scène actuelle diminue de 2 ; on revient en arrière dans les scènes
            myGameTxt.currentScene = maScene - 2;
            actOne(false);
            validInput = true;
        }
    }

    // CONDITION PRINCIPALE : si maCommade est "false"
    else if (maCommande == "false") textAlert = "Je ne comprends pas ce que je suis censé faire.";

    // CONDITION PRINCIPALE : si maCommade est différente de "leave"
    else {
        // on parcours la liste des items pour trouver le bon. Une fois trouver, on a un set de conditions principales et secondaires
        monItem.forEach((e) => {
            selectedItem.push(e.name);
            if (e.name == commandItem[(commandItem.length - 1)].toLowerCase()) {

                if (!e.isOpened) {
                    if (maCommande == "voir") textAlert = e.lookTxt;
                    else if (maCommande == "utiliser") textAlert = e.useTxt;
                    else if (maCommande == "aller") textAlert = e.goTxt;
                    else if (maCommande == "frapper" && monCurrentAct >= 1) textAlert = e.hitTxt;
                    else if (maCommande == "inspecter" && monCurrentAct >= 2) textAlert = e.inspectTxt;
                    else if (maCommande == "attendre" && monCurrentAct >= 3) textAlert = e.waitTxt;
                    else if (maCommande == "accepter" && monCurrentAct >= 4) textAlert = e.acceptTxt;
                    else textAlert = "Je ne comprends pas ce que je dois faire avec " + e.determinant + e.name + ".";
                }

                else if (e.isOpened) {
                    if (maCommande == "voir") textAlert = e.lookTxtOpen;
                    else if (maCommande == "utiliser") textAlert = e.useTxtOpen;
                    else if (maCommande == "aller") textAlert = e.goTxtOpen;
                    else if (maCommande == "frapper" && monCurrentAct >= 1) textAlert = e.hitTxtOpen;
                    else if (maCommande == "inspecter" && monCurrentAct >= 2) textAlert = e.inspectTxtOpen;
                    else if (maCommande == "attendre" && monCurrentAct >= 3) textAlert = e.waitTxtOpen;
                    else if (maCommande == "accepter" && monCurrentAct >= 4) textAlert = e.acceptTxtOpen;
                    else textAlert = "Je ne comprends pas ce que je dois faire avec " + e.determinant + e.name + ".";
                    if ((e.useWin == true && maCommande == "utiliser") || (e.goWin == true && maCommande == "aller") || (e.acceptWin == true && maCommande == "accepter")) isWin = true;
                }

                if (e.useOpens >= 0 && maCommande == "utiliser") monItem[e.useOpens].isOpened = true;
                else if (e.useOpensIfOpened >= 0 && maCommande == "utiliser" && e.isOpened == true) monItem[e.useOpensIfOpened].isOpened = true;
                else if (e.useOpensIfClosed >= 0 && maCommande == "utiliser" && e.isOpened == false) monItem[e.useOpensIfClosed].isOpened = true;
                else if (e.useClosesifOpened >= 0 && maCommande == "utiliser" && e.isOpened == true) monItem[e.useClosesifOpened].isOpened = false;
                else if (e.hitOpens >= 0 && maCommande == "frapper") monItem[e.hitOpens].isOpened = true;
                else if (e.inspectOpens >= 0 && maCommande == "inspecter") monItem[e.inspectOpens].isOpened = true;
                else if (e.waitOpens >= 0 && maCommande == "attendre") monItem[e.waitOpens].isOpened = true;
                else if (e.acceptOpens >= 0 && maCommande == "accepter") monItem[e.acceptOpens].isOpened = true;

                //CONDITIONS SPECIALES pour passages aux actes suivants
                if ((monCurrentAct == 0 && maScene == 1) && (e.isOpened == true && maCommande == "aller") && e.name == "porte") {
                    isWin = false;
                    nextActPlease(1, textAlert);
                }
                if ((monCurrentAct == 1 && maScene == 2) && (e.isOpened == true && maCommande == "aller") && e.name == "escalier") {
                    isWin = false;
                    nextActPlease(2, textAlert);
                }

                //CONDITIONS SPECIALES pour des fonctionnalités ou des textes
                if (maCommande == "inspecter" && e.name == "portail") {
                    let twoLetters = myGameTxt.username;
                    let mesLettres = twoLetters.split("");
                    if (twoLetters != localStorage.username) console.log("something went wrong");
                    else {
                        twoLetters = `"` + mesLettres[0] + mesLettres[1] + `"`;
                    }
                    textAlert += twoLetters;
                }

                if (textAlert != "") validInput = true;

            }
        });

        // si l'objet entré dans l'input ne correspond à aucun myGamTxt.scenes[myGametxt.currentScene].items
        if (textAlert == "") {
            textAlert = `Qu'est-ce que "${commandItem[1].toLowerCase()}" veut dire ?`;
        }
    }

    if (validInput) {
        let isCorrect = false;
        let monObjet = "";
        selectedItem.forEach((e) => {
            if (e == commandItem[1].toLowerCase()) {
                isCorrect = true;
                monObjet = e;
            }
        });
        monItem.forEach((e) => {
            if (e.name == monObjet) {
                if (e.isOpened) itemOpened = true;
                if (e.canBeOpened) canOpen = true;
            }
        });
        textInput = textInput.toLowerCase();
        myGameTxt.previousInput.push(textInput);
        let array = myGameTxt.mesInputs;
        if (isCorrect) {
            if (canOpen) {
                if (itemOpened) {
                    let index = array.indexOf(textInput + " " + myGameTxt.currentScene + " opened");
                    if (index > -1) {
                        array.splice(index, 1);
                    }
                    for (let i = 0; i < 3; i++) {
                        let mesCommandes = ["look", "use", "go"];
                        let monElement = array.indexOf(mesCommandes[i] + " " + monObjet + " " + myGameTxt.currentScene);
                        if (monElement > -1) {
                            array.splice(index, 1);
                        }
                    }
                }
                else {
                    let index = array.indexOf(textInput + " " + myGameTxt.currentScene);
                    if (index > -1) {
                        array.splice(index, 1);
                    }
                }
            }
            else {
                let index = array.indexOf(textInput + " " + myGameTxt.currentScene);
                if (index > -1) {
                    array.splice(index, 1);
                }
            }
        }
        if (isWin) {
            myGameTxt.currentScene = maScene + 1;
            actOne(false);
        }
        document.getElementById("scoreCurrent").innerHTML = (array.length - myGameTxt.nbrInputs) * (-1);
    }


    // return textAlert pour que cela puisse être utilisé dans la fonction displayAlert()
    return textAlert;
}

function nextActPlease(newAct, myTextToDisplay) {
    /*clearInterval(hintFunc1);
    clearInterval(hintFunc2);
    clearInterval(hintFunc3);
    clearInterval(hintFunc4);
    clearInterval(hintFunc5);*/
    document.getElementById("scoreZ").style.display = "none";
    myGameTxt = JSON.parse(JSON.stringify(baseGameTxt));
    let txtToDispay = "";

    // on incrémente le numéro de l'acte et set la scène à 6
    myGameTxt.currentAct = newAct;
    myGameTxt.username = localStorage.username;
    myGameTxt.currentScene = 6;
    myGameTxt.mesInputs = countOutcomes();
    myGameTxt.nbrInputs = myGameTxt.mesInputs.length;

    // on désaffiche l'alert et on insère le texte normalement prévu à l'alert dans la div gameDiv, qui est centrée
    document.getElementById("boxAlert").style.display = "none";
    txtToDispay = `<br/><div class="textDiv whiteText">` + myTextToDisplay;
    txtToDispay += `</div><br/><br/><input type="button" value="Sauvegarder et continuer" class="buttonGoForward" id="buttonNewAct"/>`
    gameDiv.innerHTML = txtToDispay;
    gameDiv.style.textAlign = "center";

    // on paramètre un eventListener pour le bouton, pour passer à l'acte suivant et sauvegarder dans le localStorage
    document.getElementById("buttonNewAct").addEventListener("click", function () {
        localStorage.act = newAct;
        myGameTxt.previousInput = [];
        actOne(true);
        clickButton();
    });

    document.getElementById("buttonNewAct").addEventListener("mouseover", () => {
        hoverButton();
    });
}