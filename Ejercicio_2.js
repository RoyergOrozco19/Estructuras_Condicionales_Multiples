const Pago_Matricula = 1500000

const Pago1Cuota = 1500000  - (1500000 * 0.05);
const Pago2Cuotas = Pago_Matricula/2;
const pago3Cuotas = Pago_Matricula/3;

let pagoTotal;

let Opcion = (parseInt(prompt("Seleccione una de las siguientes opciones de pago \n1. Pago completo ($1.500.000) \n2. Pago a dos cuotas ($750.000/cuota) \n3. Pago a tres cuotas (500.000/cuota)")));

if(Opcion === 1){
    pagoTotal =  Pago1Cuota;
    alert("Su descuento por pagar una cuota es de: " + (Pago_Matricula - Pago1Cuota))

}else if (Opcion ===  2) {
    pagoTotal = Pago2Cuotas
    
}else if (Opcion === 3) {
    pagoTotal = pago3Cuotas;

}else {(alert ("Error, debe seleccionar una opción entre 1 y 3"))
}
alert("Su total a pagar es de: " + pagoTotal);
