function enviar(){
    let radio = document.getElementById('radio').value
    let altura = document.getElementById('altura').value

    let Alateral = (2*Math.PI)*(radio*altura) 
    let Abase = Math.PI*(radio*radio)
    let Atotal = (2*Abase)+Alateral

    console.log("EL área de la base es: "+Abase)
    console.log("El área lateral es: "+Alateral)
    console.log("El área total es: "+Atotal)

    document.write("EL área de la base es: "+Abase)
    document.write(" El área lateral es: "+Alateral)
    document.write(" El área total es: "+Atotal)
}
