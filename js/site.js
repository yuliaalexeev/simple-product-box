'use strict'
var elExpanded = document.querySelector('.product-expanded')
var elText = document.querySelector('.show-text')
var elArrow = document.querySelector('.arrow');

function onShowLessBtn() {
  elExpanded.classList.toggle('opened')
  elArrow.classList.toggle('opened')
  if (elText.innerText === 'less') {
    elText.innerHTML = 'more'
  } else {
    elText.innerHTML = 'less'
  }
}