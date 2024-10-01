let form = document.querySelector("form");
let div = document.createElement("div");

const inputs = [
    {type: "text", name: "first-name", text: "Prénom", placeholder: "José", pattern: ""},
    {type: "text", name: "last-name", text: "Nom", placeholder: "Lopes", pattern: ""},
    {type: "email", name: "email", text: "Email", placeholder: "ahahah@blablabla.com", pattern: ""},
    {type: "text", name: "phone-number", text: "Numéro de téléphone", placeholder: "01 02 03 04 05", pattern: "^\\d{2}\\s\\d{2}\\s\\d{2}\\s\\d{2}\\s\\d{2}$"},
    {type: "password", name: "password", text: "Mot de passe", pattern: ""},
    {type: "password", name: "confirm-password", text: "Confirmation mot de passe", pattern: ""},
]

inputs.forEach(input => {
    const newInput = document.createElement("input");
    const checkMarker = document.createElement("span");
    let newLabel = document.createElement("label");
    let divInline = document.createElement("div");

    checkMarker.textContent = "\u25CF";

    newInput.setAttribute("type", input.type);
    newInput.setAttribute("name", input.name);
    newInput.setAttribute("id", input.name);
    if (input.pattern !== "") {
        newInput.setAttribute("pattern", input.pattern);
    }
    newInput.setAttribute("required", "required");

    if (input.type !== "password") {
        newInput.setAttribute("placeholder", input.placeholder);
    }

    newLabel.setAttribute("for", input.name);
    newLabel.textContent = input.text;

    divInline.appendChild(newInput);
    divInline.appendChild(checkMarker);
    newLabel.appendChild(divInline);
    div.appendChild(newLabel);
})
const submit = document.createElement("button");
submit.setAttribute("type", "submit");
submit.textContent = "Submit";

form.appendChild(div);
form.appendChild(submit);