// CONTADOR DE VISITANTES
// if(typeof(Storage)!="undefine"){
//     if(localStorage.visitas){
//         localStorage.visitas=Number(localStorage.visitas)+1
//     }else{
//         localStorage.visitas=1;
//     } 
// }else{
//     document.write("Sem suporte a Web Storage!");
// }

const container = document.querySelector('nav');
const lista = document.querySelector('ul');
const img = document.querySelector('nav>img');
const dropdown = [container, lista, img];

img.onmouseover = function() {
  img.src = "img/mapa2.svg"
}

container.onmouseover = function() {
    if(container.classList.contains('caixa')) {
      img.src = "img/mapa2.svg"
    }
}

container.onmouseout = function() {
    if (lista.classList.contains('caixa')) { 
        img.src = "img/mapa2.svg"
    } else {
        img.src = "img/mapa.svg"
    }
}

img.onclick = function() {
    lista.classList.toggle('ativa');
    container.classList.toggle('caixa');
}

window.addEventListener('click', function(event) {
  const {target} = event;
  const isClickeItemAdropdownPart = dropdown.some(e =>  e === target)

  if(!isClickeItemAdropdownPart) {
    lista.classList.remove('ativa');
    container.classList.remove('caixa');
  }
});
