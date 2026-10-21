const gameForm = document.querySelector("#gameForm");
const GameTableBody = document.querySelector("#GameTableBody");



gameForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const game = document.getElementById('game').value;


    console.log(game)

    const tr = document.createElement("tr");

    const tdgame = document.createElement("td");
    tdgame.textContent = game;

    const tdDeleteButton = document.createElement("td");

    const DeleteButton = document.createElement("button");
    DeleteButton.textContent = "X";

    DeleteButton.addEventListener("click", (event) => {
        tr.remove()        
    })
    
    const tdCheckBox = document.createElement("td");

    const CheckBox = document.createElement("input");
    CheckBox.type = "checkbox";

    CheckBox.addEventListener("input", (event) => {
        if (CheckBox.checked) {
            tdgame.classList.add("crossed")
        }

        else {
            tdgame.classList.remove("crossed")
        }

    });



    tdCheckBox.append(CheckBox);
    tdDeleteButton.append(DeleteButton);
    tr.append(tdgame,tdCheckBox, tdDeleteButton);
    GameTableBody.append(tr);
});