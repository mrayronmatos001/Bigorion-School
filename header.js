const mapa = document.querySelector('img#mapa')
const ul = document.querySelector('ul')
const nav = document.querySelector('nav')
const bandeiraUsa = document.querySelector('img#bandeira_usa')
const bandeiraBrasil = document.querySelector('img#bandeira_brasil')
const bandeiraEspanha = document.querySelector('img#bandeira_espanha')
const listausa = document.querySelector('li#li_1')
const listabrasil = document.querySelector('li#li_2')
const listaespanha = document.querySelector('li#li_3')
const listamain = document.querySelector('li#li_main')
let alavanca = false
let ativo = false
let fora = false
let verde = false
let c = 0
mapa.onclick = () => {
    c++
    if (!alavanca) {
        ul.style.backgraundColor = "black"
        bandeiraUsa.style.display = "block"
        bandeiraBrasil.style.display = "block"
        bandeiraEspanha.style.display = "block"
        versao3.style.right = "358px"
        mapa.src = "img/cabecalho/menu/menuidioma/mapa_brasil.svg"
        alavanca = true
        ativo = true
        verde = true
        if (c == 1) {
            bandeiraBrasil.classList.add('ligado')
        } else if (c != 1) {
            if (cor == 2) {
                bandeiraBrasil.classList.add('ligado')
            }
        }
    } else {
        ul.style.backgraundColor = "rgba(0,0,0,0)"
        bandeiraUsa.style.display = "none"
        bandeiraBrasil.style.display = "none"
        bandeiraEspanha.style.display = "none"
        mapa.src = "img/cabecalho/menu/menuidioma/mapa.svg"
        versao3.style.right = "215px"
        if (contador != 0) {
            if (c == 2) {
                bandeiraBrasil.classList.remove('ligado')
            }
        }
        alavanca = false
        ativo = false

    }
}
let cor
mapa.onmouseover = () => {
    mapa.src = "img/cabecalho/menu/menuidioma/mapa2.svg"
    if (!ativo) {
        versao2.style.display = "block"
    } else {
        versao2.style.display = "none"
    }
}
mapa.onmouseout = () => {
    versao2.style.display = "none"
    if (!ativo) {
        mapa.src = "img/cabecalho/menu/menuidioma/mapa.svg"
    } else if (cor == 1) {
        mapa.src = "img/cabecalho/menu/menuidioma/mapa_usa.svg"
    } else if (cor == 2) {
        mapa.src = "img/cabecalho/menu/menuidioma/mapa_brasil.svg"
    } else if (cor == 3) {
        mapa.src = "img/cabecalho/menu/menuidioma/mapa_spanish.svg"
    } else {
        if (verde) {
            mapa.src = "img/cabecalho/menu/menuidioma/mapa_brasil.svg"
        }
    }
}
nav.onmouseover = () => fora = false
nav.onmouseout = () => fora = true
window.addEventListener('click', function () {
    if (fora) {
        mapa.src = "img/cabecalho/menu/menuidioma/mapa.svg"
        ul.style.backgraundColor = "rgba(0,0,0,0)"
        bandeiraUsa.style.display = "none"
        bandeiraBrasil.style.display = "none"
        bandeiraEspanha.style.display = "none"
        mapa.classList.remove('loope')
        versao3.style.right = "215px"
        alavanca = false
        ativo = false
    }
})
let contador = 0
listausa.onclick = () => {
    bandeiraUsa.classList.toggle("ligado")
    bandeiraUsa.style.filter = "grayscale(0) brightness(115%)"
    bandeiraBrasil.classList.remove("ligado")
    bandeiraBrasil.style.filter = "grayscale(1) brightness(115%)"
    bandeiraEspanha.classList.remove("ligado")
    bandeiraEspanha.style.filter = "grayscale(1) brightness(115%)"
    mapa.src = "img/cabecalho/menu/menuidioma/mapa_usa.svg"
    cor = 1
    contador++
}
listabrasil.onclick = () => {
    bandeiraUsa.classList.remove("ligado")
    bandeiraUsa.style.filter = "grayscale(1) brightness(115%)"
    bandeiraBrasil.classList.toggle("ligado")
    bandeiraBrasil.style.filter = "grayscale(0) brightness(115%)"
    bandeiraEspanha.classList.remove("ligado")
    bandeiraEspanha.style.filter = "grayscale(1) brightness(115%)"
    mapa.src = "img/cabecalho/menu/menuidioma/mapa_brasil.svg"
    cor = 2
    contador++
}
listaespanha.onclick = () => {
    bandeiraUsa.classList.remove("ligado")
    bandeiraUsa.style.filter = "grayscale(1) brightness(115%)"
    bandeiraBrasil.classList.remove("ligado")
    bandeiraBrasil.style.filter = "grayscale(1) brightness(115%)"
    bandeiraEspanha.classList.toggle("ligado")
    bandeiraEspanha.style.filter = "grayscale(0) brightness(115%)"
    mapa.src = "img/cabecalho/menu/menuidioma/mapa_spanish.svg"
    cor = 3
    contador++
}
listausa.onmouseover = () => {
    if (!bandeiraUsa.classList.contains('ligado')) {
        bandeiraUsa.style.filter = "grayscale(0) brightness(115%)"
    }
}
listausa.onmouseout = () => {
    if (!bandeiraUsa.classList.contains('ligado')) {
        bandeiraUsa.style.filter = "grayscale(1) brightness(115%)"
    }
}
listabrasil.onmouseover = () => {
    if (!bandeiraBrasil.classList.contains('ligado')) {
        bandeiraBrasil.style.filter = "grayscale(0) brightness(115%)"
    }
}
listabrasil.onmouseout = () => {
    if (!bandeiraBrasil.classList.contains('ligado')) {
        bandeiraBrasil.style.filter = "grayscale(1) brightness(115%)"
    }
}
listaespanha.onmouseover = () => {
    if (!bandeiraEspanha.classList.contains('ligado')) {
        bandeiraEspanha.style.filter = "grayscale(0) brightness(115%)"
    }
}
listaespanha.onmouseout = () => {
    if (!bandeiraEspanha.classList.contains('ligado')) {
        bandeiraEspanha.style.filter = "grayscale(1) brightness(115%)"
    }
}
const versao1 = document.querySelector("div.versao1")
const versao2 = document.querySelector("div.versao2")
const transparente = document.querySelector("div#transparente")
transparente.onmouseover = () => {
    versao1.style.display = "block"
}
transparente.onmouseout = () => {
    versao1.style.display = "none"
}
function loopa() {
    mapa.classList.toggle("loope")
}
const quemSomos = document.querySelector('#quemSomos')
const versao3 = document.querySelector('.versao3')
quemSomos.onmouseover = () => {
    quemSomos.src = "img/cabecalho/menu/menuquemSomos/quemSomos2.svg"
    versao3.style.display = "block"
} 
quemSomos.onmouseout = () => {
    quemSomos.src = "img/cabecalho/menu/menuquemSomos/quemSomos.svg"
    versao3.style.display = "none"
}