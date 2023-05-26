// CETTE FONCTION AFFICHE L'ALERT ET LE TEXTE QU'ELLE CONTIENT
function displayAlert(text) {
    let monAlertTxt = document.getElementById("alertTxt"),
        command = text.split(" "),
        monTxt = findText(command),
        txtFrag = typeof monTxt == "string" ? monTxt.split("") : "",
        i = txtFrag.length,
        interval = Math.round(Math.random() * 10) + 5;

    if (txtFrag == "") return;
    monAlert.style.display = "block";
    clearInt = false;

    monTxt.length > 160 ? monAlert.style.fontSize = "0.75em" : (monTxt.length > 140 ? monAlert.style.fontSize = "0.8em" : (monTxt.length > 120 ? monAlert.style.fontSize = "0.85em" : monAlert.style.fontSize = "0.9em"));

    displayLetterByLetter(txtFrag, i, interval, "alertTxt");

    document.getElementById("alertButton").addEventListener("click", () => {
        clickButton();
        clearInt = true;
        monAlertTxt.innerHTML = "";
        monAlert.style.display = "none";
    });
    document.getElementById("alertButton").addEventListener("mouseover", () => hoverButton());
}

// CETTE FONCTION TROUVE LE TEXTE A AFFICHER
function findText(commandItem) {
    let txt = "",
        act = MYGAME.player.currentAct,
        scene = MYGAME.currentScene,
        sceneName = MYGAME[LANG].scenes[scene].name,
        item = MYGAME[LANG].scenes[scene].items,
        command = commandItem[0].toLowerCase(),
        object = commandItem[(commandItem.length - 1)].toLowerCase(),
        acts = ["zero", "one", "two", "three", "four", "five", "six"];

    if (!UITXT[LANG].authorizedCommands[act].includes(command)) return `${UITXT[LANG].game.dunno}`;

    if (command == "quitter" || command == "leave") {
        if ((scene > 2 && act < 5) || (scene == 3 && act == 5)) displayMainText(parseInt(scene - 1));
        return item[item.length - 1][acts[act]].text;
    }

    // TROUVER LE BON ITEM AVEC LEQUEL INTERAGIR
    for (const e of item) {
        if (object != e.name) continue;


        for (const w of mesMots) {
            if (object != w) continue;

            // SI L'OBJET N'EST PAS DIRECTEMENT ACCESSIBLE:
            if (!e.isLocated) {
                switch (command) {
                    case "go":
                    case "aller":
                        const txtDepl = {
                            FR: ["Je me déplace", "Je me rends", "Je vais", "Je me dirige"],
                            ENG: ["I move", "I go", "I walk", "I navigate"]
                        },
                            txtPrep = {
                                FR: ["devant", "vers", "en direction de"],
                                ENG: ["to", "towards", "in the direction of"]
                            };

                        if (scene >= 4) item.forEach((y) => y.isLocated = false);
                        if (scene == 6) item[0].isLocated = true;

                        e.isLocated = true;

                        return `${txtDepl[LANG][Math.floor(Math.random() * txtDepl[LANG].length)]} ${txtPrep[LANG][Math.floor(Math.random() * txtPrep[LANG].length)]} ${e.determinant}${e.name}.`;
                    default:
                        return `${UITXT[LANG].game.goTo} ${command} ${e.determinant}${e.name}.`;
                }
            }

            // SI L'OBJET EST DIRECTEMENT ACCESSIBLE :
            let el = e[acts[act]],
                t = el.isFinal ? el.final : (el.isOpened ? el.open : (el.isOpening ? el.opening : el.closed)),
                compteur = MYGAME.player.count;

            txt = t[command];

            // CONDITION POUR CHANGER DE SCENE ET D'ACTE :
            if (t.win != undefined && command == t.win.command) displayMainText(parseInt(scene + 1));
            if (t.newAct != undefined && command == t.newAct.command) return nextActPlease(act + 1, txt);

            // CONDITIONS POUR MOMENTS SPECIFIQUES :
            if ((command === "inspecter" || command === "inspect") && (object === "portail" || object === "gate") && !el.isOpened && !el.isOpening && (act == 3 || act == 4)) txt += `"` + MYGAME.player.shortName + `".`;
            if ((command === "inspecter" || command === "inspect") && (object === "cierge" || object === "candle") && el.isOpened && act == 5) txt += `"` + MYGAME.player.username.toUpperCase().split("").shift() + `".`;

            // CONDITIONS POUR PUSH LE BON TEXTE DANS LES INPUTS PRECEDENTS :
            if (command === "aller" || command === "go") MYGAME.previousInput.push(command + " " + UITXT[LANG].game.direction + " " + e.determinant + e.name);
            else MYGAME.previousInput.push(command + " " + e.determinant + e.name);

            // CONDITION POUR LES "COLLECTIBLES" :
            if (t.collectible != undefined && command == t.collectible.command) MYGAME.player.collectibles[sceneName][t.collectible.coll] = true;

            // CONDITIONS ET BOUCLES POUR LES INTERACTIONS
            if (t.interaction != undefined) {
                for (const inter of t.interaction) {
                    if (command != inter.command) continue;

                    for (const target of inter.target) {
                        const tar = item[target][acts[act]];

                        if (inter.condition) {
                            if (typeof inter.condition === "number") {
                                if (compteur >= inter.condition) continue;

                                const whatCommand = txt;

                                if (compteur < (inter.condition - 1)) {
                                    MYGAME.player.count++;
                                    return whatCommand[MYGAME.player.count - 1];
                                }

                                MYGAME.player.count = 0;
                                txt = whatCommand[whatCommand.length - 1];
                            } else if (typeof inter.condition === "string") {
                                switch (inter.condition) {
                                    case "closed":
                                        if (tar.isOpening || tar.isOpened || tar.isFinal) continue;
                                        break;
                                    case "opening":
                                        if (!tar.isOpening) continue;
                                        else if (tar.isOpening && (tar.isOpened || tar.isFinal)) continue;
                                        break;
                                    case "open":
                                        if (!tar.isOpened) continue;
                                        else if (tar.isOpened && tar.isFinal) continue;
                                        break;
                                    case "final":
                                        if (!tar.isFinal) continue;
                                        break;
                                }
                            } else if (typeof inter.condition === "boolean") {
                                let mesCollectibles = MYGAME.player.collectibles[sceneName];

                                for (const [key, value] of Object.entries(mesCollectibles)) {
                                    if (!value) return txt[0];
                                }

                                txt = txt[1];
                            }
                        }
                        if (inter.state == "final") tar.isFinal = true;
                        else if (inter.state == "open") {
                            tar.isOpened = true;
                            tar.isFinal = false;
                        }
                        else if (inter.state == "opening") {
                            tar.isOpening = true;
                            tar.isOpened = false;
                            tar.isFinal = false;
                        }
                        else if (inter.state == "closed") {
                            tar.isOpening = false;
                            tar.isOpened = false;
                            tar.isFinal = false;
                        }
                    }
                }
            }

            // S'IL Y A UN EVENT
            if (t.triggerEvent != undefined && command == t.triggerEvent.command) {
                switch (t.triggerEvent.name) {
                    case "readingLetter":
                        openLetter(txt);
                        return "";
                    case "endGame":
                        endScreen(txt, txt[0].length);
                        return "";
                    case "theEnd":
                        theEnd(txt);
                        return "";
                }
            }

            return txt;
        }
    }
    if (txt === "") return `${UITXT[LANG].game.dunnoPrecise1} "${object}" ${UITXT[LANG].game.dunnoPrecise1}`;
}