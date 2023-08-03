
function operarCajero(opcion, saldo, valorOperacion = 0) {
    if(!Number.isInteger(saldo) &&  !Number.isInteger(valorOperacion)) {
       console.log("Saldo no es un numero");
  return ""
}
if(opcion === "Deposito") {
    console.log("Deposito codigo");
    return (saldo-1000) + valorOperacion;
}
if(opcion === "Retiro") {
    
  if(saldo>valorOperacion) {
      console.log("Retiro codigo");
      return (saldo-1000) - valorOperacion;
  } else {
      console.log("Saldo insuficiente");
    return saldo
  }
}
if(opcion === "Imprimir") {
    console.log("Imprimir saldo");
    return (saldo-1000);
}
console.log("Opcion invalida o no existe");
return saldo
}
//Intento de deposito
let saldo = operarCajero("Retiro", 4000, 20000);
console.log("Mi saldo es " + saldo);