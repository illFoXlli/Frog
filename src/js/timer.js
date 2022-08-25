let timer; // пока пустая переменная
let total = 0;
let x = '30';
const body = document.querySelector('body');
const end = document.querySelector('.end');
const rocket = document.getElementById('rocket');
const menu = document.querySelector('.menu');

export function countdown() {
  rocket.classList.remove('is-hidden');
  // функция обратного отсчета
  let y = x.toString();
  rocket.innerHTML = y.padStart(2, '0');

  x--; // уменьшаем число на единицу

  if (x < 0) {
    btn.classList.add('rotate-90-cw');
    end.classList.remove('end');

    clearTimeout(timer); // таймер остановится на нуле
  } else {
    timer = setTimeout(countdown, 1000);
  }
  if (rocket.textContent === '00') {
    menu.classList.remove('is-hidden');
    rocket.innerHTML = '';
    console.log('Время вышло');
    x = '3';
    // btn.classList.remove('rotate-90-cw');
  }
  console.log(rocket);
}

// function countdownPause() {
//   total = rocket.textContent;
// }
