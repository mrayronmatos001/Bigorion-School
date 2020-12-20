// CONTADOR DE VISITANTES
if(typeof(Storage)!="undefine"){
    if(localStorage.visitas){
        localStorage.visitas=Number(localStorage.visitas)+1
    }else{
        localStorage.visitas=1;
    } 
}else{
    document.write("Sem suporte a Web Storage!");
}

const container = document.querySelector('#container_idioma');
const img = document.querySelector('#mapa_main');
// const paragrafo =  document.querySelector('#container_idioma>p');

container.onmouseover = function() {
    img.src = "img/mapa2.svg"
    // paragrafo.style.color = "cyan"
}

container.onmouseout = function() {
    img.src = "img/mapa.svg"
    // paragrafo.style.color = "white"
}