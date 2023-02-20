const urlApi = "https://soundgarden-api.vercel.app/events/"
import { dataLocal } from "./utils/dataToLocal.js"
import { dateISO8601 } from "./utils/date.js";
import { showModal } from "./modal.js";

const removeEvents = function (data) {
    const toDayDate = dataLocal(new Date());
    const toDayISO = dateISO8601(toDayDate);
    const newdate = []
    for (let i = data.length - 1; i >= 0; i--) {
        let diffDate = new Date(data[i].scheduled) - new Date(toDayISO);
        if (diffDate >= 0) {
            newdate.unshift(data[i]);
        }
    }
    return newdate
};


const showEvents = function (data){
    let dateFormat = removeEvents(data)
    const allEvents = document.querySelector("#allEventsDiv");

    for (let i = 0; i < dateFormat.length; i++) {
        const event = dateFormat[i];

        const eventsPageEvents = document.createElement("article");
        eventsPageEvents.className = "event card p-5 m-3";
        eventsPageEvents.innerHTML = `<h2>${event.name} - ${dataLocal(event.scheduled)}</h2>
        <h4>${event.attractions.join(", ")}</h4>
        <p>${event.description}</p>
        <a type="button" data-target="addUserModal" class="btn btn-primary" id="open-modal-events" 
        name="${event._id}">reservar ingresso</a>`;
        allEvents.appendChild(eventsPageEvents);        
    }
    showModal()
}

fetch(urlApi, {method: "GET", redirect:"follow",})

.then((response) => response.json())
.then((data) => {
    showEvents(data);
})

.catch((error) => {
    console.error("Erro no processamento: ", error);
})