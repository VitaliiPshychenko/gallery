const slides = document.querySelector('.image-list');
const expandImg = document.querySelector("#expandedImg");

slides.addEventListener('click', event => {
  const target = event.target;
  if (target.tagName === 'IMG') {
    changeExpendedImg(target.src, target.alt)
  }
})

function changeExpendedImg(src, alt) {
  expandImg.src = src;
  expandImg.alt = alt;
}
