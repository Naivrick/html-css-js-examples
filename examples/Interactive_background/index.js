document.addEventListener("DOMContentLoaded", function () {
    const background = document.getElementById("background");

    function updateTimeOfDay() {
        const hour = new Date().getHours;
        if (hour < 6 || hour >= 18) {
            document.body.style.backgroundColor = "#192841";
        } else {
            document.body.style.backgroundColor = "#87ceeB";
        }
    }

    rand_color = () => {
        Math.floor(Math.random() * 256);
    };

    for (let i = 0; i < 100; i++) {
        let circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.width = circle.style.height = `${
            Math.random() * 80 + 20
        }px`;
        circle.style.left = `${Math.random() * window.innerWidth}px`;
        circle.style.top = `${Math.random() * window.innerHeight}px`;

        circle.style.backgroundColor = `rgba(${rand_color}, ${rand_color}, ${rand_color}, 0.7)`;

        background.appendChild(circle);
    }

    document.addEventListener("click", function (e) {
        const wave = document.createElement("div");
        wave.classList.add("wave");
        wave.style.width = wave.style.height = `100px`;

        wave.style.left = `${e.clientX - 50}px`;
        wave.style.top = `${e.clientY - 50}px`;
        background.appendChild(wave);
        setTimeout(() => background.removeChild(wave), 600);
    });

    window.addEventListener("scroll", function () {
        this.document.body.style.backgroundColor = `rgba(${rand_color}, ${rand_color}, ${rand_color}, 0.7)`;
    });

    updateTimeOfDay();
    setInterval(updateTimeOfDay, 3600);
});
