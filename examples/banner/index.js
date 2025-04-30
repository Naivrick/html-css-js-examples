class UserNotification extends HTMLElement {
    constructor() {
        super(); //Вызывает родительский конструктор

        const shadow = this.attachShadow({ mode: "open" }); //Создает теневое дерево
        const wrapper = document.createElement("div"); //Создает элемент div
        wrapper.setAttribute("class", "wrapper"); //Добавляет класс wrapper к элементу div

        const closeButton = document.createElement("button"); //Создает элемент button
        closeButton.setAttribute("class", "closeBtn"); //Добавляет класс close-button к элементу button
        closeButton.textContent = "X"; //Добавляет текст к элементу button

        const style = document.createElement("style"); //Создает элемент style
        style.textContent = `
            .wrapper{
                position: relative;
                padding: 20px;
                background-color: #007bff;
                color: white;
                margin-bottom: 10px;
                border-radius: 4px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s ease, opacity 0.3s ease;
                opacity: 1;
                transform: translateY(0);
                font-family: Arial, sans-serif;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .wrapper.enter {
                opacity: 0;
                transform: translateY(-100%);
            }

            .closeBtn {
                background: transparent;
                border: none;
                color: white;
                cursor: pointer;
                font-size: 20px;

            }

            .closeBtn:hover {
                color: #f00;
            }
            
            `;

        shadow.appendChild(style); //Добавляет элемент style в теневое дерево
        wrapper.appendChild(closeButton); //Добавляет элемент button в теневое дерево
        shadow.appendChild(wrapper); //Добавляет элемент div в теневое дерево

        const message = this.getAttribute("message"); //Получает атрибут message
        if (message) {
            const text = document.createElement("span"); //Создает элемент span
            text.textContent = message; //Добавляет текст к элементу span
            wrapper.insertBefore(text, closeButton); //Добавляет элемент span перед элементом button
        }

        closeButton.addEventListener("click", () => {
            this.hide(); //Вызывает метод hide при нажатии на кнопку
            setTimeout(() => wrapper.remove("enter"), 0);
        });
    }

    connectedCallback() {
        const wrapper = this.shadowRoot.querySelector(".wrapper");
        wrapper.classList.add("enter"); // Добавляем класс для начальной анимации

        // Удаляем класс 'enter' после короткой задержки
        setTimeout(() => {
            wrapper.classList.remove("enter");
        }, 10); // Задержка в 10 мс для запуска анимации
    }

    hide() {
        const wrapper = this.shadowRoot.querySelector(".wrapper"); //Получает элемент div
        wrapper.classList.add("enter"); //Добавляет класс exit к элементу div
        setTimeout(() => wrapper.remove(), 300); //Удаляет элемент div через 300 мс
    }
}

customElements.define("user-notification", UserNotification); //Определяет новый элемент пользовательского интерфейса
