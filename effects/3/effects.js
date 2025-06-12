const container = document.querySelector('.boxes1');

const createBoxes = () => {
  return Array.from({ length: 680 }, (_, i) => i + 1)
    .map(_ => `<span class="special-box"></span>`)
    .join('');
};
container.insertAdjacentHTML('afterbegin', createBoxes());

const boxesAll = document.querySelectorAll('.special-box');
[...boxesAll].forEach(el => {
  el.addEventListener('mouseover', () => {
    el.classList.add('active');
  });

  el.addEventListener('mouseleave', () => {
    setTimeout(() => {
      el.classList.remove('active');
    }, 300);
  });
});