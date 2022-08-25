import { countdown } from '../js/timer';

const menu = document.querySelector('.menu');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');

// слушатель на кнопку Старт
startBtn.addEventListener('click', onStartClick);
pauseBtn.addEventListener('click', onPauseClick);
document.addEventListener('keyup', onPauseKeyup);
export function onStartClick() {
  menu.classList.add('is-hidden');
  countdown();
  btn.classList.remove('rotate-90-cw');
}

export function onPauseClick() {
  countdown();
}

function onPauseKeyup(event) {
  if (event.code === 'Space') {
    clearTimeout(timer);
    console.log(event);
  }
}
