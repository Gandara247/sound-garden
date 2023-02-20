import { dateISO8601 } from "./date.js";
import { dataLocal } from "./dataToLocal.js";

const valiDateEvent = function (date) {
    const localFormat = dataLocal(new Date())
    const isoFormat = dateISO8601(localFormat)

    let difData = new Date(date) - new Date(isoFormat)
    if (difData < 0) {
        alert("Insira data diferente da data de hoje!")
    }
};


const valiEmail = function (email) {
    console.log(email)
    let user = email.substring(0, email.indexOf("@"))
    let domain = email.substring(email.indexOf("@") + 1, email.length)

    if (
        user.length >= 1 &&
        domain.length >= 3 &&
        user.search("@") == -1 &&
        domain.search("@") == -1 &&
        user.search(" ") == -1 &&
        domain.search(" ") == -1 &&
        domain.search(".") != -1 &&
        domain.indexOf(".") >= 1 &&
        domain.lastIndexOf(".") < domain.length - 1

    ) {
        return email
    } else {
        document.getElementById(msgemail).innerHTML =
            "<font color='red'>e-mail inválido</font>"
        alert("E-mail inválido!")
    }


}

export const readForm = function (inputs, newEvent, idEvent) {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type !== "submit") {
            if (!inputs[i].value) {
                alert("Preencha todos os campos para cadastrar");
            }

            switch (inputs[i].name) {
                case "attractions":
                    newEvent[inputs[i].name] = inputs[i].value.split(/\s*,\s*/);

                    break;
                case "number_tickets":
                    newEvent[inputs[i].name] = parseInt(inputs[i].value);
                    break;

                case "scheduled":
                    let eventDate = inputs[i].value;
                    let rule = /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/;

                    if (!eventDate.match(rule)) {
                        alert("formato de data e hora aceitos 00/00/0000 00:00.");
                    } else if (!valiDateEvent(eventDate)) { }

                    newEvent[inputs[i].name] = dateISO8601(eventDate);

                    break;
                case "owner_email":
                    let email = inputs[i].value
                    newEvent[inputs[i].name] = valiEmail(email);
                    break;
                default: newEvent[inputs[i].name] = inputs[i].value;
            }
        }
    }
    if (idEvent != undefined) {
        newEvent.event_id = idEvent
    }
    console.log(newEvent)
    return newEvent
};