const Precio_Basic = 5000;
const Premium = 10000

const Option_Basic = 1
const Option_Premium = 2

let UnitaryCost;
let Prendas;

let Select_Option = parseInt(prompt("Seleccione una de las siguientes opciones de lavado: \n1. Básico ($5000 c/u) \n2. Premium ($10000 c/u)  "));

if(Select_Option === Option_Basic) {
    UnitaryCost = Precio_Basic
    Prendas = parseInt(prompt("Por favor inserte el número de prendas que desea lavar (De 1 a 20 prendas por servicio):"))


}else if(Select_Option === Option_Premium) {
    UnitaryCost = Premium
    Prendas = parseInt(prompt("Por favor inserte el número de prendas que desea lavar (De 1 a 20 prendas por servicio):"))
}else{
    alert("Opción inválida")
}

if ( Prendas >=1 & Prendas <=20) {
    alert("Total a pagar: $" + (UnitaryCost * Prendas));

}else{
    alert("Opción Inválida")
}