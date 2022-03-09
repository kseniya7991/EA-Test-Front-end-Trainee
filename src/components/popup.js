const popup = document.querySelector('.popup'),
    popupStatus = popup.querySelector('.popup__status'),
    popupStatusDescription = popup.querySelector('.popup__description'),
    popupCloseButtons = popup.querySelectorAll('.close-btn');

    //Открытие попапа (после отправки формы)
export const openPopup = (status, description) => {
    popupStatus.textContent = status;
    popupStatusDescription.textContent = description;
    popup.classList.add('popup_active');
}

    //Закрытие попапа (при клике на оверлей или на одну из кнопок для закрытия)
const closePopup = () => {
    popup.classList.remove('popup_active');
}


    //Обработка кликов на попап. При клике на оверлей или одну из кнопок закрытия вызывается закрытие попапа
export const handlePopup = () => {
    popup.addEventListener('click', (e) => {
        if(e.currentTarget === e.target) {
            closePopup();
        }
    });

    popupCloseButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            closePopup();
        })
    })
}


