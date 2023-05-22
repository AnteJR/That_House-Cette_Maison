// EVENTLISTENER DE L'INPUT POUR DES EVENTS SPECIFIQUES (ENTER, ARROWUP, ARROWDOWN)
monInput.addEventListener("keydown", (e) => {
    if (document.getElementById("boxAlert").style.display == "none") {
        if (e.key == "Enter") {
            counterCommands = 0;
            if (monInput.value != "") validateInput();
        }
        else if (e.key == "ArrowUp") browseArrowUp();
        else if (e.key == "ArrowDown") browseArrowDown();
    }
});

// EVENTLISTENER SANS FOCUS
window.addEventListener('keydown', (e) => {
    let canPlaySound = false,
        input = monInput;

    if (MYGAME.currentScene > 0) {

        if (MYGAME.currentScene == 1) input = document.getElementById("monUsername");
        else input = document.getElementById("commandInput");

        // mettre le son ici permet de le jouer chaque fois que le user presse une touche, peu importe ce qui est focus
        if (!MYGAME.isSilent) canPlaySound = true;
        if (canPlaySound) playKeyType();

        // ne fonctionne que si l'input n'est pas focused, ce afin d'éviter les doubles inputs
        if (input != document.activeElement) {
            if (document.getElementById("boxAlert").style.display == "none") {
                switch (e.key) {
                    case "Backspace":
                        let valueInput = input.value.split("");
                        valueInput.pop();
                        input.value = valueInput.join("");
                        break;
                    case "Enter":
                        counterCommands = 0;
                        if (input.value != "") validateInput();
                        break;
                    case "ArrowUp":
                        browseArrowUp();
                        break;
                    case "ArrowDown":
                        browseArrowDown();
                        break;
                    case "Escape":
                        gameLaunch();
                        break;
                    default:
                        if (!["Meta", "Tab", "Shift", "CapsLock", "Control", "Alt", "ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp", "Dead", "Escape"].includes(e.key)) {
                            input.value += e.key;
                        }
                }
            }
            else {
                if (e.key == "Enter") {
                    document.getElementById("boxAlert").style.display = "none";
                    document.getElementById("alertTxt").innerHTML = "";
                    clearInt = true;
                }
            }
        }
    }
});

function validateInput() {
    if (monInput.value == "quitter" || monInput.value == "leave") monInput.value += " ";
    if (monInput.value.split(" ").length < 2 && monInput.value != "quitter") monInput.value = "false statement";

    let commandToSend = removeSpecialChars(monInput.value.split(""));

    displayAlert(commandToSend.toLowerCase());
    monInput.value = "";
    setTimeout(() => document.activeElement.blur(), 50);
}

function browseArrowUp() {
    if (MYGAME.previousInput.length > 0 && counterCommands <= MYGAME.previousInput.length) {
        if (counterCommands + 1 <= MYGAME.previousInput.length) counterCommands++;
        if (MYGAME.previousInput[MYGAME.previousInput.length - counterCommands] != undefined) monInput.value = MYGAME.previousInput[MYGAME.previousInput.length - counterCommands];
        else monInput.value = "";
    }
}

function browseArrowDown() {
    if (MYGAME.previousInput.length > 0 && counterCommands <= MYGAME.previousInput.length) {
        if (counterCommands - 1 >= 0) counterCommands--;
        if (MYGAME.previousInput[MYGAME.previousInput.length - counterCommands] != undefined) monInput.value = MYGAME.previousInput[MYGAME.previousInput.length - counterCommands];
        else monInput.value = "";
    }
}

// EVENTLISTENER POUR LES COMMANDES EN BAS DE L'ECRAN
mesCommandes.forEach((element) => {
    element.addEventListener("click", function () {
        let maCommande = this.dataset.command,
            canBeUsed = false,
            monAct = MYGAME.player.currentAct;

        if (monAct > 5) {
            this.className.split(" ")[1] == "acceptC" ? canBeUsed = true : canBeUsed = false;
        }
        else {
            // conditions pour rendre disponible les commandes aux bons actes
            if (this.className.split(" ")[2] == "bonusC") {
                if (this.className.split(" ")[1] == "hitC") canBeUsed = (monAct >= 2 && monAct < 6);
                else if (this.className.split(" ")[1] == "inspectC") canBeUsed = (monAct >= 3 && monAct < 6);
                else if (this.className.split(" ")[1] == "waitC") canBeUsed = (monAct >= 4 && monAct < 6);
                else if (this.className.split(" ")[1] == "acceptC") canBeUsed = (monAct >= 5);
            } else canBeUsed = true;
        }

        // insérer le mot lié à la commande dans l'input
        if (canBeUsed) {
            document.getElementById('commandInput').value = maCommande + " ";
            if (maCommande.toLowerCase() == "quitter" || maCommande.toLowerCase() == "leave") {
                displayAlert(maCommande.toLowerCase() + " ");
                document.getElementById('commandInput').value = "";
            }
        }
    });
});