import { setUncaughtExceptionCaptureCallback } from 'process';
import './assets/index.scss'
import timer from './components/timer';
import timerDescription from './components/timerDescription';
import forms from './components/forms';
import { handlePopup } from "./components/popup";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    let deadline = '2022-12-31 GMT+03';
    timer(".timer__time-list", deadline);
    timerDescription(".timer__time-description");
    forms();
    handlePopup();
  });