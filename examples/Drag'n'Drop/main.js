"use stict";

const draggable = document.getElementById("draggable");
const dropzone = document.getElementById("dropzone");

// Когда начинается перетаскивание
draggable.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text", "Элемент успешно перемещен!");
});

// Когда элемент находится над зоной сброса
dropzone.addEventListener("dragover", (event) => {
    event.preventDefault(); // Необходимо для разрешения сброса
});

// Когда элемент сбрасывается в зону
dropzone.addEventListener("drop", (event) => {
    event.preventDefault(); // Останавливаем стандартное поведение
    dropzone.style.backgroundColor = "lightblue"; // Меняем цвет зоны сброса
    const data = event.dataTransfer.getData("text");
    alert(data); // Показываем данные, которые перетаскивали
});
