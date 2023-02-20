const urlApi = "https://soundgarden-api.vercel.app/events/";
import { dataLocal } from "./utils/dataToLocal.js";
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

const mainEvents = function (data) {
    let dateFormat = removeEvents(data)
    const mainEventsDiv = document.querySelector("#list-events-main")

    for (let i = 0; i < 3; i++) {
        const event = dateFormat[i]

        const eventsMain = document.createElement("article")
        eventsMain.className = "event card p-5 m-3"
        eventsMain.innerHTML = `<h2>${event.name} - ${dataLocal(event.scheduled)}</h2>
                                <h4>${event.attractions.join(", ")}</h4>
                                <p>${event.description}</p>
                                <a type="button" data-target="#addUser" class="btn btn-primary" 
                                id="open-modal-events" name="${event._id}">reservar ingresso</a>`
        mainEventsDiv.appendChild(eventsMain)
    }
    showModal()
}

fetch(urlApi, { method: "GET", redirect: "follow", })
    .then((response) => response.json())
    .then((data) => {
        mainEvents(data)
    })

    .catch((error) => { console.error("Erro no processamento: ", error) })



