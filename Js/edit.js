const urlApi = "https://soundgarden-api.vercel.app/events/"
import { dataLocal } from "./utils/dataToLocal.js";
import { readForm } from "./utils/readForm.js";

const fillForm = function (data) {
    const { name, poster, attractions, description, scheduled, number_tickets } = data;
    document.querySelector("#nome").value = name;
    document.querySelector("#banner").value = poster;
    document.querySelector("#atracoes").value = attractions.join(",  ");
    document.querySelector("#descricao").value = description;
    document.querySelector("#data").value = dataLocal(scheduled);
    document.querySelector("#lotacao").value = number_tickets;
}

const idUrl = function () {
    const url = new URL(window.location.href);
    const searchId = new URLSearchParams(url.search);
    const id = searchId.get("id");
    return id;
}

const id = idUrl();


fetch(urlApi + id, {
    method: "GET", redirect: "follow",
    headers: { "Content-Type": "application/json", }
})

    .then((response) => response.json())
    .then((data) => fillForm(data))
    .catch((error) => console.log("error", error))

var formEditEvent = document.querySelector(".col-6");
const eventEdited = {};

formEditEvent.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputs = formEditEvent.elements;
    readForm(inputs, eventEdited);

    fetch(urlApi + id, {
        method: "PUT", redirect: "follow",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventEdited),
    })

        .then((response) => response.text())
        .then(() => {
            window.location.replace("./admin.html");
            alert("Editado com sucesso!!!");
        })
        .catch ((error) => console.log("error", error));
})






