const $submit = document.getElementById("submit"),
    $password = document.getElementById("password"),
    $username = document.getElementById("username"),
    $visible = document.getElementById("visible");

    document.addEventListener("change", (e) => {
        if(e.target === $visible){
            if($visible.checked === false) $password.type = "password";
            else $password.type = "text";
        }
    });
    
    document.addEventListener("click", (e) => {
        if(e.target === $submit){
            e.preventDefault();
            if($password.value === "" && $username.value !== ""){
                alert("Por favor, complete el campo de la contraseña");
            } else if($password.value !== "" && $username.value === ""){
                alert("Por favor, complete el campo del nombre de usuario");
            } else if($password.value === "" && $username.value === ""){
                alert("Por favor, complete los campos del nombre de usuario y la contraseña");
            } else {
                window.location.href = "index.html";
                alert("Bienvenido a Ludoteca  " + $username.value);
            }
        }
    });