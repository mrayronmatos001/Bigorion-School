// Script para Botão de Idiomas
const mapa = document.querySelector('#mapa')
const ul = document.querySelector('ul')
const bUsa = document.querySelector('#b_usa')
const bBr = document.querySelector('#b_br')
const bEs = document.querySelector('#b_es')
const l1 = document.querySelector('#l1')
const l2 = document.querySelector('#l2')
const l3 = document.querySelector('#l3')
const l4 = document.querySelector('#l4')
var ativoUsa = false
var ativoBr = false
var ativoEs = false
var alavanca = false
var alavanca2 = false
var fora = true
var fora2 = true
var ativo = 3
var c = 0
    // Verificadores de Aproximação de Mouse
        
        ul.onmouseover = () => {
            fora = false
            if(!alavanca) 
                mapa.style.color = "aqua"
        }
        ul.onmouseout = () => {
            fora = true
            if(!alavanca)
                mapa.style.color = "white"
        }
        l2.onmouseover = () => {
            if(!ativoUsa) 
                bUsa.style.filter = "brightness(105%) grayscale(0)"
        } 
        l2.onmouseout = () => {
            if(!ativoUsa)
                bUsa.style.filter = "brightness(105%) grayscale(1)"
        }
        l3.onmouseover = () => {
            if(!ativoBr)
                bBr.style.filter = "brightness(105%) grayscale(0)"
        } 
        l3.onmouseout = () => {
            if(!ativoBr)
                bBr.style.filter = "brightness(105%) grayscale(1)"
        }
        l4.onmouseover = () => {
            if(!ativoEs)  
                bEs.style.filter = "brightness(105%) grayscale(0)"
        }
        l4.onmouseout = () => {
            if(!ativoEs)   
                bEs.style.filter = "brightness(105%) grayscale(1)"
        }
    // Mecânica de mudança de Idioma
        l1.onclick = () => {
            c++
            if(!alavanca) {
                mapa.style.color = "lawngreen"
                mapa.classList.add("loope")
                l2.classList.add("flex")
                l2.classList.remove("none")
                bUsa.style.border = "0px"
                bUsa.style.filter = "grayscale(1)"
                l3.classList.add("flex")
                l3.classList.remove("none")
                l4.classList.add("flex")
                l4.classList.remove("none")
                bEs.style.border = "0px"
                bEs.style.filter = "grayscale(1)"
                ativoUsa = false
                ativoBr = true
                ativoEs = false
                alavanca = true
                fora = false
                if(c > 1) {
                    switch (ativo) {
                        case 2:
                            mapa.style.color = "crimson"
                            mapa.style.filter = "brightness(150%)"
                            bUsa.style.borderBottom = "4px solid crimson"
                            bUsa.style.filter = "brightness(105%) grayscale(0)"
                            bBr.style.filter = "brightness(105%) grayscale(1)"
                            bEs.style.filter = "brightness(105%) grayscale(1)"
                            ativoUsa = true
                            ativoBr = false
                            ativoEs = false
                            break;
                        case 3:
                            mapa.style.color = "lawngreen"
                            mapa.style.filter = "brightness(150%)"
                            bBr.style.borderBottom = "4px solid lawngreen"
                            bUsa.style.filter = "brightness(105%) grayscale(1)"
                            bBr.style.filter = "brightness(105%) grayscale(0)"
                            bEs.style.filter = "brightness(105%) grayscale(1)"
                            ativoUsa = false
                            ativoBr = true
                            ativoEs = false
                            break;
                        case 4:
                            mapa.style.color = "darkorange"
                            mapa.style.filter = "brightness(150%)"
                            bEs.style.borderBottom = "4px solid darkorange"
                            bUsa.style.filter = "brightness(105%) grayscale(1)"
                            bBr.style.filter = "brightness(105%) grayscale(1)"
                            bEs.style.filter = "brightness(105%) grayscale(0)"
                            ativoUsa = false
                            ativoBr = false
                            ativoEs = true
                            break;
                    }
                }       
                l2.onclick = () => {
                    mapa.style.color = "crimson"
                    mapa.style.filter = "brightness(150%)"
                    bUsa.style.borderBottom = "4px solid crimson"
                    bUsa.style.filter = "brightness(105%) grayscale(0)"
                    bBr.style.filter = "brightness(105%) grayscale(1)"
                    bEs.style.filter = "brightness(105%) grayscale(1)"
                    bBr.style.border = "0px"
                    bEs.style.border = "0px"
                    ativoUsa = true
                    ativoBr = false
                    ativoEs = false
                    ativo = 2
                }
                l3.onclick = () => {
                    mapa.style.color = "lawngreen"
                    mapa.style.filter = "brightness(150%)"
                    bBr.style.borderBottom = "4px solid lawngreen"
                    bEs.style.filter = "brightness(105%) grayscale(1)"
                    bUsa.style.filter = "brightness(105%) grayscale(1)"
                    bBr.style.filter = "brightness(105%) grayscale(0)"
                    bUsa.style.border = "0px"
                    bEs.style.border = "0px"
                    ativoUsa = false
                    ativoBr = true
                    ativoEs = false
                    ativo = 3
                }
                l4.onclick = () => {
                    mapa.style.color = "darkorange"
                    mapa.style.filter = "brightness(150%)"
                    bEs.style.borderBottom = "4px solid darkorange"
                    bEs.style.filter = "brightness(105%) grayscale(0)"
                    bUsa.style.filter = "brightness(105%) grayscale(1)"
                    bBr.style.filter = "brightness(105%) grayscale(1)"
                    bUsa.style.border = "0px"
                    bBr.style.border = "0px"
                    ativoUsa = false
                    ativoBr = false
                    ativoEs = true
                    ativo = 4
                }
                window.onclick = () => {
                    if((fora) && (fora2)) {
                        mapa.style.color = "white"
                        mapa.classList.remove("loope")
                        l2.classList.add("none")
                        l2.classList.remove("flex")
                        l3.classList.add("none")
                        l3.classList.remove("flex")
                        l4.classList.add("none")
                        l4.classList.remove("flex")
                        alavanca = false
                    }
                }
            } else {
                mapa.style.color = "white"
                mapa.classList.remove("loope")
                l2.classList.add("none")
                l2.classList.remove("flex")
                l3.classList.add("none")
                l3.classList.remove("flex")
                l4.classList.add("none")
                l4.classList.remove("flex")
                alavanca = false
            }        
        }
// Script para Botão de Modo de Claridade
const fundoMoon = document.querySelector('#fundo_moon')
const modos = document.querySelector('#modos')
modos.onmouseover = () => fora2 = false
modos.onmouseout = () => fora2 = true
fundoMoon.onclick = () => {
    if(!alavanca2) {
        fundoMoon.style.transform = "translateX(10px) rotate(240deg)"
        alavanca2 = true
    } else {
        fundoMoon.style.transform = "translateX(-10px) rotate(240deg)"
        alavanca2 = false
    }
}