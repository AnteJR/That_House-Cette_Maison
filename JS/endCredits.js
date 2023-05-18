function theEnd(text) {
    MYGAME.isSilent = true;
    document.getElementById("endSectionText").innerHTML = "";
    gameContainer.style.animation = "gameDivDisappears 1.5s forwards";
    document.getElementById("endSection").style.animation = "divAppears 1.5s forwards";

    document.getElementById("endSectionText").innerHTML = `<div id="endTxt">${text}</div><input type="button" value="FIN ?" class="buttonEnd" id="buttonEnd"/>`;

    document.getElementById("buttonEnd").addEventListener("mouseover", () => hoverButton());
    document.getElementById("buttonEnd").addEventListener("click", () => {
        clickButton();
        gameContainer.style.animation = "gameDivAppears 1s forwards";
        document.getElementById("endSection").style.animation = "divDisappears 1s forwards";
        
        monStyle.style.display = "none";
        gameDiv.style.marginTop = "7.5%";
        bottomScreen.style.display = "none";

        gameDiv.innerHTML = `<div class="textDiv bigTextDiv">Développement: Joël Rimaz</div>
        <br/>
        <br/>
        <div class="textDiv bigTextDiv">
            Développé à l'Université de Lausanne
        </div>
        <br/>
        <br/>
        <div class="textDiv bigTextDiv">
            Github - AnteJR
        </div>
        <br/>
        <br/>
        <input type="button" value="retour au menu" class="buttonAlert" id="buttonBackHome"/>`;
        displayGameText();
        document.getElementById("buttonBackHome").addEventListener("mouseover", () => hoverButton());
        document.getElementById("buttonBackHome").addEventListener("click", function () {
            clickButton();
            localStorage.clear();
            gameLaunch();
            MYGAME.isSilent = false;
            monStyle.style.display = "block";
        });
    });
}