# sumativa-3
#productos-container{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: auto;

}


.tarjeta-producto{
    max-width: 400px;
    text-align: center;
    background-color: #ffdddd;
    padding: 10px;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    transition: 200ms;

}

.tarjeta-producto:hover{
    translate: 0 -10px;
    box-shadow: 0 10px 5px rgba(0,0,0,0.228);
    

}

h3, p{
    margin: 6px 0;
}

.tarjeta-producto img{
    width: 100%;
    aspect-ratio: 1.5;
    height: 200px;
    object-fit: cover;
}

:root{
    --color-fundo: #ff5353;
    --color-texto: #ff0101;
    --color-acento: #aa4747;
}

body{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;

}

h1{
    text-align: center;
    color: var(--color-texto);

}

h3, p{
    margin: 6px 0;
}


a{
    text-decoration: none;
    color: var(--color-texto);
}

a:hover:not(#cart){
    color: var(--color-acento);
}

button{
    background-color: var(--color-acento);
    color: white;
    padding: 5px 10px;
    border: unset;
    border-radius: 5px;
    cursor: pointer;
}
header{
    box-shadow: 0 3px 5px rgba(0,0,0,0.104);
    padding: 10px 0;
    margin-bottom: 10px;

}

header nav{
    display: flex;
    justify-content: space-between;
    margin: 0 60px;
}

header nav div{
    display: flex;
    align-items: center;
    gap: 30px;
    position: relative;

}

#cuenta-carrito{
    background-color: #0f0f0f;);
    border-radius: 100%;
    display: inline-block;
    width: 20px;
    line-height: 20px;
    aspect-ratio: 1;
    text-align: center;
    position: absolute;

}

#logo{
    height: 40px;
}

header nav img{
    height: 25px;
}



footer{
    margin-top: auto;
    box-shadow: 0 -3px 5px rgba(0,0,0,0.104);
    text-align: center;

}