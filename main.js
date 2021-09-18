const max = document.getElementById('max');
function getRandom(inferior, superior) {
    const numPosibilidades = superior - inferior;
    let random = Math.random() * numPosibilidades;
    random = Math.round(random);
    return parseInt(inferior) + random;
}

function estaEnArray(Ar, numero) {
    var c = Ar.length;
    for (var i = 0; i < c; i++) {
        if (Ar[i] == numero) return true;
    }
    return false;
}

function siguienteNumero(numero, inferior, superior) {
    var sig = numero + 1;
    if (sig <= superior) return sig;
    else return inferior;
}

function aleaSinRepetir() {
    let inferior = 1, superior = Number(max.value) || 10, numResultados = 3;
    var numPosibilidades = superior - inferior;
    if (numResultados > (numPosibilidades + 1)) numResultados = (numPosibilidades + 1);
    var Ar = [];
    Ar[0] = getRandom(inferior, superior);
    for (var i = 1; i < numResultados; i++) {
        var numero = getRandom(inferior, superior);
        var salir = true;
        do {
            if (!estaEnArray(Ar, numero)) {
                Ar.push(numero);
                salir = true;
            } else {
                numero = siguienteNumero(numero, inferior, superior);
                salir = false;
            }
        } while (!salir);
    }

    const result = document.getElementById('result');
    result.innerHTML = Ar.map(n => `<span>${n}</span>`).join(' ');

}

window.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
        aleaSinRepetir();
    }
})
