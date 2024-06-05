function agregarAlCarrito(producto){
    const memoria = JSON.parce(localStorage.getItem("catalogos"));
    console.log(memoria);
    if(!memoria){
        const nuevoProducto = producto;
        nuevoProducto.cantidad = 1;
        localStorage.setItem("catalogos", JSON.stringify[nuevoProducto])
    } else {
        const indiceProducto = memoria.findIndex(catalogo => catalogo.codigo === producto.id);
        console,log(indiceProducto)
        if(indiceProducto === -1){
            const nuevoMemoria = memoria;
            nuevoMemoria.push();
        }
    }
}
/**toma un producto , le agrega cantidad 1 y lo devuelve */
function getNuevoProductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}