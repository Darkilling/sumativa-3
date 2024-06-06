const contenedorTarjetas = document.getElementById("productos-container");


function crearTarjetasProductosInicio(productos){
    productos.forEach(producto => {
        const nuevoCatalogo = document.createElement("div");
        nuevoCatalogo.classList = "tarjeta-producto";
        nuevoCatalogo.innerHTML = `
         <img src=${producto.imagen}>
            <h3>${producto.nombre}</h3>
            <p>Categoria: ${producto.categoria}</p>
            <p>Descripcion: ${producto.descripcion}</p>
            <p>Ubicación: ${producto.ubicacion}</p>
            <p>Disponibilidad: ${producto.disponibilidad} unidades</p>
            <p>Tiempo de préstamo: ${producto.tiempo} días</p>
            <button>Agregar al carrito</button>
        `
        contenedorTarjetas.appendChild(nuevoCatalogo);

        
    });
}

crearTarjetasProductosInicio(catalogos);