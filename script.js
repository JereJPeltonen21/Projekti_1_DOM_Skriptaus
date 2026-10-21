const gameForm = document.querySelector("#gameForm");
const GameTableBody = document.querySelector("#GameTableBody");
const gameInput = document.getElementById("game");

// Kaveri auttoi Validator funktiossa
// Tarkistaa että sisältääkö input mitään, jos ei niin laittaa viestin "Kirjoita Jotain" ja ei lähetä taulukkoon
// Jos jotain tekstiä on kirjoitettu niin menee seuraavaan vaiheeseen

const validator = (event) => {
    const game = gameInput.value.trim();

    console.log(game);

    if (game.length <= 0) {
        gameInput.setCustomValidity("Kirjoita Jotain");
    } else {
        gameInput.setCustomValidity("");
    }
    
    gameInput.reportValidity();
};

gameInput.addEventListener("change", validator );

// Kutsuu validator
validator();

gameForm.addEventListener("submit", (event) => {
    // Tässä luodaan taulukkoon Pelin nimi ja sille luodaan napit joilla voi Poistaa sisällön ja Merkata että peli on pelattu
    event.preventDefault();


    // Trimmaa tekstin näytettäväksi
    const game = gameInput.value.trim();

    console.log(game)

    const tr = document.createElement("tr");

    const tdgame = document.createElement("td");
    tdgame.textContent = game;

    const tdDeleteButton = document.createElement("td");

    const DeleteButton = document.createElement("button");
    DeleteButton.textContent = "X";

    // Poistaa taulukko rivin
    DeleteButton.addEventListener("click", (event) => {
        tr.remove()        
    });
    
    const tdCheckBox = document.createElement("td");

    const CheckBox = document.createElement("input");
    CheckBox.type = "checkbox";

    // Lisää toiminnan checkboxiin että jos on klikattu niin muokkaa sen tyylin ja palauttaa takaisin normaaliksi kun painaa uudestaan.
    CheckBox.addEventListener("input", (event) => {
        if (CheckBox.checked) {
            tdgame.classList.add("crossed")
        }

        else {
            tdgame.classList.remove("crossed")
        }

    });


    // Lisää kaikki elementit taulukkoon
    tdCheckBox.append(CheckBox);
    tdDeleteButton.append(DeleteButton);
    tr.append(tdgame,tdCheckBox, tdDeleteButton);
    GameTableBody.append(tr);
});