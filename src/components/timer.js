const timer = (id, deadline) => {

    //Обработка числовых значений таймера. Формат "01, 02...". Исправляет данные с одной цифрой "1, 2..."
     const addZero = (num) => {
      if (num <= 9) {
        return "0" + num;
      } else {
        return num;
      }
    };
  

    //Вычисление времени между датами (текущей и заданного дедлайна)
    const getRemainingTimer = (endtime) => {
      
      //Получение разницы между датами и просчет каждого элемента в отдельности (дни, часы...)
      const t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / 1000 / 60 / 60) % 24),
        days = Math.floor(t / 1000 / 60 / 60 / 24);

      return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
    };
     
    //Установка таймера
    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
              days = timer.querySelector("#days"),
              hours = timer.querySelector("#hours"),
              minutes = timer.querySelector("#minutes"),
              seconds = timer.querySelector("#seconds"),
              timeInterval = setInterval(updateTimer, 1000);

        
        updateTimer();
    
        //Частота обновления таймера - 1с, т.к. минимальная единица измерения - секунда
         function updateTimer() {

          //Получаем числа (оставшиеся дни, часы..)
          const t = getRemainingTimer(endtime);
    
          //Преобразуем полученные значения в нужный формат
          days.textContent = addZero(t.days);
          hours.textContent = addZero(t.hours);
          minutes.textContent = addZero(t.minutes);
          seconds.textContent = addZero(t.seconds);
    
          //Если время истекло, установятся нули
          if (t.total <= 0) {
            days.textContent = "00";
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";
            
            clearInterval(timeInterval);
          }
        }
    };

      setClock(id, deadline);
  };
  
  export default timer;
  