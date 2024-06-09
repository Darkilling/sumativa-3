document.addEventListener("DOMContentLoaded", () => {

    const producto = document.getSelectorAll(".tarjeta-producto");
    const cartList = document.getElementById("cart-list");
    const totalElement = document.getElementById("total span");
    const clearCartButton = document.querySelector("clear-cart");


    let cart = [];

    producto.forEach(producto => {
        const addToCartButton = producto.querySelector(".add-to-cart");
        addToCartButton.addEventListener("click", () =>  addToCart(producto));
        

    });

    clearCartButton.addEventListener("click", clearCart);

    function addToCart(producto){
        const productoId = producto.dataset.id;
        const productoCantidad = parseFloat(producto.querySelector(".quantity").textContent);
        
        const existingProduct = cart.find(producto => producto.id === productoId);

        if(existingProduct){
            existingProduct.quantity += 1;
        }else{
            cart.push({
                id: productoId,
                quantity: productoCantidad
            });
        }
        updateCartUI();

        function updateCartUI(){
            cartList.innerHTML = "";
            let total = 0;
            cart.forEach(producto => {
                const producto = catalogos.find(producto => producto.id === producto.id);
                const li = document.createElement("li");
                li.innerHTML = `${producto.name} - ${producto.quantity}`;
                cartList.appendChild(li);
                total += producto.price * producto.quantity;
            });
            totalElement.textContent = total;
        }