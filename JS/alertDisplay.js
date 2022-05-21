let monInterval2;
function displayAlert(text) {
    let monAlert = document.getElementById("boxAlert");
    let maDiv = document.getElementById("alertTxt");
    let command = text.split(" ");
    let textToDisplay = "";

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

    textToDisplay = `<div id = "monTxtAlert">` + findText(command, text) + "</div>";

    maDiv.innerHTML = textToDisplay;
    let maDivTxt = document.getElementById("monTxtAlert");
    let monTxt = maDivTxt.textContent;
    maDivTxt.innerHTML = "";

    // set de variables utiles pour la fonction txtDisplay()
    let txtFrag = monTxt.split("");
    let i = txtFrag.length;
    let j = 0;
    let l = i;
    let interval = Math.round(Math.random() * 10) + 5;

    txtDisplay();

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
    let validInput = false;
    let textAlert = "";
    let maScene = myGameTxt.currentScene;
    let monItem = myGameTxt.scenes[maScene].items;
    let maCommande = commandItem[0].toLowerCase();
    let monCurrentAct = myGameTxt.currentAct;

    // CONDITION PRINCIPALE : si maCommade est "leave"
    if (maCommande == "quitter") {
        let leaveItem = monItem[(monItem.length - 1)];

        textAlert = leaveItem.leftTxt;

        if (maScene > 0) {
            myGameTxt.currentScene = maScene - 1;
            actOne(false);
            validInput = true;
        }
    }

    // CONDITION PRINCIPALE : si maCommade est "false"
    else if (maCommande == "false") textAlert = "Je ne comprends pas ce que je suis censé faire.";

    // CONDITION PRINCIPALE : si maCommade est différente de "leave" et "false"
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
                    if ((e.useWin && maCommande == "utiliser") || (e.goWin && maCommande == "aller") || (e.acceptWin && maCommande == "accepter")) isWin = true;
                }

                if (e.useOpens >= 0 && maCommande == "utiliser") monItem[e.useOpens].isOpened = true;
                else if (e.useOpensIfOpened >= 0 && maCommande == "utiliser" && e.isOpened) monItem[e.useOpensIfOpened].isOpened = true;
                else if (e.useOpensIfClosed >= 0 && maCommande == "utiliser" && !e.isOpened) monItem[e.useOpensIfClosed].isOpened = true;
                else if (e.useClosesifOpened >= 0 && maCommande == "utiliser" && e.isOpened) monItem[e.useClosesifOpened].isOpened = false;
                else if (e.hitOpens >= 0 && maCommande == "frapper") monItem[e.hitOpens].isOpened = true;
                else if (e.inspectOpens >= 0 && maCommande == "inspecter") monItem[e.inspectOpens].isOpened = true;
                else if (e.waitOpens >= 0 && maCommande == "attendre") monItem[e.waitOpens].isOpened = true;
                else if (e.acceptOpens >= 0 && maCommande == "accepter") monItem[e.acceptOpens].isOpened = true;

                //CONDITIONS SPECIALES pour passages aux actes suivants
                if ((monCurrentAct == 0 && maScene == 1) && (e.isOpened && maCommande == "aller") && e.name == "porte") {
                    isWin = false;
                    nextActPlease(1, textAlert);
                }
                if ((monCurrentAct == 1 && maScene == 2) && (e.isOpened && maCommande == "aller") && e.name == "escalier") {
                    isWin = false;
                    nextActPlease(2, textAlert);
                }
                if ((monCurrentAct == 2 && maScene == 3) && (e.isPlaced && maCommande == "aller") && e.name == "échelle") {
                    isWin = false;
                    textAlert = e.goTxtOpenPlaced;
                    nextActPlease(3, textAlert);
                }
                if ((monCurrentAct > 2 && maScene == 3) && (e.isPlaced && maCommande == "aller") && e.name == "échelle") isWin = true;
                if ((monCurrentAct == 3 && maScene == 4) && maCommande == "attendre" && e.name == "lune" && myGameTxt.player.canWin) {
                    isWin = false;
                    textAlert = e.waitTxtOpenWin
                    nextActPlease(4, textAlert);
                }
                if ((monCurrentAct > 3 && maScene == 4) && maCommande == "attendre" && e.name == "lune" && myGameTxt.player.canWin) isWin = true;

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
                if (maCommande == "utiliser" && e.name == "échelle" && e.isOpened && !e.isPlaced) e.isPlaced = true;
                if (maCommande == "aller" && e.name == "échelle" && e.isPlaced) textAlert = e.goTxtOpenPlaced;
                if (maCommande == "voir" && e.name == "livre" && e.isOpened) {
                    let rdm = Math.round(Math.random() * 4);
                    textAlert = e.lookTxtOpen[rdm]
                }
                if (maCommande == "attendre" && e.name == "lune" && myGameTxt.player.canWin) textAlert = e.waitTxtOpenWin;

                if ((monCurrentAct == 4 && maScene == 5) && maCommande == "utiliser" && e.name == "lettre") {
                    myGameTxt.scenes[myGameTxt.currentScene].items[0].lookingAtLetter = true;
                    myGameTxt.player.readLetter = true;
                    openLetter(0);
                }

                if ((monCurrentAct == 4 && maScene == 5) && maCommande == "accepter" && e.name == "écran" && myGameTxt.player.readLetter) {
                    endScreen(0)
                }

                //CONDITIONS SPECIALES pour les infos joueur
                let winCond = myGameTxt.player.winConditions;
                let book = winCond.hasReadBook;
                let card = winCond.hasSeenCard;
                let car = winCond.hasInspectedCar;
                let candle = winCond.hasLitCandles;
                if ((maCommande == "voir" || maCommande == "accepter") && e.name == "livre" && e.isOpened) winCond.hasReadBook = true
                if ((maCommande == "voir" || maCommande == "accepter")  && e.name == "carte" && e.isOpened) winCond.hasSeenCard = true;
                if ((maCommande == "inspecter" || maCommande == "accepter")  && e.name == "figurine" && e.isOpened) winCond.hasInspectedCar = true;
                if ((maCommande == "voir" || maCommande == "accepter")  && e.name == "bougie" && e.isOpened) winCond.hasLitCandles = true;
                if (!myGameTxt.player.canWin &&
                    (
                        (book && (card || car || candle)) ||
                        (card && (book || car || candle)) ||
                        (car && (book || card || candle)) ||
                        (candle && (book || card || car))
                    )
                ) myGameTxt.player.canWin = true;
                console.log(myGameTxt.player.canWin)

                if (textAlert != "") validInput = true;
            }
        });

        // si l'objet entré dans l'input ne correspond à aucun myGamTxt.scenes[myGametxt.currentScene].items
        if (textAlert == "") {
            textAlert = `Qu'est-ce que "${commandItem[1].toLowerCase()}" veut dire ?`;
        }
    }

    if (validInput) {
        textInput = textInput.toLowerCase();
        myGameTxt.previousInput.push(textInput);
        if (isWin) {
            myGameTxt.currentScene = maScene + 1;
            actOne(false);
        }
    }

    // return textAlert pour que cela puisse être utilisé dans la fonction displayAlert()
    return textAlert;
}

function nextActPlease(newAct, myTextToDisplay) {
    myGameTxt = JSON.parse(JSON.stringify(baseGameTxt));
    let txtToDispay = "";

    // on incrémente le numéro de l'acte et set la scène à 6
    myGameTxt.currentAct = newAct;
    myGameTxt.username = localStorage.username;
    myGameTxt.currentScene = 6;

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