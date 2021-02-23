const h1 = document.querySelector('h1')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
function textFloat() {
  setTimeout(function(){h1.classList.add("slide")},0)
  setTimeout(function(){btn1.classList.add("slide2")},250)
  setTimeout(function(){btn2.classList.add("slide3")},500)
}
