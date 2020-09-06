//global.fetch = require("node-fetch");

const listado = fetch("https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json");

listado.then(response => {
  return response.json();}).then(productos => {

  const detail = fetch('https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json');

  detail.then(respuesta=>{
    return respuesta.json();}).then(detalles=>{
      var arr = new Array(productos.length+1).fill(0);
      detalles.forEach(pedido => arr[pedido.idproducto]+=parseInt(pedido.cantidad));

      var max = arr[0];
      var maxIndex = 0;

      for (var i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
              maxIndex = i;
              max = arr[i];
          }
      }
      console.log("Producto: "+productos[maxIndex-1].nombreProducto+" Cantidad de veces que ha sido pedido: "+arr[maxIndex]);      
  });
});