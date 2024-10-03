function calcular(){
    let Juan = new Date('2000/01/13')
    let Mario = new Date('2014/03/19')

    let resta = Mario.getTime() - Juan.getTime()

    let Dias = resta / (1000*60*60*24)
    let Horas = resta / (1000*60*60)

    console.log("Juan y Mario se llevan "+Dias+" días de diferencia")
    console.log("Y se llevan "+Horas+" horas de diferencia")

    document.write("Juan y Mario se llevan "+Dias+" días de diferencia")
    document.write(" y se llevan "+Horas+" horas de diferencia")
}