import checkEmailInput from "./checkEmailInput";
import { openPopup } from "./popup";

const forms = () => {
    const form = document.querySelector(".form"),
        inputEmail = document.querySelector(".form__input-email"),
        submitBtn = document.querySelector(".form__submit-btn");


    const message = {
        success: "Success!",
        failure: "Oops :(",
        successDescription: "You have successfully subscribed to the email newsletter",
        failureDescription: "Something went wrong...",
    };

    // Слушатель при вводе текста в инпут емейла
    inputEmail.addEventListener('input', function() {

        //Валидация емейла, возварщает true/false
        const validateEmail = checkEmailInput(inputEmail.value);

        //Изменение стилей в зависимости от валидности емейла
        if(validateEmail) {
            inputEmail.classList.remove('input-email_not-validate');
            submitBtn.classList.remove('form__submit-btn_not-validate');
            submitBtn.removeAttribute("disabled");
        } else {
            inputEmail.classList.add('input-email_not-validate');
            submitBtn.classList.add('form__submit-btn_not-validate');
            submitBtn.setAttribute("disabled", "disabled");
        }
    });


    //Отправление запроса на сервер
    const postData = async (url, data) => {
       //Для отправки данных на сервер. Сеййчас подключено тестовое API, отправляемые заголовки не работают здесь, т.к. на тестовом апи заголовки не требуются.
        let response = await fetch(url, {method: "POST", body: data,});
        const res = await response.json();
        return res;
    };

    //Очистка инпута после отправки формы
    const clearInput = () => {
        inputEmail.value = "";
    };

    //Обработка отправки формы
    form.addEventListener("submit", (e) => {
      //Отключение стандартного поведения - перезагрузки страницы
      e.preventDefault();
     
      const formData = new FormData(form);
      //Для теста взято бесплатное API по получению цитат.
        //Чтобы проверить ветку catch - сломайте URl

        postData("https://api.kanye.rest/", formData)
        .then((res) => {
            openPopup(message.success, message.successDescription)
        })
        .catch(() => {
            openPopup(message.failure, message.failureDescription)
        })
        .finally(() => {
            clearInput();
        });
    });
};

export default forms;
