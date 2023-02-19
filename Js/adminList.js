const urlApi = "https://soundgarden-api.vercel.app/events/";
import { dataLocal } from "./utils/dataToLocal.js";
import { displayModal } from "./utils/reservations.js";

const eventsAdmin = function (data) {
    const bodyEvents = document.querySelector("#tbody-eventsadmin");

    for (let i = 0; i < data.length; i++) {
        const event = data[i];

        const eventsList = document.createElement("tr");
        eventsList.innerHTML = `
        <th scope = "row" > ${i + 1} 
        </th> <td>${dataLocal(event.scheduled)} </td>
        <td>${event.name}</td>
        <td>${event.attractions.join(", ")}</td>
        <td>
    <a class="btn btn-dark" id="open-modal-admin" name="${event._id}"
    >ver reservas</a>
    <a href="editar-evento.html?id=${event._id
            }" class="btn btn-secondary">editar</a>
    <a href="excluir-evento.html?id=${event._id
            }" class="btn btn-danger">excluir</a>
    </td> `;

        bodyEvents.appendChild(eventsList)
    }

    displayModal()
}

fetch(urlApi, {
    method: "GET",
    redirect: "follow",
})
    .then((response) => response.json())
    .then((data) => {
        eventsAdmin(data);
    })
    .catch((error) => {
        console.error("Erro no processamento: ", error);
    });