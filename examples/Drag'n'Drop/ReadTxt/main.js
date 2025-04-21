const dropZone = document.getElementById("drag_field");
const fileContent = document.getElementById("file_content");

dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.classList.add("active");
});

dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("active");
});

dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropZone.classList.remove("active");

    const file = event.dataTransfer.files[0];
    if (file && file.type === "text/plain") {
        const reader = new FileReader();
        reader.onload = () => {
            fileContent.textContent = reader.result;
        };
        reader.readAsText(file);
    } else {
        alert("Пожалуйста, загрузите текстовый файл!");
    }
});
