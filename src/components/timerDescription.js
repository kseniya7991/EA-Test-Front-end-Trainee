const timerDescription = (container) => {

const timerDescription = document.querySelector(container),
         daysDescription = timerDescription.querySelector("#days"),
         hoursDescription = timerDescription.querySelector("#hours"),
         minutesDescription = timerDescription.querySelector("#minutes"),
         secondsDescription = timerDescription.querySelector("#seconds");

    // Устанавливаем описание блоков времени (краткий или длинный формат) в зависимости от размера экрана
      function setTextValue (value) {
         if( value <= 768) {
            daysDescription.textContent = "DD";
            hoursDescription.textContent = "HH";
            minutesDescription.textContent = "MM";
            secondsDescription.textContent = "SS";
        } else {
            daysDescription.textContent = "Days";
            hoursDescription.textContent = "Hours";
            minutesDescription.textContent = "Minutes";
            secondsDescription.textContent = "Seconds";
        }
    } 

    //Слушатель на изменение размера экрана
    window.addEventListener('resize', function() {
        setTextValue(window.innerWidth)
   }) 

    setTextValue(window.innerWidth);
};

export default timerDescription;