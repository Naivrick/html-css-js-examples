const inputs_forms = document.querySelectorAll(".form-group input");

inputs_forms.forEach((input) => {
    input.addEventListener("focus", (event) => {
        event.target.classList.remove("input-error");
    });
    input.addEventListener("blur", (event) => {
        const value = event.target.value.trim();
        if (event.target.type === "email" && !/\S+@\S+\.\S+/.test(value)) {
            event.target.classList.add("error");
            event.target.nextElementSibling.textContent =
                "Неверный формат электронной почты.";
        } else if (event.target.type === "password" && value.length < 8) {
            event.target.classList.add("error");
            event.target.nextElementSibling.textContent =
                "Пароль слишком короткий.";
        } else {
            event.target.classList.remove("error");
            event.target.nextElementSibling.textContent =
                event.target.placeholder.includes("почту")
                    ? "Введите корректный адрес электронной почты."
                    : event.target.placeholder.includes("имя")
                    ? "Введите ваше полное имя."
                    : "Пароль должен содержать как минимум 8 символов.";
        }
    });
});
