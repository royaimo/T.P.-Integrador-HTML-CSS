// alert("hola mundo")

function calPrecioFinal(){
    // cantidad de entradas que compran
    let canEnt = document.getElementById("cantidadEntradas").value;

    // descuento realizado segun el tipo de comprador(particular, estudiante, etc)
    let porcDescuento = document.getElementById("porcDescuento").value;

    // descuento a realizar sobre las entradas compradas
    let descuento = (canEnt*1000)*porcDescuento/100;

    // precio total de las entradas con el descuento realizado
    let precioTotal = (canEnt*1000)-descuento;

    // modificamos el html para sacar el precio total por pantalla
    document.getElementById("valorTotal").value=precioTotal;
}