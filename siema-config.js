const myCarousel = new Siema({
  selector: '.carousel',
  easing: 'ease-in',
  startIndex: 0,
  perPage: 1,
  draggable: true,
  loop: true,
  duration: 200
});

document.querySelector('.prev').addEventListener('click', () => {
  myCarousel.prev();
});

document.querySelector('.next').addEventListener('click', () => {
  myCarousel.next();
});
