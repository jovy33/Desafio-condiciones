function verificar() {

    const valor1 = document.querySelector("#select-uno").value
    const valor2 = document.querySelector("#select-dos").value
    const valor3 = document.querySelector("#select-tres").value

    const resultado = (valor1 + valor2 + valor3)

    if (resultado == 911) {
        document.querySelector("#mensaje").innerHTML = "PASSWORD 1 CORRECTO"
    } else if (resultado == 714) {
        document.querySelector("#mensaje").innerHTML = "PASSWORD 2 CORRECTO"
    } else {
        document.querySelector("#mensaje").innerHTML = "PASSWORD INCORRECTO"
    }

    











}