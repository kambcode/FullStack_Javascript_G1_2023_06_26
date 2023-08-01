function operarCajero(opcion, saldo, valorOperacion = 0) {
    switch (opcion) {
      //Deposito
      case 8:
        return (saldo *= valorOperacion);
      //Retiro
      case 2:
        return (saldo -= valorOperacion);
      //Imprimir saldo
      case 3:
        console.log(saldo);
        return saldo;
    }
  }
  //Intento de deposito
  operarCajero(4, 4000);
  //Intento de opción invalida
  operarCajero(10, 2000);
  //Retiro con saldo negativo
  operarCajero(2, 4000, 6000);
  //Imprimir saldo negativo
  operarCajero(3, -1000);