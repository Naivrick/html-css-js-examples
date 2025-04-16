let FirstName = "";
let LastName = "";

let btn_send = document.querySelector(".btn_send");
let input_first_name = document.querySelector(".fn_input");
let input_last_name = document.querySelector(".ln_inpit");
let label_result = document.querySelector("h3");

btn_send.onclick = function () {
  FirstName = input_first_name.value;
  LastName = input_last_name.value;
  if (FirstName != "" && LastName != "") {
    let result = `Здравствуйте 🤚\n ${FirstName} ${LastName}!`;
    label_result.textContent = result;
    btn_send.textContent = "Обновить";
    console.log(result);
  } else {
    label_result.textContent = `Представьтесь 😉`;
    alert("Вы ввели неверные значения 🤔");
  }
};
