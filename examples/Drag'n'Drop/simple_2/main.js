const item = document.querySelector(".item");
const boxes = Array.from(document.querySelectorAll(".box"));

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

boxes.forEach((box) => {
    box.addEventListener("dragover", dragover);
    box.addEventListener("drop", drag_drop);
});

function dragover(e) {
    e.preventDefault();
}

function drag_drop(e) {
    e.target.append(item);
    e.target.classList.remove("hovered");
}

function dragstart(e) {
    e.target.classList.add("hold");
    setTimeout(() => e.target.classList.add("hide"));
}

function dragend(e) {
    e.target.classList.remove("hold", "hide");
}
