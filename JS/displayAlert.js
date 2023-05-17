// CETTE FONCTION AFFICHE L'ALERT ET LE TEXTE QU'ELLE CONTIENT
function displayAlert(text) {
    let maDiv = document.getElementById("alertTxt"),
        alertBtn = document.getElementById("alertButton"),
        command = text.split(" "),
        monTxt = findText(command),
        txtFrag = typeof monTxt == "string" ? monTxt.split("") : "",
        i = txtFrag.length,
        interval = Math.round(Math.random() * 10) + 5;

    if (txtFrag == "") return;
    monAlert.style.display = "block";
    monAlert.style.fontSize = "0.9em";
    clearInt = false;

    if (monTxt.length > 140) monAlert.style.fontSize = "0.8em";

    txtDisplay();

    alertBtn.addEventListener("click", () => {
        clickButton();
        clearInt = true;
        maDiv.innerHTML = "";
        monAlert.style.display = "none";
    });
    alertBtn.addEventListener("mouseover", () => hoverButton());

    // afficher le texte lettre après lettre
    function txtDisplay() {
        setTimeout(function () {
            if (i > 0 && !clearInt) {
                maDiv.innerHTML += txtFrag[txtFrag.length - i];
                i--;
                txtDisplay();
            }
        }, interval);
    }
}

// CETTE FONCTION TROUVE LE TEXTE A AFFICHER
function findText(commandItem) {
    let txt = "",
        act = MYGAME.player.currentAct,
        scene = MYGAME.currentScene,
        sceneName = MYGAME.scenes[scene].name,
        item = MYGAME.scenes[scene].items,
        command = commandItem[0].toLowerCase(),
        object = commandItem[(commandItem.length - 1)].toLowerCase(),
        acts = ["zero", "one", "two", "three", "four", "five"],
        authorizedCommands = [
            ["voir", "utiliser", "aller", "quitter"],
            ["voir", "utiliser", "aller", "quitter"],
            ["voir", "utiliser", "aller", "quitter", "frapper"],
            ["voir", "utiliser", "aller", "quitter", "frapper", "inspecter"],
            ["voir", "utiliser", "aller", "quitter", "frapper", "inspecter", "attendre"],
            ["voir", "utiliser", "aller", "quitter", "frapper", "inspecter", "attendre", "accepter"]
        ];

    if (!authorizedCommands[act].includes(command)) return "Je ne comprends pas ce que je suis censé faire.";

    if (command === "quitter") {
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
                    case "aller":
                        const txtDepl = ["me déplace", "me rends", "vais", "me dirige"],
                            txtPrep = ["devant", "vers", "en direction de"];

                        if (scene >= 4) item.forEach((y) => y.isLocated = false);
                        if (scene == 6) item[0].isLocated = true;

                        e.isLocated = true;

                        return `Je ${txtDepl[Math.floor(Math.random() * txtDepl.length)]} ${txtPrep[Math.floor(Math.random() * txtPrep.length)]} ${e.determinant}${e.name}.`;
                    default:
                        return `Je dois me rapprocher pour ${command} ${e.determinant}${e.name}.`;
                }
            }

            // SI L'OBJET EST DIRECTEMENT ACCESSIBLE :
            let el = e[acts[act]],
                t = el.isFinal ? el.final : (el.isOpened ? el.open : (el.isOpening ? el.opening : el.closed)),
                compteur = MYGAME.player.count;

            txt = getCommand(command);

            if (t.win != undefined &&  command == t.win.command) displayMainText(parseInt(scene + 1));
            if (t.newAct != undefined && command == t.newAct.command) return nextActPlease(act + 1, txt);

            // CONDITIONS POUR MOMENTS SPECIFIQUES :
            if (command === "inspecter" && object === "portail" && !el.isOpened && !el.isOpening && (act == 3 || act == 4)) txt += `"` + MYGAME.player.shortName + `".`;
            if (command === "inspecter" && object === "cierge" && el.isOpened && act == 5) txt += `"` + MYGAME.player.name.toUpperCase().split("").shift() + `".`;

            // CONDITIONS POUR PUSH LE BON TEXTE DANS LES INPUTS PRECEDENTS
            if (command === "aller") MYGAME.previousInput.push(command + " vers " + e.determinant + e.name);
            else MYGAME.previousInput.push(command + " " + e.determinant + e.name);

            if(t.collectible != undefined && command == t.collectible.command) MYGAME.player.collectibles[sceneName][t.collectible.coll] = true;

            // CONDITIONS ET BOUCLES POUR LES INTERACTIONS
            if (!t.interaction?.length) return txt;

            for (const inter of t.interaction) {
                if (command != inter.command) continue;

                for (const target of inter.target) {
                    const tar = item[target][acts[act]];

                    if (inter.condition) {
                        if (typeof inter.condition === "number") {
                            if (compteur >= inter.condition) continue;

                            const whatCommand = getCommand(command);

                            if (compteur < (inter.condition - 1)) {
                                MYGAME.player.count++;
                                return whatCommand[MYGAME.player.count - 1];
                            }

                            MYGAME.player.count = 0;
                            txt = whatCommand[whatCommand.length - 1];
                        } else if (typeof inter.condition === "string") {
                            switch(inter.condition) {
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
                                if(!value) return getCommand(command)[0];
                            }

                            txt = getCommand(command)[1];
                        }
                    }
                    if (inter.state == "final") tar.isFinal = true;
                    else if (inter.state == "open") tar.isOpened = true;
                    else if (inter.state == "opening") tar.isOpening = true;
                    else if (inter.state == "closed") tar.isOpened = false;
                }
            }

            // S'IL Y A UN EVENT
            if (t.triggerEvent != undefined && command == t.triggerEvent.command) {
                switch(t.triggerEvent.name) {
                    case "readingLetter":
                        let maCommand = getCommand(command)
                        openLetter(maCommand);
                        return "";
                    case "endGame":
                        endScreen();
                        return "";
                }
            }

            return txt;

            function getCommand(name) {
                return {
                    voir: t.look,
                    utiliser: t.use,
                    aller: t.go,
                    frapper: t.hit,
                    inspecter: t.inspect,
                    attendre: t.wait,
                    accepter: t.accept,
                }[name];
            }
        }
    }
    if (txt === "") return `Qu'est-ce que "${object}" veut dire ?`;
}