"use script"



const botaoTrocarCor = document.getElementById(trocar-cor)

function trocarCor (){
    const cor = document.getElementById('cor').value
    document.documentElement.style.setProperty('--cor--fundo', 'red')
}

botaoTrocarCor.addEventListener('click', trocarCor)