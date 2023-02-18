const urlApi = "https://soundgarden-api.vercel.app/events/"
import { dataLocal } from "./utils/dataToLocal.js";


// import { dataLocal } from "./utils/dataToLocal.js";

// const showEventsAdmin = function (data) {
//     const eventAdmin = document.querySelector("#eventsAdmin");

//     for (let i = 0; i < data.length; i++) {
//         const event = data[i];

//         const eventListAdmin = document.createElement("tr");
//         eventListAdmin.innerHTML = `
//         <th scope = "row">${i + 1}</th>
//         <td>${dataLocal(event.scheduled)}</td>
//             <td>${event.name}</td>
//             <td>${event.attractions.join(", ")}</td> 
//             <td><a href="reservas.html" class="btn btn-dark">ver reservas</a>
//                 <a href="editar-evento.html?id=${event._id}" class="btn btn-secondary">editar</a>
//                 <a href="excluir-evento.html?id=${event._id}" class="btn btn-danger">excluir</a>
//             </td> `;
//         eventAdmin.appendChild(eventListAdmin);
//     }
// };

// const urlApi = "https://soundgarden-api.vercel.app/events";
// const eventList = function (event) {
//     fetch(urlApi, { method: "GET", redirect: "follow", })
//         .then((response) => response.json())
//         .then((data) => {
//             showEventsAdmin(data);
//         })
//         .catch((error) => {
//             console.error(error)
//         })
// }
// eventList();