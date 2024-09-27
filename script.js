let form = document.getElementById("form");

const inputs = [
    {type: "text", name: "first-name", text: "Prénom", pattern: ""},
    {type: "text", name: "last-name", text: "Nom", pattern: ""},
    {type: "email", name: "email", text: "Email", pattern: ""},
    {type: "text", name: "phone-number", text: "Numéro de téléphone", pattern: "\d{2}\s\d{2}\s\d{2}\s\d{2}\s\d{2}"},
    {type: "password", name: "password", text: "Mot de passe", pattern: ""},
    {type: "password", name: "confirm-password", text: "Confirmation mot de passe", pattern: ""},
]

inputs.forEach(input => {
    let div = document.createElement("div");
    const newInput = document.createElement("input");
    const newLabel = document.createElement("label");

    newInput.setAttribute("type", input.type);
    newInput.setAttribute("name", input.name);
    newInput.setAttribute("id", input.name);
    if (input.pattern !== "") {
        newInput.setAttribute("pattern", input.pattern);
    }
    newInput.setAttribute("required", "required");

    newLabel.setAttribute("for", input.name);
    newLabel.textContent = input.text;

    div.appendChild(newLabel);
    div.appendChild(newInput);
    form.appendChild(div);
})


const submit = document.createElement("button");
submit.setAttribute("type", "submit");
submit.textContent = "Submit";

form.appendChild(submit);