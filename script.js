var temp = window.document.getElementById('entradatemperatura')
var temperatura = window.document.getElementById('temperatura')

function verificar() {
    if (entradatemperatura.value > 37.8) {
        temperatura.innerHTML = "Você está com febre";
    } else {
        temperatura.innerHTML = "Você não está com febre"
    }
}