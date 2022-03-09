const popup = document.querySelector('.popup'),
    popupStatus = popup.querySelector('.popup__status'),
    popupStatusDescription = popup.querySelector('.popup__description'),
    popupCloseButtons = popup.querySelectorAll('.close-btn'),
    scroll = calcScroll();

    //Открытие попапа (после отправки формы)
export const openPopup = (status, description) => {
    popupStatus.textContent = status;
    popupStatusDescription.textContent = description;
    popup.classList.add('popup_active');
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${scroll}px`;
    
}

    //Закрытие попапа (при клике на оверлей или на одну из кнопок для закрытия)
const closePopup = () => {
    popup.classList.remove('popup_active');
    document.body.style.overflow = "scroll";
    document.body.style.marginRight = `0px`;
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

    calcScroll();
}

function calcScroll() {
    let div = document.createElement("div");

    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    console.log(div.offsetWidth, div.clientWidth)
    div.remove();

    return scrollWidth;
  }


