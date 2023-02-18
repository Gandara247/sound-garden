const urlApi = "https://soundgarden-api.vercel.app/events/"
import { readForm } from "./utils/readForm.js";


var fNewEvent = document.querySelector(".col-6");

const newEvent = {};

fNewEvent.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputs = fNewEvent.elements;
    readForm(inputs, newEvent);

    fetch(urlApi, {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(newEvent),
    })

        .then((response) => response.json())
        .then(() => {
            window.location.replace("./admin.html");
            alert("O evento foi criado com sucesso!!!");
        })
        .catch((error) => {
            console.error
            ("Erro no processamento junto ao servidor", error);
        })

})