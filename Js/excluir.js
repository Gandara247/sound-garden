const urlApi = "https://soundgarden-api.vercel.app/events/"


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
    headers: { "Content-Type": "application/json" }
})

    .then((response) => response.json())
    .then(() => fillForm(data))
    .catch((error) => console.error("error", error))

const btnDeleteEvent = document.querySelector(".btn btn-danger");
btnDeleteEvent.addEventListener("click", function (event) {
    const eventName = document.querySelector("#nome").value;
    event.preventDefault();

    fetch(urlApi + id, {
        method: "DELETE", redirect: "follow",
        headers: { "Content-Type": "application/json",}
    })

    .then((response) => response.text())
    .then(() => {
        window.location.replace("./admin.html")
        alert(eventName + " deletado com sucesso!!!")
    })
    .catch((error) => console.log("error", error))
})