let monto1 = document.getElementById("monto");
let cantidad1 = document.getElementById("cantidad");
let mes1 = document.getElementById("mes");

btnDatos1.addEventListener("click", () => {
  let monto: number = monto1.value;
  let montoConDescuento: number = 0;
  let descuento: number = 0;
  let cantidad: number = cantidad1.value;
  let precioTotal: number = monto * cantidad;
  let mes: string = mes1.value;
  if (mes == "Octubre") {
    descuento = (precioTotal * 15) / 100;
    montoConDescuento = precioTotal - descuento;
    console.log(
      "Por comprar en el mes de Octubre Ud tiene un 15% de descuento"
    );
    console.log("El monto a pagar es: " + montoConDescuento);
  } else {
    console.log("Ud. no tiene descuento, el monto a pagar es: " + precioTotal);
  }
});
