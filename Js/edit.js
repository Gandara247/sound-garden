const urlApi = "https://soundgarden-api.vercel.app/events/:id"

function editEvents() {
    let params = { method: "GET", redirect: "follow", };


    fetch(urlApi, params)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let btnEdit = document.getElementsByClassName("btn btn-secondary")
            btnEdit.textContext = data.id;
            btnEdit.addEventListener("click", () => {
                console.log(window.location.pathname)
                window.location.href = "editar-evento.html"
            })
        })

        .catch(error => {
            console.log("error", error)
        })

}

editEvents();

function eventUpdate() {
    let paramsUpdate = {
        method: "PUT",
        body: "row", redirect: "follow"
    };
    fetch(urlApi, paramsUpdate)
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => consol.log("error", error));
}

eventUpdate()




const url = new URL(window.location.href);
const searchId = new URLSearchParams(url.search).get("id");
const fillForm = function (data) {
    const { name, banner, attractions, description, tickets } = data;
    document.querySelector("#nome").value = name;
    document.querySelector("#banner").value = banner;
    document.querySelector("#atracoes").value = attractions.join(",  ");
    document.querySelector("#descricao").value = description;
    document.querySelector("#lotacao").value = tickets;
}

const editEvent = function (event) {
    fetch(urlApi, {
        method: "GET", redirect: "follow",
        headers: { "Content-Type": "application/json" }
    })

        .then((response) => response.json())
        .then((data) => fillForm(data))
        .catch((error) => console.log("error", error))
}

editEvent()

const btnEditEvent = document.querySelector("#btn-secondary");
btnEditEvent.addEventListener("click", function (event) {
    const eventName = document.querySelector("#nome").value
    event.preventDefault();
    fetch(urlApi, {
        method: "GET", redirect: "follow",
        headers: { "Content-Type": "application/json", }
    })

    .then((response) => response.text())
    .then(result => console.log(result))
    .then(() => {
        window.location.replace("./editar-evento.html")
        alert(eventName + "salvo")
    })
    .catch((error) => console.log("error", error))
})





