var leonardo = document.getElementById('leonardo')
var samantha = document.getElementById('samantha')
var bruna = document.getElementById('bruna')
var setadireita = document.getElementById('setadireita')
var setaesquerda = document.getElementById('setaesquerda')

function rolarParaDireita(){
    leonardo.style = 'display: none'
    setadireita.style = 'display: none'
    bruna.style = 'display: flex'
    setaesquerda.style = 'display: flex; margin-top: 70px;'
}

function rolarParaEsquerda(){
    bruna.style = 'display: none'
    setaesquerda.style = 'display: none'
    leonardo.style = 'display: flex'
    setadireita.style = 'display: flex'
}