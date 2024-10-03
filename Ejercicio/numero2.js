function enviar(){
    let radio = document.getElementById('radio').value

    let Alateral = (4*Math.PI)*(radio*radio)
    let Volumen = (4/3 * Math.PI)*(radio*radio*radio)

    console.log("EL área es: "+Alateral)
    console.log("EL volumen es: "+Volumen)
}