import './timer';
// кнопка
const frog = document.querySelector('#btn');
const menu = document.querySelector('.menu');
const time = document.querySelector('#rocket');

// повесим обработчик событий
const random = (min, max) => {
  const rand = min + Math.random() * (max - min + 1);
  return Math.floor(rand);
};
frog.addEventListener('mouseenter', onBtnFrogMouseenter);

function onBtnFrogMouseenter() {
  if (menu.classList.contains('is-hidden')) {
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 90)}%`;
  }
  //   } else {
  //     btn.style.left = `38%`;
  //     btn.style.top = `55%`;
  //   }
}
