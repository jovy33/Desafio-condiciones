function verificarCantidad(){

    const valorInputUno = Number(document.querySelector("#input-uno").value)
    const valorInputDos = Number(document.querySelector("#input-dos").value)
    const valorInputTres = Number(document.querySelector("#input-tres").value)

    const resultado = (valorInputUno + valorInputDos + valorInputTres)

    if (resultado <= 10) {
        document.querySelector(".cantidad-stickers").innerHTML = "LLevas " + resultado + " Stickers"
    } else {
        document.querySelector(".cantidad-stickers").innerHTML = "Llevas demasiados Stickers"
    }
}