
// Función para cambiar el color de fondo a un color aleatorio
//let bodyTag = document.getElementById("span");

function modificarDOM() {
    
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
        console.log("valor de la variable color: ", color);
    }
    document.body.style.backgroundColor = color;

//let bodyTag = document.getElementsByTagName ("head")[0];
//bodyTag.style ="font-style: normal";

    
}



