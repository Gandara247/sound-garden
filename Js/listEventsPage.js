const urlApi = "https://soundgarden-api.vercel.app/events/"
import { dataLocal } from "./utils/dataToLocal.js"

const showEvents = function (data){
    const allEvents = document.querySelector("#allEventsDiv");

    for (let i = 0; i < data.length; i++) {
        const event = data[i];

        const eventsPageEvents = document.createElement("article");
        eventsPageEvents.className = "event card p-5 m-3";
        eventsPageEvents.innerHTML = `<h2>${event.name} - ${dataLocal(event.scheduled)}</h2>
        <h4>${event.attractions.join(", ")}</h4>
        <p>${event.description}</p>
        <a href="#" type="button" data-toggle="modal" data-target="#addUsuarioModal" class=
        "btn btn-primary" id="btn-modal">reservar ingresso</a>`;
        allEvents.appendChild(eventsPageEvents);        
    }
}

fetch(urlApi, {method: "GET", redirect:"follow",})

.then((response) => response.json())
.then((data) => {
    showEvents(data);
})

.catch((error) => {
    console.error("Erro no processamento: ", error);
})