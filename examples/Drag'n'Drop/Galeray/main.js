const drops_zone = document.querySelectorAll(".drop_zone");
const drops_item = document.querySelectorAll(".drop_item");

const btn_add = document.querySelector(".button_add_image");

btn_add.addEventListener("click", () => {
    const new_item = document.createElement("img");
    new_item.classList.add("drop_item");
    new_item.setAttribute("draggable", "true");
    new_item.setAttribute(
        "src",
        "https://picsum.photos/200/300?random=" +
            Math.floor(Math.random() * 1000)
    );
    new_item.setAttribute("alt", "Random image");

    drops_zone[0].appendChild(new_item);
});

drops_item.forEach((item) => {
    item.addEventListener("dragstart", (event) => {
        event.target.classList.add("dragging");
    }); // Начало перетаскивания
    item.addEventListener("dragend", (event) => {
        event.target.classList.remove("dragging");
    }); // Конец перетаскивания
});

drops_zone.forEach((zone) => {
    zone.addEventListener("dragover", (event) => {
        event.preventDefault(); // Необходимо для разрешения сброса
    });
    zone.addEventListener("dragenter", dragenter);
    zone.addEventListener("dragleave", dragleave);
    zone.addEventListener("drop", _drop);
});

function dragenter(e) {
    if (e.target.classList.contains("drop_zone")) {
        e.target.classList.add("drag_entered");
    }
    e.target.classList.remove("drag_entered");
}

function dragleave(e) {
    e.target.classList.remove("drag_entered");
}

function _drop(e) {
    e.target.classList.remove("drag_entered");
    if (!e.target.classList.contains("drop_zone")) {
        return;
    }
    const dragging = document.querySelector(".dragging");
    e.target.appendChild(dragging);
    dragging.classList.remove("dragging");
} // Сброс элемента в зону
