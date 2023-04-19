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
    clearInt = false;

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
        item = MYGAME.scenes[scene].items,
        command = commandItem[0].toLowerCase(),
        object = commandItem[(commandItem.length - 1)].toLowerCase(),
        acts = ["one", "two", "three", "four", "five"],
        authorizedCommands = ["voir", "utiliser", "aller", "frapper", "inspecter", "attendre", "accepter", "quitter"];

    if (!authorizedCommands.includes(command)) return "Je ne comprends pas ce que je suis censé faire.";


    if (command == "quitter") {
        if (scene > 2) displayMainText(parseInt(scene - 1));
        return item[item.length - 1][acts[act]].text;
    }

    // TROUVER LE BON ITEM AVEC LEQUEL INTERAGIR
    for (const e of item) {
        if (object != e.name) continue;

        for (const w of mesMots) {
            if (object != w) continue;

            // SI L'OBJET N'EST PAS DIRECTEMENT ACCESSIBLE :
            if (!e.isLocated) {
                if (command != "aller") return "Je dois me rapprocher pour " + command + " " + e.determinant + e.name + ".";
                else if (command == "aller") {
                    let txtDepl = ["me déplace ", "me rends ", "vais ", "me dirige "],
                        txtPrep = ["devant ", "vers ", "en direction de "],
                        nbrDepl = Math.floor(Math.random() * txtDepl.length),
                        nbrPrep = Math.floor(Math.random() * txtPrep.length);

                    if (scene >= 4) item.forEach((y) => y.isLocated = false);

                    e.isLocated = true;

                    return "Je " + txtDepl[nbrDepl] + txtPrep[nbrPrep] + e.determinant + e.name + ".";
                }
            }

            // SI L'OBJET EST DIRECTEMENT ACCESSIBLE :
            let el = e[acts[act]],
                t = el.isFinal ? el.final : (el.isOpened ? el.open : (el.isOpening ? el.opening : el.closed));

            if (command == "voir") txt = t.look;
            else if (command == "utiliser") txt = t.use;
            else if (command == "aller") txt = t.go;
            else if (command == "frapper" && act >= 1) txt = t.hit;
            else if (command == "inspecter" && act >= 2) txt = t.inspect;
            else if (command == "attendre" && act >= 3) txt = t.wait;
            else if (command == "accepter" && act >= 4) txt = t.accept;

            if (t.interaction != undefined) {
                for (const inter of t.interaction) {
                    if (command != inter.command) continue;

                    for (const target of inter.cible) {
                        let tar = item[target][acts[act]];

                        if (inter.condition != undefined) {
                            if (inter.condition == "closed" && (tar.isOpening || tar.isOpened || tar.isFinal)) continue;
                            if (inter.condition == "opening" && (!tar.isOpening || tar.isOpened || tar.isFinal)) continue;
                            if (inter.condition == "open" && (!tar.isOpened || tar.isFinal)) continue;
                            if (inter.condition == "final" && !tar.isFinal) continue;
                        }

                        if (inter.etat == "final") tar.isFinal = true;
                        else if (inter.etat == "open") tar.isOpened = true;
                        else if (inter.etat == "opening") tar.isOpening = true;
                        else if (inter.etat == "closed") tar.isOpened = false;

                    };
                };
            }

            if (t.goWin == true && command == "aller") displayMainText(parseInt(scene + 1));

            if (t.newAct != undefined && command == t.newAct.command) return nextActPlease(act + 1, txt);

            // CONDITIONS POUR MOMENTS SPECIFIQUES :
            if (command == "inspecter" && object == "portail" && !el.isOpened && !el.isOpening && (act == 2 || act == 3)) txt += `"` + MYGAME.player.shortName + `"`;

            MYGAME.previousInput.push(command + " " + e.determinant + e.name);
            return txt;
        }
    }
    if (txt == "") return `Qu'est-ce que "${commandItem[(commandItem.length - 1)].toLowerCase()}" veut dire ?`;
}