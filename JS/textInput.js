let monInput = document.getElementById("commandInput"),
    counterCommands = 0;

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
    let canPlaySound = false;

    if (MYGAME.currentScene > 0) {

        if (MYGAME.currentScene == 1) monInput = document.getElementById("monUsername");
        else monInput = document.getElementById("commandInput");

        // mettre le son ici permet de le jouer chaque fois que le user presse une touche, peu importe ce qui est focus
        if (!MYGAME.isFinished) canPlaySound = true;
        if (canPlaySound) playKeyType();

        // ne fonctionne que si l'input n'est pas focused, ce afin d'éviter les doubles inputs
        if (monInput != document.activeElement) {
            if (document.getElementById("boxAlert").style.display == "none") {

                // s'il s'agit de touches qui peuvent faire bouger la position de la fenêtre, on désactive leur effet par défaut
                if (e.key === "Spacebar" || e.key === " " || e.key != "ArrowLeft" || e.key != "ArrowRight" || e.key != "ArrowDown" || e.key != "ArrowUp" || e.key === "Escape") {
                    e.preventDefault();
                }

                // on bloque les caractères spéciaux style shift, caps, ctrl, et on ajoute à l'input le reste
                if (e.key != "Backspace" && e.key != "Enter" && e.key != "Meta" && e.key != "Shift" && e.key != "CapsLock" && e.key != "Control" && e.key != "Alt" && e.key != "ArrowLeft" && e.key != "ArrowRight" && e.key != "ArrowDown" && e.key != "ArrowUp" && e.key != "Dead" && e.key != "Escape") {
                    monInput.value += e.key;
                }
                else if (e.key == "Backspace") {
                    let valueInput = monInput.value.split("");
                    valueInput.pop();
                    monInput.value = valueInput.join("");
                }
                else if (e.key == "Enter") {
                    counterCommands = 0;
                    if (monInput.value != "") validateInput();
                }
                else if (e.key == "ArrowUp") browseArrowUp();
                else if (e.key == "ArrowDown") browseArrowDown();
                else if (e.key == "Escape") gameLaunch();
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
    if (monInput.value.split(" ").length == 1 && monInput.value == "quitter") monInput.value = "quitter ";
    else if (monInput.value.split(" ").length < 2 && monInput.value != "quitter") monInput.value = "false statement";
    displayAlert(monInput.value);
    monInput.value = "";
    setTimeout(() => document.activeElement.blur(), 50);
}

function browseArrowUp() {
    if (MYGAME.previousInput.length > 0 && counterCommands <= MYGAME.previousInput.length) {
        if (counterCommands + 1 <= MYGAME.previousInput.length) counterCommands++;
        monInput.value = MYGAME.previousInput[(MYGAME.previousInput.length) - counterCommands];
    }
}

function browseArrowDown() {
    if (MYGAME.previousInput.length > 0 && counterCommands <= MYGAME.previousInput.length) {
        if (counterCommands - 1 > 0) counterCommands--;
        monInput.value = MYGAME.previousInput[(MYGAME.previousInput.length) - counterCommands];
    }
}

// EVENTLISTENER POUR LES COMMANDES EN BAS DE L'ECRAN
const mesCommandes = document.querySelectorAll(".command");
mesCommandes.forEach((element) => {
    element.addEventListener("click", function () {
        let maCommande = this.textContent,
            canBeUsed = false,
            monAct = MYGAME.player.currentAct;

        // conditions pour rendre disponible les commandes aux bons actes
        if (this.className.split(" ")[2] == "bonusC") {
            if (monAct >= 1 && this.className.split(" ")[1] == "hitC") canBeUsed = true;
            if (monAct >= 2 && this.className.split(" ")[1] == "inspectC") canBeUsed = true;
            if (monAct >= 3 && this.className.split(" ")[1] == "waitC") canBeUsed = true;
            if (monAct >= 4 && this.className.split(" ")[1] == "acceptC") canBeUsed = true;
        }
        else canBeUsed = true;

        // insérer le mot lié à la commande dans l'input
        if (canBeUsed == true) {
            document.getElementById('commandInput').value = maCommande + " ";
            if (maCommande.toLowerCase() == "quitter") {
                displayAlert("quitter ")
                document.getElementById('commandInput').value = "";
            }
        }
    });
});

// CETTE FONCTION LANCE LE MENU
function gameLaunch() {
    // changement léger du style de la page
    gameDiv.style.textAlign = "center";
    gameDiv.style.marginTop = "10%";
    document.getElementsByClassName("bottomScreen")[0].style.display = "none";
    document.getElementById("titleGame").style.fontSize = "1.50em";

    // insertion du texte contenant les élément du menu
    gameDiv.innerHTML = `<div class="startButton textDiv bigTextDiv whiteText menuTxt" style="animation-delay: 0s">~~~ Nouvelle partie ~~~</div><br/><br/><div class="continueButton textDiv bigTextDiv whiteText menuTxt" style="animation-delay: 1s">~~~ Continuer ~~~</div><br/><br/><div class="aboutButton textDiv bigTextDiv whiteText menuTxt" style="animation-delay: 2s">~~~ Informations ~~~</div>`;

    // lancement de la fonction startUpSetUp(), qui ajoute les eventListener aux textes
    startUpSetUp();
    playMusic("menu");
}