import { createRes } from "./createRes.js";

export const showModal = function(){
    let idEvent
    const openModal = document.querySelectorAll("#open-modal-events")
    const closeModal = document.querySelector("#close-modal-events")
    const modalEvents = document.querySelector("#modal-events")
    const fadeEvents = document.querySelector("#fade-events")
    const toggleModalEvents = () => {
        [modalEvents, fadeEvents].forEach((element) =>
        element.classList.toggle("hide-events"))
    }
    [closeModal, fadeEvents].forEach((element) => {
        element.addEventListener("click", function(){
            toggleModalEvents()
        })
    })
    openModal.forEach((element) =>{
        element.addEventListener("click", function(e) {
            idEvent = e.target.getAttribute("name")
            toggleModalEvents()
            createRes(idEvent)
        })
    })
}