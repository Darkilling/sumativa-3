document.addEventListener('DOMContentLoaded', () => {
    let userNickname = '';

    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const welcomeMessage = document.getElementById('welcome-message');
    const userNicknameDisplay = document.getElementById('user-nickname');
    const logoutButton = document.getElementById('logout-button');
    const catalogContainer = document.getElementById('catalog');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username && password.length >= 8) {
            userNickname = username;
            loginForm.style.display = 'none';
            userNicknameDisplay.textContent = userNickname;
            welcomeMessage.style.display = 'block';
        } else {
            alert('Por favor, ingresa un nombre de usuario y una contraseña válida (mínimo 8 caracteres).');
        }
    });

    logoutButton.addEventListener('click', () => {
        userNickname = '';
        loginForm.style.display = 'flex';
        welcomeMessage.style.display = 'none';
        usernameInput.value = '';
        passwordInput.value = '';
    });

    function loadCatalog() {
        catalogo.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';

            const productImg = document.createElement('img');
            productImg.src = product.imagen;
            productImg.alt = product.nombre;

            const productName = document.createElement('h3');
            productName.textContent = product.nombre;

            const productDescription = document.createElement('p');
            productDescription.textContent = product.descripcion;

            const productAvailability = document.createElement('p');
            productAvailability.textContent = `Disponibilidad: ${product.disponibilidad}`;

            const productLocation = document.createElement('p');
            productLocation.textContent = `Ubicación: ${product.ubicacion}`;

            productDiv.appendChild(productImg);
            productDiv.appendChild(productName);
            productDiv.appendChild(productDescription);
            productDiv.appendChild(productAvailability);
            productDiv.appendChild(productLocation);

            catalogContainer.appendChild(productDiv);
        });
    }

    loadCatalog();
});