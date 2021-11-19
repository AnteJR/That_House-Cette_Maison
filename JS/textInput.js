/* FONCTION POUR QUE LE TITRE APPARAISSE EN FLOTTANT */
let title = document.getElementById('titleGame');
let titleText = title.textContent;
titleTxt(titleText);

function titleTxt (text){
    text = text.split("");
    let textToAppend = text.map((x, idx)=> {
        if(x == " "){
            x = "&nbsp;"
        }
        let delay = (idx) * 500;
        return `<span style="animation-delay: ${delay}ms">${x}</span>`;
    });
    title.innerHTML = textToAppend.join("");
}

/* CODE POUR QUE PRENDRE NOTE QUAND ON ECRIT DANS L'INPUT */
let monInput = document.getElementById('commandInput');
monInput.addEventListener("keydown", (e) => {
    if(document.getElementById("commandInput").value!=""){
        if(e.key == "Enter"){
            if(document.getElementById("boxAlert").style.display == "none"){
                displayAlert(monInput.value);
                monInput.value = "";
            }
        }
    }
    else{
        if(e.key == "Enter"){
            if(document.getElementById("boxAlert").style.display == "block"){
                document.getElementById("boxAlert").style.display = "none"
            }
        }
    }
});

/* CODE POUR QUE PRENDRE NOTE QUAND ON PRESSE SUR LE CLAVIER DEPUIS LE DOM */
window.addEventListener('keydown', (e) => {
    if(monInput != document.activeElement){
        if (e.key === "Spacebar" || e.key === " " || e.key != "ArrowLeft" || e.key != "ArrowRight" || e.key != "ArrowDown" || e.key != "ArrowUp") {
          e.preventDefault();
        }
        if(e.key != "Backspace" && e.key != "Enter" && e.key != "Meta" && e.key != "Shift" && e.key != "CapsLock" && e.key != "Control" && e.key != "Alt" && e.key != "ArrowLeft" && e.key != "ArrowRight" && e.key != "ArrowDown" && e.key != "ArrowUp"){
            monInput.value += e.key;
        }
        else if(e.key == "Backspace"){
            let valueInput = monInput.value.split("");
            valueInput.pop();
            monInput.value = valueInput.join("");
        }
        else if(e.key == "Enter"){
            if(document.getElementById("commandInput").value!=""){
                if(document.getElementById("boxAlert").style.display == "none"){
                    displayAlert(monInput.value);
                    monInput.value = "";
                }
            }

            else{
                if(document.getElementById("boxAlert").style.display == "block"){
                    document.getElementById("boxAlert").style.display = "none"
                }
            }
        }
    }
});

/* REMPLIR L'INPUT AVEC DES MOTS DES COMMANDES */
let mesCommandes = document.querySelectorAll(".command");
mesCommandes.forEach((element) => {
    element.addEventListener("click", function(){
        let maCommande = this.className.split(" ")[1];
        let commandTxt = maCommande.split("")
        commandTxt.pop();
        if(document.getElementById('commandInput').value == ""){
            document.getElementById('commandInput').value += commandTxt.join("")+" ";
        }
    });
});

//ESSAI DE TEXTE POUR TESTER
setTimeout(()=>{

    gameDiv.innerHTML = `<div class="textDiv">This is not my house.</div> <div class="textDiv">I wandered in the streets for some times.</div> <div class="textDiv">Here I stand, at the gate.</div> <div class="textDiv">There is a</div> <div class="wobblyTxt textDiv interactiveText">road</div> <div class="textDiv">that leads to the</div> <div class="wobblyTxt textDiv interactiveText">door.</div> <div class="textDiv">I may be too far away from home now.</div>`

},10);