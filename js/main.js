const h1 = document.querySelector('h1')
const btn1 = document.querySelector('div#btn1')
const btn2 = document.querySelector('div#btn2')
function textFloat() {
  setTimeout(function(){h1.classList.add("slide")},0)
  setTimeout(function(){
    btn1.classList.add("slide2")
    setTimeout(function(){btn1.classList.add("opacidade")},1250)
  },250)
  setTimeout(function(){
    btn2.classList.add("slide3")
    setTimeout(function(){btn2.classList.add("opacidade")},1250)
  },500)
}
