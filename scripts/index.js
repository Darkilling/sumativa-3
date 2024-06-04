const contenedorTarjetas = document.querySelector("producto-container");


function crearTarjetasProductosInicio(productos){
    productos.forEach(producto => {
        const nuevoCatalogo = document.createElement('div');
        nuevoCatalogo.classList = "tarjeta-producto";
        contenedorTarjetas.appendChild(nuevoCatalogo);
    });
}

crearTarjetasProductosInicio(catalogos);