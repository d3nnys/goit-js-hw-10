'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('input[name="delay"]'),
};

const radioBtn = refs.form.elements.state;
refs.form.addEventListener('submit', clickOnBtn);

function clickOnBtn(event) {
  event.preventDefault();
  const delay = refs.inputDelay.value;
  const btnStatus = radioBtn.value;

  function getValueRadioBtn(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (btnStatus === 'fulfilled') {
          resolve(`Fulfilled promise in ${delay}ms`);
        } else {
          reject(`Rejected promise in ${delay}ms`);
        }
      }, delay);
    });
  }

  getValueRadioBtn(delay)
    .then(value => {
      iziToast.success({
        theme: 'dark',
        message: `${value}`,
        messageColor: '#ffffff',
        backgroundColor: '#59a10d',
        position: 'topRight',
        iconUrl: '/img/circle.svg',
        progressBarColor: '#326101',
        pauseOnHover: false,
        closeColor: '#ffffff',
        timeout: `3000`,
      });
    })
    .catch(error => {
      iziToast.error({
        theme: 'dark',
        message: `${error}`,
        messageColor: '#ffffff',
        backgroundColor: '#ef4040',
        position: 'topRight',
        iconUrl: '/img/octagon.svg',
        progressBarColor: '#b51b1b',
        pauseOnHover: false,
        closeColor: '#ffffff',
        timeout: `3000`,
      });
    });
}
