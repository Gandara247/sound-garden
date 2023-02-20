const urlApiRes = "https://soundgarden-api.vercel.app/bookings/";
import { readForm } from "./utils/readForm.js";

export const createRes = function (idEvent) {
    var formRes = document.querySelector("#form-reserve")
    const objectReserve = {}

    formRes.addEventListener("submit", function (event) {
        event.preventDefault()
        const inputs = formRes.elements
        readForm(inputs, objectReserve, idEvent)
        fetch(urlApiRes, {
            method: "POST", headers: {
                "Content-Type":
                    "application/json",
            }, body: JSON.stringify(objectReserve),
        })
            .then((response) => response.json)
            .then(() => { alert("Reserva feita com sucesso!!!") 
        })
        .catch((error) => {console.error("Erro no processamento: ", error)})
    })
}